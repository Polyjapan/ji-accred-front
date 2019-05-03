import {Accred, AccredState} from './datatypes';

export const ACCREDS = [
  new Accred(1, 1, 6, AccredState.SENT),
  new Accred(2, 5, 2, AccredState.ACCEPTED),
  new Accred(3, 5, 3, AccredState.DELIVERED),
  new Accred(4, 5, 2, AccredState.SENT)
];
export const ACCREDS_MAP = new Map<number, Accred>();
ACCREDS.forEach(r => ACCREDS_MAP.set(r.id, r));
