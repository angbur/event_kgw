import { Preference as TPreference } from "../api/preference/Preference";

export const PREFERENCE_TITLE_FIELD = "category";

export const PreferenceTitle = (record: TPreference): string => {
  return record.category?.toString() || String(record.id);
};
