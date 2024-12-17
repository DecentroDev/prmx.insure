import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import HomePage from "../pages/HomePage";
import { ROUTES } from "../libs/constants";
import LayoutContainer from "../components/layouts/LayoutContainer";
import { ReactNode } from "react";

interface Layouts {
  path: string;
  isHeader?: boolean;
  isFooter?: boolean;
  component: ReactNode;
}

const layouts: Layouts[] = [
  {
    path: ROUTES.HOME,
    component: <HomePage />,
    isHeader: true,
    isFooter: true,
  },
];

const AppRouter = () => {
  return (
    <Router
      basename={
        process.env.NODE_ENV === "production" ? "/var-react-github/" : "/"
      }
    >
      <Routes>
        <Route path={ROUTES.HOME}>
          {layouts.map(({ path, isHeader, isFooter, component }) => (
            <Route
              key={path}
              path={path}
              element={
                <LayoutContainer
                  component={component}
                  isHeader={isHeader}
                  isFooter={isFooter}
                />
              }
            />
          ))}
        </Route>

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
