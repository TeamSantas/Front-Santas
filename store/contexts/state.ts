import { defaultMemberData } from "../../util/type";
import { valueType } from "./type";

export const defaultAuthState: valueType = {
  storeUserData: defaultMemberData,
  updateUserData: () => {},
  storeRefreshToken: "",
  updateRefreshToken: "",
  storeSettingStatus: false,
};
