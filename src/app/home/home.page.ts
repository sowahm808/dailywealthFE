import { Component } from '@angular/core';
import {
  IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonIcon, IonCard,
  IonCardHeader, IonCardTitle, IonCardContent, IonRow, IonCol, IonMenu,
  IonMenuToggle, IonList, IonItem, IonLabel, IonButtons, IonMenuButton,
  IonApp, IonRouterOutlet
} from '@ionic/angular/standalone';
import { FooterComponent } from '../components/footer/footer.component';
import { HeaderComponent } from '../components/header/header.component';
import { SidenavComponent } from "../components/sidenav/sidenav.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    IonContent, IonGrid, IonCard, IonCardHeader, IonCardTitle, IonCardContent,
    IonRow, IonCol, IonIcon, FooterComponent, HeaderComponent, IonMenu,
    IonMenuToggle, IonList, IonItem, IonLabel, IonButtons, IonMenuButton,
    IonToolbar, IonHeader, IonTitle, IonApp, SidenavComponent, IonRouterOutlet,RouterModule
  ],
})
export class HomePage {
  constructor() {}
  tiles = [
    { title: 'Content Management', url: '/content-management', icon: 'document-text' },
    { title: 'Course Management', url: '/course-management', icon: 'book' },
    // Define other tiles as needed
  ];
}
