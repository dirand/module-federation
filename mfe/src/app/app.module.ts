import { SharedModule } from './../@shared/shared-lib/shared.module';
import { PagesModule } from './@pages/pages.module';
import { ApplicationRef, Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { createCustomElement } from '@angular/elements';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './@store/counter.reducer';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    SharedModule,
    StoreModule.forRoot({ count: counterReducer }, {}),
  ],
  providers: [],
  bootstrap: [],
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap(appRef: ApplicationRef) {
    const app = createCustomElement(AppComponent, {
      injector: this.injector,
    });
    customElements.define('mfe-app', app);
    appRef.bootstrap(AppComponent);
  }
}
