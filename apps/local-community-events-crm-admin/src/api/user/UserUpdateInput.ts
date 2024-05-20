import { NotificationUpdateManyWithoutUsersInput } from "./NotificationUpdateManyWithoutUsersInput";
import { PreferenceUpdateManyWithoutUsersInput } from "./PreferenceUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  email?: string | null;
  notifications?: NotificationUpdateManyWithoutUsersInput;
  password?: string | null;
  preferences?: PreferenceUpdateManyWithoutUsersInput;
  role?: "Option1" | null;
  tempRole?: string | null;
  username?: string | null;
  userRole?: "Option1" | null;
};
