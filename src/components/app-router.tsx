import { BrowserRouter, Routes, Route } from "react-router-dom";

import { AppLayout } from "./app-layout";
import { NotFound } from "./not-found";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<div>Hello</div>} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
