import "../src/app/globals.css";
import type { Preview } from "@storybook/react";
import { Provider } from "react-redux";
import { store } from "../src/store";

const preview: Preview = {
  parameters: {
    layout: "centered",
    controls: {
      expanded: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      test: "todo",
    },
  },
  decorators: [
    (Story) => (
      <Provider store={store}>
        <div className="bg-gray-50 min-h-screen flex items-center justify-center p-4">
          <Story />
        </div>
      </Provider>
    ),
  ],
};

export default preview;
