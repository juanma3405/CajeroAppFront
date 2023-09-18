import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from '../api/services';
import { BalanceTarjetaService } from '../balance-tarjeta.service';
import { Tarjeta } from '../api/models';


@Component({
    selector: 'app-balance',
    templateUrl: './balance.component.html',
    styleUrls: ['./balance.component.css'],
})

export class BalanceComponent {
    
    tarjeta: Tarjeta = {};

     constructor(private router: Router, private homeService: HomeService, private balanceTarjetaService: BalanceTarjetaService){

    }

    irAOperaciones(){
        this.router.navigate(['/operaciones']);
    }

    volverAHome(){
        this.router.navigate(['/']);
    }


     ngOnInit() {
        this.tarjeta = this.balanceTarjetaService.getTarjeta();
    }
    
}