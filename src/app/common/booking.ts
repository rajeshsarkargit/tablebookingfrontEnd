export class Booking {
    constructor(
        public id:string,
        public restaurantId:string,
        public customerId:string,
        public bookingDate:string,
        public bookingTime:string,
        public persons: number,
        public tableNumber: number,
        public isBookingCanceled: boolean){

    }
}
