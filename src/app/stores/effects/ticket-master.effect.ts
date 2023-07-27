import { inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import { TicketMasterService } from "src/app/services/ticket-master.service";
import { ticketMasterActions } from "../actions/ticket-master.action";

export const ticketMasterEffect = createEffect((actions$ = inject(Actions)) => {
  const ticketMasterService = inject(TicketMasterService)
  return actions$.pipe(
    ofType(ticketMasterActions.getEvents),
    switchMap(() => {
      return ticketMasterService.search().pipe(
        map(({ _embedded }) => ticketMasterActions.setEvents({ events: _embedded.events })),
        catchError((error) => {
          alert(error);
          return of()
        })
      )
    })
  )
},
  { functional: true })