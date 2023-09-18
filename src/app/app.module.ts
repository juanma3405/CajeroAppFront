import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { InicioComponent } from './components/inicio.component';
import { PinComponent } from './components/pin.component';
import { OperacionesComponent } from './components/operaciones.component';
import { SesionTarjetaService } from './sesion-tarjeta.service';
import {BalanceComponent} from './components/balance.component';
import {BalanceTarjetaService} from './balance-tarjeta.service';
import { RetiroComponent } from './components/retiro.component';
import {RetiroOperacionService} from './retiro-operacion.service';
import { CommonModule } from '@angular/common';
import { OperacionComponent } from './components/operacion.component';
import {ErrorService} from './error.service'


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    PinComponent,
    OperacionesComponent,
    BalanceComponent,
    RetiroComponent,
    OperacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule
  ],
  providers: [SesionTarjetaService, BalanceTarjetaService, RetiroOperacionService, ErrorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
