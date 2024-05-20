import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PreferenceCreateInput = {
  category?: string | null;
  user?: UserWhereUniqueInput | null;
};
