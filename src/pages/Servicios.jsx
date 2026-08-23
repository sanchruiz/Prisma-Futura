import { useEffect } from 'react';

function Servicios() {
  useEffect(() => {
    const fadeEls = document.querySelectorAll('.fade-in');
    fadeEls.forEach(el => el.classList.add('visible'));
  }, []);

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

  return (
    <main id="main-content">
      <section id="servicios" className="servicios section fade-in">
        <div className="container">
          <h2 className="section-title">Servicios especializados</h2>
          <ul className="servicios-list">
            <li><strong>1. Direccionamiento a largo plazo</strong>
              <ul>
                <li>Vigilancia tecnológica, inteligencia competitiva y mapeo tecnológico</li>
                <li>Visiones y planes prospectivos del orden territorial, sectorial, tecnológico y socioeconómico</li>
                <li>Planeación y gestión estratégica</li>
              </ul>
            </li>
            <li><strong>2. Formulación de políticas, planes, programas y proyectos</strong>
              <ul>
                <li>Formulación</li>
                <li>Evaluación exante</li>
                <li>Despliegue</li>
              </ul>
            </li>
            <li><strong>3. Gestión, seguimiento y evaluación</strong>
              <ul>
                <li>Seguimiento</li>
                <li>Evaluación de impacto</li>
              </ul>
            </li>
            <li><strong>4. Gerencia orientada a resultados</strong>
              <ul>
                <li>Gestión del talento humano</li>
                <li>Gestión de abastecimiento</li>
                <li>Gestión de la calidad</li>
                <li>Gestión de la innovación</li>
                <li>Gestión de la propiedad intelectual</li>
              </ul>
            </li>
            <li><strong>5. Transformación digital</strong>
              <ul>
                <li>Gestión de tecnología e innovación</li>
                <li>Soluciones de inteligencia artificial</li>
                <li>Diseño de sistemas de información y plataformas</li>
              </ul>
            </li>
            <li><strong>6. Investigación y generación de conocimiento</strong>
              <ul>
                <li>Estudios, análisis, reflexiones e investigaciones académicas</li>
              </ul>
            </li>
          </ul>
        </div>
      </section>

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
    </main>
  );
}

export default Servicios;
