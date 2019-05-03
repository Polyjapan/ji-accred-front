import {Request, RequestState} from './datatypes';

export const REQUESTS = [
  new Request(1, 1, RequestState.DRAFT),
  new Request(2, 4, RequestState.ACCEPTED),
  new Request(3, 1, RequestState.REFUSED),
  new Request(4, 1, RequestState.SENT),
  new Request(5, 2, RequestState.ACCEPTED),
  new Request(6, 3, RequestState.REQUESTED_CHANGES)
];
