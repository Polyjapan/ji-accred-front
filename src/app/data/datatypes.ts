export class Edition {
  id: number;
  endDate: Date;
  name: string;


  constructor(id: number, endDate: Date, name: string) {
    this.id = id;
    this.endDate = endDate;
    this.name = name;
  }
}

export class RequestType {
  id: number;
  edition: number;
  internalName: string;
  name: string;
  shortDescription: string;
  description: string;
  requiredGroup?: string;
  hidden: boolean;


  constructor(id: number, edition: number, internalName: string, name: string, shortDescription: string, description: string, requiredGroup: string, hidden: boolean) {
    this.id = id;
    this.edition = edition;
    this.internalName = internalName;
    this.name = name;
    this.shortDescription = shortDescription;
    this.description = description;
    this.requiredGroup = requiredGroup;
    this.hidden = hidden;
  }
}

export class Request {
  id: number;
  requestType: number;
  state: RequestState;


  constructor(id: number, requestType: number, state: RequestState) {
    this.id = id;
    this.requestType = requestType;
    this.state = state;
  }
}


export class AccredType {
  id: number;
  edition: number;
  internalName: string;
  name: string;
  shortDescription: string;
  description: string;
  selfService: boolean;
  printable: boolean;


  constructor(id: number, edition: number, internalName: string, name: string, shortDescription: string, description: string, selfService: boolean, printable: boolean) {
    this.id = id;
    this.edition = edition;
    this.internalName = internalName;
    this.name = name;
    this.shortDescription = shortDescription;
    this.description = description;
    this.selfService = selfService;
    this.printable = printable;
  }
}

export class Accred {
  id: number;
  requestId: number;
  accredType: number;
  state: AccredState;


  constructor(id: number, requestId: number, accredType: number, state: AccredState) {
    this.id = id;
    this.requestId = requestId;
    this.accredType = accredType;
    this.state = state;
  }
}

export enum RequestState {
  DRAFT = 'draft',
  SENT = 'sent',
  REQUESTED_CHANGES = 'requested_changes',
  ACCEPTED = 'accepted',
  REFUSED = 'refused'
}

export enum AccredState {
  DRAFT = 'draft',
  SENT = 'sent',
  REQUESTED_CHANGES = 'requested_changes',
  ACCEPTED = 'accepted',
  PRINTED = 'printed',
  DELIVERED = 'delivered'
}
