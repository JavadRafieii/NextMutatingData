'use client'

import { useFormStatus } from 'react-dom'

export default function SubmitButton() {
    const { pending } = useFormStatus();
    return (
        !pending
            ? <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Create the Post</button>
            : <p className='text-base text-slate-800 font-bold'>The post is creating...</p>
    );
}