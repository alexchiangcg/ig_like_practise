import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "./store";


// Use throughout your app instead of plain `useDispatch` and `useSelector`

// TODO: 要查一下，應該是因為，組件沒辦法直接用 store，所以要透過 hooks 來取得 store
// 重新包裝 useDispatch 和 useSelector，讓組建可以直接使用
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;