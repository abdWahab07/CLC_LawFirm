import { Component } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent {
  meetings = [
    {
      day: '09',
      month: 'apr',
      title: 'PRO-08235 DeskOpe. Website',
      time: '12:00 to 13.30 Hrs',
      description: 'The expand module has been removed from the project scope. Data migration is now included, and the session timeout has been increased to 30 minutes.',
      dateClass: 'widget-49-date-primary',
      buttonClass: 'btn-flash-border-primary'
    },
    {
      day: '13',
      month: 'apr',
      title: 'PRO-08235 Lexa Corp.',
      time: '12:00 to 13.30 Hrs',
      description: 'The scheming module is removed from the deliverables. The app design contract has been confirmed, and the client has requested the invoice to be sent.',
      dateClass: 'widget-49-date-warning',
      buttonClass: 'btn-flash-border-warning'
    },
    {
      day: '22',
      month: 'apr',
      title: 'PRO-027865 Opera module',
      time: '12:00 to 13.30 Hrs',
      description: 'The project scope has been revised and updated. The timeline has been changed, and we have received approval to start the wireframe.',
      dateClass: 'widget-49-date-success',
      buttonClass: 'btn-flash-border-success'
    }
  ];
}
