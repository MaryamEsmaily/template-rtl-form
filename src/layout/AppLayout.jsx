// package import
import React from "react";
// own component import
import AppLayoutProvider from "provider/AppLayoutProvider";
import AppLayoutSide from "container/layout/AppLayout/AppLayoutSide";
import AppLayoutMain from "container/layout/AppLayout/AppLayoutMain";

function AppLayout({ children }) {
  //
  return (
    <AppLayoutProvider>
      <AppLayoutSide />
      <AppLayoutMain>{children}</AppLayoutMain>
    </AppLayoutProvider>
  );
}

export default React.memo(AppLayout);
