import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray } from '@angular/forms';

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

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  public currentCount = 0;
  myForm: FormGroup; // Declare myForm as FormGroup
  menulist: MenuDetails[] = [
    {
      header: 'VEG MOMOS',
      items: [
        {

          imgsrc: 'dCappuccino.jpg',
          name: 'Steam Veg Momos',
          price1: '100',
          price2: '70',
          count1: 0,
          count2: 0
        },
        {
          imgsrc: 'dCappuccino.jpg',
          name: 'Fried Veg Momos',
          price1: '150',
          price2: '80',
          count1: 0,
          count2: 0
        },
        {
          imgsrc: 'dCappuccino.jpg',
          name: 'Fried Schezwan Momos Dry',
          price1: '170',
          price2: '100',
          count1: 0,
          count2: 0
        },
        {
          imgsrc: 'dCappuccino.jpg',
          name: 'Fried Chilly Momos Dry',
          price1: '170',
          price2: '100',
          count1: 0,
          count2: 0
        },
      ]
    },
    {
      header: 'VEG SOUP',
      items: [
        {

          imgsrc: 'dCappuccino.jpg',
          name: 'Veg Manchow Soup',
          price1: '100',
          price2: '00',
          count1: 0,
          count2: 0
        },
        {
          imgsrc: 'dCappuccino.jpg',
          name: 'Sweet Corn Soup',
          price1: '110',
          price2: '00',
          count1: 0,
          count2: 0
        },
        {
          imgsrc: 'dCappuccino.jpg',
          name: 'Hot & Sour Soup',
          price1: '110',
          price2: '00',
          count1: 0,
          count2: 0
        },
        {
          imgsrc: 'dCappuccino.jpg',
          name: 'Momo’s Soup',
          price1: '130',
          price2: '00',
          count1: 0,
          count2: 0
        },
        {
          imgsrc: 'dCappuccino.jpg',
          name: 'Lemon Coriander',
          price1: '100',
          price2: '00',
          count1: 0,
          count2: 0
        },
        {
          imgsrc: 'dCappuccino.jpg',
          name: 'Veg Noodle Soup',
          price1: '110',
          price2: '00',
          count1: 0,
          count2: 0
        },
        {
          imgsrc: 'dCappuccino.jpg',
          name: 'Veg Classic Soup',
          price1: '100',
          price2: '00',
          count1: 0,
          count2: 0
        },
        {
          imgsrc: 'dCappuccino.jpg',
          name: 'Veg Lemon Ginger Soup',
          price1: '100',
          price2: '00',
          count1: 0,
          count2: 0
        },
        {
          imgsrc: 'dCappuccino.jpg',
          name: 'Mix Veg Cream Soup',
          price1: '110',
          price2: '00',
          count1: 0,
          count2: 0
        },
        {
          imgsrc: 'dCappuccino.jpg',
          name: 'Cream of Mushroom',
          price1: '110',
          price2: '00',
          count1: 0,
          count2: 0
        },
        {
          imgsrc: 'dCappuccino.jpg',
          name: 'Thai Green Soup',
          price1: '130',
          price2: '00',
          count1: 0,
          count2: 0
        },
      ]
    },
    {
      header: 'VEG STARTERS',
      items: [
        {

          imgsrc: 'dCappuccino.jpg',
          name: 'Veg Crispy',
          price1: '150',
          price2: '00',
          count1: 0,
          count2: 0
        },
        {
          imgsrc: 'dCappuccino.jpg',
          name: 'Kung Pao Potato',
          price1: '140',
          price2: '00',
          count1: 0,
          count2: 0
        },
        {
          imgsrc: 'dCappuccino.jpg',
          name: 'Veg Manchurian Dry',
          price1: '140',
          price2: '00',
          count1: 0,
          count2: 0
        },
        {
          imgsrc: 'dCappuccino.jpg',
          name: 'Paneer Crispy',
          price1: '180',
          price2: '00',
          count1: 0,
          count2: 0
        },
        {
          imgsrc: 'dCappuccino.jpg',
          name: 'Paneer Chilly Dry',
          price1: '170',
          price2: '00',
          count1: 0,
          count2: 0
        },
        {
          imgsrc: 'dCappuccino.jpg',
          name: 'Paneer 65 Dry',
          price1: '180',
          price2: '00',
          count1: 0,
          count2: 0
        },
        {
          imgsrc: 'dCappuccino.jpg',
          name: 'Paneer Manchurian Dry',
          price1: '180',
          price2: '00',
          count1: 0,
          count2: 0
        },
        {
          imgsrc: 'dCappuccino.jpg',
          name: 'Paneer Schezwan Dry',
          price1: '180',
          price2: '00',
          count1: 0,
          count2: 0
        },
        {
          imgsrc: 'dCappuccino.jpg',
          name: 'Mushroom Manchurian',
          price1: '160',
          price2: '00',
          count1: 0,
          count2: 0
        },
        {
          imgsrc: 'dCappuccino.jpg',
          name: 'Mushroom Schezwan Dry',
          price1: '170',
          price2: '00',
          count1: 0,
          count2: 0
        },
        {
          imgsrc: 'dCappuccino.jpg',
          name: 'Paneer Salt & Pepper Dry',
          price1: '170',
          price2: '00',
          count1: 0,
          count2: 0
        },
        {
          imgsrc: 'dCappuccino.jpg',
          name: 'Hot Garlic Paneer Dry',
          price1: '180',
          price2: '00',
          count1: 0,
          count2: 0
        },
        {
          imgsrc: 'dCappuccino.jpg',
          name: 'Cauliflower Manchurian Dry',
          price1: '130',
          price2: '00',
          count1: 0,
          count2: 0
        },
        {
          imgsrc: 'dCappuccino.jpg',
          name: 'Orange Paneer Dry',
          price1: '180',
          price2: '00',
          count1: 0,
          count2: 0
        },
        {
          imgsrc: 'dCappuccino.jpg',
          name: 'Crispy Baby Corn Dry',
          price1: '150',
          price2: '00',
          count1: 0,
          count2: 0
        },
        {
          imgsrc: 'dCappuccino.jpg',
          name: 'Baby Corn Chilly Dry',
          price1: '150',
          price2: '00',
          count1: 0,
          count2: 0
        },
        {
          imgsrc: 'dCappuccino.jpg',
          name: 'Kung Pao Paneer Dry',
          price1: '180',
          price2: '00',
          count1: 0,
          count2: 0
        },
        {
          imgsrc: 'dCappuccino.jpg',
          name: 'Paneer Satay',
          price1: '190',
          price2: '00',
          count1: 0,
          count2: 0
        },
        {
          imgsrc: 'dCappuccino.jpg',
          name: 'Vegetable Stir Fry',
          price1: '140',
          price2: '00',
          count1: 0,
          count2: 0
        },
        {
          imgsrc: 'dCappuccino.jpg',
          name: 'Butter Garlic Paneer',
          price1: '180',
          price2: '00',
          count1: 0,
          count2: 0
        },
        {
          imgsrc: 'dCappuccino.jpg',
          name: 'Sweet fair Paneer',
          price1: '180',
          price2: '00',
          count1: 0,
          count2: 0
        },
        {
          imgsrc: 'dCappuccino.jpg',
          name: 'Paneer Chilly in Oyster Sauce Dry',
          price1: '190',
          price2: '00',
          count1: 0,
          count2: 0
        },
        {
          imgsrc: 'dCappuccino.jpg',
          name: 'Paneer BBQ Chilly Dry',
          price1: '190',
          price2: '00',
          count1: 0,
          count2: 0
        },
        {
          imgsrc: 'dCappuccino.jpg',
          name: 'Paneer Teriyaki Dry',
          price1: '190',
          price2: '00',
          count1: 0,
          count2: 0
        },
        {
          imgsrc: 'dCappuccino.jpg',
          name: 'Spicy Black Bean Dry',
          price1: '70',
          price2: '00',
          count1: 0,
          count2: 0
        },
        {
          imgsrc: 'dCappuccino.jpg',
          name: 'Bhel Chinese',
          price1: '120',
          price2: '00',
          count1: 0,
          count2: 0
        },
        {
          imgsrc: 'dCappuccino.jpg',
          name: 'Soyabeen chilly',
          price1: '120',
          price2: '00',
          count1: 0,
          count2: 0
        },
        {
          imgsrc: 'dCappuccino.jpg',
          name: 'Honey Paneer Chilly',
          price1: '180',
          price2: '00',
          count1: 0,
          count2: 0
        },
        {
          imgsrc: 'dCappuccino.jpg',
          name: 'Chinese Paneer Pakoda',
          price1: '180',
          price2: '00',
          count1: 0,
          count2: 0
        },
      ]
    },
    {
      header: 'VEG CHINESE GRAVY',
      items: [
        {

          imgsrc: 'dCappuccino.jpg',
          name: 'Veg Manchurian Gravy',
          price1: '150',
          price2: '00',
          count1: 0,
          count2: 0
        },
        {
          imgsrc: 'dCappuccino.jpg',
          name: 'Paneer Chilly Gravy',
          price1: '170',
          price2: '00',
          count1: 0,
          count2: 0
        },
        {
          imgsrc: 'dCappuccino.jpg',
          name: 'Schezwan Paneer Chilly Gravy',
          price1: '180',
          price2: '00',
          count1: 0,
          count2: 0
        },
        {
          imgsrc: 'dCappuccino.jpg',
          name: 'Hot Garlic Sauce Gravy',
          price1: '190',
          price2: '00',
          count1: 0,
          count2: 0
        },
        {
          imgsrc: 'dCappuccino.jpg',
          name: 'Veg Stir Fry Gravy',
          price1: '140',
          price2: '00',
          count1: 0,
          count2: 0
        },
        {
          imgsrc: 'dCappuccino.jpg',
          name: 'Veg Thai Curry',
          price1: '180',
          price2: '00',
          count1: 0,
          count2: 0
        },
        {
          imgsrc: 'dCappuccino.jpg',
          name: 'Exotic Veggies in Kung Pao Gravy',
          price1: '190',
          price2: '00',
          count1: 0,
          count2: 0
        },
        {
          imgsrc: 'dCappuccino.jpg',
          name: 'Paneer Manchurian Gravy',
          price1: '170',
          price2: '00',
          count1: 0,
          count2: 0
        },
        {
          imgsrc: 'dCappuccino.jpg',
          name: 'Paneer 65 Gravy',
          price1: '180',
          price2: '00',
          count1: 0,
          count2: 0
        },
        {
          imgsrc: 'dCappuccino.jpg',
          name: 'Mushroom Chilly Gravy',
          price1: '170',
          price2: '00',
          count1: 0,
          count2: 0
        },
        {
          imgsrc: 'dCappuccino.jpg',
          name: 'Veg American Chop Suey',
          price1: '140',
          price2: '00',
          count1: 0,
          count2: 0
        },
      ]
    },
    {
      header: 'VEG FRIED RICE',
      items: [
        {

          imgsrc: 'dCappuccino.jpg',
          name: 'Mix Veg Fried Rice',
          price1: '140',
          price2: '80',
          count1: 0,
          count2: 0
        },
        {
          imgsrc: 'dCappuccino.jpg',
          name: 'Veg Schezwan Rice',
          price1: '150',
          price2: '90',
          count1: 0,
          count2: 0
        },
        {
          imgsrc: 'dCappuccino.jpg',
          name: 'Veg Combination Rice',
          price1: '160',
          price2: '100',
          count1: 0,
          count2: 0
        },
        {
          imgsrc: 'dCappuccino.jpg',
          name: 'Ginger Capsicum Fried Rice',
          price1: '140',
          price2: '80',
          count1: 0,
          count2: 0
        },
        {
          imgsrc: 'dCappuccino.jpg',
          name: 'Paneer Fried Rice',
          price1: '180',
          price2: '100',
          count1: 0,
          count2: 0
        },
        {
          imgsrc: 'dCappuccino.jpg',
          name: 'Veg Hong Kong Rice  ',
          price1: '190',
          price2: '110',
          count1: 0,
          count2: 0
        },
        {
          imgsrc: 'dCappuccino.jpg',
          name: 'Veg Singapore Rice (Yellow)',
          price1: '190',
          price2: '110',
          count1: 0,
          count2: 0
        },
        {
          imgsrc: 'dCappuccino.jpg',
          name: 'Chilly Garlic Rice',
          price1: '130',
          price2: '80',
          count1: 0,
          count2: 0
        },
        {
          imgsrc: 'dCappuccino.jpg',
          name: 'Veg Manchurian Rice',
          price1: '200',
          price2: '110',
          count1: 0,
          count2: 0
        },
        {
          imgsrc: 'dCappuccino.jpg',
          name: 'Mushroom Fried Rice',
          price1: '170',
          price2: '100',
          count1: 0,
          count2: 0
        },
        {
          imgsrc: 'dCappuccino.jpg',
          name: 'Veg Chilly Garlic Basil Fried Rice',
          price1: '170',
          price2: '90',
          count1: 0,
          count2: 0
        },
        {
          imgsrc: 'dCappuccino.jpg',
          name: 'Butter Chilly Garlic Rice',
          price1: '140',
          price2: '90',
          count1: 0,
          count2: 0
        },
        {
          imgsrc: 'dCappuccino.jpg',
          name: 'Burnt Garlic Rice',
          price1: '140',
          price2: '90',
          count1: 0,
          count2: 0
        },
      ]
    },
    {
      header: 'VEG NOODLES',
      items: [
        {

          imgsrc: 'dCappuccino.jpg',
          name: 'Mix Veg Hakka Noodle',
          price1: '140',
          price2: '80',
          count1: 0,
          count2: 0
        },
        {
          imgsrc: 'dCappuccino.jpg',
          name: 'Veg Schezwan Noodle',
          price1: '150',
          price2: '90',
          count1: 0,
          count2: 0
        },
        {
          imgsrc: 'dCappuccino.jpg',
          name: 'Veg Combination Noodle',
          price1: '160',
          price2: '100',
          count1: 0,
          count2: 0
        },
        {
          imgsrc: 'dCappuccino.jpg',
          name: 'Ginger Capsicum Noodle',
          price1: '140',
          price2: '80',
          count1: 0,
          count2: 0
        },
        {
          imgsrc: 'dCappuccino.jpg',
          name: 'Paneer Hakka Noodle',
          price1: '180',
          price2: '100',
          count1: 0,
          count2: 0
        },
        {
          imgsrc: 'dCappuccino.jpg',
          name: 'Veg Hong Kong Noodle',
          price1: '190',
          price2: '110',
          count1: 0,
          count2: 0
        },
        {
          imgsrc: 'dCappuccino.jpg',
          name: 'Veg Singapore Noodle',
          price1: '190',
          price2: '110',
          count1: 0,
          count2: 0
        },
        {
          imgsrc: 'dCappuccino.jpg',
          name: 'Chilly Garlic Noodle',
          price1: '130',
          price2: '80',
          count1: 0,
          count2: 0
        },
        {
          imgsrc: 'dCappuccino.jpg',
          name: 'Veg Manchurian Noodle',
          price1: '200',
          price2: '110',
          count1: 0,
          count2: 0
        },
        {
          imgsrc: 'dCappuccino.jpg',
          name: 'Mushroom Fried Noodle',
          price1: '170',
          price2: '100',
          count1: 0,
          count2: 0
        },
        {
          imgsrc: 'dCappuccino.jpg',
          name: 'Veg Chilly Garlic Basil Noodle',
          price1: '170',
          price2: '90',
          count1: 0,
          count2: 0
        },
        {
          imgsrc: 'dCappuccino.jpg',
          name: 'Butter Chilly Garlic Noodle   ',
          price1: '140',
          price2: '90',
          count1: 0,
          count2: 0
        },
        {
          imgsrc: 'dCappuccino.jpg',
          name: 'Burnt Garlic Noodle',
          price1: '130',
          price2: '80',
          count1: 0,
          count2: 0
        },
      ]
    },
    {
      header: 'WITH GRAVY (RICE  OR NOODLE)',
      items: [
        {

          imgsrc: 'dCappuccino.jpg',
          name: 'Veg Triple Rice / Noodle',
          price1: '210',
          price2: '120',
          count1: 0,
          count2: 0
        },
        {
          imgsrc: 'dCappuccino.jpg',
          name: 'Veg Manchurian Rice / Noodle',
          price1: '170',
          price2: '100',
          count1: 0,
          count2: 0
        },
        {
          imgsrc: 'dCappuccino.jpg',
          name: 'Veg  Exotic Pot Rice / Noodle',
          price1: '220',
          price2: '120',
          count1: 0,
          count2: 0
        },
        {
          imgsrc: 'dCappuccino.jpg',
          name: 'Thai Curry with Basil Rice / Noodle',
          price1: '220',
          price2: '120',
          count1: 0,
          count2: 0
        },
        {
          imgsrc: 'dCappuccino.jpg',
          name: 'Burnt Chilly Garlic Rice / Noodle',
          price1: '180',
          price2: '100',
          count1: 0,
          count2: 0
        },
        {
          imgsrc: 'dCappuccino.jpg',
          name: 'Chilly Basil Rice / Noodle',
          price1: '170',
          price2: '90',
          count1: 0,
          count2: 0
        },
        {
          imgsrc: 'dCappuccino.jpg',
          name: 'Sherfa Rice With Gravy',
          price1: '220',
          price2: '100',
          count1: 0,
          count2: 0
        }]
    }];

  constructor(private formBuilder: FormBuilder) {
    this.myForm = this.formBuilder.group({
      menulist: this.formBuilder.array([])
    });

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
          count2: item.count2
        });

        itemsFormArray.push(itemFormGroup);
      });

      menulistFormArray.push(menuFormGroup);
    });
  } // Inject FormBuilder in the constructor

  onSubmit() {
    const formValues = this.myForm.value;
    console.log('Form Values:', formValues);
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

    if (count1Control.value >0) {
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

}
