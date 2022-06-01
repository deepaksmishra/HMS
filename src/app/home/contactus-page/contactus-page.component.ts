import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactus-page',
  templateUrl: './contactus-page.component.html',
  styleUrls: ['./contactus-page.component.css']
})
export class ContactusPageComponent implements OnInit {

  constructor() {
    
    console.log("Contact us Component Loaded"); 
  }

  ngOnInit(): void {
  }

}
