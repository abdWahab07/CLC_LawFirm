import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-firm',
  templateUrl: './firm.component.html',
  styleUrls: ['./firm.component.css'],
})
export class FirmComponent {
  public about = [
    {
      heading: 'Overview',
      content:
        'Common Law Chambers (Registered) (CLC) is a dynamic law firm with a well-established office complex and experienced lawyers based in Pakistan. Since its establishment in 2008, CLC has evolved into a prominent professional service firm, serving a diverse clientele with expertise in transaction advisory, complete judicial and administrative representation, and policy solutions.',
    },
    {
      heading: 'Expertise and Services',
      content:
        'CLC delivers an extensive suite of legal services, including transaction advisory, representation before judicial and administrative bodies, and policy consultancy. Our firm caters to clients from various sectors, including construction, energy, banking, pharmaceuticals, media, technology, and telecom, among others, spanning countries such as China, the UK, UAE, France, Singapore, Qatar, Saudi Arabia, India, the USA, Turkey, and Pakistan.',
    },
    {
      heading: 'Client-Centric Approach',
      content:
        'At CLC, we prioritize client service through a partner-driven, professional, and confidential approach. Our multidisciplinary team offers tailored solutions to a broad spectrum of clients, including multinational corporations, energy groups, telecommunications networks, technology hubs, media houses, pharmaceutical groups, NGOs, government entities, regulatory authorities, and high-net-worth individuals. We focus on delivering efficient legal support and viable solutions that align with our clients business needs, especially in today’s complex global economy.',
    },
    {
      heading: 'Local Expertise',
      content:
        'In Pakistan, CLC’s partners and senior associates have significantly contributed to drafting legislative and statutory instruments, conceptualizing administrative rules, and facilitating complex financial transactions. We have advised high-level government authorities and political leaders on key policy and constitutional matters and have been actively involved in judicial training and legal education.',
    },
    {
      heading: 'Operational Excellence',
      content:
        'CLC operates with a modern approach while maintaining a deep understanding of traditional legal practices. Our firm is distinguished by its unique organizational structure, which fosters a flexible working environment and attracts top legal talent from various jurisdictions.',
    },
    {
      heading: 'Reputation',
      content:
        'Our lawyers are consistently recognized by clients for their reliability, diligence, thoroughness, confidentiality, and practicality. The CLC team is committed to building long-term professional relationships.',
    },
  ];

  // Holds a list of sections that have been revealed
  public revealedSections = new Set<number>();

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.checkScroll();
  }

  private checkScroll(): void {
    const elements = document.querySelectorAll('.overview, .heading-bg');
    const firmElement = document.querySelector('.firm');
    const windowHeight = window.innerHeight;

    if (firmElement) {
      const firmPosition = firmElement.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (firmPosition - windowHeight <= 0) {
        firmElement.classList.add('animate-in');
      }
    }

    elements.forEach((element: any) => {
      const positionFromTop = element.getBoundingClientRect().top;

      if (positionFromTop - windowHeight <= 0) {
        element.classList.add('fade-in');
      }
    });
  }
}
