import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsuarioModel } from '../models/usuario.model';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = 'https://identitytoolkit.googleapis.com/v1/accounts:';
  private apiKey = 'AIzaSyBXl7l3h92e5uDFnuBJ9xCDmiYqAoALlb4';

  userToken: string;

  //Crear nuevo usarui
  //https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]

  //Login
  //https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]


  constructor( private http: HttpClient ) { 
    this.leerToken();
  }

  logoout () {
    localStorage.removeItem('token');
  }
  
  newUser( usuario : UsuarioModel ) {

    // const authData = {
    //   email             : usuario.email,
    //   password          : usuario.password,
    //   returnSecureToken : true
    // };

    const authData = {
      ...usuario,
      returnSecureToken: true
    };

    return this.http.post(
      `${ this.url }signUp?key=${ this.apiKey }`,
      authData
    ).pipe(
      map( resp => {
        this.guardarToken ( resp['idToken'] );
        return resp;
      })
    );

  }

  login ( usuario : UsuarioModel ) {

    const authData = {
      ...usuario,
      returnSecureToken: true
    };

    return this.http.post(
      `${ this.url }signInWithPassword?key=${ this.apiKey }`,
      authData
    ).pipe(
      map( resp => {
        this.guardarToken ( resp['idToken'] );
        return resp;
      })
    );


  }


  private guardarToken ( idToken: string) {
    
    this.userToken = idToken;
    localStorage.setItem('token', idToken);

    let hoy = new Date();
    hoy.setSeconds( 3600 );

    localStorage.setItem('expita', hoy.getTime().toString() );
    
  }

  leerToken () {

    if ( localStorage.getItem('token') ){
      this.userToken = localStorage.getItem('token');
    }else{
      this.userToken = '';
    }

    return this.userToken;

  }

  estaAutenticado(): boolean {

    if( this.userToken.length < 2) {
      return false;
    }

    const expira = Number(localStorage.getItem('expira'));
    const expiraDate = new Date();
    expiraDate.setTime(expira);

    if( expiraDate > new Date() ){
      return true;
    } else {
      return false;
    }
    
  }
}
