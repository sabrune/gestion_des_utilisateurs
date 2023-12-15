import {Component, OnInit} from '@angular/core';
import {AddBtnComponent} from "../add-btn/add-btn.component";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import { UserList } from '../../users';
import {UsersService} from "../../services/users.service";
import {NgForOf} from "@angular/common";
import console from "console";

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    AddBtnComponent,
    FaIconComponent,
    NgForOf
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {


  result: UserList[]= [];
  constructor(private userService: UsersService) {
  }
  ngOnInit(){
/*
    this.users = this.userService.getUsers(this.userService.perPage).subscribe();
*/

    this.userService.getUsers(this.userService.perPage).subscribe((users) => (this.result = users));

  }

  addUser(user: UserList){
    this.userService.addUsers(user).subscribe((user) => this.result.push(user));
  }

  deleteUser(user: UserList){
    this.userService.deleteUser(user).subscribe(() => (this.result = this.result.filter((t) => t.id !== user.id)));
  }



}
