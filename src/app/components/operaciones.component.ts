import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from '../api/services';
import { SesionTarjetaService } from '../sesion-tarjeta.service';
import { BalanceTarjetaService } from '../balance-tarjeta.service';


@Component({
    selector: 'app-operaciones',
    templateUrl: './operaciones.component.html',
    styleUrls: ['./operaciones.component.css'],
})

export class OperacionesComponent {
    numeroTarjeta: string ='';
    mensajeError: string = '';
   
     constructor(private router: Router, private homeService: HomeService, private sesionTarjetaService: SesionTarjetaService, private balanceTarjetaService: BalanceTarjetaService){

    }

    irABalance(){
        this.homeService.apiHomeConsultarBalanceGet$Json({numeroTarjeta:this.numeroTarjeta}).subscribe(
            (res) => {
                if (res) {
                    this.balanceTarjetaService.setTarjeta(res);
                    this.router.navigate(['/balance']);
                }
            },
            (error) => {
                this.mensajeError = "Error consultando saldo"
                console.log(this.mensajeError)
            }
        )
    } 

    irARetiro(){
        this.router.navigate(['/retiro']);
    }
   

    volverAHome(){
        this.router.navigate(['/']);
    }

    ngOnInit() {
        this.numeroTarjeta = this.sesionTarjetaService.getNumeroTarjeta();
    }


}