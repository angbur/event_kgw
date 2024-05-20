import { User } from "../user/User";

export type Preference = {
  category: string | null;
  createdAt: Date;
  id: string;
  updatedAt: Date;
  user?: User | null;
};
