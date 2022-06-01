import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfviewsComponent } from './pdfviews.component';

describe('PdfviewsComponent', () => {
  let component: PdfviewsComponent;
  let fixture: ComponentFixture<PdfviewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdfviewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PdfviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
