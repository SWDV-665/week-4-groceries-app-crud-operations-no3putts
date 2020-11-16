import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { GroceryService } from '../service/grocery.service';
import { InputDialogService } from '../service/input-dialog.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  title = "Groceries";

  

  constructor(public toastController: ToastController, public alertController: AlertController, public dataService: GroceryService, public inputDialog: InputDialogService) { }

  loadItems(){
    return this.dataService.getItems();
  }
  async editItem(item, index) {
    const toast = await this.toastController.create({
      message: 'Editing Item: ' + item.name,
      duration: 5000,
      position: 'bottom',
      animated: true,
      color: 'warning',
    });
    toast.present();  // displays toast 
    this.inputDialog.saveItem(item, index);
  }

  async removeItem(item, index) {
    const toast = await this.toastController.create({
      header: 'Removing...',
      message: 'Item removed: ' + item.name,
      duration: 2000,
      position: 'middle',
      animated: true,
      color: 'success',
    });
    toast.present();  // displays toast 
    this.dataService.removeItem(index)
  }

  addItem(){
    this.inputDialog.saveItem();
  }

}

