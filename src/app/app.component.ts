import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {
  constructor() {
    this.getCurrentPosition();
  }

  async getCurrentPosition() {
    // Request permission to access device location
    const hasPermission = await Geolocation.requestPermissions();
    if (hasPermission) {
      // Get current position
      const coordinates = await Geolocation.getCurrentPosition();
      console.log('Current position:', coordinates);

      // Uncomment the following lines to display the position
      alert(`Lat: ${coordinates.coords.latitude}, Lon: ${coordinates.coords.longitude}`);
    } else {
      console.error('Location permission denied');
    }
  }
}
