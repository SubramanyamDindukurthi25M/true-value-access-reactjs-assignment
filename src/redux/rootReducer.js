// rootReducer - to combine all reducers
import usersSlice from "./features/usersSlice"

export const rootReducer = {
    usersList: usersSlice
}