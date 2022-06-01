import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfviewNewComponent } from './pdfview-new.component';

describe('PdfviewNewComponent', () => {
  let component: PdfviewNewComponent;
  let fixture: ComponentFixture<PdfviewNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdfviewNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PdfviewNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
