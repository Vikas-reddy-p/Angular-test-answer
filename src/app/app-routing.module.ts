import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InventoryComponent } from './inventory/inventory.component';
import { ItemsCreateComponent } from './inventory/items-create/items-create.component';
import { ItemsListComponent } from './inventory/items-list/items-list.component';


const routes: Routes = [
  {path:'', redirectTo:'/itemsList',pathMatch:'full'}, // to ensure complete path is matched
  {path:'itemsList',component : InventoryComponent ,  
    children: [
     {path:'create',component:ItemsCreateComponent},
     {path:'edit/:id',component:ItemsCreateComponent}
    ]}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
