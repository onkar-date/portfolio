import { ScrollingIds } from './../../shared/constants/scrolling-Id.constant';
import { expertiesArea } from './../../shared/constants/typewriter.constants';
import { Component, OnInit } from '@angular/core';
import Typewriter from 't-writer.js';
@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styles: [
  ]
})
export class AboutMeComponent implements OnInit {
  typewriterWords = expertiesArea;
  scrollingIds = ScrollingIds;
  constructor() { }

  ngOnInit(): void {
    this.startTypewriter();
  }

  downloadResume(): void {
    const downloadLink = document.createElement('a');
    downloadLink.href = 'assets/data/Resume_2021.pdf';
    downloadLink.download = 'Onkar_Date_Resume';
    downloadLink.click();
  }

  startTypewriter(): void {
    const target = document.querySelector('.typewriter');

    const options = {
      loop: true,
      typeColor: '#df594f',
      typeSpeed: 130
    };

    const writer = new Typewriter(target, options);
    writer
      .strings(
        600,
        ...this.typewriterWords
      )
      .start();
  }

}
