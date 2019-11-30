
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypesComponent } from './types.component';
import { MatListModule, MatIconModule } from '@angular/material';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('TypesComponent', () => {
  let component: TypesComponent;
  let fixture: ComponentFixture<TypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypesComponent ],
      imports: [ MatListModule, MatIconModule, HttpClientTestingModule ]
    })
    .compileComponents();
  }));


  

  beforeEach(() => {
    fixture = TestBed.createComponent(TypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should have a list of vehicules type', async(
  //   () => {
  //     fixture.whenStable().then(() => {
  //       fixture.detectChanges();
  //       expect(component.trafficTypes.length).toEqual(3); //true
  //     });

  //   }

  // ) );
});
