import Editor from "@/components/editor";
import { prisma } from "@/lib/prisma";
import { getCurrentUser } from "@/lib/session";
import { Post, User } from "@prisma/client";
import { notFound, redirect } from "next/navigation";

interface EditorProps {
  params: Promise<{ postId: string }>;
}

async function getPostForUser(postId: Post["id"], userId: User["id"]) {
  const post = await prisma.post.findFirst({
    where: {
      id: postId,
      authorId: userId,
    },
  });
  return post;
}

export default async function EditorPage({ params }: EditorProps) {
  const { postId } = await params;
  const user = await getCurrentUser();
  if (!user) {
    redirect("/login");
  }
  const userId = user?.id;

  const post = await getPostForUser(postId, userId);
  if (!post) {
    notFound();
  }

  return (
    <Editor
      post={{
        id: post.id,
        title: post.title,
        content: post?.content,
        published: post.published,
      }}
    />
  );
}
