const initialState = {
  productos: []
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state = initialState, action) {
  switch(action.type) {
    case 'PRODUCTOS_OBTENIDOS':
      return {
        ...state,
        productos: action.payload
      };
      
    case 'PRODUCTOS_FILTRADOS':
      return {
        ...state,
        productos: state.productos.filter(producto => producto.nombre.toLowerCase().includes(action.payload.toLowerCase()))
      };
    default: return state;
  }
}