import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type NotificationUpdateInput = {
  event?: EventWhereUniqueInput | null;
  notificationDate?: Date | null;
  user?: UserWhereUniqueInput | null;
};
