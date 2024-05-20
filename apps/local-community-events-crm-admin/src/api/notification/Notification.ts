import { Event } from "../event/Event";
import { User } from "../user/User";

export type Notification = {
  createdAt: Date;
  event?: Event | null;
  id: string;
  notificationDate: Date | null;
  updatedAt: Date;
  user?: User | null;
};
