import { Injectable } from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import { Observable } from 'rxjs';

const newUrl = 'http://localhost:3000/';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let oldUrl = '';
    if(req.url.includes('http://tfs/')){
      oldUrl = 'http://tfs/';
    }

    if(oldUrl!==''){
      const curObj = {
        url: 'http://localhost:3000/',
        urlWithParams: req.urlWithParams.replace(oldUrl, newUrl),
      };
      req = Object.assign(req, curObj);
    }

    return next.handle(req);
  }
}
