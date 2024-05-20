import { SortOrder } from "../../util/SortOrder";

export type NotificationOrderByInput = {
  createdAt?: SortOrder;
  eventId?: SortOrder;
  id?: SortOrder;
  notificationDate?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
