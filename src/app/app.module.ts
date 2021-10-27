import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon'
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from '../app/shared/header/header.component';
import { HomeComponent } from './component/home/home.component';
import { FooterComponent } from './shared/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { CartComponent } from './component/cart/cart.component';
import { ProductComponent } from './component/product/product.component';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { SidenavListComponent } from './shared/sidenav-list/sidenav-list.component'
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';

//Where we register everything
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    routingComponents,
    CartComponent,
    ProductComponent,
    SidenavListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    FormsModule,
    MatIconModule,
    HttpClientModule,
    FontAwesomeModule,
    MatToolbarModule,
    MatButtonModule,
    MatListModule,
    MatMenuModule,
    MatTabsModule
  ],
  exports: [
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatMenuModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
