"use client";
import { Post } from "@prisma/client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { Icon } from "./icon";
import Link from "next/link";
import { useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

interface PostOperationsProps {
  post: Pick<Post, "id" | "title">;
}

async function deletePost(postId: string) {
  try {
    const res = await fetch(`/api/posts/${postId}`, {
      method: "DELETE",
    });

    if (!res.ok) {
      throw new Error("Failed");
    }

    return true;
  } catch (error) {
    toast.error("問題が発生しました。", {
      description: "記事の削除ができませんでした。もう一度お試しください。",
    });
  }
}

export default function PostOperations({ post }: PostOperationsProps) {
  const [showDeleteDialog, setShowDeleteDialog] = useState<boolean>(false);
  const [isDeleteLoading, setIsDeleteLoading] = useState<boolean>(false);
  const router = useRouter();
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Icon.ellipsis className="h-4 w-4" />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>
            <Link href={`/editor/${post.id}`} className="w-full">
              編集
            </Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            className="text-destructive cursor-pointer focus:text-destructive"
            onClick={() => setShowDeleteDialog(true)}
          >
            削除
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <AlertDialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>本当に削除しますか?</AlertDialogTitle>
            <AlertDialogDescription>
              この操作は取り消しができません。
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>キャンセル</AlertDialogCancel>
            <AlertDialogAction
              className="bg-red-600 focus:ring-red-600"
              onClick={async (e) => {
                e.preventDefault();
                setIsDeleteLoading(true);
                const res = await deletePost(post.id);
                if (res) {
                  setShowDeleteDialog(false);
                  setIsDeleteLoading(false);
                  router.refresh();
                  toast.success("記事を削除しました。");
                }
              }}
            >
              {isDeleteLoading ? (
                <Icon.spinner className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <Icon.trash className="mr-2 h-4 w-4" />
              )}
              削除
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
