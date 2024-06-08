import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../pages/navbar/navbar.component';
import { TranslateService } from '@ngx-translate/core';
import { SharedModule } from '../pages/sharedModule/SharedModule';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { EmpAddEditComponent } from '../pages/emp-add-edit/emp-add-edit.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    RouterModule,
    SharedModule,
    MatDialogModule,
  ],
  providers: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'itSparkTask';
  constructor(private translateService: TranslateService) {
    this.translateService.setDefaultLang('en');
    this.translateService.use(localStorage.getItem('lang') || 'en');
  }
}
