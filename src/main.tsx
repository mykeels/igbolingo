import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import {
  RouterProvider,
  createRouter,
  createHashHistory,
} from "@tanstack/react-router";

// Import the generated route tree
import { routeTree } from "./routeTree.gen";

import "./index.css";
import { QueryClient, QueryClientProvider } from "react-query";

// Create a new router instance
const router = createRouter({ routeTree, history: createHashHistory() });

// eslint-disable-next-line react-refresh/only-export-components
const RenderMode = ({ children }: { children: React.ReactNode }) => {
  const isProduction = process.env.NODE_ENV === "production";
  return isProduction ? <StrictMode>{children}</StrictMode> : children;
};

const queryClient = new QueryClient();

// Render the app
const rootElement = document.getElementById("root")!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <RenderMode>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </RenderMode>
  );
}
