import type {RootState} from "../types/root.ts";
import {useSelector} from "react-redux";

export const useAppSelector = useSelector.withTypes<RootState>();