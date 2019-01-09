import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { tap } from "rxjs/operators";
import { Observable } from "rxjs/Observable";
@Injectable()
export class ProductService {
  private _albumUrl = "../assets/album.json";
  constructor(private _http: Http) {}

  getAlbum(id: Number): Observable<any> {
    return this._http.get(this._albumUrl);
  }
}
