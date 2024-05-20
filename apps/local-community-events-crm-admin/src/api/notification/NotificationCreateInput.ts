import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type NotificationCreateInput = {
  event?: EventWhereUniqueInput | null;
  notificationDate?: Date | null;
  user?: UserWhereUniqueInput | null;
};
