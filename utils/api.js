"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const POSTS_URL = "http://localhost:3001/posts/";

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export async function getPosts() {
    const response = await fetch(POSTS_URL);
    const data = await response.json();
    await delay(2000);
    return data;
}

export async function addPost(previousState, formData) {
    const title = formData.get("title")?.trim();
    const content = formData.get("content")?.trim();

    const messages = {};
    if (!title) messages.title = "Title input is required.";
    if (!content) messages.content = "Content input is required.";

    if (Object.keys(messages).length > 0) {
        return { messages };
    }

    const newPost = {
        title,
        content,
        image: "post.png",
        liked: false,
    };

    const response = await fetch(`${POSTS_URL}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newPost),
    });

    if (!response.ok) {
        throw new Error(`Error adding post: ${response.statusText}`);
    }

    await delay(2000);

    revalidatePath('/posts', 'page');
    redirect("/posts");
}


export async function toggleLike(postId) {
    const response = await fetch(`${POSTS_URL}${postId}`);
    const post = await response.json();

    if (!response.ok) {
        throw new Error(`Error getting post: ${response.statusText}`);
    }

    const updatedPost = { ...post, liked: !post.liked };

    const updateResponse = await fetch(`${POSTS_URL}${postId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedPost),
    });

    if (!updateResponse.ok) {
        throw new Error(`Error updatting post: ${updateResponse.statusText}`);
    }

    revalidatePath('/posts', 'page');
}