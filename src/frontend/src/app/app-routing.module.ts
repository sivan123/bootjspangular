import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabledemoComponent } from './tabledemo/tabledemo.component';

const routes: Routes = [{ path: '', component: TabledemoComponent },{ path: 'angular', component: TabledemoComponent}];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
