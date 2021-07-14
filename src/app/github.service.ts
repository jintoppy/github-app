import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from './models/user';
import { combineLatest } from 'rxjs';
import { tap, map, switchMap, filter } from 'rxjs/operators';
import { IRepo } from './models/repo';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  
  constructor(private http: HttpClient) { }

  getUsers(){
    // return this.http
    //   .get<IUser[]>('https://api.github.com/users')
    //   .pipe(
    //     switchMap(data => {
    //       const source$ = data.map(item => this.http.get<IRepo[]>(item.repos_url))
    //       return combineLatest(source$)
    //                 .pipe(
    //                   map((repoList: IRepo[][], index) => {
    //                       console.log('inside switchMap')
    //                       return data.map(user => {
    //                         const userRepos = repoList.find(repos => repos.length > 0 ? repos[0].owner.id == user.id : false) || [];
    //                         return {
    //                           ...user,
    //                           repoCount: userRepos.length
    //                         }
    //                       });
    //                   })
    //                 );        
    //     }),
    //     tap(data => {
    //       console.log('inside tap');
    //     })
    //   )

    return this.http
      .get<IUser[]>('https://api.github.com/users')
      .pipe(
        map((users : IUser[]) => {
          return users.filter(user => user.id > 10);
        })
      )
      
  }
}
