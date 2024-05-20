import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { NotificationListRelationFilter } from "../notification/NotificationListRelationFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type EventWhereInput = {
  category?: StringNullableFilter;
  date?: DateTimeNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  location?: StringNullableFilter;
  notifications?: NotificationListRelationFilter;
  numberOfSeats?: IntNullableFilter;
  oldCategory?: StringNullableFilter;
  tempCategory?: StringNullableFilter;
  temporaryCategory?: StringNullableFilter;
  title?: StringNullableFilter;
};
