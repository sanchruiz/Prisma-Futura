import { useEffect } from 'react';

function Contacto() {
  useEffect(() => {
    const fadeEls = document.querySelectorAll('.fade-in');
    fadeEls.forEach(el => el.classList.add('visible'));
  }, []);

  return (
    <>
      <main id="main-content">
        <section className="page-hero">
          <div className="container">
            <h1>Contacto</h1>
            <p></p>
          </div>
        </section>

        <section id="contacto" className="contact section fade-in">
          <div className="container">
            <h2 className="section-title">Ponte en contacto con nosotros</h2>

            <div className="contact-content centered-contact">
              <div className="contact-info">
                <h3>Información de Contacto</h3>
                <p>
                  <strong>Empresa:</strong><br />
                  Prisma Futura Direccionamiento y Evaluación SAS
                </p>
                <p>
                  <strong>Contacto:</strong><br />
                  Luis Felipe Sánchez (Representante Legal)
                </p>
                <p>
                  <strong>Teléfono:</strong><br />
                  <a href="tel:+57">+57 301 635 8941</a>
                </p>
                <p>
                  <strong>Email:</strong><br />
                  <a href="mailto:contacto@prismafutura.co">prismafutura.de@gmail.com</a>
                </p>
                <p>
                  <strong>Dirección:</strong><br />
                  Colombia
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Contacto;
