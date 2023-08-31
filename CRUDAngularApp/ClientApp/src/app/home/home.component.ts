import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})

export class HomeComponent {
  public currentCount = 0;
  myForm: FormGroup;
  menulist: MenuDetails[] = [];
  formValues: any;
  displayStyle: string = 'none';
  tables: number[] = [1, 2, 3, 4, 5, 6];
  orderItems: any[] = [];
  selectedTable: any;

  constructor(private http: HttpClient, private formBuilder: FormBuilder) {

    this.myForm = this.formBuilder.group({
      table: ['', Validators.required],
      menulist: this.formBuilder.array([])
    });

    http.get<MenuDetails[]>('./assets/mydata.json').subscribe(
      result => {
        this.menulist = result;
        this.populateForm();
      },
      error => {
        console.error(error);
      }
    );

  }

  populateForm() {
    const menulistFormArray = this.myForm.get('menulist') as FormArray;

    this.menulist.forEach(menu => {
      const menuFormGroup = this.formBuilder.group({
        header: menu.header,
        items: this.formBuilder.array([])
      });

      const itemsFormArray = menuFormGroup.get('items') as FormArray;

      menu.items.forEach(item => {
        const itemFormGroup = this.formBuilder.group({
          count1: item.count1,
          count2: item.count2,
          name: item.name
        });

        itemsFormArray.push(itemFormGroup);
      });

      menulistFormArray.push(menuFormGroup);
    });
  }

  public incrementCounter1(menuIndex: number, itemIndex: number) {
    const menuFormArray = this.myForm.get('menulist') as FormArray;
    const menuFormGroup = menuFormArray.at(menuIndex) as FormGroup;
    const itemsFormArray = menuFormGroup.get('items') as FormArray;
    const itemFormGroup = itemsFormArray.at(itemIndex) as FormGroup;
    const count1Control = itemFormGroup.get('count1') as FormControl;

    if (count1Control.value < 9) {
      count1Control.setValue(count1Control.value + 1);
    }
  }

  public incrementCounter2(menuIndex: number, itemIndex: number) {
    const menuFormArray = this.myForm.get('menulist') as FormArray;
    const menuFormGroup = menuFormArray.at(menuIndex) as FormGroup;
    const itemsFormArray = menuFormGroup.get('items') as FormArray;
    const itemFormGroup = itemsFormArray.at(itemIndex) as FormGroup;
    const count2Control = itemFormGroup.get('count2') as FormControl;

    if (count2Control.value < 9) {
      count2Control.setValue(count2Control.value + 1);
    }
  }

  public decrementCounter1(menuIndex: number, itemIndex: number) {
    const menuFormArray = this.myForm.get('menulist') as FormArray;
    const menuFormGroup = menuFormArray.at(menuIndex) as FormGroup;
    const itemsFormArray = menuFormGroup.get('items') as FormArray;
    const itemFormGroup = itemsFormArray.at(itemIndex) as FormGroup;
    const count1Control = itemFormGroup.get('count1') as FormControl;

    if (count1Control.value > 0) {
      count1Control.setValue(count1Control.value - 1);
    }
  }

  public decrementCounter2(menuIndex: number, itemIndex: number) {
    const menuFormArray = this.myForm.get('menulist') as FormArray;
    const menuFormGroup = menuFormArray.at(menuIndex) as FormGroup;
    const itemsFormArray = menuFormGroup.get('items') as FormArray;
    const itemFormGroup = itemsFormArray.at(itemIndex) as FormGroup;
    const count2Control = itemFormGroup.get('count2') as FormControl;

    if (count2Control.value > 0) {
      count2Control.setValue(count2Control.value - 1);
    }
  }

  // Generate order items count for validation
  generateOrderItems() {
    this.orderItems = [];
    for (const section of this.formValues.menulist) {
      for (const item of section.items) {
        if (item.count1 > 0 || item.count2 > 0) {
          this.orderItems.push({
            name: item.name,
            full: item.count1,
            half: item.count2
          });
        }
      }
    }
  }

  closePopup() {
    this.displayStyle = "none";
    this.formValues = null;
    this.myForm.controls.table.setValue('');
  }

  addCart() {
    this.formValues = this.myForm.value;
    this.displayStyle = 'none';
    this.generateOrderItems();
    // Check if any items are selected before opening modal
    if (this.orderItems.length > 0) {
      this.displayStyle = 'block';
    } else {
      alert('Please select items to add to the cart.');
    }
  }

  placeOrder() {
    this.displayStyle = "none";
    this.formValues = null;
    this.myForm.controls.table.setValue('');

    const dataToSend = {
      orderItems: this.orderItems,
      selectedTable: this.selectedTable
    };

    this.http.post('http://localhost:61222/api/Order/AddOrder', dataToSend).subscribe(
      response => {
        console.log('Success');
      },
      error => {
        console.log('Fail');
      }
    );
  }

  onTableSelectionChange(event: any) {
    this.selectedTable = event.target.value;
  }
}

interface MenuItem {
  imgsrc: string;
  name: string;
  price1: string;
  price2: string;
  count1: number;
  count2: number;
}

interface MenuDetails {
  header: string;
  items: MenuItem[];
}
