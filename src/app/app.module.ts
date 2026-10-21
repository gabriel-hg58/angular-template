import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { LayoutsModule } from './layouts/layouts.module';
import { AppRoutingModule } from './routes/app-routing.module';
import { AuthenticationModule } from './views/authentication/authentication.module';
import { DashboardModule } from './views/dashboard/dashboard.module';
import { ErrorsModule } from './views/errors/errors.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ComponentsModule,
    LayoutsModule,
    AuthenticationModule,
    DashboardModule,
    ErrorsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
