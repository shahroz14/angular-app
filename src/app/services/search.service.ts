import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { log } from 'util';

@Injectable()
export class SearchService {

  //apiRoot: string = 'https://itunes.apple.com/search';
  apiRoot: string = '/timesheet/user';
  results: any;
  loading: boolean;
  req: any;

  constructor(private http: HttpClient) {
    this.results = [];
  }

  searchOb(term: String): any {
    debugger
    this.loading = true;
    //let apiUrl = `${this.apiRoot}?term=${term}&media=music&limit=25`;
    let apiUrl = this.apiRoot;
    console.log(apiUrl);
    this.req = this.http.get('/timesheet/user').subscribe( 
      data => {
        console.log('data returned from service: '+data);
        return data;
        
      },
      (e) => {
        console.log('Error');
      },
      () => {
        this.loading = false;
        console.log('search completed');
      }
    );
    
  }

  cancelReq() {
    this.req.unsubscribe();
  }


  search(term: String) {
    let promise = new Promise((resolve, reject) => {
      let apiURL = `${this.apiRoot}?term=${term}&media=music&limit=10`;
      this.http.get(apiURL)
        .toPromise()
        .then(
          res => { // Success
            // this.results = res.json().results;
            // console.log(res.json());
            resolve();
          }
        );
    });
    console.log(promise);
    return promise;
  }

}
