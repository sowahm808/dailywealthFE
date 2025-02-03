import { Component, OnInit } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonGrid,
  IonIcon,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
  IonRow,
  IonCol,
  IonButton,
  IonRouterOutlet,
  IonRouterLink,
} from '@ionic/angular/standalone';
import { SidenavComponent } from "../components/sidenav/sidenav.component";

@Component({
  selector: 'app-content-management',
  templateUrl: './content-management.component.html',
  styleUrls: ['./content-management.component.scss'],
  imports: [
    IonContent,
    IonGrid,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonRow,
    IonCol,
    IonIcon,
    SidenavComponent
],
})
export class ContentManagementComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
