import React, { useEffect } from 'react';
import GradientWaves from './GradientWaves.jsx';

const projetos = [
  {
    image: '/Images/Portfolio3D.png',
    title: 'Portfolio3d',
    desc: 'Um Portfolio3d Moderno Bonito e funcional, destacando as tecnologias (HTML, CSS, JS).',
    demo: 'https://portfoliorobot3d.netlify.app/',
    github: null,
  },
  {
    image: '/Images/crud-python.png',
    title: 'CRUD em Python',
    desc: 'Uma aplicação CRUD completa desenvolvida em Python com Flask e SQLAlchemy, com design moderno e funcional.',
    demo: 'https://crud-git-main-xphxips-projects.vercel.app',
    github: 'https://github.com/xphxip/CRUD',
  },
  {
    image: '/Images/Barbearia-vertex.png',
    title: 'barbearia-vertex',
    desc: 'Uma Landinpage para barbearia totalmente moderna e funcional, destacando as tecnologias (HTML, CSS, JS).',
    demo: 'https://barbearia-vertex.netlify.app/',
    github: null,
  },
  {
    image: '/Images/app-financeiro.png',
    title: 'App Financeiro',
    desc: 'Um aplicativo financeiro moderno para controle de gastos e receitas, construído com tecnologias web (HTML, CSS, JS).',
    demo: 'https://controle-financeiro-ochre-delta.vercel.app/',
    github: 'https://github.com/xphxip/Controle-Financeiro',
  },
  {
    image: '/Images/pirpg.png',
    title: 'PIRPG',
    desc: 'Um jogo RPG desenvolvido em Flutter com mapas Tiled, personagens animados e sistema de câmera.',
    demo: null,
    github: 'https://github.com/xphxip/pirpg',
  }
];

const certificados = [
  {
    image: '/Certificadosimg/Certificado01.png',
    title: 'IMPLEMENTANDO BANCO DE DADOS',
    desc: 'Certificamos que LEANDRO NASCIMENTO LUCATELLI, concluiu o curso autoinstrucional IMPLEMENTANDO BANCO DE DADOS, com carga horária de 15 hora(s).',
    pdf: '/Certificados/IMPLEMENTANDO BANCO DE DADOS.pdf',
    alt: 'Certificado - Implementando Banco de Dados'
  },
  {
    image: '/Certificadosimg/Certificado02.png',
    title: 'FUNDAMENTOS DE TI HARDWARE E SOFTWARE',
    desc: 'Certificamos que LEANDRO NASCIMENTO LUCATELLI, concluiu o curso autoinstrucional FUNDAMENTOS DE TI: HARDWARE E SOFTWARE, com carga horária de 7 hora(s).',
    pdf: '/Certificados/FUNDAMENTOS DE TI HARDWARE E SOFTWARE.pdf',
    alt: 'Certificado - Fundamentos de TI Hardware e Software'
  },
  {
    image: '/Certificadosimg/Certificado03.png',
    title: 'Python Básico',
    desc: 'Certificamos que LEANDRO NASCIMENTO LUCATELLI, concluiu o curso autoinstrucional LINGUAGEM DE PROGRAMAÇÃO PYTHON - BÁSICO, com carga horária de 18 hora(s).',
    pdf: '/Certificados/Python Basico.pdf',
    alt: 'Certificado - Python Básico'
  },
  {
    image: '/Certificadosimg/Certificado04.png',
    title: 'Python Objetos',
    desc: 'Certificamos que LEANDRO NASCIMENTO LUCATELLI, concluiu o curso autoinstrucional DESENVOLVIMENTO ORIENTADO A OBJETOS UTILIZANDO A LINGUAGEM PYTHON, com carga horária de 10 hora(s).',
    pdf: '/Certificados/Python Objetos.pdf',
    alt: 'Certificado - Python Objetos'
  }
];

