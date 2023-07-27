import { inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import { TicketMasterService } from "src/app/services/ticket-master.service";
import { ticketMasterActions } from "../actions/ticket-master.action";

export const ticketMasterEffect = createEffect((actions$ = inject(Actions)) => {
  return actions$.pipe(
    ofType(ticketMasterActions.getEvents),
    switchMap(() => {
      return inject(TicketMasterService).search().pipe(
        map((events) => {
          return ticketMasterActions.setEvents({events})
        }),
        catchError((error) => {
          alert(error);
          return of()
        })
      )
    })
  )
})