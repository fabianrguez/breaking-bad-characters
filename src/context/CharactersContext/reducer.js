import { mergeArrays } from 'utils';
import { ADD_CHARACTERS } from './actionType';

const initialState = {
  pagination: {
    offset: 0,
    limit: 10,
  },
  characters: [],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_CHARACTERS: {
      return {
        ...state,
        pagination: {
          ...state.pagination,
          offset: state.pagination.offset + state.pagination.limit,
        },
        characters: mergeArrays(state.characters, action.payload),
      };
    }
    default:
      return state;
  }
}

export { initialState as charactersInitialState, reducer as charactersReducer };
