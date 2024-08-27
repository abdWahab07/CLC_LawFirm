// home-cards.component.ts
import { Component, AfterViewInit, ElementRef, ViewChildren, QueryList } from '@angular/core';

@Component({
  selector: 'app-home-cards',
  templateUrl: './home-cards.component.html',
  styleUrls: ['./home-cards.component.css']
})
export class HomeCardsComponent implements AfterViewInit {
  @ViewChildren('card') cards!: QueryList<ElementRef>;

  constructor() {}

  ngAfterViewInit() {
    this.cards.forEach((card) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
          }
        },
        { threshold: 0.1 }
      );

      observer.observe(card.nativeElement);
    });
  }
}
