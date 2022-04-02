import { combineReducers } from 'redux';
import usuariosReducer from './usuariosReducer';
import productosReducer from './productosReducer';
import utilsReducer from './utilsReducer';

export default combineReducers({
    usuarios: usuariosReducer,
    productos: productosReducer,
    utils: utilsReducer,
});
