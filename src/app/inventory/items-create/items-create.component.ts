import { Component, DoCheck, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ManageInventoryService } from 'src/app/manage-inventory.service';
import { ItemsModel } from '../items.model';

@Component({
  selector: 'app-items-create',
  templateUrl: './items-create.component.html',
  styleUrls: ['./items-create.component.scss']
})
export class ItemsCreateComponent implements OnInit,DoCheck {
  itemsCreateForm:FormGroup;
  public createMode:boolean = false;
  public editMode:boolean = false;
  public index:number;

  constructor(private formBuilder:FormBuilder,private manageInvService:ManageInventoryService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(){  
    // Defining a reactive form
    this.itemsCreateForm = this.formBuilder.group({
      name:['',[Validators.required,Validators.pattern(/^[a-zA-Z0-9 ]*$/)]],
      description:['',[Validators.required,Validators.pattern(/^[a-zA-Z0-9 .]*$/)]],
      price:['',[Validators.required,Validators.pattern(/^[0-9 ]*$/)]],
      quantity:['',[Validators.required,Validators.pattern(/^[0-9 ]*$/)]],
      imgUrl:['',[Validators.required]],
    })
    if(this.manageInvService.editMode){ // to set form values for edit functionality
      this.index = this.manageInvService.selectedIndex;
      const editItem = this.manageInvService.selectedItem;
      this.itemsCreateForm.setValue({
        name: editItem.name,
        description: editItem.description,
        price: editItem.price,
        quantity : editItem.quantity,
        imgUrl: editItem.imgUrl
      })
    }
  }

  ngDoCheck(){ // to check whether its create or edit operation
    this.createMode = this.manageInvService.createMode;
    this.editMode = this.manageInvService.editMode;
  }


  get formControls(){ // getter to get form controls
   return this.itemsCreateForm.controls;
  }

  get formValues(){ // getter to get form values
    return this.itemsCreateForm.value;
  }
  onSubmit(){ 
    if(this.manageInvService.createMode){ // if new items is created
      let newItem:ItemsModel ={
        name: this.formValues.name.trim(),
        description: this.formValues.description.trim(),
        price: this.formValues.price,
        quantity: this.formValues.quantity,
        imgUrl: this.formValues.imgUrl.trim()
        }
    
        this.manageInvService.itemsList.push(newItem);
    }else{ // if item is updated.
      let updateItem:ItemsModel ={
        name: this.formValues.name.trim(),
        description: this.formValues.description.trim(),
        price: this.formValues.price,
        quantity: this.formValues.quantity,
        imgUrl: this.formValues.imgUrl.trim()
        }
        this.manageInvService.updateItem(this.index,updateItem);
    }
    this.onCancel();
  }

  onCancel(){
    this.manageInvService.createMode = false;
    this.manageInvService.editMode = false;
    this.router.navigate(['/itemsList']);
    this.itemsCreateForm.reset();
  }

}
