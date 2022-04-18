import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {MultiTranslateHttpLoader} from "ngx-translate-multi-http-loader";


// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
    return new MultiTranslateHttpLoader(http, [
        {prefix: "./assets/translate/header/", suffix: ".json"},
        {prefix: "./assets/translate/shared/", suffix: ".json"},
    ]);
}

@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        })
    ],
    exports :[
      HttpClientModule,
      TranslateModule
    ]
    
})
export class AppModule { }