import * as actionTypes from './actionTypes';
import { fetchResults } from '../../utils'

// could type the variables sent in?
export const updateQuery = (data: string) => ({
  type: actionTypes.UPDATE_QUERY,
  data
});

export const startLoading = () => ({
  type: actionTypes.START_LOADING
})

export const endLoading = () => ({
  type: actionTypes.END_LOADING
})

export const addSearch = (results: Object, query: String) => ({
  type: actionTypes.ADD_SEARCH,
  data: {
    [`${query}`]: results
  }
})

export const searchItems = async (query: any, dispatch: { (arg0: { type: string; }): void; (arg0: { type: string; data: { [x: number]: Object; }; }): void; (arg0: { type: string; }): void; }) => {
  dispatch(startLoading())
  try {
    const response = await fetchResults(query)
    dispatch(addSearch(response.text, query))
  } catch(e) {
    // console.log(e)
  }
  dispatch(endLoading())
}