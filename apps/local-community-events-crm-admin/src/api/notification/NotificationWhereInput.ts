import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type NotificationWhereInput = {
  event?: EventWhereUniqueInput;
  id?: StringFilter;
  notificationDate?: DateTimeNullableFilter;
  user?: UserWhereUniqueInput;
};
