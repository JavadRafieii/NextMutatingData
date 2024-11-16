import { Suspense } from "react";

import PostList from "@/components/post-list";

import { getPosts } from "@/utils/api";

async function Posts() {
    const posts = await getPosts();
    return <PostList posts={posts} />
}

export default function PostsPage() {
    return (
        <section className="w-[768px] mx-auto">
            <h1 className="text-center text-5xl text-slate-800 font-bold my-10">Posts Page</h1>
            <Suspense fallback={<p className="text-center text-base text-slate-800 font-bold">Loading posts...</p>}>
                <Posts />
            </Suspense>
        </section >
    );
}