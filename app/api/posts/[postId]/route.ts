import { prisma } from "@/lib/prisma";
import { getCurrentUser } from "@/lib/session";
import { postPatchSchema } from "@/lib/validations/post";
import { NextRequest, NextResponse } from "next/server";
import { title } from "process";
import { z } from "zod";

const routeContextSchema = z.object({
  params: z.promise(z.object({
    postId: z.string(),
  })),
});

export async function PATCH(
  req: NextRequest, 
  context: z.infer<typeof routeContextSchema>
) {
  try {
    console.log("PATCH request received");
    
    const { params } = routeContextSchema.parse(context);
    const postId = (await params).postId;
    console.log("Post ID:", postId);

    if (await verifyCurrentUserHasAccessToPost(postId) === false) {
      return NextResponse.json({ message: "Forbidden" }, { status: 403 });
    }
    const json = await req.json();
    const body = postPatchSchema.parse(json);
  
    console.log("Parsed body:", body);

    await prisma.post.update({
      where: { id: postId },
      data: {
        title: body.title,
        content: body.content,
      }
    });
    return NextResponse.json(null, {status: 200});

  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ message: error.issues }, { status: 422 });
    }
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });  
  }

}

export async function DELETE(
  req: NextRequest, 
  context: z.infer<typeof routeContextSchema>
) {
  try {
    console.log("DELETE request received");
    
    const { params } = routeContextSchema.parse(context);
    const postId = (await params).postId;
    console.log("Post ID:", postId);

    if (await verifyCurrentUserHasAccessToPost(postId) === false) {
      return NextResponse.json({ message: "Forbidden" }, { status: 403 });
    }
    await prisma.post.delete({
      where: { id: postId },     
    });
    return new Response(null, {status: 204});

  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ message: error.issues }, { status: 422 });
    }
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });  
  }

}

async function verifyCurrentUserHasAccessToPost(postId: string) {
  console.log("Verifying user access to post:", postId);
  const user = await getCurrentUser();
  if (!user || !postId) {
    return false;
  }
  const postCount = await prisma.post.count({
    where: {
      id: postId,
      authorId: user.id,
    },
  });

  return postCount > 0;
}