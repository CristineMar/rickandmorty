import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-episodelist',
  templateUrl: './episodelist.page.html',
  styleUrls: ['./episodelist.page.scss'],
})
export class EpisodelistPage implements OnInit {

  episodes = [];
  info = 'episode';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<any>('https://rickandmortyapi.com/api/episode')
      .subscribe(res => {
        this.episodes = res.results;
      })
  }

}
