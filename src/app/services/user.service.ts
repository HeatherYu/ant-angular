import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from '../interface/user';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  getUserInfo() {
    const params = '/wecastsvr?functioncode=team_user_base_info&user_id=52c3f1065f94ed491327cd88&team_id=26235843f9373aa65e6144a8b308d234cecc8463';
    return this.http.get<User>(params);
  }
}
