import { Component, OnInit, OnDestroy } from '@angular/core';
import {interval, Subscription, Observable} from 'rxjs';
import {map, filter} from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  firstObsSubscription:Subscription;
  constructor() { }

  ngOnInit() {
    // this.firstObsSubscription=interval(1000).subscribe(count=>{
    //   console.log(count);
    // })

    const customIntervalObservable=Observable.create((observer: any)=>{
      let count=0;
      setInterval(()=>{
        observer.next(count);
        if(count>3){
          observer.error(new Error("count is greater than 3"));
          
        }
        if(count==2){
          observer.complete();
        }
        count++;
      },1000)
    });

    // customIntervalObservable.pipe(map((data:number)=>{
    //   return 'round'+ (data+1);    
    // }));
    this.firstObsSubscription=customIntervalObservable.pipe(filter((data:number)=>{
      return data>0;
    }),map((data:number)=>{
      return 'round'+ (data+1);    
      })).subscribe((data: any)=>{
        console.log(data);

    }, error=>{
        console.log(error);
    }, ()=>{
      console.log("completed");
    });

  }
  ngOnDestroy(){
    this.firstObsSubscription.unsubscribe();
  }
}
