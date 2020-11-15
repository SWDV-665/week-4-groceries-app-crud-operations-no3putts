import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  title = "Groceries";

  items = [
    {
      name: "Spam",
      qty: 2,
      unit: "Cases",
      imgUrl: "assets/img/spam.png"
    },
    {
      name: "Sardines",
      qty: 12,
      unit: "Cans",
      imgUrl: "assets/img/sardines.png"

    },
    {
      name: "Fish Sauce",
      qty: 2,
      unit: "Bottles",
      imgUrl: "assets/img/patis.png"
    },
    {
      name: "Salted Eggs",
      qty: 1,
      unit: "Dozen",
      imgUrl: "assets/img/itlog.png"
    },
    {
      name: "Pork Skin",
      qty: 3,
      unit: "Bags",
      imgUrl: "assets/img/chicharon.png"
    },

  ];

  constructor(public toastController: ToastController, public alertController: AlertController) { }


  async editItem(item, index) {
    const toast = await this.toastController.create({
      message: 'Editing Item: ' + item.name,
      duration: 5000,
      position: 'bottom',
      animated: true,
      color: 'warning',
    });
    toast.present();  // displays toast 
    this.editItemPopup(item, index);
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
    this.items.splice(index, 1); // remove item from array
  }

  async addItemPopup() {
    const alert = await this.alertController.create({
      header: 'Add Grocery Item',
      // subHeader: 'Subtitle',
      message: 'Enter item, quantity, unit and imgUrl (if any, blank for default)',
      inputs: [
        {
          name: 'name',
          placeholder: 'Item'
        },
        {
          name: 'qty',
          placeholder: 'Quantity'
        },
        {
          name: 'unit',
          placeholder: 'Unit'
        },
        {
          name: 'imgUrl',
          placeholder: 'Image Url'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Cancel item entry');
          }
        }, {
          text: 'Add',
          handler: (item) => {
            if (item.name != '')
              if (item.imgUrl == '')
                item.imgUrl = 'assets/img/grocery.png'
            this.items.push(item);
          }
        }
      ]
    });

    await alert.present(); // Present Alert
  }
  async editItemPopup(item, index) {
    const alert = await this.alertController.create({
      header: 'Edit Grocery Item',
      // subHeader: 'Subtitle',
      message: 'Enter updated values',
      inputs: [
        {
          name: 'name',
          placeholder: 'Item',
          value: item.name
        },
        {
          name: 'qty',
          placeholder: 'Quantity',
          value: item.qty
        },
        {
          name: 'unit',
          placeholder: 'Unit',
          value: item.unit
        },
        {
          name: 'imgUrl',
          placeholder: 'Image Url',
          value: item.imgUrl
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Cancel item entry');
          }
        }, {
          text: 'Save',
          handler: (item) => {
            if (item.name != '')
              if (item.imgUrl == '')
                item.imgUrl = 'assets/img/grocery.png'
            this.items[index] = item;
          }
        }
      ]
    });

    await alert.present(); // Present Alert
  }

}

