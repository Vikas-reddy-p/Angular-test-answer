import { Component, DoCheck, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ManageInventoryService } from 'src/app/manage-inventory.service';
import { ItemsModel } from '../items.model';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss']
})
export class ItemsListComponent implements OnInit,DoCheck {


  public createMode:boolean = false;
  public editMode:boolean = false;

  constructor(private manageInvService:ManageInventoryService,private router:Router,private route:ActivatedRoute) { }
  public itemsList:ItemsModel[];
  ngOnInit(){
    this.itemsList = this.manageInvService.itemsList;
  }

  ngDoCheck(){
    this.createMode = this.manageInvService.createMode;
    this.editMode = this.manageInvService.editMode;
  
  }


  onNewItem(){ // on create button click functionality
    this.manageInvService.createMode = true;
    this.manageInvService.editMode = false;
    this.router.navigate(["create"] , {relativeTo:this.route});
  }

  onEdit(index,items){ // on edit button click functionality
    this.manageInvService.editMode = true;
    this.manageInvService.createMode = false;
    this.manageInvService.editItem(index,items);
    this.router.navigate(["edit",index],{relativeTo:this.route})

  }

  onDelete(index){ // deletign the item
    this.manageInvService.itemsList.splice(index,1);
  }

  sortAsc(param){ // function to sort items with respect to parameter passed in ascending order
    if(param =="name"){
      this.itemsList.sort((a,b)=>{
        if(a.name.toLowerCase()<b.name.toLowerCase()){
          return -1;
        }
        if(a.name.toLowerCase()>b.name.toLowerCase()){
          return 1;
        }
        return 0;
      });
    }
    if(param =="price" || param =='quantity'){
      this.itemsList.sort((a,b)=>{
        if(a[param]<b[param]){
          return -1;
        }
        if(a[param]>b[param]){
          return 1;
        }
        return 0;
      });
    }
    
  }

  sortDesc(param){ // function to sort items with respect to parameter in descending order
    if(param =="name"){
      this.itemsList.sort((a,b)=>{
        if(a.name.toLowerCase()>b.name.toLowerCase()){
          return -1;
        }
        if(a.name.toLowerCase()<b.name.toLowerCase()){
          return 1;
        }
        return 0;
      });
    }
    if(param =="price" || param =='quantity'){
      this.itemsList.sort((a,b)=>{
        if(a[param]>b[param]){
          return -1;
        }
        if(a[param]<b[param]){
          return 1;
        }
        return 0;
      });
    }
  }
}
