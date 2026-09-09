import "./RegisterChoicePage.css";
import { Link } from "react-router-dom";
import {
  HeartPulse,
  Stethoscope,
  CalendarClock,
  Hospital
} from "lucide-react";

function RegisterChoicePage() {
  return (
    <main className="register-choice-page">
      <section className="register-choice-container">

        <h1>Seleccione una opción</h1>
<div className="register-options">

  <Link to="/registro/paciente" className="register-card-link">
  <div className="register-card">
    <h2>Paciente</h2>
    <HeartPulse className="register-icon" />
    <p>
      Buscá profesionales, consultá su disponibilidad
      y reservá tus turnos de forma simple.
    </p>
  </div>
</Link>

  <div className="register-card">
    <h2>Especialista</h2>
    <Stethoscope className="register-icon" />
    <p>
      Creá tu perfil profesional, gestioná tu agenda
      y manejá historiales clínicos al instante.
    </p>
  </div>

  <div className="register-card">
    <h2>Secretario</h2>
    <CalendarClock className="register-icon" />
    <p>
      Administrá agendas, turnos y pacientes de uno
      o más profesionales.
    </p>
  </div>

  <div className="register-card">
    <h2>Clínica</h2>
    <Hospital className="register-icon" />
    <p>
      Gestioná profesionales, especialidades, agendas
      y turnos desde un mismo lugar.
    </p>
  </div>

</div>

      </section>
    </main>
  );
}

export default RegisterChoicePage;