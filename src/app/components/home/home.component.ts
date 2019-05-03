import { Component, OnInit } from '@angular/core';
import {BackendService} from '../../services/backend.service';
import {Accred, AccredType, Edition, Request, RequestState, RequestType} from '../../data/datatypes';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // TODO:  We will want to load less data at once, maybe
  requests: [Request, RequestType, Edition, [Accred, AccredType][]][];
  requestTypes: [RequestType, Edition][];

  RequestState = RequestState;

  constructor(private backend: BackendService) { }

  ngOnInit() {
    // TODO: load spinner

    // TODO: handle errors
    this.backend.getRequests().subscribe(r => this.requests = r);
    this.backend.getRequestTypes().subscribe(r => this.requestTypes = r);
  }

}
