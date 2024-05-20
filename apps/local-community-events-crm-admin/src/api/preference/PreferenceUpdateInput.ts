import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PreferenceUpdateInput = {
  category?: string | null;
  user?: UserWhereUniqueInput | null;
};
