// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app--components',
//   templateUrl: './-components.component.html',
//   styleUrls: ['./-components.component.css']
// })
// export class ComponentsComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AlertService } from '../_services';

@Component({ 
  selector: 'alert',
  templateUrl:'alert.component.html'
})
export class AlertComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  message: any;
  constructor(private alertService: AlertService){ }
  ngOnInit(){
    this.subscription = this.alertService.getAlert().subscribe(
      message => {
        switch(message && message.type){
          case 'success':
            message.cssClass = 'alert alert-success';
            break;
          case 'error':
            message.cssClass = 'alert alert-danger';
            break;
        }
        this.message = message;
      }
    );
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}