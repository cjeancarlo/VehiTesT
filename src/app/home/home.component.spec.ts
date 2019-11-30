import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { HeaderComponent } from '../components/header/header.component';
import { TypesComponent } from '../components/types/types.component';
import { BrandsComponent } from '../components/brands/brands.component';
import { ColorsComponent } from '../components/colors/colors.component';
import { GridComponent } from '../components/grid/grid.component';
import { FooterComponent } from '../components/footer/footer.component';
import { LoadingComponent } from '../components/loading/loading.component';
import { MatToolbarModule, MatListModule, MatIcon, MatIconModule, MatCardModule, MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material';
import { LottieAnimationViewModule } from 'ng-lottie';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AboutComponent } from '../components/dialog/about/about.component';
import { DialogComponent } from '../components/dialog/dialog.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent, HeaderComponent, TypesComponent,
        BrandsComponent, ColorsComponent, GridComponent,
        FooterComponent, LoadingComponent, DialogComponent],
      imports: [MatToolbarModule, MatListModule, MatIconModule, MatCardModule,
        LottieAnimationViewModule, HttpClientTestingModule, MatDialogModule],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} },
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
