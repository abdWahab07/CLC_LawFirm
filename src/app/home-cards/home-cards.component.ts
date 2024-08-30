import { Component, AfterViewInit, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-home-cards',
  templateUrl: './home-cards.component.html',
  styleUrls: ['./home-cards.component.css']
})
export class HomeCardsComponent implements AfterViewInit {
  @ViewChildren('card') cards!: QueryList<ElementRef>;

  // Array of card data
   cardList = [
    {
      img: 'assets/card1.jpg',
      title: 'We, The PEOPLE',
      text: 'We are Realistic, Inquisitive and Receptive – Above all, we are down to earth when it comes to serving our clients. We at CLC, are always working for your success.'
    },
    {
      img: 'assets/photorealistic-law-environment.jpg',
      title: 'Knowledge Sharing',
      text: 'We share our insight, our approach and experience with our clients to help them realize their goals. Our knowledge, combined with our experience and expertise is what makes us different.'
    },
    {
      img: 'assets/card3.jpg',
      title: 'Our Methodology',
      text: 'It is all about you; our experience and instincts help us build bespoke offerings and solutions for you. For us, every case and every advice, be it corporate or individual, is equally important.'
    }
  ];

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

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.checkScroll();
  }

  private checkScroll(): void {
    const elements = document.querySelectorAll('.heading-bg');
    const windowHeight = window.innerHeight;

    elements.forEach((element: any) => {
      const positionFromTop = element.getBoundingClientRect().top;
      if (positionFromTop - windowHeight <= 0) {
        element.classList.add('fade-in');
      }
    });
  }
}
