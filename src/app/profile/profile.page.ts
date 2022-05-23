import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  profileId: string;
  profileinfo: string;
  residents = [];
  characters = [];

  constructor(
    private activateRoute: ActivatedRoute,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.profileId = this.activateRoute.snapshot.paramMap.get('id'); //to save id that being sent from url route
    this.profileinfo = this.activateRoute.snapshot.paramMap.get('info'); //to save id that being sent from url route

    if (this.profileinfo === 'character') {
      this.http
        .get<any>('https://rickandmortyapi.com/api/character/' + this.profileId) //using id to get info
        .subscribe(res => {
          this.residents = res;
          this.characters.push(this.residents);
        });

    } else if (this.profileinfo === 'location') {
      this.http
        .get<any>('https://rickandmortyapi.com/api/location/' + this.profileId) //using id to get info
        .subscribe(res => {
          this.residents = res.residents;

            this.residents.forEach((resident: string) => {
              this.http.get<any>(resident).subscribe(res => {
                this.characters.push(res);
              });
          });
        });
    } else if (this.profileinfo === 'episode') {
      this.http
        .get<any>('https://rickandmortyapi.com/api/episode/' + this.profileId) //using id to get info
        .subscribe(res => {
          this.residents = res.characters;

            this.residents.forEach((resident: string) => {
              this.http.get<any>(resident).subscribe(res => {
                this.characters.push(res);
              });
          });
        });
    }
  }
}
