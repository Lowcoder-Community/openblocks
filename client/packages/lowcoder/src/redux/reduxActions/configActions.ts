import { ReduxActionTypes } from "constants/reduxActionConstants";
import { ExternalEditorContextState } from "util/context/ExternalEditorContext";

export type FetchConfigActionPayload = {
  orgId?: string;
};

export const fetchConfigAction = (orgId?: string) => {
  return {
    type: ReduxActionTypes.FETCH_SYS_CONFIG_INIT,
    payload: {
      orgId,
    }
  };
};

export const setEditorExternalStateAction = (state: Partial<ExternalEditorContextState>) => {
  return {
    type: ReduxActionTypes.SET_EDITOR_EXTERNAL_STATE,
    payload: state,
  };
};

export const fetchDeploymentIdAction = () => {
  return {
    type: ReduxActionTypes.FETCH_DEPLOYMENT_ID_INIT,
  };
};
