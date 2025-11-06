import type { Meta, StoryObj } from "@storybook/react";
import { PostCard } from "./PostCard";
import { Provider } from "react-redux";
import { store } from "@/store";
import { Post } from "@/interfaces/post";

const mockPost: Post = {
  id: 1,
  author: "Ada Lovelace",
  authorLogo:
    "https://upload.wikimedia.org/wikipedia/commons/0/0f/Ada_Lovelace_portrait.jpg",
  content: "¡Hola mundo desde mi primera publicación! 👋",
  createdAt: new Date().toISOString(),
  comments: [
    {
      id: 1,
      author: "Alan Turing",
      authorLogo:
        "https://upload.wikimedia.org/wikipedia/commons/a/a1/Alan_Turing_Aged_16.jpg",
      content: "¡Bienvenida, Ada! 🚀",
      createdAt: new Date().toISOString(),
    },
  ],
};

const meta: Meta<typeof PostCard> = {
  title: "Components/PostCard",
  component: PostCard,
  decorators: [
    (Story) => (
      <Provider store={store}>
        <div className="max-w-md mx-auto bg-gray-50 p-4">
          <Story />
        </div>
      </Provider>
    ),
  ],
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof PostCard>;

export const Default: Story = {
  args: {
    post: mockPost,
  },
};

export const WithImage: Story = {
  args: {
    post: {
      ...mockPost,
      mediaUrl: "https://placekitten.com/400/250",
      mediaType: "image/jpeg",
      content: "Compartiendo una foto 🐱",
    },
  },
};

export const WithVideo: Story = {
  args: {
    post: {
      ...mockPost,
      mediaUrl:
        "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
      mediaType: "video/mp4",
      content: "Probando un video 🌸",
    },
  },
};
