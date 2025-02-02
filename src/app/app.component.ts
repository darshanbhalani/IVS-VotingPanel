import { Component } from '@angular/core';
import { LayoutComponent } from './components/layout/layout.component';
import { LayoutService } from './services/layout.service';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { GridModule } from '@progress/kendo-angular-grid';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LayoutComponent,CommonModule,PageNotFoundComponent,GridModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'IVS';

  pageNotFound$ = this.layoutService.pageNotFound$;

  constructor(private layoutService:LayoutService){}
}
