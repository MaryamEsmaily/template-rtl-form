import React, { useReducer } from "react";
import { appLayoutDispatchCtx, appLayoutStateCtx } from "context/appLayout";
import appLayoutReducer, {
  initialStateAppLayout,
} from "reducer/appLayoutReducer";

/**
 * * appLayout مربوط به provider
 */
function AppLayoutProvider({ children }) {
  const [state, dispatch] = useReducer(appLayoutReducer, initialStateAppLayout);
  return (
    <appLayoutDispatchCtx.Provider value={dispatch}>
      <appLayoutStateCtx.Provider value={state}>
        {children}
      </appLayoutStateCtx.Provider>
    </appLayoutDispatchCtx.Provider>
  );
}

export default AppLayoutProvider;
