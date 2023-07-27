import { createFeature, createReducer } from "@ngrx/store";
import { ticketMasterActions } from "../actions/ticket-master.action";

interface TicketMasterReducer {
  events : any[]
}

const initialState: TicketMasterReducer = {
  events: []
}

export const ticketMasterReducer = createFeature({
  name : 'Ticket master'
  reducer: createReducer(
    initialState,
    on(ticketMasterActions.setEvents, (state, action)=>({
      ...state,
      events : action.events,
    }))
  )
})