import { SecondPageComponent } from './second-page/second-page.component';
import { DefaultComponent } from './default/default.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../@layout/layout.component';

const defaultRoute = '/pages/select-demo';
const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'second-page',
        component: SecondPageComponent,
      },
      {
        path: 'default',
        component: DefaultComponent,
      },
      {
        path: '',
        component: DefaultComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
