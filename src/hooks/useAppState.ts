import { useSelector } from "react-redux";
import { RootState } from "../store";

export const useAppState = <T extends keyof RootState>(key: T) => {
  return useSelector((state: RootState) => state[key]);
};
