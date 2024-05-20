import { Notification } from "../notification/Notification";
import { Preference } from "../preference/Preference";

export type User = {
  createdAt: Date;
  email: string | null;
  id: string;
  notifications?: Array<Notification>;
  password: string | null;
  preferences?: Array<Preference>;
  role?: "Option1" | null;
  tempRole: string | null;
  updatedAt: Date;
  username: string | null;
  userRole?: "Option1" | null;
};
