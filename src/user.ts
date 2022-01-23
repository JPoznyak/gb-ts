import { renderBlock } from './lib.js'

export class User {
  userName: string
  avatarUrl: string
  favoritesAmount: number

  constructor(userName: string, avatarUrl: string, favoritesAmount: number) {
    this.userName = userName
    this.avatarUrl = avatarUrl
    this.favoritesAmount = favoritesAmount
  }
}

export function getUserData(): User | null {
  const rawData = localStorage.getItem("user");
  let data: unknown;
  if (rawData) {
    data = JSON.parse(rawData);
  }
  if (
    typeof data === "object" &&
    "username" in data &&
    "avatarUrl" in data
  ) {
    return data as User;
  }
  return null;
}  

export function getFavoritesAmount(): number | null {
  const rawData = localStorage.getItem('favoritesAmount');
  if (rawData != null) {
    return parseInt(rawData);
  }
  return null
}  

export function renderUserBlock (userName: string, avatarUrl: string, favoriteItemsAmount: number): void {
  const favoritesCaption = favoriteItemsAmount 
    ? `Избранных: ${favoriteItemsAmount}`
    : 'ничего нет';

  // const hasFavoriteItems = favoriteItemsAmount ? true : false;
  const hasFavoriteItems = !!favoriteItemsAmount;
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
