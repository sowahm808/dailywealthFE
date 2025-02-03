import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonIcon,
  IonMenu,
  IonList,
  IonItem,
  IonLabel,
  IonRouterLink,
  IonMenuToggle } from '@ionic/angular/standalone';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  imports: [
    IonContent,
    IonIcon,
    IonMenu,
    IonList,
    IonItem,
    IonLabel,
    IonMenu,
    IonToolbar,
    IonHeader,
    IonTitle,
    IonContent,
    IonIcon,
    IonRouterLink,
    RouterModule,
    HeaderComponent,
    FooterComponent,
    IonMenuToggle,
  ],
})
export class SidenavComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
