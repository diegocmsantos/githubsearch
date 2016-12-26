import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {

  private username:string;
  private client_id = '9692f4f54c1822654358';
  private client_secret = '0fdcc52ecc0ed4199d4fbb3bf2ff919f73f42fe1';

  constructor(private _http: Http) {
    console.log('Github Service is ready...');
    this.username = 'diegocmsantos';
  }

  getUser() {
    return this._http.get('https://api.github.com/users/'+this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secret)
      .map(res => res.json());
  }

  getRepos() {
    return this._http.get('https://api.github.com/users/'+this.username+'/repos?client_id='+this.client_id+'&client_secret='+this.client_secret)
      .map(res => res.json());
  }

}