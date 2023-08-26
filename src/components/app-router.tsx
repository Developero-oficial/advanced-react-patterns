import { BrowserRouter, Routes, Route } from "react-router-dom";

import { AppLayout } from "./app-layout";
import { NotFound } from "./not-found";
import { WelcomePage } from "./welcome-page";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<WelcomePage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};