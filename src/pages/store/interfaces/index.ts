export interface IAction {
  type: string;
  data?: any;
}

export interface IState {
  isLoading: boolean;
  searchFilter: string;
  searchQuery: string;
  searches: ISearch;
}

// make custom response object
export interface ISearch {
   [name: string]: object
}

export interface IContext {
  state: IState,
  dispatch: any
}