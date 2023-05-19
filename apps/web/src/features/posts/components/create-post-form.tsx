"use client";

import { useState } from "react";
import { useZact } from "zact/client";

import { Button, Input } from "@acme/ui";

import { createPost } from "~/app/_actions/post";

export function CreatePostForm() {
  const { mutate, error } = useZact(createPost);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <form
      className="flex w-full max-w-2xl flex-col p-4"
      onSubmit={(e) => {
        e.preventDefault();
        setTitle("");
        setContent("");
        void mutate({ title, content });
      }}
    >
      <Input
        className="mb-2 rounded p-2"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <Input
        className="mb-2 rounded p-2"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Content"
      />
      <Button type="submit" className="rounded p-2 font-bold">
        Create
      </Button>
      {error && <span className="mb-2 text-red-500">{error.message}</span>}
    </form>
  );
}
