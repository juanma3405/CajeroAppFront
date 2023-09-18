import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio.component';
import { PinComponent } from './components/pin.component';
import { OperacionesComponent } from './components/operaciones.component';
import { BalanceComponent } from './components/balance.component';
import { RetiroComponent } from './components/retiro.component';
import { OperacionComponent } from './components/operacion.component';
import { ErrorComponent } from './components/error.component';


const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'ingresoPin', component: PinComponent},
  { path: 'operaciones', component: OperacionesComponent},
  { path: 'balance', component: BalanceComponent},
  { path: 'retiro', component: RetiroComponent},
  { path: 'operacion', component: OperacionComponent },
  { path: 'error', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
