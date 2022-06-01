import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { PdfviewsComponent } from './pdfviews/pdfviews.component';


const routes: Routes = [{'path': 'files', children:[

{'path': '', component:PdfviewsComponent},]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilesRoutingModule { }
