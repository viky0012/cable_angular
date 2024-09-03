import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CableoperatorsComponent } from './cableoperators.component';

describe('CableoperatorsComponent', () => {
  let component: CableoperatorsComponent;
  let fixture: ComponentFixture<CableoperatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CableoperatorsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CableoperatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
