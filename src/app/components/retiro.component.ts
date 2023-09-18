import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from '../api/services';
import { SesionTarjetaService } from '../sesion-tarjeta.service';
import { BalanceTarjetaService } from '../balance-tarjeta.service';
import { RetiroOperacionService } from '../retiro-operacion.service';
import { ErrorService } from '../error.service';


@Component({
    selector: 'app-retiro',
    templateUrl: './retiro.component.html',
    styleUrls: ['./retiro.component.css'],
})

export class RetiroComponent {
    cantidadARetirar: string ='';
    mensajeError: string = 'Error. ';
    numeroTarjeta: string  ='';

     constructor(private router: Router, private homeService: HomeService, private sesionTarjetaService: SesionTarjetaService, private balanceTarjetaService: BalanceTarjetaService,
        private retiroOperacionService: RetiroOperacionService, private errorService: ErrorService){

    }

    agregarTeclaACantidad (teclaIngresada: string){
            this.cantidadARetirar += teclaIngresada;
    }

    reiniciarCantidad(){
        this.cantidadARetirar = '';
    }

    volverAHome(){
        this.router.navigate(['/']);
    }

    retirarDinero(){
        this.homeService.apiHomeRetirarDineroGet$Json({numeroTarjeta:this.numeroTarjeta, cantidad: parseFloat(this.cantidadARetirar)}).subscribe(
            (res) => {
                if (res) {
                    console.log(res);
                    this.retiroOperacionService.setOperacion(res);
                    if (res.tarjeta != undefined) {
                        this.balanceTarjetaService.setTarjeta(res.tarjeta);
                    }
                    this.router.navigate(['/operacion']);
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