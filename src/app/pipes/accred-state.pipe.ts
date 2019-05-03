import {Pipe, PipeTransform} from '@angular/core';
import {Accred, AccredState, RequestState} from '../data/datatypes';

@Pipe({
  name: 'accredState'
})
export class AccredStatePipe implements PipeTransform {

  transform(value: AccredState): any {
    switch (value) {
      case AccredState.DRAFT:
        return 'Brouillon';
      case AccredState.SENT:
        return 'En validation';
      case AccredState.REQUESTED_CHANGES:
        return 'Changements demandés';
      case AccredState.ACCEPTED:
        return 'Acceptée';
      case AccredState.PRINTED:
        return 'Imprimée';
      case AccredState.DELIVERED:
        return 'Délivrée';
    }

    return null;
  }

}
