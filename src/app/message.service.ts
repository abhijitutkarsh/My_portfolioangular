import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/http';

@Injectable()
export class MessageService {

  constructor(private_http: HttpClient) {}

  // tslint:disable-next-line:typedef
  sendMessage(body) {
    return this._http.post(‘http://localhost:3000/sendmail', body);
  }
}