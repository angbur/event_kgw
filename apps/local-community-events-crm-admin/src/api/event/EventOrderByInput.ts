import { SortOrder } from "../../util/SortOrder";

export type EventOrderByInput = {
  category?: SortOrder;
  createdAt?: SortOrder;
  date?: SortOrder;
  description?: SortOrder;
  eventCategories?: SortOrder;
  id?: SortOrder;
  location?: SortOrder;
  numberOfSeats?: SortOrder;
  oldCategory?: SortOrder;
  tempCategory?: SortOrder;
  temporaryCategory?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
