/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiHomeConsultarBalanceGet$Json } from '../fn/home/api-home-consultar-balance-get-json';
import { ApiHomeConsultarBalanceGet$Json$Params } from '../fn/home/api-home-consultar-balance-get-json';
import { apiHomeConsultarBalanceGet$Plain } from '../fn/home/api-home-consultar-balance-get-plain';
import { ApiHomeConsultarBalanceGet$Plain$Params } from '../fn/home/api-home-consultar-balance-get-plain';
import { apiHomeRetirarDineroGet$Json } from '../fn/home/api-home-retirar-dinero-get-json';
import { ApiHomeRetirarDineroGet$Json$Params } from '../fn/home/api-home-retirar-dinero-get-json';
import { apiHomeRetirarDineroGet$Plain } from '../fn/home/api-home-retirar-dinero-get-plain';
import { ApiHomeRetirarDineroGet$Plain$Params } from '../fn/home/api-home-retirar-dinero-get-plain';
import { apiHomeVerificarPinGet$Json } from '../fn/home/api-home-verificar-pin-get-json';
import { ApiHomeVerificarPinGet$Json$Params } from '../fn/home/api-home-verificar-pin-get-json';
import { apiHomeVerificarPinGet$Plain } from '../fn/home/api-home-verificar-pin-get-plain';
import { ApiHomeVerificarPinGet$Plain$Params } from '../fn/home/api-home-verificar-pin-get-plain';
import { apiHomeVerificarTarjetaIngresadaGet$Json } from '../fn/home/api-home-verificar-tarjeta-ingresada-get-json';
import { ApiHomeVerificarTarjetaIngresadaGet$Json$Params } from '../fn/home/api-home-verificar-tarjeta-ingresada-get-json';
import { apiHomeVerificarTarjetaIngresadaGet$Plain } from '../fn/home/api-home-verificar-tarjeta-ingresada-get-plain';
import { ApiHomeVerificarTarjetaIngresadaGet$Plain$Params } from '../fn/home/api-home-verificar-tarjeta-ingresada-get-plain';
import { Operacion } from '../models/operacion';
import { Tarjeta } from '../models/tarjeta';

@Injectable({ providedIn: 'root' })
export class HomeService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiHomeVerificarTarjetaIngresadaGet()` */
  static readonly ApiHomeVerificarTarjetaIngresadaGetPath = '/api/home/verificarTarjetaIngresada';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiHomeVerificarTarjetaIngresadaGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiHomeVerificarTarjetaIngresadaGet$Plain$Response(params?: ApiHomeVerificarTarjetaIngresadaGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Tarjeta>> {
    return apiHomeVerificarTarjetaIngresadaGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiHomeVerificarTarjetaIngresadaGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiHomeVerificarTarjetaIngresadaGet$Plain(params?: ApiHomeVerificarTarjetaIngresadaGet$Plain$Params, context?: HttpContext): Observable<Tarjeta> {
    return this.apiHomeVerificarTarjetaIngresadaGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Tarjeta>): Tarjeta => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiHomeVerificarTarjetaIngresadaGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiHomeVerificarTarjetaIngresadaGet$Json$Response(params?: ApiHomeVerificarTarjetaIngresadaGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Tarjeta>> {
    return apiHomeVerificarTarjetaIngresadaGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiHomeVerificarTarjetaIngresadaGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiHomeVerificarTarjetaIngresadaGet$Json(params?: ApiHomeVerificarTarjetaIngresadaGet$Json$Params, context?: HttpContext): Observable<Tarjeta> {
    return this.apiHomeVerificarTarjetaIngresadaGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Tarjeta>): Tarjeta => r.body)
    );
  }

  /** Path part for operation `apiHomeVerificarPinGet()` */
  static readonly ApiHomeVerificarPinGetPath = '/api/home/verificarPin';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiHomeVerificarPinGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiHomeVerificarPinGet$Plain$Response(params?: ApiHomeVerificarPinGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Tarjeta>> {
    return apiHomeVerificarPinGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiHomeVerificarPinGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiHomeVerificarPinGet$Plain(params?: ApiHomeVerificarPinGet$Plain$Params, context?: HttpContext): Observable<Tarjeta> {
    return this.apiHomeVerificarPinGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Tarjeta>): Tarjeta => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiHomeVerificarPinGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiHomeVerificarPinGet$Json$Response(params?: ApiHomeVerificarPinGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Tarjeta>> {
    return apiHomeVerificarPinGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiHomeVerificarPinGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiHomeVerificarPinGet$Json(params?: ApiHomeVerificarPinGet$Json$Params, context?: HttpContext): Observable<Tarjeta> {
    return this.apiHomeVerificarPinGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Tarjeta>): Tarjeta => r.body)
    );
  }

  /** Path part for operation `apiHomeConsultarBalanceGet()` */
  static readonly ApiHomeConsultarBalanceGetPath = '/api/home/consultarBalance';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiHomeConsultarBalanceGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiHomeConsultarBalanceGet$Plain$Response(params?: ApiHomeConsultarBalanceGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Tarjeta>> {
    return apiHomeConsultarBalanceGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiHomeConsultarBalanceGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiHomeConsultarBalanceGet$Plain(params?: ApiHomeConsultarBalanceGet$Plain$Params, context?: HttpContext): Observable<Tarjeta> {
    return this.apiHomeConsultarBalanceGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Tarjeta>): Tarjeta => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiHomeConsultarBalanceGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiHomeConsultarBalanceGet$Json$Response(params?: ApiHomeConsultarBalanceGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Tarjeta>> {
    return apiHomeConsultarBalanceGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiHomeConsultarBalanceGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiHomeConsultarBalanceGet$Json(params?: ApiHomeConsultarBalanceGet$Json$Params, context?: HttpContext): Observable<Tarjeta> {
    return this.apiHomeConsultarBalanceGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Tarjeta>): Tarjeta => r.body)
    );
  }

  /** Path part for operation `apiHomeRetirarDineroGet()` */
  static readonly ApiHomeRetirarDineroGetPath = '/api/home/retirarDinero';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiHomeRetirarDineroGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiHomeRetirarDineroGet$Plain$Response(params?: ApiHomeRetirarDineroGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Operacion>> {
    return apiHomeRetirarDineroGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiHomeRetirarDineroGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiHomeRetirarDineroGet$Plain(params?: ApiHomeRetirarDineroGet$Plain$Params, context?: HttpContext): Observable<Operacion> {
    return this.apiHomeRetirarDineroGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Operacion>): Operacion => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiHomeRetirarDineroGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiHomeRetirarDineroGet$Json$Response(params?: ApiHomeRetirarDineroGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Operacion>> {
    return apiHomeRetirarDineroGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiHomeRetirarDineroGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiHomeRetirarDineroGet$Json(params?: ApiHomeRetirarDineroGet$Json$Params, context?: HttpContext): Observable<Operacion> {
    return this.apiHomeRetirarDineroGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Operacion>): Operacion => r.body)
    );
  }

}
