import { useEffect } from 'react';

const teamMembers = [
  {
    id: 'alexis',
    name: 'Alexis Andrés Aguilar Alvear. Mg',
    role: 'Master en Creatividad e Innovación en las organizaciones',
    bio: 'Fundador de Prisma Futura. Más de 15 años de experiencia en prospectiva, vigilancia tecnológica e inteligencia estratégica, ciencia, tecnología e innovación (CTI) y planeación estratégica, asesorando entidades públicas, universidades públicas y privadas y organismos de cooperación internacional como CEPAL, DNP, MinCiencias, IICA. Ha liderado y asesorado procesos de prospectiva territorial y sectorial, vigilancia tecnológica, formulación de estrategias de CTI, posicionamiento institucional y fortalecimiento de sistemas de ciencia, tecnología e innovación, y la construcción de capacidades institucionales. Magister en Creatividad e Innovación en las organizaciones. Administrador de Empresas.',
    // Para agregar la foto: reemplaza null por la ruta de la imagen, ej: '/fotos/alexis.jpg'
    photo: '/img/Alexis.png',
  },
  {
    id: 'felipe',
    name: 'Luis Felipe Sánchez Arias. PhD.',
    role: 'PhD en sociología. Master en Políticas Territoriales.',
    bio: 'Fundador de Prisma Futura. Diez años de experiencia en planeación territorial y regional, fortalecimiento de capacidades institucionales, gestión de proyectos, evaluación y planeación prospectiva, codiseñando modelos orientados al desarrollo de capacidades y madurez institucional en gestión de proyectos y en prospectiva. Facilitación participativa con comunidades urbanas, rurales y étnicas de la región Pacífico, como consultor para GIZ GmbH y RAP Pacífico, Instituto de Prospectiva, Anthesis Lavola, y universidades públicas del país. Doctor en sociología y Master en Políticas Territoriales por la Université de Toulouse 1 Capitole, Francia. Administrador de Empresas.',
    photo: '/img/Felipe.png',
  },
  {
    id: 'jairo',
    name: 'Jairo Alonso Sánchez Arias. Esp.',
    role: 'Especialista en Ciencia de Datos y Analítica',
    bio: 'Ingeniero Industrial con Especialización en Ciencia de Datos y Analítica, con más de 18 años de experiencia profesional, entre el sector financiero y el sector público. Experiencia en la gestión de calidad bajo los lineamientos de la norma ISO 9001 y el Modelo Integrado de Planeación y Gestión (MIPG). Liderazgo en la automatización de flujos de trabajo para la integración y análisis de datos, incluyendo procesos ETL, estructuración de bases de datos y consolidación de indicadores para monitoreo del riesgo institucional. Herramientas Python, Jupyter, Power BI con analítica descriptiva y predictiva.',
    photo: '/img/Jairo.png',
  },
  {
    id: 'carolina',
    name: 'Carolina Rojas Sánchez. Mg.',
    role: 'Magíster en Estadística',
    bio: 'Magíster en Estadística y Economista, con más de 10 años de experiencia en análisis estadístico, diagnóstico territorial, evaluación y gestión de datos. Ha desarrollado procesos de investigación y análisis cuantitativo orientados a la caracterización territorial, construcción y análisis de bases de datos, procesamiento estadístico e interpretación de evidencia para la toma de decisiones. Cuenta con experiencia como Analista Senior de Monitoreo, Evaluación y Aprendizaje en Fundación Carvajal y como investigadora del Instituto de Prospectiva, Innovación y Gestión del Conocimiento de la Universidad del Valle.',
    photo: '/img/Carolina.png',
  },
];

function ProfileCard({ member }) {
  return (
    <div className="profile-card">
      {/* Círculo de foto — para agregar foto cambia member.photo por la ruta, ej: '/fotos/alexis.jpg' */}
      <div className="profile-photo-wrapper">
        {member.photo ? (
          <img
            src={member.photo}
            alt={`Foto de ${member.name}`}
            className="profile-photo-img"
          />
        ) : (
          <div className="profile-photo-placeholder">
            <span className="profile-photo-icon">👤</span>
          </div>
        )}
      </div>

      <div className="profile-card-body">
        <div className="profile-card-header">
          <h3 className="profile-name">{member.name}</h3>
          <p className="profile-role">{member.role}</p>
        </div>
        <p className="profile-bio">{member.bio}</p>
      </div>
    </div>
  );
}

function Nosotros() {
  useEffect(() => {
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

      {/* ── Sección Equipo ── */}
      <section className="team-section section fade-in">
        <div className="container team-container">
          <h2 className="section-title">Nuestro Equipo</h2>
          <div className="team-grid">
            {teamMembers.map(member => (
              <ProfileCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Misión y Visión ── */}
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

