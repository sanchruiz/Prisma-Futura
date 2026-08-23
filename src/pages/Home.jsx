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
            <span className="label-tooltip">Monitoreamos las señales claves sectoriales, identificamos relaciones entre dominios y creamos conocimiento para la transformación competitiva y la construcción de capacidades en Inteligencia Organizacional.</span>
          </div>
          <div className="label red l2">
            <div className="label-inner">Prospectiva y planeación</div>
            <span className="label-tooltip">Diseñamos escenarios de futuro y las apuestas estratégicas que guiarán la gestión de organizaciones y territorios para la transformación sostenible.</span>
          </div>
          <div className="label red l3">
            <div className="label-inner">Gestión de la tecnología y la innovación</div>
            <span className="label-tooltip">Fortalecemos capacidades de innovación, articulamos ecosistemas y gestionamos conocimiento para acelerar el desarrollo y la transferencia tecnológica.</span>
          </div>
          <div className="label red l4">
            <div className="label-inner">Investigación y Generación de Conocimiento</div>
            <span className="label-tooltip">Desarrollamos investigación aplicada en Prospectiva; en Vigilancia Tecnológica y en Construcción de Capacidad Institucional e Inteligencia Organizacional.</span>
          </div>
          <div className="label red l5">
            <div className="label-inner">Gestión, Seguimiento y Evaluación</div>
            <span className="label-tooltip">Diseñamos e implementamos sistemas de monitoreo y evaluación, generando evidencia para fortalecer la capacidad institucional y la toma de decisiones.</span>
          </div>
          <div className="label red l6">
            <div className="label-inner">Políticas Públicas, Planes y Proyectos</div>
            <span className="label-tooltip">Transformamos evidencia y conocimiento territorial en políticas públicas, planes y proyectos orientados a resultados e impacto.</span>
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

      {/* Diferenciadores */}
      <section id="diferenciadores" className="diferenciadores section fade-in">
        <div className="container">
          <h2 className="section-title">Algunas contribuciones clave de nuestro equipo consultor</h2>
          <ul className="diferenciadores-list">
            <li>La experiencia de nuestro equipo incluye desde aportes al gobierno central colombiano en la formulación de la política nacional de IA y la transformación digital, pasando por la formulación de planes prospectivos de sectores económicos y para entes territoriales; hasta el desarrollo de metodologías de mapeo de impacto adaptables a la diversidad institucional.</li>
          </ul>
        </div>
      </section>

      {/* Sectores de Impacto */}
      <section id="sectores" className="sectores section fade-in">
        <div className="container">
          <h2 className="section-title">Sectores de impacto</h2>
          <ul className="sectores-list">
            <li><strong>Sector Público:</strong> Transformación institucional y desarrollo territorial.</li>
            <li><strong>Empresas Privadas:</strong> Estrategia competitiva y innovación organizacional.</li>
            <li><strong>Organizaciones del Conocimiento:</strong> Investigación aplicada y transferencia tecnológica.</li>
            <li><strong>Ecosistemas de Innovación:</strong> Articulación y fortalecimiento sectorial.</li>
          </ul>
          <p>En Prisma Futura, cada proyecto es una oportunidad de construir el mañana que todos necesitamos.</p>
        </div>
      </section>
    </main>
  );
}

export default Home;
