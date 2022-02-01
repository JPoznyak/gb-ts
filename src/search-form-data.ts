interface SearchFormData {
  city: string,
  checkInDate: string,
  checkOutDate: string,
  maxPrice: string
}

const executeSearch = (dataForSearch: SearchFormData): void => {
  console.log('Город -', dataForSearch.city);
  console.log('Дата въезда -', dataForSearch.checkInDate);
  console.log('Дата выезда -', dataForSearch.checkOutDate);
  console.log('Макс. цена -', dataForSearch.maxPrice);
}

export const searchFormHandler = (): void => {
  const searchForm = document.querySelector('.searchForm');

  if (searchForm !== null) {
    searchForm.addEventListener('submit', (e): void => {
      e.preventDefault();
      const city = document.getElementById('city') as HTMLInputElement;
      const checkInDate = document.getElementById('check-in-date') as HTMLInputElement;
      const checkOutDate = document.getElementById('check-out-date') as HTMLInputElement;
      const maxPrice = document.getElementById('max-price') as HTMLInputElement;

      const dataForSearch: SearchFormData = {
        city: city.value,
        checkInDate: checkInDate.value,
        checkOutDate: checkOutDate.value,
        maxPrice: maxPrice.value
      };

      executeSearch(dataForSearch);
    });
  }
};