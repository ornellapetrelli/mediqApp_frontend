function AccountFields() {
  return (
    <>
      <div className="register-field">
        <label htmlFor="firstName">Nombres</label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          placeholder="Juan Martín"
        />
      </div>

      <div className="register-field">
        <label htmlFor="lastName">Apellidos</label>
        <input
          id="lastName"
          name="lastName"
          type="text"
          placeholder="Figueroa Alcorta"
        />
      </div>

      <div className="register-field">
        <label htmlFor="username">Usuario</label>
        <input
          id="username"
          name="username"
          type="text"
          placeholder="juanmartin"
        />
      </div>

      <div className="register-field">
        <label htmlFor="email">Correo electrónico</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="juan@email.com"
        />
      </div>

      <div className="register-field">
        <label htmlFor="confirmEmail">
          Confirme su correo electrónico
        </label>

        <input
          id="confirmEmail"
          name="confirmEmail"
          type="email"
          placeholder="juan@email.com"
        />
      </div>

      <div className="register-field">
        <label htmlFor="phone">Número de teléfono</label>
        <input
          id="phone"
          name="phone"
          type="tel"
          placeholder="387..."
        />
      </div>

      <div className="register-field">
        <label htmlFor="password">Contraseña</label>
        <input
          id="password"
          name="password"
          type="password"
        />
      </div>

      <div className="password-requirements">
        <p>La contraseña debe contener:</p>
        <ul>
          <li>Entre 8 y 15 caracteres</li>
          <li>Al menos un número</li>
          <li>Al menos una mayúscula</li>
          <li>Al menos un carácter especial</li>
        </ul>
      </div>

      <div className="register-field">
        <label htmlFor="confirmPassword">
          Repita la contraseña
        </label>

        <input
          id="confirmPassword"
          name="confirmPassword"
          type="password"
        />
      </div>
    </>
  );
}

export default AccountFields;