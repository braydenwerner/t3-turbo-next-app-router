"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";

import { db } from "@acme/db";

import { validate } from "~/lib/validateServerAction";

export const getPosts = validate()(async () => {
  return db.post.findMany({ orderBy: { id: "desc" } });
});

export const createPost = validate(
  z.object({ title: z.string().min(1), content: z.string().min(1) }),
)(async (data) => {
  await db.post.create({ data });
  revalidatePath("/");
});

export const deletePost = validate(z.string())(async (id) => {
  await db.post.delete({ where: { id } });
  revalidatePath("/");
});
