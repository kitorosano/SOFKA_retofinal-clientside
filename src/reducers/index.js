const initialState = {
  productos: [],
  autenticado: false,
  user: null,
  errorMsg: '',
  loading: true,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state = initialState, action) {
  switch(action.type) {
    case 'LOGIN_EXITOSO':
    case 'REGISTRO_EXITOSO':
      return {
        ...state,
        autenticado: true,
        errorMsg: null
      };
    case 'USUARIO_OBTENIDO':
      return {
        ...state,
        user: action.payload
      };
    case 'CERRAR_SESION':
      return {
        ...state,
        autenticado: false,
        user: null,
        errorMsg: null
      };
    case 'ERROR_SHOW':
      return {
        ...state,
        errorMsg: action.payload
      }
    case 'LOADING':
      return {
        ...state,
        loading: action.payload
      }
    default: return state;
  }
}