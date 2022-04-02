export const handleFirebaseSigninErrors = (error) => {
  switch (error.code) {
    case 'auth/email-already-in-use':
      return 'El email ya esta en uso';
    case 'auth/invalid-email':
      return 'El email no es valido';
    case 'auth/weak-password':
      return 'La contraseña es muy debil';
    default:
      return 'Error al registrar el usuario';
  }
};

export const handleFirebaseLoginErrors = (error) => {
  switch (error.code) {
    case 'auth/invalid-email':
      return 'El email no es valido';
    case 'auth/user-not-found':
      return 'El usuario no existe';
    case 'auth/wrong-password':
      return 'La contraseña es incorrecta';
    default:
      return 'Error al iniciar sesion';
  }
}
