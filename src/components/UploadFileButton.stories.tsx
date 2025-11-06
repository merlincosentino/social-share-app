import type { Meta, StoryObj } from "@storybook/react";
import { UploadFileButton } from "./UploadFileButton";
import React from "react";

const meta: Meta<typeof UploadFileButton> = {
  title: "Components/UploadFileButton",
  component: UploadFileButton,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    onFileChange: { action: "file selected" },
    onCancel: { action: "cancel clicked" },
  },
};

export default meta;
type Story = StoryObj<typeof UploadFileButton>;

export const Default: Story = {
  args: {
    label: "Compartir imagen o video",
    showCancel: false,
  },
};

export const ShowCancel: Story = {
  args: {
    label: "Compartir imagen o video",
    showCancel: true,
  },
};

export const Interactive: Story = {
  render: (args) => {
    const [showCancel, setShowCancel] = React.useState(false);

    return (
      <div className="flex flex-col items-center gap-3">
        <UploadFileButton
          {...args}
          showCancel={showCancel}
          onFileChange={(e) => {
            setShowCancel(true);
            args.onFileChange?.(e);
          }}
          onCancel={() => {
            setShowCancel(false);
            args.onCancel?.();
          }}
        />
        <p className="text-xs text-gray-500">
          Estado actual: {showCancel ? "Cancel visible" : "Upload visible"}
        </p>
      </div>
    );
  },
  args: {
    label: "Subir archivo",
  },
};
