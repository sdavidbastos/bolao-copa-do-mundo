import { PropsWithChildren } from "react";
import { NavBar } from "../components/navBar/NavBar";

export const PageContainer: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
    </>
  );
};
