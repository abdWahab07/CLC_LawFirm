import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-lawyers',
  templateUrl: './lawyers.component.html',
  styleUrls: ['./lawyers.component.css'],
})
export class LawyersComponent implements OnInit {
  public lawyers = [
    {
      image: 'assets/wajahat_ali.jpg',
      name: 'Wajahat Ali',
      designation: 'Partner',
      instagram: 'https://instagram.com/lawyer1',
      facebook: 'https://facebook.com/lawyer1',
      linkedin: 'https://linkedin.com/in/lawyer1',
      description:
        'Wajahat Ali obtained his law degree in 2009 and initially worked with leading law offices of the country. Wajahat represents and advises clients in a range of contentious and non-contentious matters. In 2019, he played a major role in successfully defending legislation relating to validation of actions undertaken by Punjab Revenue Authority; the case involved revenue of billions of rupees for the provincial government.'
    },
    {
      image: 'assets/ali_raza.jpg',
      name: 'S. Ali Raza Shah',
      designation: 'Partner',
      instagram: 'https://instagram.com/lawyer2',
      facebook: 'https://facebook.com/lawyer2',
      linkedin: 'https://linkedin.com/in/lawyer2',
      description:
        'primarily in the areas of criminal justice system; urban planning and development; youth and sports; public private partnership prospects; and environment and wildlife. In recognition of his successful legal reforms work in the Punjab Solicitor’s Department, UNDP selected him to represent Pakistan in Young Leaders in Governance Program at Bangkok, Thailand.',
    },
    {
      image: 'assets/malik-nousherwan.jpeg',
      name: 'Malik Nousherwan Awan',
      designation: 'Partner',
      instagram: 'https://instagram.com/lawyer3',
      facebook: 'https://facebook.com/lawyer3',
      linkedin: 'https://linkedin.com/in/lawyer3',
      description:
        'primarily in the areas of criminal justice system; urban planning and development; youth and sports; public private partnership prospects; and environment and wildlife. In recognition of his successful legal reforms work in the Punjab Solicitor’s Department, UNDP selected him to represent Pakistan in Young Leaders in Governance Program at Bangkok, Thailand.',
    },
    {
      image: 'assets/zohaib_imran_sheikh.jpeg',
      name: 'Zohaib Imran Sheikh',
      designation: 'Associate',
      instagram: 'https://instagram.com/lawyer3',
      facebook: 'https://facebook.com/lawyer3',
      linkedin: 'https://linkedin.com/in/lawyer3',
      description:
        'Zohaib Imran Sheikh has been practicing law in Pakistan since 2007, focusing on criminal, service, employment, regulatory, administrative, and constitutional law. Zohaib also serves as a sub-editor of the Pakistan Law Journal and was appointed by the European Institute of Community Services as a Vigilant Monitor for legal support of vulnerable groups in 2017.',
    }, // Add more lawyer objects as needed
    {
      image: 'assets/Mudassar_Abdul_Majeed.jpeg',
      name: 'Mudassar Abdul Majeed',
      designation: 'Associate',
      instagram: 'https://instagram.com/lawyer3',
      facebook: 'https://facebook.com/lawyer3',
      linkedin: 'https://linkedin.com/in/lawyer3',
      description:
        'Mudassar Abdul  Majeed is an associate at CLC. He graduated in 2019 from Pakistan College of Law.  He is currently doing his LLM in Commercial Law. At CLC, he has the responsibility of handling the work related to legal drafting and assisting the partners in some of the most complex litigation that the firm handles. He regularly represents different clients of CLC  before Courts, Tribunal and administrative bodies.',
    },
    {
      image: 'assets/Irfan_Bin_Amanat.jpeg',
      name: 'Irfan Bin Amanat',
      designation: 'Associate',
      instagram: 'https://instagram.com/lawyer3',
      facebook: 'https://facebook.com/lawyer3',
      linkedin: 'https://linkedin.com/in/lawyer3',
      description:
        'Irfan is a manager at Common Law Chambers. He has the responsibility of looking after all administrative and financial affairs of the office. Prior to CLC, he has also worked in Sports Board Punjab for almost five years. He completed his graduation studies from Allama Iqbal Open University.',
    },
    {
      image: 'assets/Fazal_Abbas.jpeg',
      name: 'Fazal Abbas',
      designation: 'Associate',
      instagram: 'https://instagram.com/lawyer3',
      facebook: 'https://facebook.com/lawyer3',
      linkedin: 'https://linkedin.com/in/lawyer3',
      description:
        'Fazal is responsible for looking after specific tasks related to the legal procedure, legal files and document management etc. before High Courts and District Courts.',
    },
    {
      image: 'assets/Abu_Bakar.jpeg',
      name: 'Abu Bakar',
      designation: 'Associate',
      instagram: 'https://instagram.com/lawyer3',
      facebook: 'https://facebook.com/lawyer3',
      linkedin: 'https://linkedin.com/in/lawyer3',
      description:
        'Abu Bakar is an active office boy who takes care of day to day work at the office.',
    },
  ];

  // Filtered lawyers based on selected category
  public filteredLawyers = this.lawyers.filter(lawyer => lawyer.designation === 'Partner');

  // Declare a boolean variable
  public timerFlag: boolean = false;

  ngOnInit(): void {
    interval(2000).pipe(
      take(1)
    ).subscribe(() => {
      this.timerFlag = true;
    });
  }

  filterLawyers(category: string): void {
    this.filteredLawyers = this.lawyers.filter(lawyer => lawyer.designation === category);
  }

  toggleCard(event: Event) {
    const card = (event.currentTarget as HTMLElement).closest('.card');
    card?.classList.toggle('open');
  }
}
