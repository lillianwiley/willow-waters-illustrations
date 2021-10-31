import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutMeComponent } from './component/about-me/about-me.component';
import { ContactComponent } from './component/contact/contact.component';
import { GalleryComponent } from './component/gallery/gallery.component';
import { ShopComponent } from './component/shop/shop.component';
import { CartComponent } from './component/cart/cart.component';
import { HomeComponent } from './component/home/home.component';


const routes: Routes = [

  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutMeComponent},
  {path: 'shop', component: ShopComponent},
  {path: 'gallery', component: GalleryComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'cart', component: CartComponent},
  {path: '', redirectTo:'/home', pathMatch: 'full'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [

  AboutMeComponent,
  ShopComponent,
  HomeComponent,
  GalleryComponent,
  ContactComponent,
  CartComponent

]
