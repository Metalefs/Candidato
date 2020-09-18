import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

@Injectable()
export class ResizeService {
  isMobile: boolean = false;
  width: number = window.innerWidth;
  height: number = window.innerHeight;
  mobileWidth: number = 760;
  get onResize$(): Observable<number> {
    return this.resizeSubject.asObservable().pipe(distinctUntilChanged());
  }

  private resizeSubject: Subject<number>;

  constructor() {
    this.resizeSubject = new Subject();
  }

  onResize(size: number) {
    this.resizeSubject.next(size);
  }
  
  async IsMobile():Promise<boolean>{
    return new Promise((resolve, reject) => {
      this.resizeSubject.subscribe(x=>{
        resolve(x < this.mobileWidth);
      })
    });
  }

}

export enum SCREEN_SIZE {
  XS,
  SM,
  MD,
  LG,
  XL
}