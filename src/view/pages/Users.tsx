import { UserBuilder } from "../../tests/builders/UserBuilder";
import { ListUser } from "../components/user/ListUser";
import { PageContainer } from "./PageConainer";

export const Users = () => {
  const users = Array(10)
    .fill(null)
    .map(() => new UserBuilder().build());
  return (
    <PageContainer>
      <ListUser users={users} />
    </PageContainer>
  );
};
