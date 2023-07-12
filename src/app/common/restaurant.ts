import { Address } from "./address";

export class Restaurant {
    constructor(
        public id:string,
        public name:string,
        public phoneNo:string,
        public category:string,
        public totalTables:number,
        public address:string){

    }
}
