import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ShopComponent } from './shop/shop.component';


const routes: Routes = [
  {path: 'home', component: AppComponent},
  {path: 'about', component: AboutMeComponent},
  {path: 'shop', component: ShopComponent},
  {path: 'gallery', component: GalleryComponent},
  {path: 'contact', component: ContactComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [

  AppComponent,
  AboutMeComponent,
  ShopComponent,
  GalleryComponent,
  ContactComponent

]
