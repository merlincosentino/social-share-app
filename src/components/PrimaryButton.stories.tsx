import type { Meta, StoryObj } from "@storybook/react";
import { PrimaryButton } from "./PrimaryButton";

const meta: Meta<typeof PrimaryButton> = {
  title: "Components/PrimaryButton",
  component: PrimaryButton,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    color: {
      control: "radio",
      options: ["primary", "danger"],
    },
    onClick: { action: "clicked" },
  },
};

export default meta;
type Story = StoryObj<typeof PrimaryButton>;

export const Default: Story = {
  args: {
    label: "Enviar",
    color: "primary",
  },
};

export const Danger: Story = {
  args: {
    label: "Eliminar",
    color: "danger",
  },
};

export const Disabled: Story = {
  args: {
    label: "Deshabilitado",
    isDisabled: true,
  },
};
