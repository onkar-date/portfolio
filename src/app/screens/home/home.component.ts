import { ScrollingIds } from 'src/app/shared/constants/scrolling-Id.constant';
import { AfterViewChecked, AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [],
})
export class HomeComponent implements OnInit, AfterViewInit {
  constructor() {}
  observer = null;
  scrollingIds = ScrollingIds;
  observerSet = false;
  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.setObserver();
  }

  setObserver(): void {
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const skillsWrapper = document.getElementById('skillsWrapper');
        if (skillsWrapper) {
          if (entry.isIntersecting) {
            skillsWrapper.classList.add('start-animation');
            return;
          }
          skillsWrapper.classList.remove('start-animation');
        }
      });
    });
    if (!this.observerSet) {
      this.observer.observe(document.getElementById(this.scrollingIds.skills));
      this.observerSet = true;
    }
  }
}
