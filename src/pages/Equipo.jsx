import { useEffect } from 'react';

function Equipo() {
  useEffect(() => {
    const fadeEls = document.querySelectorAll('.fade-in');
    fadeEls.forEach(el => el.classList.add('visible'));
  }, []);

  return (
    <main id="main-content">
      <section className="page-hero">
        <div className="container">
          <h1>Equipo</h1>
          <p>Profesionales especializados comprometidos con la transformación estratégica de las organizaciones.</p>
        </div>
      </section>

      <section id="equipo" className="team section fade-in">
        <div className="container">
          <h2 className="section-title">Nuestro Equipo Consultor</h2>
          <p>
            En Prisma Futura contamos con un equipo multidisciplinario de profesionales especializados en direccionamiento estratégico, transformación organizacional, evaluación de políticas, programas y proyectos, así como en gestión de la innovación y transformación digital. Nuestros consultores combinan experiencia académica rigurosa con un profundo conocimiento práctico del contexto colombiano e internacional.
          </p>
          
          <h3 className="section-title">Especialidades del Equipo</h3>
          <ul className="equipo-list">
            <li><strong>Dirección Estratégica y Prospectiva</strong>
              <ul>
                <li>Planeación estratégica y gestión de largo plazo</li>
                <li>Vigilancia tecnológica e inteligencia competitiva</li>
                <li>Diseño de escenarios prospectivos</li>
              </ul>
            </li>
            <li><strong>Evaluación y Seguimiento</strong>
              <ul>
                <li>Evaluación de políticas, programas y proyectos</li>
                <li>Diseño de sistemas de monitoreo</li>
                <li>Análisis de impacto institucional</li>
              </ul>
            </li>
            <li><strong>Transformación Digital</strong>
              <ul>
                <li>Auditoría y estrategia tecnológica</li>
                <li>Diseño de sistemas de información</li>
                <li>Soluciones de inteligencia artificial</li>
              </ul>
            </li>
            <li><strong>Gestión de Talento e Innovación</strong>
              <ul>
                <li>Desarrollo de capacidades organizacionales</li>
                <li>Gestión de la innovación y emprendimiento</li>
                <li>Formación y capacitación especializada</li>
              </ul>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}

export default Equipo;
