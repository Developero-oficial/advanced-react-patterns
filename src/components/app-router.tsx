import { BrowserRouter, Routes, Route } from "react-router-dom";

import { AppLayout } from "./app-layout";
import { NotFound } from "./not-found";
import { WelcomePage } from "./welcome-page";
import { CustomHooksPage } from "@/patterns/custom-hooks/cusrom-hooks-page";
import { HocPage } from "@/patterns/hoc/hoc-page";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/custom-hooks" element={<CustomHooksPage />} />
          <Route path="/hoc" element={<HocPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
