import {Component, Output} from '@angular/core';
import {UserList} from "../../users";
import EventEmitter from "events";

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent {
  @Output() onAddUser: EventEmitter<UserList> = new EventEmitter();
  last_name: string;
  first_name: string;
  email: string;
  avatar: string
  showAddUser: boolean;
  subscription: Subscription;
}
