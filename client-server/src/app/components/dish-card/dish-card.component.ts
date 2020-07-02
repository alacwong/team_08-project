import { Component, OnInit, Input, HostListener } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import reviews from '../../../assets/data/reviews.json';

@Component({
  selector: 'app-dish-card',
  exportAs: 'app-dish-card',
  templateUrl: './dish-card.component.html',
  styleUrls: ['./dish-card.component.scss'],
})
export class DishCardComponent implements OnInit {
  // evenutally call reviews of the dishes
  reviews: any[];
  value: number = 0;
  totalStars: number = 5;

  @Input() dish: any;

  constructor(private modalService: NgbModal) {
    this.reviews = reviews;
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    var el1 = document.getElementById('col-img');
    var el2 = document.getElementById('col-body');
    var el3 = document.getElementById('row-modal');

    if (window.innerWidth < 1300) {
      el1.classList.remove('col-md-4');
      el2.classList.remove('col-md-8');
      el3.classList.remove('row');
    } else {
      el1.classList.add('col-md-4');
      el2.classList.add('col-md-8');
      el3.classList.add('row');
    }
  }

  ngOnInit(): void {}

  openDish(content) {
    this.modalService.open(content, { size: 'xl' });
  }
}
