import { NotificationUpdateManyWithoutEventsInput } from "./NotificationUpdateManyWithoutEventsInput";

export type EventUpdateInput = {
  category?: string | null;
  date?: Date | null;
  description?: string | null;
  eventCategories?: Array<"Option1">;
  location?: string | null;
  notifications?: NotificationUpdateManyWithoutEventsInput;
  numberOfSeats?: number | null;
  oldCategory?: string | null;
  tempCategory?: string | null;
  temporaryCategory?: string | null;
  title?: string | null;
};
