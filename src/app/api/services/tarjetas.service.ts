/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { obtenerTarjeta$Json } from '../fn/tarjetas/obtener-tarjeta-json';
import { ObtenerTarjeta$Json$Params } from '../fn/tarjetas/obtener-tarjeta-json';
import { obtenerTarjeta$Plain } from '../fn/tarjetas/obtener-tarjeta-plain';
import { ObtenerTarjeta$Plain$Params } from '../fn/tarjetas/obtener-tarjeta-plain';
import { Tarjeta } from '../models/tarjeta';

@Injectable({ providedIn: 'root' })
export class TarjetasService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `obtenerTarjeta()` */
  static readonly ObtenerTarjetaPath = '/api/tarjetas/{numeroTarjeta}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `obtenerTarjeta$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  obtenerTarjeta$Plain$Response(params: ObtenerTarjeta$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Tarjeta>> {
    return obtenerTarjeta$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `obtenerTarjeta$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  obtenerTarjeta$Plain(params: ObtenerTarjeta$Plain$Params, context?: HttpContext): Observable<Tarjeta> {
    return this.obtenerTarjeta$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Tarjeta>): Tarjeta => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `obtenerTarjeta$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  obtenerTarjeta$Json$Response(params: ObtenerTarjeta$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Tarjeta>> {
    return obtenerTarjeta$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `obtenerTarjeta$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  obtenerTarjeta$Json(params: ObtenerTarjeta$Json$Params, context?: HttpContext): Observable<Tarjeta> {
    return this.obtenerTarjeta$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Tarjeta>): Tarjeta => r.body)
    );
  }

}
