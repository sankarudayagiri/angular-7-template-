import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VedaComponent } from './veda.component';

describe('VedaComponent', () => {
  let component: VedaComponent;
  let fixture: ComponentFixture<VedaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VedaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VedaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
