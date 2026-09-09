import "./RegisterPatientPage.css";

import RegisterSection from "../../components/register/RegisterSection/RegisterSection";
import AccountFields from "../../components/register/AccountFields/AccountFields";
import IdentityFields from "../../components/register/IdentityFields/IdentityFields";

function RegisterPatientPage() {

  function handleSubmit(event) {
    event.preventDefault();

    console.log("Formulario enviado");
  }

  return (
    <main className="register-patient-page">

      <div className="register-patient-form">

        <h1>Registro</h1>

        <form onSubmit={handleSubmit}>

          <RegisterSection
            title="Paso 1: Crear cuenta"
            defaultOpen={true}
          >
            <AccountFields />
          </RegisterSection>

          <RegisterSection title="Paso 2: Identidad">
            <IdentityFields />
          </RegisterSection>

          <button
            type="submit"
            className="register-submit"
          >
            Crear cuenta
          </button>

        </form>

      </div>

      <div className="register-patient-image">
        {/* después ponemos tu imagen */}
      </div>

    </main>
  );
}

export default RegisterPatientPage;