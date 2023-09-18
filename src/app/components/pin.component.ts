import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from '../api/services';
import { SesionTarjetaService } from '../sesion-tarjeta.service';
import { ErrorService } from '../error.service';


@Component({
    selector: 'app-pin',
    templateUrl: './pin.component.html',
    styleUrls: ['./pin.component.css'],
})

export class PinComponent {
    numeroTarjeta: string ='';
    numeroPin: string = '';
    mensajeError: string = 'Error. ';

     constructor(private router: Router, private homeService: HomeService, private sesionTarjetaService: SesionTarjetaService, private errorService: ErrorService){

    }

    agregarNumero(numero: string){
            this.numeroPin += numero;
    }

    reiniciarNumero(){
        this.numeroPin = '';
    }

    volverAHome(){
        this.router.navigate(['/']);
    }

    verificarPin(){
        this.homeService.apiHomeVerificarPinGet$Json({numeroTarjeta:this.numeroTarjeta, pin: parseInt(this.numeroPin)}).subscribe(
            (res) => {
                if (res) {
                    this.router.navigate(['/operaciones']);
                }
            },
            (error) => {
                this.errorService.setError(this.mensajeError + error.error);
                this.router.navigate(['/error']);
            }
        )
    }

     ngOnInit() {
        this.numeroTarjeta = this.sesionTarjetaService.getNumeroTarjeta();
    }

}