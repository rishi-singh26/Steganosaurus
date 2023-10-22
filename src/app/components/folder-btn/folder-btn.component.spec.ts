import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FolderBtnComponent } from './folder-btn.component';

describe('FolderBtnComponent', () => {
  let component: FolderBtnComponent;
  let fixture: ComponentFixture<FolderBtnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FolderBtnComponent]
    });
    fixture = TestBed.createComponent(FolderBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
