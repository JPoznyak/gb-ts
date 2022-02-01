import { getUserData, getFavoritesAmount, renderUserBlock } from './user.js'
import { renderSearchFormBlock } from './search-form.js'
import { renderSearchStubBlock } from './search-results.js'
import { renderToast } from './lib.js'
import { getTodosByCount } from './todos.js'
import { searchFormHandler } from './search-form-data.js';

window.addEventListener('DOMContentLoaded', (): void => {
  renderUserBlock(
    getUserData().userName,
    getUserData().avatarUrl,
    getFavoritesAmount()
  );
  renderSearchFormBlock();
  renderSearchStubBlock();
  searchFormHandler();
  getTodosByCount(10);
  renderToast(
      {
        text: 'Это пример уведомления. Используйте его при необходимости', 
        type: 'success'
      },
      {
        name: 'Понял', 
        handler: () => console.log('Уведомление закрыто')
      }
  )
})





