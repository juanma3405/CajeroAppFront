/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Operacion } from '../../models/operacion';

export interface ApiHomeRetirarDineroGet$Json$Params {
  numeroTarjeta?: string;
  cantidad?: number;
}

export function apiHomeRetirarDineroGet$Json(http: HttpClient, rootUrl: string, params?: ApiHomeRetirarDineroGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Operacion>> {
  const rb = new RequestBuilder(rootUrl, apiHomeRetirarDineroGet$Json.PATH, 'get');
  if (params) {
    rb.query('numeroTarjeta', params.numeroTarjeta, {});
    rb.query('cantidad', params.cantidad, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Operacion>;
    })
  );
}

apiHomeRetirarDineroGet$Json.PATH = '/api/home/retirarDinero';
