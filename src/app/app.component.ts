import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { HomePage } from './home/home.page';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet, RouterModule,HomePage, HeaderComponent, FooterComponent,SidenavComponent],
})
export class AppComponent {
  constructor() {}
  public appPages = [
    { title: 'Dashboard', url: '/dashboard', icon: 'home' },
    { title: 'Content Management', url: '/content-management', icon: 'document-text' },
    { title: 'Course Management', url: '/course-management', icon: 'book' },
    // Add other pages as needed
  ];
}
