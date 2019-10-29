import { createContext,  useContext } from 'react'
import { IContext } from './interfaces';
import { initialContext } from './initialState';

export const SearchContext = createContext<IContext>(initialContext);

export const useStore = () : IContext => {
  const { state, dispatch } = useContext<IContext>(SearchContext);
  return { state, dispatch };
};