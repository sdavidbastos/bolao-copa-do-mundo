import {
  createContext,
  Dispatch,
  PropsWithChildren,
  useEffect,
  useState,
} from "react";
import { IUser } from "../types";
import { Api } from "../api/api";
import { toast } from "react-toastify";

interface IAppContext {
  user?: IUser;
  setUser: Dispatch<React.SetStateAction<IUser | undefined>>;
}
export const AppContext = createContext({} as IAppContext);
export const AppProvider: React.FC<PropsWithChildren> = (props) => {
  const [user, setUser] = useState<IUser>();
  const api = Api.getInstance();
  const getUser = () => {
    const id = localStorage.getItem("id");

    try {
      if (id) {
        const user = api.userService.findById(id);
        setUser(user);
        return;
      }
    } catch (error: any) {
      toast.error(error?.message || "Opsss!!! Algo deu errado");
    }

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
