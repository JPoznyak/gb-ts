// написать тайпинги для методов get, search, book
export class FlatRentSdk {
    get(id: string): Promise<Object | null>
    search(parametrs: Object): Object[]
    book(flatId: number, checkInDate: Date, checkOutDate: Date): number
} 