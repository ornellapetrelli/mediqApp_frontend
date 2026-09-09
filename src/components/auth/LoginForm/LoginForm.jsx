import './LoginForm.css'
import { Link } from "react-router-dom";

function LoginForm() {
  return (
    <form className="login-form">

      <div className="login-form-header">
        <h2>¡Bienvenido!</h2>
        <p>Ingrese sus datos para acceder</p>
      </div>

      <div className="form-field">
        <label htmlFor="user">Usuario o DNI</label>
        <input
          id="user"
          type="text"
          placeholder="Ingrese su usuario o DNI"
        />
      </div>

      <div className="form-field">
        <label htmlFor="password">Contraseña</label>
        <input
          id="password"
          type="password"
          placeholder="Ingrese su contraseña"
        />
      </div>

      <div className="login-options">
        <label>
          <input type="checkbox" />
          Recordar por 30 días
        </label>

        <a href="#">Olvidé mi contraseña</a>
      </div>

      <button type="submit">
        Entrar
      </button>

      <p className="register-link">
        ¿No tiene cuenta? <Link to="/registro">Registrarse</Link>
      </p>
    </form>
  )
}

export default LoginForm