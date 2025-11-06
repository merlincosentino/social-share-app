"use client";

import { Post } from "@/interfaces/post";
import { CommentInput } from "@/app/feed/CommentInput";

interface PostCardProps {
  post: Post;
}

export const PostCard = ({ post }: PostCardProps) => (
  <li className="p-3 rounded-md bg-white border border-gray-200">
    <div className="flex items-center gap-2 mb-2">
      {post.authorLogo && (
        <img
          src={post.authorLogo}
          alt={post.author}
          className="w-5 h-5 rounded-full"
        />
      )}
      <strong>{post.author}</strong>
    </div>

    <p className="mb-3">{post.content}</p>

    {/* Mostrar multimedia si existe */}
    {post.mediaUrl && (
      <div className="mb-3">
        {post.mediaType?.startsWith("video/") ? (
          <video
            src={post.mediaUrl}
            controls
            className="w-full rounded-lg max-h-100"
          />
        ) : post.mediaType?.startsWith("image/") ? (
          <img
            src={post.mediaUrl}
            alt="media"
            className="w-full rounded-lg max-h-100 object-cover"
          />
        ) : null}
      </div>
    )}

    {/* Comentarios */}
    <ul className="pl-4 mb-2 space-y-1 border-l border-gray-200">
      {post.comments?.map((comment) => (
        <li
          key={comment.id}
          className="flex items-center gap-2 text-sm text-gray-700"
        >
          {comment.authorLogo && (
            <img
              src={comment.authorLogo}
              alt={comment.author}
              className="w-4 h-4 rounded-full"
            />
          )}
          <span className="font-semibold">{comment.author}:</span>
          <span>{comment.content}</span>
        </li>
      ))}
    </ul>

    {/* Input para comentar */}
    <CommentInput postId={post.id} />
  </li>
);
