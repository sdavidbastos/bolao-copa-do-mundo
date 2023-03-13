import {
  createContext,
  Dispatch,
  PropsWithChildren,
  useEffect,
  useState,
} from "react";
import { IUser } from "./types";
import { toast } from "react-toastify";
import { userFactory } from "../core/factories";

interface IAppContext {
  user?: IUser;
  setUser: Dispatch<React.SetStateAction<IUser | undefined>>;
}
export const AppContext = createContext({} as IAppContext);
export const AppProvider: React.FC<PropsWithChildren> = (props) => {
  const [user, setUser] = useState<IUser>();
  const userService = userFactory();
  const getUser = async () => {
    const id = localStorage.getItem("id");

    try {
      if (id) {
        const user = await userService.findById(id);
        setUser(user);
        return;
      }
    } catch (error: any) {}

    setUser(undefined);
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
