import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from '../../environments/environment';
import { UserList} from '../types/users.type'

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  public perPage = 6;

  constructor(protected  http:HttpClient) { }

  getUsers(page: number): Observable<UserList[]>{
    return (this.http.get<UserList[]>(`${environment.apiLink}/users?page=${page}&per_page=${this.perPage}`));
  }

  addUsers(user: UserList): Observable<UserList[]>{
    // @ts-ignore
    // @ts-ignore
    return this.http.post<UserList[]>(this.`${environment.apiLink`,user , httpOptions })
  }
   deleteUser(user: UserList): Observable<UserList[]> {
    const url = this.`${environment.apiLink/${user.id}`;
    return this.http.delete<TUserList>(url);
  }


}
