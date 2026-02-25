import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Observablecomponent } from './observablecomponent';

describe('Observablecomponent', () => {
  let component: Observablecomponent;
  let fixture: ComponentFixture<Observablecomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Observablecomponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Observablecomponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
