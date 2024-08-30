import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';


@Component({
  selector: 'app-testimony',
  templateUrl: './testimony.component.html',
  styleUrls: ['./testimony.component.css'],
})
export class TestimonyComponent implements OnInit {

  logos = [
    { src: 'assets/hascol.png', alt: 'Company 1' },
    { src: 'assets/sharifMills.png', alt: 'Company 2' },
    { src: 'assets/faisalBank.png', alt: 'Company 3' },
    { src: 'assets/CMA-CGM.png', alt: 'Company 4' },
    { src: 'assets/bop.png', alt: 'Company 5' },
    { src: 'assets/hi-tech.png', alt: 'Company 6' },
  ];

  slides: { text: string }[] = [
    { text: 'Welcome to our law firm! Welcome to our law firm! Welcome to our law firm! Welcome to our law firm!' },
    { text: 'We provide expert legal advice.' },
    { text: 'Your success is our priority.' },
    { text: 'Contact us for a consultation today.' }
  ];
  currentIndex: number = 0;

  ngOnInit(): void {
    this.startSlideshow();
  }

  startSlideshow(): void {
    setInterval(() => {
      this.nextSlide();
    }, 5000); // Change slide every 5 seconds
  }

  prevSlide(): void {
    this.currentIndex = (this.currentIndex === 0) ? this.slides.length - 1 : this.currentIndex - 1;
  }

  nextSlide(): void {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
  }

  public revealedSections = new Set<number>();

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
