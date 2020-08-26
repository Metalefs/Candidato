import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Lightbox } from 'ngx-lightbox';

@Injectable({ providedIn: 'root' })
export class LightboxService {
    private Lightbox: Lightbox;
    public currentState: Observable<Lightbox>;

    constructor() {
        
    }

    // public get currentStateValue(): Lightbox {
       
    // }
    
    // async getLightbox(pagina:string): Promise<Lightbox>{
    //     let self = this;
        
    // }

    update(state : Lightbox){
        if(state != undefined){
            console.log(state);
            localStorage.setItem('Lightbox', JSON.stringify(state));
        }
    }

}