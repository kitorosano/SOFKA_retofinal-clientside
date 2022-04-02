
const initialState = {
  autenticado: false,
  user: null
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state = initialState, action) {
  switch(action.type) {
    case 'LOGIN_EXITOSO':
    case 'REGISTRO_EXITOSO':
      return {
        ...state,
        autenticado: true
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
      };
    default: return state;
  }
}