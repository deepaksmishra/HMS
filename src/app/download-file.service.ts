import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DownloadFileService {

  constructor(private httpClient:HttpClient) { }

 public Downloadfile()
  {
    return this.httpClient.get("https://localhost:7070/api/Files/ExcelFile",{observe:'response',responseType:'blob'})

  }

  public Downloadpdf()
  {
    return this.httpClient.get("https://localhost:7070/api/Files/pdf2",{observe:'response',responseType:'blob'})

  }
}
