import { useEffect } from 'react';

function Nosotros() {
  useEffect(() => {
    // Re-aplicar lógica fade-in simple al montar
    const fadeEls = document.querySelectorAll('.fade-in');
    fadeEls.forEach(el => el.classList.add('visible'));
  }, []);

  return (
    <main id="main-content">
      <section className="page-hero">
        <div className="container">
          <h1>Nosotros</h1>
          <p>Conectamos estrategia, tecnología y evidencia para transformar organizaciones.</p>
        </div>
      </section>

      <section id="nosotros" className="about section fade-in">
        <div className="container">
          <h2 className="section-title">Misión</h2>
          <p>
            Somos un equipo especializado que da forma al presente y futuro de las organizaciones a través de soluciones integrales cubriendo desde el direccionamiento estratégico y el seguimiento de acciones hasta su evaluación. Combinamos visión de largo plazo, rigor metodológico e innovación tecnológica para diseñar y ejecutar estrategias que generen valor sostenible y competitivo en un mundo en creciente transformación digital y evolución hacia la sostenibilidad ambiental.
          </p>
          <h2 className="section-title">Visión</h2>
          <p>
            Ser un centro referente de generación y transferencia de conocimiento aplicado, en direccionamiento estratégico y transformación organizacional, reconocidos por nuestra capacidad de anticipar tendencias, crear soluciones innovadoras y acompañar a nuestros aliados en la construcción de futuros prometedores y sostenibles.
          </p>
        </div>
      </section>
    </main>
  );
}

export default Nosotros;
