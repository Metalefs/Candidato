import { Injectable, Inject } from '@angular/core';
import { BehaviorSubject, Subscription, Subject, Observable, fromEvent } from 'rxjs'; 
import { map, catchError } from 'rxjs/operators';

export interface WindowSize {
  height: number,
  width: number
};

@Injectable()
export class WindowSizeService {
  
  constructor(@Inject('windowObject') private window: Window) {
    
    // fromEvent(window, 'resize')
    //     .pipe(
    //         map(event => <WindowSize>{ 
    //             width: event['currentTarget'].innerWidth, 
    //             height: event['currentTarget'].innerHeight
    //         })
    //     )
    //     .subscribe((windowSize) => {
    //         this.windowSizeChanged.next(windowSize);
    //     })
  };
  
  readonly windowSizeChanged = new BehaviorSubject<WindowSize>(<WindowSize>{
    width: this.window.innerWidth,
    height: this.window.innerHeight
  });

}