import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { LanguageToggleComponent } from './components/language-toggle/language-toggle.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    NotfoundComponent,
    SpinnerComponent,
    LanguageToggleComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    TranslateModule
  ],
  exports: [
    LanguageToggleComponent,
    TranslateModule,
    CardComponent
  ]
})
export class SharedModule { }
