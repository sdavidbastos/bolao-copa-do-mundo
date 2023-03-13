import { Grid } from "@mui/material";
import React from "react";
import { IUser } from "../../../types";
import { CardUser } from "./CardUser";

type IProps = {
  users: IUser[];
};
export const ListUser: React.FC<IProps> = ({ users }) => {
  return (
    <Grid container spacing={2}>
      {users.map((user) => (
        <Grid item xs={12} sm={6} md={4} key={user.id}>
          <CardUser user={user} />
        </Grid>
      ))}
    </Grid>
  );
};
