import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/query';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthReducer from '../features/authentication/slices/authSlice';
import UserReducer from '../features/user/slices/userSlice';

import {userApi} from '../features/user/services/userService';

import {locationApi} from '../features/location/services/localizacoesService';
import locationReducer from '../features/location/slices/localizacoesSlice';

import {servicosApi} from '../features/servico/services/servicoService';

import {veiculoApi} from '../features/veiculo/services/veiculoService';
import veiculoReducer from '../features/veiculo/slices/veiculoSlice';

import {motoristaApi} from '../features/motorista/services/motoristaService';
import motoristaReducer from '../features/motorista/slices/motoristaSlice';

import commonReducer from '../features/common/commonSlice';

//import {tokenMiddleware} from './middlewares/middleware';
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const appReducer = combineReducers({
  auth: AuthReducer,
  user: UserReducer,
  location: locationReducer,
  veiculo: veiculoReducer,
  motorista: motoristaReducer,
  common: commonReducer,

  [userApi.reducerPath]: userApi.reducer,
  [locationApi.reducerPath]: locationApi.reducer,
  [servicosApi.reducerPath]: servicosApi.reducer,
  [veiculoApi.reducerPath]: veiculoApi.reducer,
  [motoristaApi.reducerPath]: motoristaApi.reducer,
});

const rootReducer = (state, action) => {
  if (action.type === 'RESET_STATE') {
    const {auth} = state; // keep auth state
    state = {auth}; // create a new state with only auth
  }
  return appReducer(state, action);
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      /* serializableCheck: {
        ignoredPaths: ['auth'],
      }, */
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'],
      },
    }).concat(
      userApi.middleware,
      locationApi.middleware,
      servicosApi.middleware,
      veiculoApi.middleware,
      motoristaApi.middleware,
    ),
});

const persistor = persistStore(store);

setupListeners(store.dispatch);

export {store, persistor};

/* That one call to configureStore did all the work for us:

It combined todosReducer and filtersReducer into the root reducer function, which will handle a root state that looks like {todos, filters}
It created a Redux store using that root reducer
It automatically added the thunk middleware
It automatically added more middleware to check for common mistakes like accidentally mutating the state
It automatically set up the Redux DevTools Extension connection

*/
