
import {RouterModule, Routes} from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AngularComponent} from './angular.component';
import {AngularPipeComponent} from './angular-pipe/angular-pipe.component';



export const angularRoutes: Routes = [
  {
    path: '',
    component: AngularComponent,
    children: [
      {
        path: 'pipe',
        component: AngularPipeComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(angularRoutes)
  ],
  declarations: [
    AngularComponent,
    AngularPipeComponent
  ],
})
export class AngularaOwnModule { }
