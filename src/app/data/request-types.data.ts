import {RequestType} from './datatypes';

export const REQUEST_TYPES = [
  new RequestType(1, 2, 'media', 'Accréditation presse',
    'Pour obtenir une autorisation de couvrir notre événement',
    '',
    undefined, false),
  new RequestType(2, 2, 'parking', 'Autorisation de parking',
    'Pour obtenir une autorisation de vous parquer à proximité des entrées lors de l\'événement',
    '',
    undefined, false),
  new RequestType(3, 2, 'bracelet', 'Bracelet prestataire',
    'Pour obtenir des bracelets supplémentaires pour les intervenants de votre stand ou activité',
    '',
    undefined, false),
  new RequestType(4, 2, 'gold', 'Billet Gold',
    'A compléter pour obtenir votre badge Gold',
    '',
    undefined, true),
];

export const REQUEST_TYPES_MAP = new Map<number, RequestType>();
REQUEST_TYPES.forEach(r => REQUEST_TYPES_MAP.set(r.id, r));
