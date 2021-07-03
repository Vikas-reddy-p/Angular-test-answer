import { Component, DoCheck, OnChanges, OnInit } from '@angular/core';
import { ManageInventoryService } from '../manage-inventory.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit, DoCheck {
  public createMode:boolean = false;
  public editMode:boolean = false;
  constructor(private manageInvService:ManageInventoryService) { }

  ngOnInit() {
    
  }

  ngDoCheck(){
    this.createMode = this.manageInvService.createMode;
    this.editMode = this.manageInvService.editMode;
  }


}
