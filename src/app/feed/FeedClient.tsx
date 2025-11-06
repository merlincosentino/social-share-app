"use client";

import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useAppSelector, useAppDispatch } from "@/store";
import { setPosts } from "@/features/posts/postsSlice";
import { logout } from "@/features/auth/authSlice";
import { useEffect } from "react";
import { mockPosts } from "@/lib/mockData";
import { NewPostForm } from "./NewPostForm";
import { PrimaryButton } from "@/components/PrimaryButton";
import { PostCard } from "@/components/PostCard";
import Image from "next/image";
import appLogo from "@/assets/social-share-logo.png";
import { BiLogOut } from "react-icons/bi";

export default function FeedClient() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const posts = useAppSelector((state) => state.posts.list);
  const user = useAppSelector((state) => state.auth.user);

  useEffect(() => {
    if (!posts || posts.length === 0) {
      dispatch(setPosts(mockPosts));
    }
  }, [dispatch, posts.length]);

  const handleLogout = async () => {
    await signOut({ redirect: false });
    dispatch(logout());
    router.push("/");
  };

  return (
    <main className="p-6 max-w-xl mx-auto space-y-4">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          {user?.image ? (
            <img
              src={user.image}
              alt={user.name ?? "avatar"}
              className="w-10 h-10 rounded-full"
            />
          ) : (
            <Image src={appLogo} alt="app-logo" width={20} height={20} />
          )}
          <div>
            <p className="font-medium">{user?.name}</p>
            <p className="text-sm text-gray-500">{user?.email}</p>
          </div>
        </div>

        <PrimaryButton
          label="Logout"
          onClick={handleLogout}
          color="danger"
          icon={<BiLogOut size={16} />}
        />
      </div>

      <NewPostForm />

      <ul className="space-y-3">
        {posts.map((post) => (
          <PostCard key={`post-${post.id}`} post={post} />
        ))}
      </ul>
    </main>
  );
}
