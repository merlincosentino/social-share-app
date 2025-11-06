import { ChangeEvent } from "react";
import { BiUpload } from "react-icons/bi";

interface UploadFileButtonProps {
  label: string;
  onFileChange: (e: ChangeEvent<HTMLInputElement>) => void;
  showCancel: boolean;
  onCancel: () => void;
}

export const UploadFileButton: React.FC<UploadFileButtonProps> = ({
  label,
  onFileChange,
  showCancel,
  onCancel,
}) => {
  if (showCancel)
    return (
      <button
        onClick={onCancel}
        className="text-sm cursor-pointer px-3 py-1 rounded-md text-red-500 hover:text-red-600 hover:bg-gray-100"
      >
        Cancelar
      </button>
    );
  return (
    <label className="flex items-center gap-1 text-sm cursor-pointer px-3 py-1 rounded-md text-brand hover:text-brand-hover hover:bg-gray-100">
      <BiUpload size={16} />
      {label}
      <input
        type="file"
        accept="image/*,video/*"
        onChange={onFileChange}
        className="hidden"
      />
    </label>
  );
};
