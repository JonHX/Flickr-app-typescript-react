import { IState } from "./interfaces";

export const initialState: IState = {
  isLoading: false,
  searchFilter: '',
  searchQuery: '',
  searches: {}
};

export const initialContext = {
  state: initialState,
  dispatch: () => {}
}
