import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { SharedModule } from '../sharedModule/SharedModule';
import { ProductsService } from '../../Services/isLogged.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { EmpAddEditComponent } from '../emp-add-edit/emp-add-edit.component';
import { PassStrengthComponent } from '../pass-strength/pass-strength.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterModule,
    SharedModule,
    HttpClientModule,
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    PassStrengthComponent,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  providers: [ProductsService],
})
export class NavbarComponent {
  lang: string = '';
  show: boolean | null = null;

  constructor(
    private translateService: TranslateService,
    private prodServ: ProductsService,
    private _dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.lang = localStorage.getItem('lang') || 'en';
    this.prodServ.getisLoggedStatus().subscribe((data: boolean) => {
      this.show = data;
    });
  }

  ChangeLang(lang: any) {
    const selectedLanguage = lang.target.value;
    localStorage.setItem('lang', selectedLanguage);

    this.translateService?.use(selectedLanguage);
    window.location.reload();
  }
}
