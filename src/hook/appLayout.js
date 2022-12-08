import { useContext } from "react";
import { appLayoutDispatchCtx, appLayoutStateCtx } from "context/appLayout";

export const useAppLayoutState = () => useContext(appLayoutStateCtx);
export const useAppLayoutDispatch = () => useContext(appLayoutDispatchCtx);
