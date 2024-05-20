import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const EventList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Events"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Category" source="category" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Date" source="date" />
        <TextField label="Description" source="description" />
        <TextField label="EventCategories" source="eventCategories" />
        <TextField label="ID" source="id" />
        <TextField label="Location" source="location" />
        <TextField label="NumberOfSeats" source="numberOfSeats" />
        <TextField label="OldCategory" source="oldCategory" />
        <TextField label="TempCategory" source="tempCategory" />
        <TextField label="TemporaryCategory" source="temporaryCategory" />
        <TextField label="Title" source="title" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
