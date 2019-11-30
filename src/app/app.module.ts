import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TypesComponent } from './components/types/types.component';
import { HomeComponent } from './home/home.component';


import { MatInputModule } from '@angular/material/input';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


import { MatIconModule } from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule } from '@angular/material/menu';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { HttpClientModule } from '@angular/common/http';
import { BrandsComponent } from './components/brands/brands.component';
import { ColorsComponent } from './components/colors/colors.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { GridComponent } from './components/grid/grid.component';

import { LottieAnimationViewModule } from 'ng-lottie';
import { LoadingComponent } from './components/loading/loading.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { AboutComponent } from './components/dialog/about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    TypesComponent,
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
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule,
    HttpClientModule,
    LottieAnimationViewModule.forRoot(),
    MatIconModule,
    MatSelectModule,
    MatDialogModule,
    MatListModule,
    MatInputModule,
    MatGridListModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    MatCardModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule
  ],
  entryComponents: [
    AboutComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
