import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function Servicios() {
  const location = useLocation();

  useEffect(() => {
    const fadeEls = document.querySelectorAll('.fade-in');
    fadeEls.forEach(el => el.classList.add('visible'));

    if (location.hash) {
      setTimeout(() => {
        const id = location.hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 150);
    }
  }, [location]);

  const planes = [
    {
      nivel: 'Nivel 2',
      tipo: 'Vigilancia',
      icono: '◎',
      nombre: 'Monitor sectorial',
      precio: '$8.000.000',
      moneda: 'COP / año',
      descripcion: 'Sigue los tres frentes por separado.',
      features: [
        'Boletín quincenal',
        '1 analista junior',
        'Sin cruce entre dominios',
      ],
      recomendado: false,
    },
    {
      nivel: 'Nivel 3',
      tipo: 'Tendencia descriptiva',
      icono: '◈',
      nombre: 'Inteligencia de cruce',
      precio: '$28.000.000',
      moneda: 'COP / año',
      descripcion: 'Cómo se están afectando hoy.',
      features: [
        'Informe mensual',
        'Cruza tec + reg + econ',
        '1 analista sénior',
      ],
      recomendado: false,
    },
    {
      nivel: 'Nivel 4',
      tipo: 'Weak signal',
      icono: '✦',
      nombre: 'Radar de anticipación',
      precio: '$60.000.000',
      moneda: 'COP / año',
      descripcion: 'Detecta lo que aún no es noticia.',
      features: [
        'Ciclo trimestral',
        'Panel Delphi con expertos',
        'Equipo de 3 dominios',
      ],
      recomendado: true,
    },
    {
      nivel: 'Nivel 5',
      tipo: 'Cruce de escenarios',
      icono: '◇',
      nombre: 'Sala de decisión',
      precio: 'Desde $95.000.000',
      moneda: 'COP / año',
      descripcion: 'Escenarios cruzados, listos para decidir.',
      features: [
        'Semestral + taller ejecutivo',
        'Matriz combinatoria',
        'Director de cuenta dedicado',
      ],
      recomendado: false,
    },
  ];

  const mostrarRadar = false;

  return (
    <main id="main-content">


      {/* ── Detalle de Servicios ── */}
      <section id="servicios-detalle" className="servicios-home section">
        <div className="container servicios-home-container">
          <h2 className="section-title servicios-home-title">Nuestros servicios</h2>

          <div className="servicios-home-grid">

            {/* ── 1. Vigilancia Tecnológica ── */}
            <div id="servicio-1" className="sh-bloque">
              <div className="sh-izq">
                <h3 className="sh-numero-titulo">
                  <span className="sh-numero">1.</span> Vigilancia Tecnológica e Inteligencia Competitiva (VTeIC)
                </h3>
                <p className="sh-descripcion">
                  Realizamos monitoreo y análisis sistemático del entorno tecnológico, los mercados, actores clave y dinámicas competitivas para identificar oportunidades, capacidades y riesgos relevantes en su sector, organización o territorio. Desarrollamos capacidades internas de VTeIC u operamos como unidad externa especializada permanente.
                </p>
              </div>
              <div className="sh-separador" aria-hidden="true" />
              <div className="sh-der sh-der--detalle">
                <div className="sh-subitem-detalle">
                  <p className="sh-subitem-titulo">Vigilancia tecnológica y de mercados:</p>
                  <p className="sh-subitem-desc">Identificamos y monitoreamos tecnologías, patentes, tendencias de mercado, desarrollos científicos y señales tempranas de cambio para incorporarlos en análisis periódicos.</p>
                </div>
                <div className="sh-subitem-detalle">
                  <p className="sh-subitem-titulo">Inteligencia competitiva y análisis de actores:</p>
                  <p className="sh-subitem-desc">Analizamos competidores, organizaciones, mercados y posicionamientos para identificar oportunidades, riesgos y movimientos estratégicos en su entorno.</p>
                </div>
                <div className="sh-subitem-detalle">
                  <p className="sh-subitem-titulo">Mapeo tecnológico y de capacidades:</p>
                  <p className="sh-subitem-desc">Caracterizamos tecnologías, soluciones, patentes, líneas de I+D+i, capacidades productivas y capacidades de innovación para identificar oportunidades de especialización, diversificación, complementariedad y transferencia tecnológica.</p>
                </div>
              </div>
            </div>

            {/* ── 2. Prospectiva y planeación ── */}
            <div id="servicio-2" className="sh-bloque">
              <div className="sh-izq">
                <h3 className="sh-numero-titulo">
                  <span className="sh-numero">2.</span> Prospectiva y planeación
                </h3>
                <p className="sh-descripcion">
                  Anticipamos futuros posibles para comprender y gestionar la incertidumbre que enfrentan las organizaciones, sectores y territorios. Traducimos los resultados de la prospectiva en orientaciones estratégicas, hojas de ruta y mecanismos de seguimiento y evaluación.
                </p>
              </div>
              <div className="sh-separador" aria-hidden="true" />
              <div className="sh-der sh-der--detalle">
                <div className="sh-subitem-detalle">
                  <p className="sh-subitem-titulo">Prospectiva tecnológica y análisis de escenarios:</p>
                  <p className="sh-subitem-desc">Exploramos tendencias, señales de cambio, incertidumbres críticas y tecnologías emergentes para construir escenarios y orientar decisiones en el mediano y largo plazo.</p>
                </div>
                <div className="sh-subitem-detalle">
                  <p className="sh-subitem-titulo">Visiones y planes prospectivos territoriales, sectoriales y tecnológicos :</p>
                  <p className="sh-subitem-desc">Dirigimos procesos participativos de construcción de visiones de futuro y hojas de ruta estratégicas, articulando actores, capacidades y prioridades de desarrollo territorial, sectorial y de especialización inteligente.</p>
                </div>
                <div className="sh-subitem-detalle">
                  <p className="sh-subitem-titulo">Planeación y gestión estratégica:</p>
                  <p className="sh-subitem-desc">Traducimos prospectiva y estrategias en objetivos, portafolios de iniciativas e indicadores, articulando capacidades, recursos y resultados en sistemas de seguimiento y evaluación. </p>
                </div>
              </div>
            </div>

            {/* ── 3. Políticas públicas, planes y proyectos ── */}
            <div id="servicio-3" className="sh-bloque">
              <div className="sh-izq">
                <h3 className="sh-numero-titulo">
                  <span className="sh-numero">3.</span> Políticas públicas, planes y proyectos
                </h3>
                <p className="sh-descripcion">
                  Formulamos instrumentos de gestión pública e institucional, asegurando coherencia estratégica, viabilidad técnica y alineación normativa e institucional.
                </p>
              </div>
              <div className="sh-separador" aria-hidden="true" />
              <div className="sh-der sh-der--detalle">
                <div className="sh-subitem-detalle">
                  <p className="sh-subitem-titulo">Formulación y estructuración:</p>
                  <p className="sh-subitem-desc">Diseñamos políticas, planes, programas y proyectos, incluyendo diagnóstico integral, modelos de intervención y su instrumentación operativa orientada a resultados / impacto.</p>
                </div>
                <div className="sh-subitem-detalle">
                  <p className="sh-subitem-titulo">Evaluación ex ante o factibilidad:</p>
                  <p className="sh-subitem-desc">Desarrollamos análisis de pertinencia, coherencia, factibilidad y riesgos, así como estimación de impactos esperados y costo-efectividad.</p>
                </div>
                <div className="sh-subitem-detalle">
                  <p className="sh-subitem-titulo">Despliegue, gobernanza y gestión de proyectos: </p>
                  <p className="sh-subitem-desc">Acompañamos la traducción operativa de documentos estratégicos en programas y proyectos, y mecanismos de gobernanza para su seguimiento y evaluación. </p>
                </div>
              </div>
            </div>

            {/* ── 4. Gestión, seguimiento y evaluación ── */}
            <div id="servicio-4" className="sh-bloque">
              <div className="sh-izq">
                <h3 className="sh-numero-titulo">
                  <span className="sh-numero">4.</span> Gestión, seguimiento y evaluación
                </h3>
                <p className="sh-descripcion">
                  Diseñamos e implementamos sistemas de gestión orientados a resultados que permiten monitorear el desempeño, evaluar resultados e impactos, generar aprendizaje institucional y utilizar la evidencia para mejorar la toma de decisiones y la gestión de las intervenciones.
                </p>
              </div>
              <div className="sh-separador" aria-hidden="true" />
              <div className="sh-der sh-der--detalle">
                <div className="sh-subitem-detalle">
                  <p className="sh-subitem-titulo">Seguimiento y gestión orientada a resultados:</p>
                  <p className="sh-subitem-desc">Diseñamos e implementamos sistemas de seguimiento al desempeño, los productos y resultados mediante indicadores, tableros de control y mecanismos de gestión de información.</p>
                </div>
                <div className="sh-subitem-detalle">
                  <p className="sh-subitem-titulo">Evaluación de procesos y resultados:</p>
                  <p className="sh-subitem-desc">Evaluamos el desempeño de intervenciones para identificar logros, factores explicativos y oportunidades de mejora, con metodologías mixtas.</p>
                </div>
                <div className="sh-subitem-detalle">
                  <p className="sh-subitem-titulo">Evaluación de impacto:</p>
                  <p className="sh-subitem-desc">Medimos los cambios atribuibles a intervenciones mediante metodologías cuantitativas y cualitativas.</p>
                </div>
                <div className="sh-subitem-detalle">
                  <p className="sh-subitem-titulo">Aprendizaje institucional y gestión del conocimiento:</p>
                  <p className="sh-subitem-desc">Convertimos los resultados del seguimiento y la evaluación en evidencia para la toma de decisiones, la gestión del conocimiento y el fortalecimiento de capacidades institucionales.</p>
                </div>
              </div>
            </div>

            {/* ── 5. Gestión de tecnología e innovación ── */}
            <div id="servicio-5" className="sh-bloque">
              <div className="sh-izq">
                <h3 className="sh-numero-titulo">
                  <span className="sh-numero">5.</span> Gestión de tecnología e innovación
                </h3>
                <p className="sh-descripcion">
                  Fortalecemos las capacidades de organizaciones y territorios para desarrollar, adoptar, gestionar y escalar tecnologías e innovaciones, articulando estrategia, capacidades y modelos de negocio.
                </p>
              </div>
              <div className="sh-separador" aria-hidden="true" />
              <div className="sh-der sh-der--detalle">
                <div className="sh-subitem-detalle">
                  <p className="sh-subitem-titulo">Emprendimientos de base tecnológica:</p>
                  <p className="sh-subitem-desc">Acompañamos emprendimientos basados en conocimiento y CyT, hasta la consolidación del modelo de negocio.</p>
                </div>
                <div className="sh-subitem-detalle">
                  <p className="sh-subitem-titulo">Desarrollo y escalamiento de productos tecnológicos:</p>
                  <p className="sh-subitem-desc">Impulsamos soluciones tecnológicas articulando capacidades de I+D+i, propiedad intelectual, financiación y estrategia comercial.</p>
                </div>
                <div className="sh-subitem-detalle">
                  <p className="sh-subitem-titulo">Transformación digital:</p>
                  <p className="sh-subitem-desc">Fortalecemos procesos, capacidades organizacionales y modelos de operación mediante la adopción de tecnologías digitales, analítica de datos e IA.</p>
                </div>
                <div className="sh-subitem-detalle">
                  <p className="sh-subitem-titulo">Gestión de innovación y capacidades tecnológicas:</p>
                  <p className="sh-subitem-desc">Diseñamos sistemas, procesos y capacidades para gestionar I+D+i y tecnología, para la articulación de portafolios y sistemas innovación.</p>
                </div>
              </div>
            </div>

            {/* ── 6. Investigación y generación de conocimiento ── */}
            <div id="servicio-6" className="sh-bloque">
              <div className="sh-izq">
                <h3 className="sh-numero-titulo">
                  <span className="sh-numero">6.</span> Investigación y generación de conocimiento
                </h3>
                <p className="sh-descripcion">
                  Fortalecemos las capacidades de organizaciones y territorios para desarrollar, adoptar, gestionar y escalar tecnologías e innovaciones, articulando estrategia, capacidades y modelos de negocio.
                </p>
              </div>
              <div className="sh-separador" aria-hidden="true" />
              <div className="sh-der sh-der--detalle">
                <div className="sh-subitem-detalle">
                  <p className="sh-subitem-desc">Integramos perspectivas contemporáneas de los estudios de futuro, combinando análisis de tendencias, señales emergentes, dinámicas sistémicas y relaciones dialécticas para construir marcos de interpretación sobre procesos de transformación.</p>
                </div>
                <div className="sh-subitem-detalle">
                  <p className="sh-subitem-desc">Desarrollamos y actualizamos nuestro sistema analítico de tendencias, megatendencias y señales, que permite monitorear su evolución, rastrear patrones emergentes y detectar cambios relevantes en el entorno.</p>
                </div>
                <div className="sh-subitem-detalle">
                  <p className="sh-subitem-desc">Articulamos investigación académica y aplicación práctica, dirigiendo y asesorando trabajos de grado de maestría en Vigilancia Tecnológica aplicados a empresas, sectores y problemáticas estratégicas.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {mostrarRadar && (
        <>
          {/* Incorpora nuestro radar - Pricing Cards */}
          <section id="radar" className="radar-section section fade-in">
            <div className="container radar-container">
              <h2 className="section-title">Incorpora nuestro radar</h2>
              <div className="radar-grid">
                {planes.map((plan, index) => (
                  <div
                    key={index}
                    className={`radar-card${plan.recomendado ? ' radar-card--recomendado' : ''}`}
                  >
                    {plan.recomendado && (
                      <span className="radar-badge">Recomendado</span>
                    )}
                    <div className="radar-card__icon">{plan.icono}</div>
                    <p className="radar-card__nivel">
                      {plan.nivel} · {plan.tipo}
                    </p>
                    <h3 className="radar-card__nombre">{plan.nombre}</h3>
                    <p className="radar-card__precio">{plan.precio}</p>
                    <p className="radar-card__moneda">{plan.moneda}</p>
                    <p className="radar-card__desc">{plan.descripcion}</p>
                    <ul className="radar-card__features">
                      {plan.features.map((feat, i) => (
                        <li key={i}>
                          <span className="radar-check">✓</span>
                          {feat}
                        </li>
                      ))}
                    </ul>
                    <a href="#contacto" className="radar-card__cta">
                      Ver detalle <span className="radar-arrow">↗</span>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}
    </main>
  );
}

export default Servicios;
