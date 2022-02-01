import { renderBlock } from './lib.js'

const userData = {
  userName: 'Wade Warren',
  avatarUrl: '/img/avatar.png'
};

interface User {
  userName: string,
  avatarUrl: string
}

localStorage.setItem('user', JSON.stringify(userData));
localStorage.setItem('favoritesAmount', '0');

const getDataFromLocalStorage = (key: string): string | null => {
  return localStorage.getItem(key);
}

function instanceOfUser(object: any): object is User {
  return 'userName' in object && 'avatarUrl' in object;
}

export const getUserData = (): User => {
  const func = getDataFromLocalStorage('user');
  if (func !== null) {
    const data: unknown = JSON.parse(func);
    if (instanceOfUser(data)) {
      return data
    } else {
      return {userName: '', avatarUrl: ''};
    }
  }
  return {userName: '', avatarUrl: ''};
};

export const getFavoritesAmount = (): number => {
  const data: unknown = getDataFromLocalStorage('favoritesAmount');
  return Number(data);
};

export function renderUserBlock (userName: string, avatarUrl: string, favoriteItemsAmount: number): void {
  if (favoriteItemsAmount !== undefined) {
    if (favoriteItemsAmount < 0) favoriteItemsAmount = 0
  }
  const favoritesCaption = favoriteItemsAmount ? favoriteItemsAmount : 'ничего нет';
  const hasFavoriteItems = favoriteItemsAmount ? true : false;

  renderBlock(
    'user-block',
    `
    <div class="header-container">
      <img class="avatar" src="${avatarUrl}" alt="${userName}" />
      <div class="info">
          <p class="name">${userName}</p>
          <p class="fav">
            <i class="heart-icon${hasFavoriteItems ? ' active' : ''}"></i>${favoritesCaption}
          </p>
      </div>
    </div>
    `
  )
}




