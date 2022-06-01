import { Component, OnInit } from '@angular/core';
import { DownloadFileService } from 'src/app/download-file.service';

@Component({
  selector: 'app-aboutus-page',
  templateUrl: './aboutus-page.component.html',
  styleUrls: ['./aboutus-page.component.css']
})
export class AboutusPageComponent implements OnInit {

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
  public Downloadpdf():void{
    

    this.downloadFileService.Downloadpdf().subscribe(response=>{


      let filename=response.headers.get('content-disposition')
      ?.split(';')[1].split('=')[1]
      let blob:Blob=response.body as Blob;
      let x = document.createElement('a');
      
      x.download='pdfreport';
      x.href=window.URL.createObjectURL(blob);
      x.click()
    }
      )

  }

  public viewpdf():void{
    

    this.downloadFileService.Downloadpdf().subscribe(response=>{


      let filename=response.headers.get('content-disposition')
      ?.split(';')[1].split('=')[1]
      let blob:Blob=response.body as Blob;
      let x = document.createElement('a');
     
      //x.download='pdfreport';
      x.href=window.URL.createObjectURL(blob);
      window.open(x.href)
      x.click()
    }
      )

  }

}
