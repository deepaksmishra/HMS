import { Component, OnInit } from '@angular/core';
import{TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-top-header',
  templateUrl: './top-header.component.html',
  styleUrls: ['./top-header.component.css']
})
export class TopHeaderComponent implements OnInit {

  constructor(public translate:TranslateService){

    translate.addLangs(['english','french'])
    translate.setDefaultLang('english')
    const browserLang = translate.getBrowserLang();
    translate.use (browserLang?.match(/english|french/)? browserLang:'english');
  }

  ngOnInit(): void {
  }

}
