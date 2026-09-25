import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

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
            <line x1="350" y1="350" x2="630" y2="140" />
            <line x1="350" y1="350" x2="680" y2="350" />
            <line x1="350" y1="350" x2="630" y2="560" />
            <line x1="350" y1="350" x2="70" y2="560" />
            <line x1="350" y1="350" x2="20" y2="350" />
            <line x1="350" y1="350" x2="70" y2="140" />
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
              <path d="M 6 36 C 16 12, 28 8, 40 14" stroke="#1A1A1A" strokeWidth="2.2" strokeLinecap="round" markerEnd="url(#arrow-tr)" fill="none" />
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
              <path d="M 6 18 C 18 12, 30 12, 40 16" stroke="#1A1A1A" strokeWidth="2.2" strokeLinecap="round" markerEnd="url(#arrow-mr)" fill="none" />
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
              <path d="M 6 14 C 18 20, 28 24, 40 24" stroke="#1A1A1A" strokeWidth="2.2" strokeLinecap="round" markerEnd="url(#arrow-br)" fill="none" />
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
              <path d="M 44 8 C 38 24, 26 42, 10 46" stroke="#1A1A1A" strokeWidth="2.2" strokeLinecap="round" markerEnd="url(#arrow-bl)" fill="none" />
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
              <path d="M 42 16 C 30 11, 20 11, 8 16" stroke="#1A1A1A" strokeWidth="2.2" strokeLinecap="round" markerEnd="url(#arrow-ml)" fill="none" />
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
              <path d="M 44 36 C 34 18, 24 10, 10 12" stroke="#1A1A1A" strokeWidth="2.2" strokeLinecap="round" markerEnd="url(#arrow-tl)" fill="none" />
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

      {/* Nuestros Servicios */}
      <section id="servicios-home" className="servicios-home section">
        <div className="container servicios-home-container">
          <h2 className="section-title servicios-home-title">Nuestros servicios</h2>

          <div className="servicios-home-grid">

            {/* ── 1. Vigilancia Tecnológica ── */}
            <div className="sh-bloque">
              <div className="sh-izq">
                <h3 className="sh-numero-titulo">
                  <span className="sh-numero">1.</span> Vigilancia Tecnológica e Inteligencia Competitiva (VTeIC)
                </h3>
                <p className="sh-descripcion">
                  <em className="sh-hook">El problema ya no es la información, sino volverla inteligencia permanente para actuar.</em>{' '}
                  Realizamos monitoreo y análisis sistemático del entorno tecnológico, los mercados, actores clave y dinámicas competitivas para identificar permanentemente oportunidades y riesgos.
                </p>
                <Link to="/servicios#servicio-1" className="sh-link-detalle">
                  Ver detalles completos <span className="sh-link-flecha">→</span>
                </Link>
              </div>
              <div className="sh-separador" aria-hidden="true" />
              <div className="sh-der">
                <p className="sh-subitem">Vigilancia tecnológica y de mercados</p>
                <p className="sh-subitem">Inteligencia competitiva y análisis de actores</p>
                <p className="sh-subitem">Mapeo tecnológico y de capacidades</p>
              </div>
            </div>

            {/* ── 2. Prospectiva y planeación ── */}
            <div className="sh-bloque">
              <div className="sh-izq">
                <h3 className="sh-numero-titulo">
                  <span className="sh-numero">2.</span> Prospectiva y planeación
                </h3>
                <p className="sh-descripcion">
                  <em className="sh-hook">¡Por escenarios que no sobresimplifiquen la complejidad de lo social!  </em>{' '}
                  Anticipamos escenarios futuros incorporando una lectura compleja reduciendo la incertidumbre para la toma de decisiones. Traducimos los resultados de la prospectiva en orientaciones estratégicas, hojas de ruta y mecanismos de seguimiento y evaluación
                </p>
                <Link to="/servicios#servicio-2" className="sh-link-detalle">
                  Ver detalles completos <span className="sh-link-flecha">→</span>
                </Link>
              </div>
              <div className="sh-separador" aria-hidden="true" />
              <div className="sh-der">
                <p className="sh-subitem">Prospectiva tecnológica y análisis de escenarios</p>
                <p className="sh-subitem">Visiones y planes prospectivos territoriales, sectoriales y tecnológicos</p>
                <p className="sh-subitem">Planeación y gestión estratégica</p>
              </div>
            </div>

            {/* ── 3. Políticas públicas, planes y proyectos ── */}
            <div className="sh-bloque">
              <div className="sh-izq">
                <h3 className="sh-numero-titulo">
                  <span className="sh-numero">3.</span> Políticas públicas, planes y proyectos
                </h3>
                <p className="sh-descripcion">
                  <em className="sh-hook">¡No más políticas sin perspectiva de impacto medible! </em>{' '}
                  Formulamos instrumentos de gestión pública e institucional, asegurando coherencia estratégica, viabilidad técnica y alineación normativa e institucional.
                </p>
                <Link to="/servicios#servicio-3" className="sh-link-detalle">
                  Ver detalles completos <span className="sh-link-flecha">→</span>
                </Link>
              </div>
              <div className="sh-separador" aria-hidden="true" />
              <div className="sh-der">
                <p className="sh-subitem">Formulación y estructuración</p>
                <p className="sh-subitem">Evaluación ex ante o factibilidad</p>
                <p className="sh-subitem">Despliegue, gobernanza y gestión de proyectos
                </p>
              </div>
            </div>

            {/* ── 4. Gestión, seguimiento y evaluación ── */}
            <div className="sh-bloque">
              <div className="sh-izq">
                <h3 className="sh-numero-titulo">
                  <span className="sh-numero">4.</span> Investigación y Generación de Conocimiento
                </h3>
                <p className="sh-descripcion">
                  <em className="sh-hook">¡Medir no es evaluar, ni evaluar es aprender! </em>{' '}
                  Diseñamos e implementamos sistemas de gestión orientados a resultados que permiten monitorear el desempeño, evaluar resultados e impactos, generar aprendizaje institucional y utilizar la evidencia para la toma de decisiones y la gestión.
                </p>
                <Link to="/servicios#servicio-4" className="sh-link-detalle">
                  Ver detalles completos <span className="sh-link-flecha">→</span>
                </Link>
              </div>
              <div className="sh-separador" aria-hidden="true" />
              <div className="sh-der">
                <p className="sh-subitem">Seguimiento y gestión orientada a resultados</p>
                <p className="sh-subitem">Evaluación de procesos y resultados</p>
                <p className="sh-subitem">Evaluación de impacto</p>
                <p className="sh-subitem">Aprendizaje institucional y gestión del conocimiento</p>
              </div>
            </div>

            {/* ── 5. Gestión de tecnología e innovación ── */}
            <div className="sh-bloque">
              <div className="sh-izq">
                <h3 className="sh-numero-titulo">
                  <span className="sh-numero">5.</span> Gestión de tecnología e innovación
                </h3>
                <p className="sh-descripcion">
                  <em className="sh-hook">¡No toda tecnología resuelve un problema!</em>{' '}
                  Orientamos la adopción y desarrollo tecnológico. Fortalecemos las capacidades para desarrollar, adoptar, gestionar y escalar tecnologías e innovaciones, articulando estrategia, capacidades y modelos de negocio.
                </p>
                <Link to="/servicios#servicio-5" className="sh-link-detalle">
                  Ver detalles completos <span className="sh-link-flecha">→</span>
                </Link>
              </div>
              <div className="sh-separador" aria-hidden="true" />
              <div className="sh-der">
                <p className="sh-subitem">Emprendimientos de base tecnológica</p>
                <p className="sh-subitem">Desarrollo y escalamiento de productos tecnológicos</p>
                <p className="sh-subitem">Transformación digital</p>
                <p className="sh-subitem">Gestión de innovación y capacidades tecnológicas</p>
              </div>
            </div>

            {/* ── 6. Investigación y generación de conocimiento ── */}
            <div className="sh-bloque">
              <div className="sh-izq">
                <h3 className="sh-numero-titulo">
                  <span className="sh-numero">6.</span> Investigación y generación de conocimiento
                </h3>
                <p className="sh-descripcion">
                  Desarrollamos y actualizamos nuestro conocimiento como base de nuestro expertise.
                </p>
                <Link to="/servicios#servicio-6" className="sh-link-detalle">
                  Ver detalles completos <span className="sh-link-flecha">→</span>
                </Link>
              </div>
              <div className="sh-separador" aria-hidden="true" />
              <div className="sh-der">
                <p className="sh-subitem">Integramos perspectivas contemporáneas de los estudios de futuro</p>
                <p className="sh-subitem">Desarrollamos y actualizamos nuestro sistema de conocimiento sobre tendencias, megatendencias y señales</p>
                <p className="sh-subitem">Articulamos investigación académica y aplicación práctica</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
