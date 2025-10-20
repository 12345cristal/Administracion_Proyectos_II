import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactoInfo } from './contacto-info';

describe('ContactoInfo', () => {
  let component: ContactoInfo;
  let fixture: ComponentFixture<ContactoInfo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactoInfo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactoInfo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
