import {Edition} from './datatypes';

export const EDITIONS = [
  new Edition(1, new Date(2019, 2, 18, 19), 'Japan Impact 11'),
  new Edition(2, new Date(2020, 2, 18, 19), 'Japan Impact 12')
];

export const EDITIONS_MAP = new Map<number, Edition>();
EDITIONS.forEach(r => EDITIONS_MAP.set(r.id, r));
