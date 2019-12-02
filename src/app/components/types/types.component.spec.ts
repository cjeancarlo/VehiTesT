import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TypesComponent } from './types.component';
import { MatListModule, MatIconModule } from '@angular/material';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TrafficMeisterService } from '@app/services/traffic-meister.service';

describe('TypesComponent', () => {
  let component: TypesComponent;
  let fixture: ComponentFixture<TypesComponent>;
  let service: TrafficMeisterService;
  // let el: DebugElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TypesComponent],
      imports: [MatListModule, MatIconModule, HttpClientTestingModule],
      providers: [
        TrafficMeisterService
      ],
    }).compileComponents()
      .then(() => {
        // create component and test fixture
        fixture = TestBed.createComponent(TypesComponent);
        // get test component from the fixture
        component = fixture.componentInstance;
        // UserService provided to the TestBed
        service = TestBed.get(TrafficMeisterService);
        //  get the "a" element by CSS selector (e.g., by class name)
        fixture.detectChanges();
      });
  }));

  it('should create', (() => {
    expect(component).toBeTruthy();
  }));

});
