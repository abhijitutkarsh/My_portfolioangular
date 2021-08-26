import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MessageService {
  // tslint:disable-next-line:variable-name
  constructor(private _http: HttpClient) {}

  // tslint:disable-next-line:variable-name
  _url = 'https://abhijitutkarsh.herokuapp.com/send';
  // tslint:disable-next-line:typedef
  value(value: any) {
    throw new Error('Method not implemented.');
  }

  // tslint:disable-next-line:typedef
  register(userData: any) {
    return this._http.post<any>(this._url, userData);
  }
}
