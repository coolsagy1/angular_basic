import { Injectable } from '@angular/core';

@Injectable()
export class Config {
  public Server = 'http://localhost:8080/';
  public ApiUrl = '';
  public ServerWithApiUrl = this.Server + this.ApiUrl;
}
