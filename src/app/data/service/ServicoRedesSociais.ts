import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { RedeSocial } from 'src/app/data/schema/RedeSocial';
import { CaminhoLogo } from 'src/app/_helpers/caminho_helper';

@Injectable({
    providedIn: 'root'
})

export class ServicoRedesSociais{
    constructor(){
		
	}

    GetAllRedesSociais(): RedeSocial[] {
      return [
        
            new RedeSocial(CaminhoLogo("twitter"),"twitter","https://twitter.com/barackobama","ion-social-twitter-outline"),
            new RedeSocial(CaminhoLogo("instagram"),"instagram","https://instagram.com/barackobama/","ion-social-instagram-outline"),
            new RedeSocial(CaminhoLogo("whatsapp"),"whatsapp","/","ion-social-whatsapp-outline"),
            new RedeSocial(CaminhoLogo("facebook"),"facebook","https://facebook.com/barackobama/","ion-social-facebook-outline"),
            new RedeSocial(CaminhoLogo("youtube"),"youtube","https://youtube.com/barackobama/","ion-social-youtube-outline"),
          
        ]
    }
	
	
}