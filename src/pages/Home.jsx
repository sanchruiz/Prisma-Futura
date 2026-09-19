import { useEffect, useRef, useState } from 'react';

function Home() {
  const logrosRef = useRef(null);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    // Fade in simple
    const fadeEls = document.querySelectorAll('.fade-in');
    fadeEls.forEach(el => el.classList.add('visible'));
  }, []);

  const startAnimation = () => {
    if (animated || !logrosRef.current) return;
    setAnimated(true);

    const counters = logrosRef.current.querySelectorAll('.logro-numero');
    counters.forEach(el => {
      const target = parseInt(el.getAttribute('data-target'), 10);
      let current = 0;
      const increment = Math.ceil(target / 40);
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          el.textContent = target;
          clearInterval(timer);
        } else {
          el.textContent = current;
        }
      }, 40);
    });
  };

  return (
    <main id="main-content">
      {/* Hero Section */}
      <section id="inicio" className="hero">
        <div className="scene">
          <div className="ring ring-1"></div>
          <div className="ring ring-2"></div>

          <svg className="lines-svg" viewBox="0 0 700 700">
            <line x1="350" y1="350" x2="630" y2="140"/>
            <line x1="350" y1="350" x2="680" y2="350"/>
            <line x1="350" y1="350" x2="630" y2="560"/>
            <line x1="350" y1="350" x2="70"  y2="560"/>
            <line x1="350" y1="350" x2="20"  y2="350"/>
            <line x1="350" y1="350" x2="70"  y2="140"/>
          </svg>

          <img className="logo" src="/img/favicon.png" alt="Prisma Futura" />

          <div className="label red l1">
            <div className="label-inner">Vigilancia Tecnológica e Inteligencia Competitiva</div>
            <svg className="postit-arrow postit-arrow--tr" viewBox="0 0 52 46" fill="none" aria-hidden="true">
              <defs>
                <marker id="arrow-tr" viewBox="0 0 10 10" refX="6" refY="5" markerUnits="userSpaceOnUse" markerWidth="11" markerHeight="11" orient="auto">
                  <path d="M 0 1.5 L 8 5 L 0 8.5 L 2 5 Z" fill="#1A1A1A" />
                </marker>
              </defs>
              <path d="M 6 36 C 16 12, 28 8, 40 14" stroke="#1A1A1A" strokeWidth="2.2" strokeLinecap="round" markerEnd="url(#arrow-tr)" fill="none"/>
            </svg>
            <div className="postit-card postit-card--yellow">
              <p className="postit-text">Monitoreamos las señales clave de su sector, creando conocimiento y capacidades en Inteligencia Organizacional.</p>
            </div>
          </div>

          <div className="label red l2">
            <div className="label-inner">Prospectiva y planeación</div>
            <svg className="postit-arrow postit-arrow--mr" viewBox="0 0 52 36" fill="none" aria-hidden="true">
              <defs>
                <marker id="arrow-mr" viewBox="0 0 10 10" refX="6" refY="5" markerUnits="userSpaceOnUse" markerWidth="11" markerHeight="11" orient="auto">
                  <path d="M 0 1.5 L 8 5 L 0 8.5 L 2 5 Z" fill="#1A1A1A" />
                </marker>
              </defs>
              <path d="M 6 18 C 18 12, 30 12, 40 16" stroke="#1A1A1A" strokeWidth="2.2" strokeLinecap="round" markerEnd="url(#arrow-mr)" fill="none"/>
            </svg>
            <div className="postit-card postit-card--red">
              <p className="postit-text">Diseñamos escenarios futuros y apuestas estratégicas que guiarán la transformación organizacional y territorial sostenible.</p>
            </div>
          </div>

          <div className="label red l3">
            <div className="label-inner">Gestión de la tecnología y la innovación</div>
            <svg className="postit-arrow postit-arrow--br" viewBox="0 0 52 40" fill="none" aria-hidden="true">
              <defs>
                <marker id="arrow-br" viewBox="0 0 10 10" refX="6" refY="5" markerUnits="userSpaceOnUse" markerWidth="11" markerHeight="11" orient="auto">
                  <path d="M 0 1.5 L 8 5 L 0 8.5 L 2 5 Z" fill="#1A1A1A" />
                </marker>
              </defs>
              <path d="M 6 14 C 18 20, 28 24, 40 24" stroke="#1A1A1A" strokeWidth="2.2" strokeLinecap="round" markerEnd="url(#arrow-br)" fill="none"/>
            </svg>
            <div className="postit-card postit-card--red">
              <p className="postit-text">Construimos capacidades y redes de innovación, diseñando estrategias para transferir conocimiento, tecnología y propiedad intelectual.</p>
            </div>
          </div>

          <div className="label red l4">
            <div className="label-inner">Investigación y Generación de Conocimiento</div>
            <svg className="postit-arrow postit-arrow--bl" viewBox="0 0 52 56" fill="none" aria-hidden="true">
              <defs>
                <marker id="arrow-bl" viewBox="0 0 10 10" refX="6" refY="5" markerUnits="userSpaceOnUse" markerWidth="11" markerHeight="11" orient="auto">
                  <path d="M 0 1.5 L 8 5 L 0 8.5 L 2 5 Z" fill="#1A1A1A" />
                </marker>
              </defs>
              <path d="M 44 8 C 38 24, 26 42, 10 46" stroke="#1A1A1A" strokeWidth="2.2" strokeLinecap="round" markerEnd="url(#arrow-bl)" fill="none"/>
            </svg>
            <div className="postit-card postit-card--red">
              <p className="postit-text">Construimos nuestro propio conocimiento operando como una unidad de monitoreo y vigilancia permanente del entorno.</p>
            </div>
          </div>

          <div className="label red l5">
            <div className="label-inner">Gestión, Seguimiento y Evaluación</div>
            <svg className="postit-arrow postit-arrow--ml" viewBox="0 0 50 36" fill="none" aria-hidden="true">
              <defs>
                <marker id="arrow-ml" viewBox="0 0 10 10" refX="6" refY="5" markerUnits="userSpaceOnUse" markerWidth="11" markerHeight="11" orient="auto">
                  <path d="M 0 1.5 L 8 5 L 0 8.5 L 2 5 Z" fill="#1A1A1A" />
                </marker>
              </defs>
              <path d="M 42 16 C 30 11, 20 11, 8 16" stroke="#1A1A1A" strokeWidth="2.2" strokeLinecap="round" markerEnd="url(#arrow-ml)" fill="none"/>
            </svg>
            <div className="postit-card postit-card--yellow">
              <p className="postit-text">Diseñamos e implementamos sistemas de monitoreo y evaluación, generando evidencia para fortalecer la capacidad institucional.</p>
            </div>
          </div>

          <div className="label red l6">
            <div className="label-inner">Políticas Públicas, Planes y Proyectos</div>
            <svg className="postit-arrow postit-arrow--tl" viewBox="0 0 52 46" fill="none" aria-hidden="true">
              <defs>
                <marker id="arrow-tl" viewBox="0 0 10 10" refX="6" refY="5" markerUnits="userSpaceOnUse" markerWidth="11" markerHeight="11" orient="auto">
                  <path d="M 0 1.5 L 8 5 L 0 8.5 L 2 5 Z" fill="#1A1A1A" />
                </marker>
              </defs>
              <path d="M 44 36 C 34 18, 24 10, 10 12" stroke="#1A1A1A" strokeWidth="2.2" strokeLinecap="round" markerEnd="url(#arrow-tl)" fill="none"/>
            </svg>
            <div className="postit-card postit-card--yellow">
              <p className="postit-text">Transformamos evidencia y conocimiento territorial en instrumentos de gestión orientados a resultados e impacto.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Logros y Contribuciones */}
      <section 
        id="logros" 
        className="logros section" 
        ref={logrosRef}
        onMouseEnter={startAnimation}
        onTouchStart={startAnimation}
      >
        <div className="container">
          <h2 className="section-title">Participación de nuestro equipo en asesorías</h2>
          
          <div className="logros-layout logros-row">
            {/* Sección 1: Vigilancia tecnológica e inteligencia competitiva */}
            <div className="logros-grupo grupo-1">
              <h3 className="grupo-titulo">Vigilancia tecnológica e inteligencia competitiva</h3>
              <div className="grupo-grid grid-3x1">
                <div className="logro-item">
                  <div className="logro-numero" data-target="67">0</div>
                  <h3>Boletines de vigilancia científica y patentes</h3>
                </div>
                <div className="logro-item">
                  <div className="logro-numero" data-target="28">0</div>
                  <h3>Capacitaciones en<br />Vigilancia Tecnológica</h3>
                </div>
                <div className="logro-item">
                  <div className="logro-numero" data-target="6">0</div>
                  <h3>Unidades y modelos de<br />Prospectiva y VT</h3>
                </div>
              </div>
            </div>

            {/* Sección 2: Prospectiva de la CTeI */}
            <div className="logros-grupo grupo-2">
              <h3 className="grupo-titulo">Prospectiva de la Ciencia, tecnología e innovación</h3>
              <div className="grupo-grid grid-1x1">
                <div className="logro-item">
                  <div className="logro-numero" data-target="31">0</div>
                  <h3>Agendas y Planes<br />Prospectivos de CTeI</h3>
                </div>
              </div>
            </div>

            {/* Sección 3: Prospectiva Territorial, políticas e impacto */}
            <div className="logros-grupo grupo-3">
              <h3 className="grupo-titulo">Prospectiva Territorial, políticas e impacto</h3>
              <div className="grupo-grid grid-1x1">
                <div className="logro-item">
                  <div className="logro-numero" data-target="36">0</div>
                  <h3>Escenarios, políticas públicas y<br />mediciones de impacto institucional</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Propuesta de Valor */}
      <section id="valor" className="valor section fade-in">
        <div className="container">
          <h2 className="section-title">Propuesta de valor</h2>
          <p><strong>Anticipamos el futuro, creamos el presente</strong></p>
          <ul className="valor-list">
            <li><strong>Visión estratégica integral:</strong>
              <ul>
                <li>Identificamos oportunidades emergentes a través de vigilancia tecnológica e inteligencia competitiva.</li>
                <li>Diseñamos escenarios futuros que guían la toma de decisiones estratégicas.</li>
                <li>Desarrollamos capacidades organizacionales para navegar la incertidumbre.</li>
              </ul>
            </li>
            <li><strong>Transformación con impacto medible:</strong>
              <ul>
                <li>Implementamos metodologías probadas de formulación, seguimiento y evaluación.</li>
                <li>Fortalecemos gerencia orientada a resultados o basada en evidencia.</li>
              </ul>
            </li>
            <li><strong>Innovación tecnológica aplicada:</strong>
              <ul>
                <li>Potenciamos la transformación digital con soluciones de automatización.</li>
                <li>Desarrollamos plataformas y sistemas de información personalizados.</li>
                <li>Integramos tecnología de vanguardia en procesos estratégicos.</li>
              </ul>
            </li>
            <li><strong>Conocimiento Especializado:</strong>
              <ul>
                <li>Generamos investigación aplicada y análisis sectoriales de alto valor.</li>
                <li>Combinamos rigor académico con experiencia práctica.</li>
                <li>Transferimos conocimiento para fortalecer capacidades internas.</li>
              </ul>
            </li>
          </ul>
        </div>
      </section>


    </main>
  );
}

export default Home;
