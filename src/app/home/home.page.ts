import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/angular/standalone';
import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton],
})
export class HomePage {
  constructor() {}

  async getCurrentPosition() {
    try {
      const coordinates = await Geolocation.getCurrentPosition();
      console.log('Current position:', coordinates);

      // Uncomment the following lines to display the position
      alert(`Lat: ${coordinates.coords.latitude}, Lon: ${coordinates.coords.longitude}`);
    } catch (error) {
      console.error('Location permission denied', error);
      alert('Error getting location. Please check your device settings.');
    }
  }
}