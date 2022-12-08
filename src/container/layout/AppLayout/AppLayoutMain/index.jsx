// package import
import React from "react";
// own component import
import { useAppLayoutState } from "hook/appLayout";
import { Main } from "./style";

function AppLayoutMain({ children }) {
  const { open } = useAppLayoutState();
  return (
    <Main component="main" open={open}>
      {children}
    </Main>
  );
}

export default React.memo(AppLayoutMain);
