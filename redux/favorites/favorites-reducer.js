import { FaforitesActionTypes } from './favorites-action-types';
import { toggleFavoriteItem } from './favorites-utils';

const INITIAL_STATE = {
  favoriteItems: [],
};

const FavoritesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FaforitesActionTypes.ADD_TO_FAVORITES:
      return {
        ...state,
        favoriteItems: toggleFavoriteItem(state.favoriteItems, action.payload),
      };
    case FaforitesActionTypes.CLEAR_FAVORITES:
      return {
        ...state,
        favoriteItems: state.favoriteItems.filter(
          (favoriteItem) => favoriteItem.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
};

export default FavoritesReducer;
