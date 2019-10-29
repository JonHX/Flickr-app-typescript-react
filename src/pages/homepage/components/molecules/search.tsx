// @ts-ignore
import React, { Fragment, useEffect, useRef, ChangeEvent, FormEvent, MutableRefObject } from 'react';
import { useStore } from '../../../store/SearchContext';
import actions from '../../../store/actions';
import SearchInput from '../../../../components/atoms/inputSearch';
import { IState, ISearch } from '../../../store/interfaces';

const Search = () => {
  const latestSearchQuery: MutableRefObject<string> = useRef('');
  const { state, dispatch } = useStore()

  const { searches, searchQuery, isLoading } : Partial<IState> = state

  useEffect(() => {
    if (isLoading || (Object.keys(searches as ISearch)).includes(latestSearchQuery.current)) return
    return () => dispatch(
      actions.searchItems(
        latestSearchQuery.current, dispatch
      )
    );
  }, [searchQuery]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    latestSearchQuery.current = e.target.value
    dispatch(actions.updateQuery(e.target.value))
  }

  const onSubmit = (e: FormEvent) => e.preventDefault()

  return (
    <Fragment>
      <form onSubmit={onSubmit}>
        <SearchInput label={'Search'} placeholder={'Start typing...'} handleChange={handleChange} />
      </form>
      <div>{JSON.stringify(state)}</div>
    </Fragment>
  );
};

export default Search;
