function validarUsuarioContraseña(usuario, contraseña) {
    // Verificar que el usuario y la contraseña no estén vacíos
    if (!usuario || !contraseña) {
      return false;
    }
  
    // Verificar que el usuario tenga al menos 6 caracteres
    if (usuario.length < 6) {
      return false;
    }
  
    // Verificar que la contraseña tenga al menos 8 caracteres
    if (contraseña.length < 8) {
      return false;
    }
  
    // Verificar si se cumplen más condiciones de validación, como mayúsculas, minúsculas, números, etc.
  
    // Si todas las validaciones pasan, retornar true
    return true;
  }
  
  // Ejemplo de uso:
  var usuario = "miusuario";
  var contraseña = "micontraseña123";
  
  if (validarUsuarioContraseña(usuario, contraseña)) {
    console.log("El usuario y contraseña son válidos.");
  } else {
    console.log("El usuario y/o contraseña no son válidos.");
  }