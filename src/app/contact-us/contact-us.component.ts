import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})

export class ContactUsComponent {
  clc = "assets/cls.jpeg"
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
