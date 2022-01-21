import { renderBlock } from './lib.js';
import { formatDate, getLastDayOfNextMonth, defaultDate } from './date-utils.js';

export interface SearchFormData {
  city: string;
  checkin: Date;
  checkout: Date;
  price: number;
}

export function renderSearchFormBlock(
  checkInDate?: Date,
  checkOutDate?: Date
): void {
  checkInDate = checkInDate || defaultDate(new Date(), 1)
  const checkIn = formatDate(checkInDate);
  const checkOut = formatDate(checkOutDate || defaultDate(checkInDate, 2));
  const now = formatDate(new Date());
  const lastDayOfNextMonth = formatDate(getLastDayOfNextMonth(new Date()));
    
  renderBlock(
    'search-form-block',
    `
    <form>
      <fieldset class="search-filedset">
        <div class="row">
          <div>
            <label for="city">Город</label>
            <input id="city" type="text" disabled value="Санкт-Петербург" />
            <input type="hidden" disabled value="59.9386,30.3141" />
          </div>
          <!--<div class="providers">
            <label><input type="checkbox" name="provider" value="homy" checked /> Homy</label>
            <label><input type="checkbox" name="provider" value="flat-rent" checked /> FlatRent</label>
          </div>--!>
        </div>
        <div class="row">
          <div>
            <label for="check-in-date">Дата заезда</label>
            <input id="check-in-date" type="date" value="${checkIn}" min="${now}" max="${lastDayOfNextMonth}" name="checkin" />
          </div>
          <div>
            <label for="check-out-date">Дата выезда</label>
            <input id="check-out-date" type="date" value="${checkOut}" min="${checkIn}" max="${lastDayOfNextMonth}" name="checkout" />
          </div>
          <div>
            <label for="max-price">Макс. цена суток</label>
            <input id="max-price" type="text" value="" name="price" class="max-price" />
          </div>
          <div>
            <div><button class="button">Найти</button></div>
          </div>
        </div>
      </fieldset>
    </form>
    `
  )
}

function searchItem (value: SearchFormData): void {
  console.log(value)
}

const button = document.querySelector('.button')

button.addEventListener('click', (e) => {
  const city = document.getElementById('city')
  const checkin = document.getElementById('check-in-date')
  const checkout = document.getElementById('check-out-date')
  const price = document.getElementById('max-price')

  searchItem ({
    'city': city.getAttribute('value'),
    'checkin': new Date (checkin.getAttribute('value')),
    'checkout': new Date (checkout.getAttribute('value')),
    'price': parseInt(price.getAttribute('value'))
  })
  return searchItem;
})

