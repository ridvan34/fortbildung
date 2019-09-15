import { Injectable } from '@angular/core';

import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MeinService {

  constructor(private authHttp: HttpClient) { }

  getVonFirebase(){
    return this.authHttp.get("https://ngschulung.firebaseio.com/sprachen.json");
  }

  speicherDieDaten(){
    return this.authHttp.put('https://ngschulung.firebaseio.com/sprachen.json', '[{"Sprache": "Java", "Punkte": "5"}, {"Sprache": "PHP", "Punkte": "4"}]');
  }

}
