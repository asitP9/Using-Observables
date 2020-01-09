import { Injectable, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({providedIn:'root'})
export class appService{
    // isActivateClickedEmitter=new EventEmitter<boolean>();
    isActivateClickedEmitter=new Subject<boolean>();
}