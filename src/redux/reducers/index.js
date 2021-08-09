import { combineReducers } from 'redux'
import contactReducer from './contacts.reducers'
import registerReducer from './register.reducer'
import loginReducer from './login.reducer'
import userReducer from './user.reducer'
import addContactReducer from './addContact.reducer'
import sendMailReducer from './sendMail.reducer'
import updateContactReducer from './updateContact.reducer'
import contactDetailReducer from './contactDetail.reducer'
import deleteContactReducer from './deleteContact.reducer'
import userAvatarReducer from './userAvatar.reducer'
import contactAvatarReducer from './contactAvatar'

import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'


const persistConfig = {
    key: 'root',
    storage
}

const rootReducer = combineReducers({
    contactReducer,
    registerReducer,
    loginReducer,
    userReducer,
    addContactReducer,
    sendMailReducer,
    updateContactReducer,
    contactDetailReducer,
    deleteContactReducer,
    userAvatarReducer,
    contactAvatarReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)
export default persistedReducer