function App() {
  useEffect(() => {
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
    navLinks.forEach((link) => {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
          const navBarHeight = document.querySelector('.navbar').offsetHeight;
          const targetPosition = targetSection.offsetTop - navBarHeight;
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      });
    });

    const modal = document.getElementById('modal-visualizador');
    const modalImg = document.getElementById('img-full');
    const captionText = document.getElementById('legenda');
    const closeBtn = document.querySelector('.fechar');
    const certImages = document.querySelectorAll('.cert-img');

    certImages.forEach((img) => {
      img.closest('.certificado-card')?.addEventListener('click', () => {
        modal.style.display = 'block';
        modalImg.src = img.src;
        captionText.innerHTML = img.alt;
      });
    });

    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
      });
    }

    window.addEventListener('click', (e) => {
      if (e.target === modal) modal.style.display = 'none';
    });

    const sections = document.querySelectorAll('.section');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    sections.forEach((section) => {
      section.style.opacity = '0';
      section.style.transform = 'translateY(30px)';
      section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <header>
        <nav className="navbar">
          <div className="container">
            <a href="#home" className="nav-logo">LNL.</a>
            <ul className="nav-menu">
              <li className="nav-item"><a href="#home" className="nav-link">Início</a></li>
              <li className="nav-item"><a href="#sobre" className="nav-link">Sobre</a></li>
              <li className="nav-item"><a href="#projetos" className="nav-link">Projetos</a></li>
              <li className="nav-item"><a href="#certificados" className="nav-link">Certificados</a></li>
              <li className="nav-item"><a href="#contato" className="nav-link">Contato</a></li>
            </ul>
          </div>
        </nav>
      </header>

      <section id="home" className="hero">
        <div className="hero-background" aria-hidden="true">
          <div className="hero-waves-holder" style={{ width: '100%', height: '600px', position: 'relative' }}>
            <GradientWaves
              horizonColor="#5227FF"
              waveColor="#FF9FFC"
              crestColor="#FFFFFF"
              speed={0.4}
              amplitude={2.5}
              waveScale={0.6}
              waveRatio={0.9}
              swell={35}
              turbulence={20}
              tilt={1.11}
              zoom={1}
              height={5.5}
              fogDepth={15}
              detail="medium"
              brightness={1}
              opacity={1}
              mouseInteraction
              parallaxStrength={0.5}
              grain
              grainIntensity={0.05}
            />
          </div>
        </div>
        <div className="container">
          <h1>Olá, eu sou <span>Leandro Nascimento Lucatelli</span></h1>
          <p>Desenvolvedor focado em criar experiências web modernas e responsivas.</p>
          <a href="#projetos" className="btn btn-primary">Ver Meus Projetos</a>
        </div>
      </section>

      <section id="sobre" className="section">
        <div className="container">
          <h2>Sobre Mim</h2>
          <div className="sobre-content">
            <div className="sobre-texto">
              <p>Tenho 22 anos e sou apaixonado por tecnologia e design. Como desenvolvedor, meu objetivo é transformar ideias em interfaces bonitas e funcionais.</p>
              <p>Minhas principais habilidades incluem:</p>
              <div className="skills">
                <span className="skill">JSON</span>
                <span className="skill">JavaScript (ES6+)</span>
                <span className="skill">SQL</span>
                <span className="skill">C/C++</span>
                <span className="skill">Python/Pycharm</span>
                <span className="skill">MongoDB</span>
                <span className="skill">Dart</span>
                <span className="skill">Firebase</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projetos" className="section">
        <div className="container">
          <h2>Meus Projetos (5)</h2>
          <div className="projetos-grid">
            {projetos.map((projeto) => (
              <div className="projeto-card" key={projeto.title}>
                <img src={projeto.image} alt={`Captura de tela do projeto ${projeto.title}`} />
                <h3>{projeto.title}</h3>
                <p>{projeto.desc}</p>
                <div className="projeto-links">
                  {projeto.demo ? <a href={projeto.demo} target="_blank" rel="noreferrer" className="btn">Ver Demo</a> : null}
                  {projeto.github ? <a href={projeto.github} target="_blank" rel="noreferrer" className="btn">GitHub</a> : <a href="#" className="btn" style={{ opacity: 0.5, pointerEvents: 'none' }} aria-disabled="true">GitHub</a>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="certificados" className="section">
        <div className="container">
          <h2>Meus Certificados</h2>
          <div className="projetos-grid">
            {certificados.map((certificado) => (
              <div className="projeto-card certificado-card" key={certificado.title}>
                <div className="img-container">
                  <img src={certificado.image} alt={certificado.alt} className="cert-img" />
                  <div className="overlay"><i className="fas fa-search-plus"></i></div>
                </div>
                <h3>{certificado.title}</h3>
                <p>{certificado.desc}</p>
                <div className="projeto-links" style={{ justifyContent: 'center' }}>
                  <a href={certificado.pdf} target="_blank" rel="noreferrer" className="btn"><i className="fas fa-file-pdf"></i> Ver PDF Original</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div id="modal-visualizador" className="modal">
        <span className="fechar">&times;</span>
        <img className="modal-conteudo" id="img-full" alt="Visualização ampliada" />
        <div id="legenda"></div>
      </div>

      <section id="contato" className="section">
        <div className="container">
          <h2>Vamos Conversar</h2>
          <p>Estou disponível para freelance ou oportunidades de emprego. Entre em contato!</p>
          <div className="contato-wrapper">
            <a href="https://wa.me/5519995167494" target="_blank" rel="noreferrer" className="btn btn-contato"><i className="fab fa-whatsapp"></i> WhatsApp</a>
            <a href="mailto:xphxip@gmail.com" className="btn btn-contato"><i className="far fa-envelope"></i> Email</a>
            <a href="https://www.linkedin.com/in/leandro-nascimento-lucatelli-b68a0a245/" target="_blank" rel="noreferrer" className="btn btn-contato"><i className="fab fa-linkedin"></i> LinkedIn</a>
            <a href="https://github.com/xphxip" target="_blank" rel="noreferrer" className="btn btn-contato"><i className="fab fa-github"></i> GitHub</a>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <p>© 2026 Leandro Nascimento Lucatelli. Todos os direitos reservados.</p>
        </div>
      </footer>
    </>
  );
}

export default App;
