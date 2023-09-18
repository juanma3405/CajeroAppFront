import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from '../api/services';
import { BalanceTarjetaService } from '../balance-tarjeta.service';
import { RetiroOperacionService } from '../retiro-operacion.service';
import { Tarjeta } from '../api/models';
import { Operacion } from '../api/models';



@Component({
    selector: 'app-operacion',
    templateUrl: './operacion.component.html',
    styleUrls: ['./operacion.component.css'],
})

export class OperacionComponent {
    
    tarjeta: Tarjeta = {};
    operacion: Operacion = {};

     constructor(private router: Router, private homeService: HomeService, private balanceTarjetaService: BalanceTarjetaService,
        private retiroOperacionService: RetiroOperacionService){

    }

    irAOperaciones(){
        this.router.navigate(['/operaciones']);
    }

    volverAHome(){
        this.router.navigate(['/']);
    }


     ngOnInit() {
        this.tarjeta = this.balanceTarjetaService.getTarjeta();
        this.operacion = this.retiroOperacionService.getOperacion();
    }
    
}