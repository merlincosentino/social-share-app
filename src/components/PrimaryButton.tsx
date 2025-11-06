import { ReactNode } from "react";

interface PrimaryButtonProps {
  label: string;
  onClick: () => void;
  isDisabled?: boolean;
  color?: "primary" | "danger";
  icon?: ReactNode;
}

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  label,
  onClick,
  isDisabled = false,
  color = "primary",
  icon,
}) => {
  const colorClass =
    color === "primary"
      ? "border-brand text-brand hover:border-brand-hover hover:text-brand-hover"
      : "border-red-600 text-red-600 hover:border-red-800 hover:text-red-800";
  return (
    <button
      onClick={onClick}
      disabled={isDisabled}
      className={`cursor-pointer flex items-center gap-1 text-sm px-3 py-1 rounded-md border hover:shadow-md disabled:cursor-not-allowed disabled:border-gray-200 disabled:text-gray-200 disabled:bg-gray-100 disabled:hover:border-gray-200 disabled:hover:text-gray-200 disabled:hover:bg-gray-100 disabled:hover:shadow-none ${colorClass}`}
    >
      {icon && icon}
      {label}
    </button>
  );
};
