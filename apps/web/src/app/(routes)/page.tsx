import { db } from "@acme/db";

import { CreatePostForm, PostCard } from "~/features/posts";
import { AuthShowcase } from "~/features/profile";
import { ThemeToggle } from "~/features/ui";

export default async function Home() {
  const posts = await db.post.findMany({ orderBy: { id: "desc" } });

  return (
    <main className="flex h-screen flex-col items-center">
      <div className="container mt-12 flex flex-col items-center justify-center gap-4 px-4 py-8">
        <h1 className="text-5xl font-extrabold">
          T3 Turbo Next App Router Template
        </h1>
        <ThemeToggle />
        <AuthShowcase />
        <CreatePostForm />
        {posts != null ? (
          <div className="w-full max-w-2xl">
            {posts.length === 0 ? (
              <span>There are no posts!</span>
            ) : (
              <div className="flex h-[40vh] justify-center overflow-y-scroll px-4 text-2xl">
                <div className="flex w-full flex-col gap-4">
                  {posts.map((p) => {
                    return <PostCard key={p.id} post={p} />;
                  })}
                </div>
              </div>
            )}
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </main>
  );
}
