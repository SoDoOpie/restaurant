import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { CookiesProvider } from "react-cookie";
import App from "./app/App.tsx";
import "./styles/index.css";
import { Admin } from "./app/Admin.tsx";
import { EditMenu } from "./app/Pages/EditMenu/EditMenu.tsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <CookiesProvider>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/edit-menu" element={<EditMenu />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  </CookiesProvider>
);
