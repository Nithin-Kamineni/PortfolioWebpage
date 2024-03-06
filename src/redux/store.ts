import { configureStore, combineReducers } from "@reduxjs/toolkit"

import flashCardsReducer from "../features/flashcard/flashCardSlice"

const store = configureStore({
  reducer: combineReducers({
    flashCards: flashCardsReducer
    /*favoriteCards: favoriteCardsSlice*/
  }),
  devTools: true // this is redundant and for demonstration only
  //preloadedState: {your state object for initialization or rehydration}
})

export default store
export type RootState = ReturnType<typeof store.getState>
