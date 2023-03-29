import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import  { apiEnvironment }  from "./../apis/youtube"
@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

constructor(private http: HttpClient) { }
  
getVideos(channelName: any): Observable<any> {
    debugger
    const API_KEY = apiEnvironment.params.key;
    const url = `${apiEnvironment.baseURL}/search?part=${apiEnvironment.params.part}&q=${channelName}&type=${apiEnvironment.params.type}&key=${API_KEY}&maxResults=${apiEnvironment.params.maxResults}`

    // const url = apiEnvironment.baseURL+"/search?part="+apiEnvironment.part+"&q="+channelName+"&type=channel&key="+API_KEY+"&maxResults="+apiEnvironment.maxResults;
  return this.http.get<any>(url);
  }

  getChannels(channelName: any): Observable<any> {
    debugger
    const API_KEY = apiEnvironment.params.key;
    const url = `${apiEnvironment.baseURL}/search?part=${apiEnvironment.params.part}&q=${channelName}&type=channel&key=${API_KEY}&maxResults=${apiEnvironment.params.maxResults}`

    // const url = apiEnvironment.baseURL+"/search?part="+apiEnvironment.part+"&q="+channelName+"&type=channel&key="+API_KEY+"&maxResults="+apiEnvironment.maxResults;
  return this.http.get<any>(url);
  }
}
