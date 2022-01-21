import { renderBlock } from './lib.js'

export class User {
  userName: string
  avatarSrc: string
  favoritesAmount: number

  constructor(userName: string, avatarSrc: string, favoritesAmount: number) {
    this.userName = userName
    this.avatarSrc = avatarSrc
    favoritesAmount = favoritesAmount
  }
}

export function getUserData(): User | null {
  const rawData = localStorage.get("user");
  let data: unknown;
  if (rawData) {
    data = JSON.parse(rawData);
  }
  if (
    typeof data === "object" &&
    "username" in data &&
    "avatarSrc" in data
  ) {
    return data as User;
  }
  return null;
}  

export function getFavoritesAmount(): number | null {
  const rawData = localStorage.get('favoritesAmount');
  if (rawData != null) {
    return parseInt(rawData);
  }
  return null
}  

export function renderUserBlock (userName: string, avatarSrc: string, favoriteItemsAmount: number): void {
  const favoritesCaption = favoriteItemsAmount 
    ? `Выбранных: ${favoriteItemsAmount}`
    : 'ничего нет';
  // const hasFavoriteItems = favoriteItemsAmount ? true : false;
  const hasFavoriteItems = !!favoriteItemsAmount;
  renderBlock(
    'user-block',
    `
    <div class="header-container">
      <img class="avatar" src="${avatarSrc}" alt="${userName}" />
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
