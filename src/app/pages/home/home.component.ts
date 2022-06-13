import { Component, OnInit } from '@angular/core';
import { Author } from 'src/app/models/author';
import { HomeService } from './service/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  items: Author[]
  constructor(
    private homeService: HomeService
  ) { }

  ngOnInit(): void {
    this.homeService._getAuthors().subscribe(response => {
      if (response != null) {
        console.log(response)
        this.items = response;
      }
    });
  }
}
