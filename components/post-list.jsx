'use client';

import { useOptimistic } from 'react';

import Card from "@/components/card";

export default function PostList({ posts }) {
    const [optimisticPosts, addOptimistic] = useOptimistic(posts, (prveState, postId) => {
        const indexItem = prveState.findIndex(item => item.id === postId);
        let updatedState = [...prveState];
        if (!(indexItem === -1)) {
            updatedState[indexItem] = {
                ...updatedState[indexItem],
                liked: !updatedState[indexItem].liked
            }
            return updatedState;
        }
        return prveState;
    });

    return (
        <ul className="space-y-5 mb-10">
            {optimisticPosts.map(post => {
                return (
                    <li key={post.id}>
                        <Card post={post} addOptimistic={addOptimistic} />
                    </li>
                );
            })}
        </ul>
    );
}