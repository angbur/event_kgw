import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  SelectArrayInput,
  ReferenceArrayInput,
  NumberInput,
} from "react-admin";

import { NotificationTitle } from "../notification/NotificationTitle";

export const EventEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Category" source="category" />
        <DateTimeInput label="Date" source="date" />
        <TextInput label="Description" multiline source="description" />
        <SelectArrayInput
          label="EventCategories"
          source="eventCategories"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="Location" source="location" />
        <ReferenceArrayInput
          source="notifications"
          reference="Notification"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={NotificationTitle} />
        </ReferenceArrayInput>
        <NumberInput step={1} label="NumberOfSeats" source="numberOfSeats" />
        <TextInput label="OldCategory" source="oldCategory" />
        <TextInput label="TempCategory" source="tempCategory" />
        <TextInput label="TemporaryCategory" source="temporaryCategory" />
        <TextInput label="Title" source="title" />
      </SimpleForm>
    </Edit>
  );
};
