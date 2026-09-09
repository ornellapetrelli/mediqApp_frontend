function IdentityFields() {
  return (
    <>
      <div className="register-field">
        <label htmlFor="dni">DNI</label>
        <input
          id="dni"
          name="dni"
          type="text"
          placeholder="12345678"
        />
      </div>

      <div className="register-field">
        <label htmlFor="birthDate">Fecha de nacimiento</label>
        <input
          id="birthDate"
          name="birthDate"
          type="date"
        />
      </div>
    </>
  );
}

export default IdentityFields;