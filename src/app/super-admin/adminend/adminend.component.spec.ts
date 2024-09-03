import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminendComponent } from './adminend.component';

describe('AdminendComponent', () => {
  let component: AdminendComponent;
  let fixture: ComponentFixture<AdminendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminendComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
