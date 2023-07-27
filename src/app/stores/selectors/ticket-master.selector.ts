import { inject } from "@angular/core";
import { Store } from "@ngrx/store";
import { ticketMasterActions } from "../actions/ticket-master.action";
import { ticketMasterReducer } from "../reducers/ticket-master.reducer";

export function ticketMasterFeature() {
  const store = inject(Store);

  return {
    getEvents: () => store.dispatch(ticketMasterActions.getEvents()),
    setEvents: (events: any[]) => store.dispatch(ticketMasterActions.setEvents({ events })),
    completedTodos: store.selectSignal(ticketMasterReducer.selectsElectEventsLength),
    selectEvents: store.selectSignal(ticketMasterReducer.selectEvents),
  };
}