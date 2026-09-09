import { useState } from "react";
import "./RegisterSection.css";

function RegisterSection({ title, children, defaultOpen = false }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <section className="register-section">

      <button
        type="button"
        className="register-section-header"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>

        <span className={`register-arrow ${isOpen ? "open" : ""}`}>
          ▼
        </span>
      </button>

      {isOpen && (
        <div className="register-section-content">
          {children}
        </div>
      )}

    </section>
  );
}

export default RegisterSection;