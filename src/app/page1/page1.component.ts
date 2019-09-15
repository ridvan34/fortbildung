import { Component, OnInit } from '@angular/core';  
import { Subscription, Subscriber, Observable } from 'rxjs';

import { MeinService } from '../mein.service';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {
  
  constructor(private meinService: MeinService) { }

  ngOnInit() { }

  aufrufGet(){
    this.meinService.getVonFirebase().subscribe(
      (response) => {
        console.log("Get Response: ");
        console.log(response);
      });
  }

  aufrufPut(){
    this.meinService.speicherDieDaten().subscribe(
      (response) => {
        console.log("Put Response: ");
        console.log(response);
      });
  }

}
