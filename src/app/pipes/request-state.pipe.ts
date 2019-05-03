import {Pipe, PipeTransform} from '@angular/core';
import {Accred, AccredState, AccredType, RequestState} from '../data/datatypes';

@Pipe({
  name: 'requestState'
})
export class RequestStatePipe implements PipeTransform {

  transform(value: RequestState, accredsList: [Accred, AccredType][]): any {
    switch (value) {
      case RequestState.DRAFT:
        return 'Brouillon';
      case RequestState.SENT:
        return 'En validation';
      case RequestState.REQUESTED_CHANGES:
        return 'Changements demandés';
      case RequestState.ACCEPTED:
        const accreds = accredsList.map(a => a[0]);
        const nGranted = accreds ? accreds.length : 0;

        if (nGranted < 1) {
          return 'Aucune autorisation accordée';
        } else if (nGranted === 1) {
          const state = accreds[0].state;

          if (state === AccredState.DELIVERED || state === AccredState.PRINTED || state === AccredState.ACCEPTED) {
            return '1 autorisation accordée et validée';
          } else if (state === AccredState.REQUESTED_CHANGES) {
            return '1 autorisation accordée, changements demandés';
          } else if (state === AccredState.SENT) {
            return '1 autorisation accordée, en validation';
          } else {
            return '1 autorisation accordée, à compléter';
          }
        } else {
          const states = accreds.map(accred => accred.state);

          const validated = states.filter(state => state === AccredState.DELIVERED || state === AccredState.PRINTED
            || state === AccredState.ACCEPTED).length;
          const changes = states.filter(state => state === AccredState.REQUESTED_CHANGES).length;
          const sent = states.filter(state => state === AccredState.SENT).length;

          let retStr = nGranted + ' autorisations accordées';

          if (changes > 0) {
            return retStr + ', changements demandés';
          }

          if (validated > 0) {
            retStr = retStr + ', ' + validated + ' validées';
          }

          if (sent > 0) {
            retStr = retStr + ', ' + sent + ' en validation';
          }

          return retStr;
        }

      case RequestState.REFUSED:
        return 'Refusée';
    }

    return null;
  }

}
