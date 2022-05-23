import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-locationlist',
  templateUrl: './locationlist.page.html',
  styleUrls: ['./locationlist.page.scss'],
})
export class LocationlistPage implements OnInit {

  locations = [];
  info = 'location';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<any>('https://rickandmortyapi.com/api/location')
      .subscribe(res => {
        this.locations = res.results;
      })
  }

}
