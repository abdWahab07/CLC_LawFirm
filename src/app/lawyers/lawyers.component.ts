import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-lawyers',
  templateUrl: './lawyers.component.html',
  styleUrls: ['./lawyers.component.css'], // Ensure the CSS file is correctly referenced
})
export class LawyersComponent implements OnInit {
  public lawyers = [
    {
      image: '/assets/wajahat_ali.jpg',
      name: 'Wajahat Ali',
      designation: 'Advocate High Court',
      instagram: 'https://instagram.com/lawyer1',
      facebook: 'https://facebook.com/lawyer1',
      linkedin: 'https://linkedin.com/in/lawyer1',
      description:
        'Wajahat Ali obtained his law degree in 2009 and initially worked with leading law offices of the country. Wajahat represents and advises clients in a range of contentious and non-contentious matters. In 2019, he played a major role in successfully defending legislation relating to validation of actions undertaken by Punjab Revenue Authority; the case involved revenue of billions of rupees for the provincial government.'
    },
    {
      image: '/assets/ali_raza.jpg',
      name: 'S. Ali Raza Shah',
      designation: 'Advocate High Court',
      instagram: 'https://instagram.com/lawyer2',
      facebook: 'https://facebook.com/lawyer2',
      linkedin: 'https://linkedin.com/in/lawyer2',
      description:
        'primarily in the areas of criminal justice system; urban planning and development; youth and sports; public private partnership prospects; and environment and wildlife. In recognition of his successful legal reforms work in the Punjab Solicitor’s Department, UNDP selected him to represent Pakistan in Young Leaders in Governance Program at Bangkok, Thailand.',
    },
    {
      image: '/assets/malik-nousherwan.jpeg',
      name: 'Malik Nousherwan Awan',
      designation: 'Advocate High Court',
      instagram: 'https://instagram.com/lawyer2',
      facebook: 'https://facebook.com/lawyer2',
      linkedin: 'https://linkedin.com/in/lawyer2',
      description:
        'primarily in the areas of criminal justice system; urban planning and development; youth and sports; public private partnership prospects; and environment and wildlife. In recognition of his successful legal reforms work in the Punjab Solicitor’s Department, UNDP selected him to represent Pakistan in Young Leaders in Governance Program at Bangkok, Thailand.',
    },

    // Add more lawyer objects as needed
  ];

  // Declare a boolean variable
  public timerFlag: boolean = false;

  ngOnInit(): void {
    // Create an observable that emits after 5 seconds
    interval(2000).pipe(
      take(1) // Emit only once after 5 seconds
    ).subscribe(() => {
      this.timerFlag = true;
      this.onTimerTick();
    });
  }

  onTimerTick() {
    console.log('Timer ticked!');
    // Add any other actions you want to perform after 5 seconds
  }

  toggleCard(event: Event) {
    const card = (event.currentTarget as HTMLElement).closest('.card');
    card?.classList.toggle('open');
  }
}
