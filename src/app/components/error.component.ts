import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { ErrorService } from '../error.service';



@Component({
    selector: 'app-error',
    templateUrl: './error.component.html',
    styleUrls: ['./error.component.css'],
})

export class ErrorComponent {
    mensajeError: string = '';

     constructor(private location: Location, private router: Router, private errorService: ErrorService){

    }

    volver(){
        this.location.back();
    }

    ngOnInit() {
        this.mensajeError = this.errorService.getError();
    }
    
}