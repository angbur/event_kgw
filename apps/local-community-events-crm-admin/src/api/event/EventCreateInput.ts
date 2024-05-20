import { NotificationCreateNestedManyWithoutEventsInput } from "./NotificationCreateNestedManyWithoutEventsInput";

export type EventCreateInput = {
  category?: string | null;
  date?: Date | null;
  description?: string | null;
  eventCategories?: Array<"Option1">;
  location?: string | null;
  notifications?: NotificationCreateNestedManyWithoutEventsInput;
  numberOfSeats?: number | null;
  oldCategory?: string | null;
  tempCategory?: string | null;
  temporaryCategory?: string | null;
  title?: string | null;
};
