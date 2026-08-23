import { useState, useEffect } from 'react';

function Contacto() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fadeEls = document.querySelectorAll('.fade-in');
    fadeEls.forEach(el => el.classList.add('visible'));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
    e.target.reset();
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Cerrar modal al hacer clic fuera
  const handleOverlayClick = (e) => {
    if (e.target.className === 'modal-overlay show' || e.target.className === 'modal-overlay') {
      closeModal();
    }
  };

  return (
    <>
      <main id="main-content">
        <section className="page-hero">
          <div className="container">
            <h1>Contacto</h1>
            <p>Estamos aquí para ayudarte a transformar tu visión en realidad estratégica.</p>
          </div>
        </section>

        <section id="contacto" className="contact section fade-in">
          <div className="container">
            <h2 className="section-title">Ponte en contacto con nosotros</h2>
            
            <div className="contact-content">
              <div className="contact-info">
                <h3>Información de Contacto</h3>
                <p>
                  <strong>Empresa:</strong><br />
                  Prisma Futura SAS
                </p>
                <p>
                  <strong>Teléfono:</strong><br />
                  <a href="tel:+57">+57</a>
                </p>
                <p>
                  <strong>Email:</strong><br />
                  <a href="mailto:contacto@prismafutura.co">contacto@prismafutura.co</a>
                </p>
                <p>
                  <strong>Dirección:</strong><br />
                  Colombia
                </p>
              </div>

              <div className="contact-form-wrapper">
                <h3>Formulario de Contacto</h3>
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="nombre">Nombre completo *</label>
                    <input type="text" id="nombre" name="nombre" required />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">correo electrónico *</label>
                    <input type="email" id="email" name="email" required />
                  </div>

                  <div className="form-group">
                    <label htmlFor="empresa">Empresa/Organización</label>
                    <input type="text" id="empresa" name="empresa" />
                  </div>

                  <div className="form-group">
                    <label htmlFor="asunto">Asunto *</label>
                    <input type="text" id="asunto" name="asunto" required />
                  </div>

                  <div className="form-group">
                    <label htmlFor="mensaje">Mensaje *</label>
                    <textarea id="mensaje" name="mensaje" rows="6" required></textarea>
                  </div>

                  <button type="submit" className="cta-button">Enviar Mensaje</button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Modal de agradecimiento */}
      {isModalOpen && (
        <div className="modal-overlay show" id="thankYouModal" onClick={handleOverlayClick}>
          <div className="modal-content">
            <h2>¡Gracias!</h2>
            <p>¡Gracias por contactarnos! Te responderemos pronto.</p>
            <button onClick={closeModal}>Cerrar</button>
          </div>
        </div>
      )}
    </>
  );
}

export default Contacto;
