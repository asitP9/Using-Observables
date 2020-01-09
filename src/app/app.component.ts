import { Component, OnInit, OnDestroy } from '@angular/core';
import { appService } from './app.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  isActivateClicked:boolean=false;
  activateSubscrip:Subscription;
  constructor(private tempService:appService) {}

  ngOnInit() {
      this.activateSubscrip=this.tempService.isActivateClickedEmitter.subscribe((didActivated:boolean)=>{
        this.isActivateClicked=didActivated;
      });
  }

  ngOnDestroy(){
    this.activateSubscrip.unsubscribe();
  }
}
