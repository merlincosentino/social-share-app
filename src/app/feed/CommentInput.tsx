"use client";

import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/store";
import { addComment } from "@/features/posts/postsSlice";
import { PrimaryButton } from "@/components/PrimaryButton";

export function CommentInput({ postId }: { postId: number }) {
  const [text, setText] = useState("");
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.auth.user);

  const handleAddComment = () => {
    if (!text.trim()) return;

    dispatch(
      addComment({
        postId,
        comment: {
          id: Date.now(),
          author: user?.name || "Anónimo",
          authorLogo: user?.image,
          content: text,
          createdAt: new Date().toISOString(),
        },
      })
    );

    setText("");
  };

  return (
    <div className="flex gap-2 mt-2">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Escribe un comentario..."
        className="flex-1 border border-gray-300 rounded px-2 py-1 text-sm focus:outline focus:outline-brand"
      />
      <PrimaryButton
        label="Enviar"
        onClick={handleAddComment}
        isDisabled={text.length === 0}
      />
    </div>
  );
}
