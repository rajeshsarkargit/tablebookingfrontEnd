export class Bookingwrapper {
    constructor(
        public bookingId:string,
        public bookingDate:string,
        public bookingTime:string,
        public tableNumber:number,
        public restaurantName:string,
        public restaurantPhoneNo:string,
        public customerName:string,
        public customerPhoneNo:string
        ){
    }
}
