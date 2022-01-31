export interface Database {
  id: string,
  title: string,
  details: string,
  photos: string[],
  coordinates: number[],
  bookedDates: [],
  price?: number,
}

export interface Parameters {
  city: string,
  checkInDate: Date,
  checkOutDate: Date,
  priceLimit: number
}

export function cloneDate(date: Date): Date

export function addDays(date: Date, days: number): Date

export const backendPort: number
export const localStorageKey: string

export class FlatRentSdk {
  database: Database[]
  constructor()

  get(id: string): Promise<Database | null> 
  search(parameters: Parameters): Promise<Database[]>
  book(flatId: number, checkInDate: Date, checkOutDate: Date): Promise<number>
  
  _assertDatesAreCorrect(checkInDate: Date, checkOutDate: Date): void
  _resetTime(date: Date): void
  _calculateDifferenceInDays(startDate: Date, endDate: Date): number
  _generateDateRange(from: Date, to: Date): Date[]
  _generateTransactionId(): number
  _areAllDatesAvailable(flat: Database, dateRange: Date[]): boolean
  _formatFlatObject(flat: Database, nightNumber: number): Database
  _readDatabase(): Database[] | null
  _writeDatabase(database: Database[]): void
  _syncDatabase(database: Database[]): void
}
