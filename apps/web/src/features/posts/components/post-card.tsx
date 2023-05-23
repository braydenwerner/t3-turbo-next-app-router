"use client";

import { type Post } from "@acme/db";
import { Button } from "@acme/ui";

import { deletePost } from "~/app/_actions/post";
import { useValidatedAction } from "~/hooks/useValidatedAction";

interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  const { mutate } = useValidatedAction(deletePost);

  return (
    <div className="flex flex-row rounded-lg p-4 transition-all hover:scale-[101%]">
      <div className="flex-grow">
        <h2 className="text-2xl font-bold text-pink-400">{post.title}</h2>
        <p className="mt-2 text-sm">{post.content}</p>
      </div>
      <div>
        <Button
          className="cursor-pointer text-sm font-bold uppercase text-pink-400"
          onClick={() => void mutate(post.id)}
        >
          Delete
        </Button>
      </div>
    </div>
  );
}
