"use server";

import { revalidatePath } from "next/cache";
import { zact } from "zact/server";
import { z } from "zod";

import { db } from "@acme/db";

export const getPosts = zact()(async () => {
  return db.post.findMany({ orderBy: { id: "desc" } });
});

export const createPost = zact(
  z.object({ title: z.string().min(1), content: z.string().min(1) }),
)(async (data) => {
  await db.post.create({ data });
  revalidatePath("/");
});

export const deletePost = zact(z.string())(async (id) => {
  await db.post.delete({ where: { id } });
  revalidatePath("/");
});
