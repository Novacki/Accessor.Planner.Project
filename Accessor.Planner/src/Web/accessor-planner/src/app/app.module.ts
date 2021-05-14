
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { ConfigComponent } from './config/config.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './modules/home/home.module';
import { MenuModule } from './modules/menu/menu.module';
import { SolicitationService } from './modules/solicitation/services/solicitation.service';


@NgModule({
  declarations: [
    AppComponent,
    ConfigComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule,
    HomeModule,
    MenuModule,
    HttpClientModule,
    AppRoutingModule,       
  ],
  providers: [SolicitationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
