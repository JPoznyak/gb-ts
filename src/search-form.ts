import { renderBlock } from './lib.js';

/** Функция рендера формы поиска
 * @param date {Date} - дата 
 * @param checkInDate {Date} - дата прибытия в отель
 * @param checkOutDate {Date} - дата отбытия в отель
 * @param daysToShift {number} - на какое количество дней сдвинуть

 */

const defaultDate = (date: Date, daysToShift: number): Date =>
  new Date(date.getFullYear(), date.getMonth(), date.getDate() + daysToShift);
const getLastDayOfNextMonth = (date: Date): Date =>
  new Date(date.getFullYear(), date.getMonth() + 2, 0);
const pad = (v: string | number): string =>
`0${v}`.slice(-2);
const formatDate = (date: Date): string =>
  `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;

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
            <div><button>Найти</button></div>
          </div>
        </div>
      </fieldset>
    </form>
    `
  )
}
