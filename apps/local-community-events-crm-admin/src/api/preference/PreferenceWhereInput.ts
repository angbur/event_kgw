import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PreferenceWhereInput = {
  category?: StringNullableFilter;
  id?: StringFilter;
  user?: UserWhereUniqueInput;
};
