import { FaforitesActionTypes } from './favorites-action-types';

export const toggleFavItem = (item) => ({
  type: FaforitesActionTypes.ADD_TO_FAVORITES,
  payload: item,
});

export const clearItemsFromFavorites = (item) => ({
  type: FaforitesActionTypes.CLEAR_FAVORITES,
  payload: item,
});
