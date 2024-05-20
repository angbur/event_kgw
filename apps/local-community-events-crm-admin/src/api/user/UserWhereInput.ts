import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { NotificationListRelationFilter } from "../notification/NotificationListRelationFilter";
import { PreferenceListRelationFilter } from "../preference/PreferenceListRelationFilter";

export type UserWhereInput = {
  email?: StringNullableFilter;
  id?: StringFilter;
  notifications?: NotificationListRelationFilter;
  password?: StringNullableFilter;
  preferences?: PreferenceListRelationFilter;
  role?: "Option1";
  tempRole?: StringNullableFilter;
  username?: StringNullableFilter;
  userRole?: "Option1";
};
