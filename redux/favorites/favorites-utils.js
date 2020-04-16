export const toggleFavoriteItem = (favoriteItems, favoriteItemToAdd) => {
  const existingItem = favoriteItems.find(
    (favoriteItem) => favoriteItem.id === favoriteItemToAdd.id
  );

  if (existingItem) {
    return favoriteItems.filter(
      (favoriteItem) => favoriteItem.id !== favoriteItemToAdd.id
    );
  }

  return [...favoriteItems, { ...favoriteItemToAdd, favorite: true }];
};
