import Header from "../Header";
import Footer from "../Footer";
import { ReactNode } from "react";

interface Props {
  component: ReactNode;
  isHeader?: boolean;
  isFooter?: boolean;
}

const LayoutContainer = ({ component, isHeader, isFooter }: Props) => {
  return (
    <>
      {isHeader && <Header />}
      <main className="-mt-navbar-mobile lg:-mt-navbar">{component}</main>
      {isFooter && <Footer />}
    </>
  );
};

export default LayoutContainer;
