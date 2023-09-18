import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from '../api/services';
import { SesionTarjetaService } from '../sesion-tarjeta.service';
import {ErrorService} from '../error.service'


@Component({
    selector: 'app-inicio',
    templateUrl: './inicio.component.html',
    styleUrls: ['./inicio.component.css'],
})

export class InicioComponent {
    numeroTarjeta: string = '';
    mensajeError: string = 'Error. ';


    constructor(private router: Router, private homeService: HomeService, private sesionTarjetaService: SesionTarjetaService, private errorService: ErrorService){

    }

    agregarNumero(numero: string){
        if (this.numeroTarjeta.length < 16){
            this.numeroTarjeta += numero;
        }
    }

    reiniciarNumero(){
        this.numeroTarjeta = '';
    }


    formarCampoTarjeta(): string {
    const tarjetaSinGuiones = this.numeroTarjeta.replace(/-/g,'');
    const tarjetaIngresada = [];
    for (let i=0; i<tarjetaSinGuiones.length; i+=4){
        tarjetaIngresada.push(tarjetaSinGuiones.slice(i, i+4));
    }
    return tarjetaIngresada.join('-');
    }



    iniciarSession(){
         this.homeService.apiHomeVerificarTarjetaIngresadaGet$Json({numeroTarjeta: this.numeroTarjeta}).subscribe(
            (res) => {
                if (res) {
                    this.sesionTarjetaService.setNumeroTarjeta(this.numeroTarjeta)
                    this.router.navigate(['/ingresoPin']);
                }
            },
            (error) => {
                console.error(error);
                this.errorService.setError(this.mensajeError + error.error);
                this.router.navigate(['/error']);
            }
        )
    }
}