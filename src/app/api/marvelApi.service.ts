import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Md5 } from 'ts-md5/dist/md5';
import { Observable } from 'rxjs';
import { Hero } from '../hero/hero';

const credentials = {
  publicApiKey: '07206c75f9d96e7d362e9b43bfcc4823',
  privateApikey: 'f0c28ef1e3989da8316e454df59fe6d7b19b162c'
};
const urlHeroes = 'http://gateway.marvel.com/v1/public/characters';
const getMd5 = (seed: string) => Md5.hashStr(seed + credentials.privateApikey + credentials.publicApiKey).toString();
const generateCommonParams = (time: string) => new HttpParams().set('ts', time)
  .set('apikey', credentials.publicApiKey)
  .set('hash', getMd5(time));
const getTimeAsString = () => Date.now().valueOf().toString();

@Injectable({
  providedIn: 'root'
})
export class MarvelApiService {

  getHeroes(limit = 50, offset = 0 , nameStartsWith = null, _getTimeAsString = getTimeAsString): Observable<Hero[]> {
    let params = generateCommonParams(_getTimeAsString())
      .set('limit', limit.toString())
      .set('offset', offset.toString());

    if (nameStartsWith) {
      params = params.set('nameStartsWith', nameStartsWith);
    }
    return this.httpClient.get<Hero[]>(urlHeroes, { params } );
  }

  getHeroesFromEntity = (entity: string, id: string, _getTimeAsString = getTimeAsString): Observable<Hero[]> =>
    this.httpClient.get<Hero[]>(`http://gateway.marvel.com/v1/public/${entity}/${id}/characters`,
      { params: generateCommonParams(_getTimeAsString()) })

  constructor(private httpClient: HttpClient) {}
}
