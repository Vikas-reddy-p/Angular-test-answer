export class ItemsModel{ // model used to define Item type
    public name:string;
    public description:string;
    public price:number;
    public quantity:number;
    public imgUrl:string;

    constructor (name:string,description:string,price:number,quantity:number,imgUrl:string){
        this.name = name;
        this.description=description;
        this.price= price;
        this.quantity= quantity;
        this.imgUrl = imgUrl;
    }
}