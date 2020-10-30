import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import contactsReducer from "./contacts/contactsReducer";
import authReducer from "./auth/authReducer";
const authPersistConfig = {
  key: "auth",
  storage,
  whiteList: ["token"],
};
const defaultMiddleware = getDefaultMiddleware();
export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    auth: persistReducer(authPersistConfig, authReducer),
  },
  middleware: [...defaultMiddleware],
});
export const persistor = persistStore(store);
