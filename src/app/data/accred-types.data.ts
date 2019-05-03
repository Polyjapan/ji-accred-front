import {AccredType} from './datatypes';

export const ACCRED_TYPES = [
  new AccredType(1, 2, 'media', 'Badge Presse',
    'Badge nominatif, avec photo, à récupérer à l\'entrée VIP',
    '',
    false, true),
  new AccredType(2, 2, 'parking', 'Autorisation de parking temporaire',
    'Autorisation à imprimer vous même, permettant de rester jusqu\'à 3h sur une des places de l \'avenue Piccard',
    '',
    true, true),
  new AccredType(3, 2, 'parking', 'Autorisation de parking permanent',
    'Autorisation à imprimer vous même, permettant de rester en permanence sur une des places de l \'avenue Piccard',
    '',
    true, true),
  new AccredType(4, 2, 'parking', 'Autorisation de parking EPFL',
    'Autorisation à imprimer vous même, permettant de vous parquer sur le site de l\'EPFL',
    '',
    true, true),
  new AccredType(5, 2, 'bracelet', 'Bracelet prestataire',
    'Bracet à retirer à l\'entrée VIP, permettant l\'entrée illimitée par les entrées VIP',
    '',
    true, false),
  new AccredType(6, 2, 'gold', 'Badge Gold',
    'A compléter pour obtenir votre badge Gold',
    '',
    false, true),
];

export const ACCRED_TYPES_MAP = new Map<number, AccredType>();
ACCRED_TYPES.forEach(r => ACCRED_TYPES_MAP.set(r.id, r));
