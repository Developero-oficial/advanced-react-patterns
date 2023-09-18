import { HashRouter, Routes, Route } from "react-router-dom";

import { AppLayout } from "./app-layout";
import { NotFound } from "./not-found";
import { WelcomePage } from "./welcome-page";
import { CustomHooksPage } from "@/patterns/custom-hooks/cusrom-hooks-page";
import { HocPage } from "@/patterns/hoc/hoc-page";
import { ExtensibleStylesPage } from "@/patterns/extensible-styles/extensible-styles-page";
import { CompoundComponentsPage } from "@/patterns/compound-components/compound-components-page";

export const AppRouter = () => {
  return (
    <HashRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/custom-hooks" element={<CustomHooksPage />} />
          <Route path="/hoc" element={<HocPage />} />
          <Route path="/extensible-styles" element={<ExtensibleStylesPage />} />
          <Route
            path="/compound-components"
            element={<CompoundComponentsPage />}
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};
