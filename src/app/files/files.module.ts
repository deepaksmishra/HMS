import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilesRoutingModule } from './files-routing.module';
import { PdfviewsComponent } from './pdfviews/pdfviews.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
console.log("hi");

@NgModule({
  declarations: [
    PdfviewsComponent
  ],
  imports: [
    CommonModule,
    FilesRoutingModule,
    PdfViewerModule
  ]
})
export class FilesModule { }
