import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Accred, AccredType, Edition, Request, RequestType} from '../data/datatypes';
import {REQUEST_TYPES, REQUEST_TYPES_MAP} from '../data/request-types.data';
import {EDITIONS_MAP} from '../data/editions.data';
import {ACCREDS} from '../data/accreds.data';
import {REQUESTS} from '../data/requests.data';
import {ACCRED_TYPES_MAP} from '../data/accred-types.data';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private http: HttpClient) {
  }

  getRequestTypes(): Observable<[RequestType, Edition][]> {
    return Observable.of(REQUEST_TYPES.filter(r => !r.hidden).map(t =>
      [t, EDITIONS_MAP.get(t.edition)] as [RequestType, Edition]
    ));
  }

  getRequests(): Observable<[Request, RequestType, Edition, [Accred, AccredType][]][]> {
    return Observable.of(REQUESTS.sort((a, b) => b.id - a.id).map(r => {
        const t: RequestType = REQUEST_TYPES_MAP.get(r.requestType);
        const ed: Edition = EDITIONS_MAP.get(t.edition);
        const accreds: [Accred, AccredType][] = ACCREDS.filter(a => a.requestId === r.id)
          .map(a => [a, ACCRED_TYPES_MAP.get(a.accredType)] as [Accred, AccredType]);
      console.log(accreds);
      console.log(ACCREDS.filter(a => a.requestId === r.id));
      console.log(ACCREDS);

        return [r, t, ed, accreds] as [Request, RequestType, Edition, [Accred, AccredType][]];
      }
    ));
  }
}

export class RequestTypeAndEdition {
  type: RequestType;
  edition: Edition;


}

