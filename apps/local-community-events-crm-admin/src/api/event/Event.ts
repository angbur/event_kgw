import { Notification } from "../notification/Notification";

export type Event = {
  category: string | null;
  createdAt: Date;
  date: Date | null;
  description: string | null;
  eventCategories?: Array<"Option1">;
  id: string;
  location: string | null;
  notifications?: Array<Notification>;
  numberOfSeats: number | null;
  oldCategory: string | null;
  tempCategory: string | null;
  temporaryCategory: string | null;
  title: string | null;
  updatedAt: Date;
};
