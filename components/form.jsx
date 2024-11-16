'use client'

import { useActionState } from "react";
import SubmitButton from "@/components/submit-button";

import { addPost } from "@/utils/api";

const initialState = {};

export default function Form() {
    const [state, formAction] = useActionState(addPost, initialState);
    return (
        <form action={formAction} className="max-w-sm mx-auto">
            <div className="mb-5">
                <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900">Title:</label>
                <input type="text" id="base-input" name="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="First Post" />
                {state?.messages?.title && <p className="text-red-500">{state.messages.title}</p>}
            </div>
            <div className="mb-5">
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">Content:</label>
                <textarea id="message" name="content" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="This is the content of the first post."></textarea>
                {state?.messages?.content && <p className="text-red-500">{state.messages.content}</p>}
            </div>
            <SubmitButton />
        </form>
    );
}