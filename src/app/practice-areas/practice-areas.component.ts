import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-practice-areas',
  templateUrl: './practice-areas.component.html',
  styleUrls: ['./practice-areas.component.css'], // Corrected from styleUrl to styleUrls
})
export class PracticeAreasComponent implements OnInit {
  public about = [
    {
      heading: 'Constitutional Law Practice',
      content:
        'CLC team has vast academic and practical litigation experience of handling constitutional law petitions. In major cases wherein, law points have been interpreted, partners had played a key role. The firm members have also been amicus to the Higher Courts and authored academic papers on key constitutional points at international conferences and premier law schools. ',
    },
    {
      heading: 'Corporate Practice',
      content:
        'Our well-respected corporate team is the largest practice in the Firm and our highly skilled professional have experience advising on mergers, acquisitions, restructuring, private equity, joint venture, foreign investment, investment funds, company commercial, intellectual property, technology, media and telecommunications. The Firm advises both domestic and international clients on all aspects of their activities including integrated services.  ',
    },
    {
      heading: 'Energy Laws Practice',
      content:
        'Our team has been involved in preparation of comprehensive legal feasibility study for restructuring, revamping and transformation of an electricity department. This work involved thorough legal review of entire energy sector of the country and complete administrative practices of NEPRA and energy departments. In addition, the lawyers have also supported a major Independent Power Project in dealing with the Government. CLC has also advised on Energy Purchase Agreements, reviewed facility agreements and developed regulatory frameworks for clients desirous of constructing coal, wind and small hydel based projects.',
    },
    {
      heading: 'Regulatory Compliance',
      content:
        'This practice includes monthly, quarterly and annual set of compliances for corporations and notfor profit entities. The regulatory compliance relates to filings with labour authorities, environment department, municipal government, developmental authorities, revenue hierarchies, and several other statutory bodies. The regulatory compliance requires extensive understanding of administrative setups and a certain skill-set to deal with enforcement officials. Our firm lawyers successfully deal with compliance matters of individuals and entities on routine basis. ',
    },
    {
      heading: 'Food and Drug Laws Practice',
      content:
        'This practice includes knowledge of laws as they apply to restaurants, hotels and pharmaceutical industry. Our firm has successfully advised local and foreign pharmaceutical groups in regards to their drug registration and compliance matters with DRAP. CLC lawyers have also dealt with health sector establishments and assisted in securing licenses for specialized medical equipments and import of drugs to Pakistan. In addition, CLC has also assisted several hotels and restaurants in dealing with compliance regime of provincial food authorities.',
    },
    {
      heading: 'Finance Practice',
      content:
        'The practice includes projects, banking; corporate debt restructuring, bankruptcy and recovery proceedings; securitization, derivatives and structured products. The Firm acts for banks, financial institutions and corporates. We have assisted many of these institutions in planning their strategy, providing general advisory services and work with them on a continuous basis on transactions from time to time. Our firm has meaningfully helped international banks in making recoveries from Pakistan based defaulters. In addition, CLC has also been advising a leading microfinance bank to address its operational matters.',
    },
    {
      heading: 'Civil Law Practice',
      content:
        'CLC lawyers have dedicated expertise in civil laws of Pakistan including but not limited to contractual disputes, family laws, rent and property matters. The Private Client practice pertaining to civil laws is dedicated to servicing promoter families and high net worth individuals as they develop policies, frameworks and structures for the administration of businesses, the management of wealth and for succession planning. This includes preparation of wills, trusts, family governance constitutions and resolution of family conflicts. We combine an in-depth knowledge of the Pakistan market with experience in corporate governance to assist private clients with rapidly growing Pakistan’s economy.',
    },
    {
      heading: 'Specialized Industry Practice',
      content:
        'The need for specialized industry practice is generally scattered in Pakistan. Over years, CLC has developed expertise in dealing with certain sectors that have dedicated scheme of laws and rules. The senior partners on continuous basis deals with Sugar Industry, Automobile Sector, Print and Electronic Media Houses, Specialized Transaction Advisory Work, Telecommunication and IT Service Providers, Software Houses and Large-Scale Construction Projects.    ',
    },
    {
      heading: 'Accountability Laws Practice',
      content:
        'The anti-corruption body in Pakistan has become robust in recent years. This has led to increase in prosecution of white-collar crimes. The partners of CLC have been advising senior politicians and businesses that are dealing with National Accountability Bureau and other anti-corruption bodies in the country. The senior partners have substantial experience of working for the anticorruption entity as well. ',
    },
    {
      heading: 'Criminal Law Practice',
      content:
        'CLC has a criminal law practice from the trial level to appellate forums. A senior partner has successfully handled complex murder trials, terrorism cases and kidnapping/abduction matters. Moreover, CLC is also managing cases of politically exposed persons at appellate and trial level.',
    },
    {
      heading: 'Competition Law Practice',
      content:
        'Competition legislation is still an evolving area in Pakistan. The Firm is positioned at the very cutting edge of developments, with expertise in all of the emerging competition rulings that are relevant to our clients. Our exclusive group of lawyers, all well-recognized experts to this field, handle complex competition law matters involving innovative solution-oriented structuring, interaction with the regulator and economists with a multidisciplinary approach and also give advice on the full range of competition matters including, merger control, enforcement (cartel investigations and abuse of dominance) and competition audit as well as compliance. ',
    },
  ];

  public visibleAreas: any[] = [];
  private initialVisibleCount = 3; // Number of cards to show initially
  private incrementCount = 3; // Number of cards to show on each "See More" click
  public showSeeMoreButton = true;

  ngOnInit(): void {
    this.visibleAreas = this.about.slice(0, this.initialVisibleCount);
    this.checkScroll(); // Run once on init in case the element is already in view
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.checkScroll();
  }

  private checkScroll(): void {
    const elements = document.querySelectorAll('.heading-bg, .card, .card-body');
    const windowHeight = window.innerHeight;
    const firmElement = document.querySelector('.firm');

    if (firmElement) {
      const firmPosition = firmElement.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (firmPosition - windowHeight <= 0) {
        firmElement.classList.add('animate-in');
      }
    }

    elements.forEach((element: Element) => {
      const htmlElement = element as HTMLElement; // Cast Element to HTMLElement
      const positionFromTop = htmlElement.getBoundingClientRect().top;

      if (positionFromTop - windowHeight <= 0) {
        htmlElement.classList.add('fade-in');
      }
    });
  }

  showMore(): void {
    const currentLength = this.visibleAreas.length;
    const nextVisibleAreas = this.about.slice(0, currentLength + this.incrementCount);
    this.visibleAreas = nextVisibleAreas;

    // Hide the button if all cards are visible
    if (this.visibleAreas.length >= this.about.length) {
      this.showSeeMoreButton = false;
    }
  }
}
