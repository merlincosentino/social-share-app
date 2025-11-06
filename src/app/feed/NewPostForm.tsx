"use client";

import { useState, ChangeEvent, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/store";
import { addPost } from "@/features/posts/postsSlice";
import { PrimaryButton } from "@/components/PrimaryButton";
import { UploadFileButton } from "@/components/UploadFileButton";

export function NewPostForm() {
  const [text, setText] = useState("");
  const [media, setMedia] = useState<File | null>(null);
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.auth.user);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setMedia(file);
  };

  const handleSubmit = () => {
    if (!text.trim() && !media) return;

    const mediaUrl = media ? URL.createObjectURL(media) : null;
    const mediaType = media ? media.type : null;

    dispatch(
      addPost({
        id: Date.now(),
        authorLogo: user?.image,
        author: user?.name || "Anónimo",
        content: text || "",
        mediaUrl,
        mediaType,
        createdAt: new Date().toISOString(),
      })
    );

    setText("");
    setMedia(null);
  };

  useEffect(() => {
    let tempUrl: string | null = null;

    if (media) {
      tempUrl = URL.createObjectURL(media);
    }

    return () => {
      if (tempUrl) URL.revokeObjectURL(tempUrl);
    };
  }, [media]);

  const isSubmitDisabled = text.length === 0 && !media;
  return (
    <div className="p-3 rounded-md bg-white border border-gray-200">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="¿Qué estás pensando?"
        className="w-full border border-gray-300 rounded-md p-2 text-sm resize-none mb-2 focus:outline focus:outline-brand"
        rows={2}
      />

      {media && (
        <div className="mb-2">
          <p className="text-xs text-gray-500 mb-1">
            {media.type.startsWith("image")
              ? "Imagen seleccionada"
              : "Video seleccionado"}
          </p>
          {media.type.startsWith("image") && (
            <img
              src={URL.createObjectURL(media)}
              alt="preview"
              className="w-full rounded-lg max-h-60 object-cover"
            />
          )}
          {media.type.startsWith("video") && (
            <video
              src={URL.createObjectURL(media)}
              controls
              className="w-full rounded-lg max-h-60"
            />
          )}
        </div>
      )}

      <div className="flex items-center justify-between">
        <UploadFileButton
          label="Compartir imágen o video"
          onFileChange={handleFileChange}
          showCancel={media !== null}
          onCancel={() => setMedia(null)}
        />

        <PrimaryButton
          label="Publicar"
          onClick={handleSubmit}
          isDisabled={isSubmitDisabled}
        />
      </div>
    </div>
  );
}
