import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareModule } from './share.module';
import { HomeComponent } from '../home/home.component';
import { TypesComponent } from '../components/types/types.component';
import { BrandsComponent } from '../components/brands/brands.component';
import { ColorsComponent } from '../components/colors/colors.component';
import { GridComponent } from '../components/grid/grid.component';
import { LoadingComponent } from '../components/loading/loading.component';
import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';
import { DialogComponent } from '../components/dialog/dialog.component';
import { AboutComponent } from '../components/dialog/about/about.component';
import { HomeRoutingModule } from '../home/home-routing.module';



@NgModule({
  declarations: [
    TypesComponent,
    HomeComponent,
    BrandsComponent,
    ColorsComponent,
    GridComponent,
    LoadingComponent,
    HeaderComponent,
    FooterComponent,
    DialogComponent,
    AboutComponent],
  imports: [
    CommonModule,
    ShareModule,
    HomeRoutingModule
  ],
  exports: [
    HomeComponent,
    BrandsComponent,
    ColorsComponent,
    GridComponent,
    LoadingComponent,
    HeaderComponent,
    FooterComponent,
    DialogComponent,
    AboutComponent
  ],
  entryComponents: [
    AboutComponent
  ],
})
export class HomeModule { }
