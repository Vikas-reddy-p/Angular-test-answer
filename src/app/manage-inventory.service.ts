import { Injectable } from '@angular/core';
import { ItemsModel } from './inventory/items.model';

@Injectable({
  providedIn: 'root'
})
export class ManageInventoryService {
// items list used as static data
  public itemsList :ItemsModel [] = [
    {
      name: "Shirt",
      description: "Upper Garment",
      price: 350,
      quantity: 100,
      imgUrl: 'https://images.streetstylestore.com/1/3/0/6/8/6/130686.jpg'
    },
    {
      name: "Pants",
      description: "Lower Garment",
      price: 750,
      quantity: 150,
      imgUrl: 'https://sslimages.shoppersstop.com/sys-master/images/hc8/h59/14628057055262/206784060_9555.jpg_1088Wx1632H'
    },
    {
      name: "Tiffin boxes",
      description: "Used to carry lunch",
      price: 200,
      quantity: 500,
      imgUrl: 'https://www.bigbasket.com/media/uploads/p/l/40136040_1-tedemei-stainless-steel-lunch-boxtiffin-set-blue-bb-573-2.jpg'
    },
    {
      name: "iphone 11",
      description: "Apple iphones",
      price: 50000,
      quantity: 10,
      imgUrl: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone11-green-select-2019?wid=940&hei=1112&fmt=png-alpha&.v=1566956144838'
    },


  ]
  public createMode:boolean = false;
  public editMode:boolean = false;
  public selectedItem:ItemsModel;
  public selectedIndex:number;

  constructor() { }

  editItem(index:number,item:ItemsModel){ // to capture the value of item seleted to edit
    this.selectedIndex = index;
    this.selectedItem = item;
  }

  updateItem(index:number , updatedItem:ItemsModel){ // to update the array after a item is uupdated.
    this.itemsList[index]=updatedItem;
  }

}
