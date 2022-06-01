import { Component, OnInit } from '@angular/core';
import { DownloadFileService } from '../download-file.service';

@Component({
  selector: 'app-pdfview',
  templateUrl: './pdfview.component.html',
  styleUrls: ['./pdfview.component.css']
})
export class PdfviewComponent implements OnInit {

  constructor(private downloadFileService:DownloadFileService) {  }

  ngOnInit(): void {
  } 
  
  
  public Downloadfile():void{
    

    this.downloadFileService.Downloadfile().subscribe(response=>{


      let filename=response.headers.get('content-disposition')
      ?.split(';')[1].split('=')[1]
      let blob:Blob=response.body as Blob;
      let x = document.createElement('a');
      
      x.download='Excel report';
      x.href=window.URL.createObjectURL(blob);
      x.click()
    }
      )

  }

}
