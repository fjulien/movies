import { createActionGroup, emptyProps, props } from "@ngrx/store";

export const ticketMasterActions = createActionGroup({
  source:'Ticket master',
  events:{
    getEvents: emptyProps(),
    setEvents: props<{events:any}>(),
  }
})