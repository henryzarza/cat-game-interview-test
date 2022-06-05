/**
 * This is a helper file for the test. You don't need to understand
 * the implementation detail of it. The only important bit is that
 * `useFakeQuery` works similar to apollo client. You can find more
 * information about it in useFakeQuery description.
 */

import { useEffect, useReducer } from 'react';
import { players } from './fakeData';
import type { Player } from './types';

type PlayerAsyncData = {
  data: Player[] | null;
  loading: boolean;
  error: Error | null;
};

type PlayerAsyncReducerAction =
  | { type: 'resolved'; payload: Player[] }
  | { type: 'pending' }
  | { type: 'rejected'; errorMessage: string };

const initialState: PlayerAsyncData = {
  data: null,
  loading: false,
  error: null,
};

function reducer(state: PlayerAsyncData, action: PlayerAsyncReducerAction) {
  switch (action.type) {
    case 'resolved':
      return {
        ...initialState,
        data: action.payload,
        loading: false,
      };
    case 'pending':
      return {
        ...state,
        loading: true,
      };
    case 'rejected':
      return {
        ...state,
        error: new Error(action.errorMessage),
      };
    default:
      throw new Error('Something went wrong!');
  }
}

type UseFakeQueryOptions = {
  variables: {
    search: string | null;
  };
  forceError?: boolean;
};

/**
 * Simulates fetching cat players data in a async manner.
 *
 * Note: You don't need understand this function. The api resembles apollo client api.
 *
 * @returns
 * ```
 * {
 *  loading: false,
 *  data: Player[],
 *  error[]
 * }
 * ```
 */
export function useFakeQuery(
  _: string,
  { variables: { search }, forceError = false }: UseFakeQueryOptions = {} as UseFakeQueryOptions,
) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: 'pending' });

    const timer = setTimeout(() => {
      if (forceError) {
        dispatch({ type: 'rejected', errorMessage: 'Network error!' });
      } else {
        dispatch({
          type: 'resolved',
          payload: search
            ? players.filter((player) =>
                player.fullName.toLowerCase().includes(search.toLowerCase()),
              )
            : players,
        });
      }
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [forceError, search]);

  return state;
}
