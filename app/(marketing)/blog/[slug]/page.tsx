import { allPosts } from "@/.contentlayer/generated";
import Mdx from "@/components/mdx-component";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

function getPostFromSlug(slug: string) {
  const targetPost = allPosts.find((post) => {
    const slugAsFindBlog = post.slug.split("/")[2];
    return slugAsFindBlog === slug;
  });
  return targetPost;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const page = getPostFromSlug((await params).slug);
  return {
    title: page?.title,
    description: page?.description,
    openGraph: {
      type: "article",
      locale: "ja",
      url: siteConfig.url,
      title: siteConfig.name,
      description: siteConfig.description,
      siteName: siteConfig.name,
    },
    twitter: {
      card: "summary_large_image",
      title: siteConfig.name,
      description: siteConfig.description,
      images: [`${siteConfig.url}/og.jpg`],
      creator: "@shincode",
    },
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostFromSlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="container max-w-3xl py-6 lg:py-10 mx-auto">
      <div>
        {post.date && (
          <time>Published on {format(post.date, "yyyy/MM/dd")}</time>
        )}
      </div>
      <h1 className="mt-2 font-extrabold text-4xl lg:text-5xl leading-tight">
        {post.title}
      </h1>
      {post.image && (
        <Image
          src={post.image}
          alt={post.title}
          width={720}
          height={405}
          className="my-8 border rounded-md bg-muted"
        ></Image>
      )}

      <Mdx code={post.body.code} />
      {/* <div>{post.body.html}</div> */}
      <hr className="mt-12" />
      <div className="py-6 text-center lg:py-10">
        <Link
          href={"/blog"}
          className={cn(buttonVariants({ variant: "ghost" }))}
        >
          すべての記事を見る
        </Link>
      </div>
    </article>
  );
}
