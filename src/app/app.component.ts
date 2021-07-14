import { Component } from '@angular/core';
import { GithubService } from './github.service';
import { IUser } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'github-users';
  users:IUser[] = []
  constructor(private abc: GithubService){    
  }

  ngOnInit(){
    this.abc.getUsers().subscribe((data) => {
      this.users = data;
    });
  }

  ngOnDestroy(){

  }

  
}
