import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TypesComponent } from './components/types/types.component';
import { HomeComponent } from './home/home.component';
import { FilterPipe } from './pipes/filter.pipe';

import { MatInputModule } from '@angular/material/input';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

import {MatCardModule} from '@angular/material/card';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


import { MatIconModule } from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import {MatMenuModule } from '@angular/material/menu';
import { HttpClientModule } from '@angular/common/http';
import { BrandsComponent } from './components/brands/brands.component';
import { ColorsComponent } from './components/colors/colors.component';

import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    TypesComponent,
    HomeComponent,
    FilterPipe,
    BrandsComponent,
    ColorsComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule,
    HttpClientModule,
    MatIconModule,
    MatSelectModule,
    MatListModule,
    MatInputModule,
    MatGridListModule,
    MatAutocompleteModule,
    MatCardModule,
    MatButtonModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
