import { Component } from '@angular/core'

@Component({
  selector: 'events-list',
  templateUrl: './events-list.component.html' 
})

export class EventsListComponent {
  event = {
    id: 1,
    name: 'Angular Event',
    date: '27/09/2019',
    time: '10:00 am',
    price: 599.99,
    imageUrl: 'assets/images/angularconnect-shield.png',
    location: {
      address: 'Av. da Libderdade',
      city: 'Lisbon',
      country: 'Portugal'
    }
  }
}
