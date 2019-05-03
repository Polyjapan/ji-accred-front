import {Pipe, PipeTransform} from '@angular/core';
import {Accred, AccredState, AccredType, RequestState} from '../data/datatypes';

@Pipe({
  name: 'requestStateDescription'
})
export class RequestStateDescriptionPipe implements PipeTransform {

  transform(value: RequestState): any {
    switch (value) {
      case RequestState.DRAFT:
        return 'Votre requête est un brouillon. Lorsque vous serez prêt, vous pourrez l\'envoyer en validation';
      case RequestState.SENT:
        return 'Votre requête est en cours de relecture. Vous serez prévenu lorsqu\'il y aura du nouveau :)';
      case RequestState.REQUESTED_CHANGES:
        return 'Votre requête a été revue, et certaines modifications ont été demandées. Vous pouvez les voir depuis le ' +
          'formulaire de demande.';
      case RequestState.ACCEPTED:
        return 'Votre requête a été acceptée. Vous devez maintenant compléter et valider chacune des autorisations accordées ci dessous.';
      case RequestState.REFUSED:
        return 'Votre requête a été refusée. Vous n\'avez rien à faire de plus.';
    }

    return null;
  }

}
