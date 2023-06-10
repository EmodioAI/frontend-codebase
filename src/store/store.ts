import { configureStore } from "@reduxjs/toolkit";
import Reducers from "./reducer";
import thunkMiddleware from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: "root",
    storage,
};

const persistedReducer = persistReducer(persistConfig, Reducers);

const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunkMiddleware],
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export default store;
