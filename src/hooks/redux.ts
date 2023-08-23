import {useDispatch, useSelector, TypedUseSelectorHook} from 'react-redux'
import { AppDispatch, RootState } from "../store/store"


type DispathcFunc = () => AppDispatch
export const useAppDispatch: DispathcFunc = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector 