import { Injectable } from '@angular/core';

@Injectable()
export class Config {
  public Server = 'http://localhost:8080/';
  public ApiUrl = 'v1/at';
  public ServerWithApiUrl = this.Server + this.ApiUrl;
}
