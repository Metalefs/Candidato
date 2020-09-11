import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { RedeSocial } from 'src/app/data/schema/RedeSocial';
import { Candidato } from 'src/app/data/schema/domain';
import { CaminhoLogo } from 'src/app/_helpers/caminho_helper';

@Injectable({
    providedIn: 'root'
})

export class ServicoRedesSociais{
    constructor(){
		
	}

    GetAllRedesSociais(Candidato:Candidato): RedeSocial[] {
      return [
        
        new RedeSocial(CaminhoLogo("twitter"),"twitter",Candidato.twitter,"ion-social-twitter-outline"),
        new RedeSocial(CaminhoLogo("instagram"),"instagram",Candidato.instagram,"ion-social-instagram-outline"),
        new RedeSocial(CaminhoLogo("whatsapp"),"whatsapp",`https://wa.me/5531${Candidato.telefone}?text=`,"ion-social-whatsapp-outline"),
        new RedeSocial(CaminhoLogo("facebook"),"facebook",Candidato.facebook,"ion-social-facebook-outline"),
        new RedeSocial(CaminhoLogo("youtube"),"youtube",Candidato.youtube,"ion-social-youtube-outline"),
          
        ]
    }
	
	
}