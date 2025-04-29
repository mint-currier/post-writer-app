"use client";

import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "./ui/button";
import { useState } from "react";
import { Icon } from "./icon";
import { type VariantProps } from "class-variance-authority";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

interface ButtonProps
  extends React.ComponentProps<"button">,
    VariantProps<typeof buttonVariants> {}

export default function PostCreateButton({
  className,
  variant,
  ...props
}: ButtonProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const onClick = async () => {
    setIsLoading(true);

    const response = await fetch("api/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: "Untitled Post",
      }),
    });

    setIsLoading(false);

    if (!response.ok) {
      return toast.error("問題が発生しました。", {
        description: "投稿の作成に失敗しました。もう一度作成してください。",
      });
    }

    const post = await response.json();
    router.refresh();
    router.push(`editor/${post.id}`);
  };

  return (
    <button
      className={cn(
        buttonVariants({ variant }),
        { "cursor-not-allowed opacity-60": isLoading },
        className
      )}
      onClick={onClick}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? (
        <Icon.spinner className="animate-spin mr-2 h-4 w-4" />
      ) : (
        <Icon.add className="mr-2 h-4 w-4" />
      )}
      新しい投稿
    </button>
  );
}
