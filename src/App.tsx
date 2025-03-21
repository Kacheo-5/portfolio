import React, { useState, useEffect } from 'react';
import { Menu, X, Code, Server, Database, Briefcase, User, Mail, Github, Linkedin, ExternalLink, ChevronRight, Moon, Sun, Phone, Video } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('accueil');
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const projects = [
    {
      title: "Application de vente",
      description: "Une application de vente pour gerer les ventes clients, produits ainsi que le stock",
      technologies: ["Django", "Bootstrap","chart.js" ],
      image: "src/images/ventdjango.png"
    },
    {
      title: "Application de Gestion de Stock",
      description: "Application permettant  de gérer le stock des produits efficacement.",
      technologies: ["Django", "Tailwind CSS"],
      image:"src/images/gesstok.png"
    },
    {
      title: "Gestion de location de voiture",
      description: "Application Web pour la gestion de location de voitures.",
      technologies: ["Laravel", "vue", "Inertia", "mySql"],
      image: "src/images/Capture d’écran 2025-03-19 013757.png"
    },
    {
      title: "Gestion de Bijouterie",
      description: "Application de facturation de bijouterie permettant  de gérer les achats, ventes, produits et stock et plein d'autres services et fonctionnalités   ",
      technologies: ["Laravel", "blade", "mySql"],
      image: "src/images/bijouterie.png"
    },
    {
      title: "e-commerce",
      description: "Application permettant  de vendre et passer des commandes.",
      technologies: ["Django", "Bootstrap"],
      image:"src/images/commerce.png"
    },
    {
      title: "Application de facturation de Clinique",
      description: "Application permettant a une clinique de gerer sa fcturation",
      technologies: ["Laravel", "vue", "Inertia", "mySql"],
      image:"src/images/clinique.png"
    },
  ];

  const skills = [
    { name: "Langage de programmation", items: ["React", "Vue.js", "JavaScript/TypeScript", "HTML/CSS","Bootstrap", "Tailwind CSS",] },
    { name: "Backend", items: ["Node.js", "Django", "Laravel","Keycloak" ] },
    { name: "Database", items: ["MongoDB", "PostgreSQL", "MySQL", ] },
    { name: "DevOps", items: ["Docker", "Git", "GitHub Actions"] },
    { name: "Autres", items: ["Machine Learning"] }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark:bg-gray-900 dark:text-white' : 'bg-white text-gray-900'}`}>
      {/* Header */}
      <header className={`fixed w-full z-50 transition-colors duration-300 ${darkMode ? 'dark:bg-gray-800 dark:text-white' : 'bg-white text-gray-900'} shadow-md`}>
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">WK</span>
            <span className="ml-2 font-semibold">William Kacheo</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('accueil')} 
              className={`${activeSection === 'accueil' ? 'text-blue-600 dark:text-blue-400' : 'hover:text-blue-600 dark:hover:text-blue-400'}`}
            >
              Accueil
            </button>
            <button 
              onClick={() => scrollToSection('apropos')} 
              className={`${activeSection === 'apropos' ? 'text-blue-600 dark:text-blue-400' : 'hover:text-blue-600 dark:hover:text-blue-400'}`}
            >
              À propos
            </button>
            <button 
              onClick={() => scrollToSection('competences')} 
              className={`${activeSection === 'competences' ? 'text-blue-600 dark:text-blue-400' : 'hover:text-blue-600 dark:hover:text-blue-400'}`}
            >
              Compétences
            </button>
            <button 
              onClick={() => scrollToSection('projets')} 
              className={`${activeSection === 'projets' ? 'text-blue-600 dark:text-blue-400' : 'hover:text-blue-600 dark:hover:text-blue-400'}`}
            >
              Projets
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className={`${activeSection === 'contact' ? 'text-blue-600 dark:text-blue-400' : 'hover:text-blue-600 dark:hover:text-blue-400'}`}
            >
              Contact
            </button>
          </div>
          
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setDarkMode(!darkMode)} 
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            
            <button 
              onClick={toggleMenu} 
              className="md:hidden p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className={`md:hidden transition-colors duration-300 ${darkMode ? 'dark:bg-gray-800' : 'bg-white'} shadow-lg`}>
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('accueil')} 
                className={`py-2 ${activeSection === 'accueil' ? 'text-blue-600 dark:text-blue-400' : 'hover:text-blue-600 dark:hover:text-blue-400'}`}
              >
                Accueil
              </button>
              <button 
                onClick={() => scrollToSection('apropos')} 
                className={`py-2 ${activeSection === 'apropos' ? 'text-blue-600 dark:text-blue-400' : 'hover:text-blue-600 dark:hover:text-blue-400'}`}
              >
                À propos
              </button>
              <button 
                onClick={() => scrollToSection('competences')} 
                className={`py-2 ${activeSection === 'competences' ? 'text-blue-600 dark:text-blue-400' : 'hover:text-blue-600 dark:hover:text-blue-400'}`}
              >
                Compétences
              </button>
              <button 
                onClick={() => scrollToSection('projets')} 
                className={`py-2 ${activeSection === 'projets' ? 'text-blue-600 dark:text-blue-400' : 'hover:text-blue-600 dark:hover:text-blue-400'}`}
              >
                Projets
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className={`py-2 ${activeSection === 'contact' ? 'text-blue-600 dark:text-blue-400' : 'hover:text-blue-600 dark:hover:text-blue-400'}`}
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section id="accueil" className="pt-28 pb-20 md:pt-40 md:pb-32 px-4 transition-colors duration-300 dark:bg-gray-900">
          <div className="container mx-auto flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                <span className="block">Bonjour, je suis</span>
                <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">William Kacheo</span>
              </h1>
              <h2 className="text-xl md:text-2xl mb-6 text-gray-600 dark:text-gray-300">Développeur Fullstack</h2>
              <p className="text-lg mb-8 max-w-lg text-gray-700 dark:text-gray-300">
                Étudiant en MBA2 en Conception et Développement de Solutions Digitales à ISM Dakar, 
                passionné par la création d'applications web modernes et performantes.
              </p>
              <div className="flex space-x-4">
                <button 
                  onClick={() => scrollToSection('projets')}
                  className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:opacity-90 transition-opacity flex items-center"
                >
                  Voir mes projets
                  <ChevronRight size={20} className="ml-2" />
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="px-6 py-3 border-2 border-blue-500 text-blue-500 dark:border-blue-400 dark:text-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors"
                >
                  Me contacter
                </button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-500 shadow-xl">
                <img 
                  src="src/images/WhatsApp Image 2025-02-28 à 16.07.13_b1dbaa06.jpg" 
                  alt="William Kacheo" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="apropos" className="py-20 px-4 transition-colors duration-300 dark:bg-gray-800">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">À propos de moi</span>
            </h2>
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
                <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
                  Je suis un développeur fullstack passionné par la création d'applications web modernes et performantes. 
                  Actuellement étudiant en MBA2 en Conception et Développement de Solutions Digitales à ISM Dakar, 
                  je combine mes connaissances théoriques avec une expérience pratique dans le développement web.
                </p>
                <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
                  Ma passion pour le code a commencé dès mes premières années d'études, et depuis, 
                  j'ai travaillé sur divers projets qui m'ont permis de développer mes compétences 
                  tant en frontend qu'en backend.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  Je suis constamment à la recherche de nouvelles technologies et méthodologies 
                  pour améliorer mes compétences et rester à jour dans ce domaine en constante évolution.
                </p>
              </div>
              <div className="md:w-1/2 grid grid-cols-2 gap-6">
                <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md transition-transform hover:scale-105">
                  <Code size={40} className="text-blue-500 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Frontend</h3>
                  <p className="text-gray-600 dark:text-gray-300">Création d'interfaces utilisateur modernes et réactives avec les dernières technologies.</p>
                </div>
                <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md transition-transform hover:scale-105">
                  <Server size={40} className="text-purple-500 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Backend</h3>
                  <p className="text-gray-600 dark:text-gray-300">Développement de serveurs robustes et d'APIs performantes pour vos applications.</p>
                </div>
                <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md transition-transform hover:scale-105">
                  <Database size={40} className="text-green-500 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Bases de données</h3>
                  <p className="text-gray-600 dark:text-gray-300">Conception et optimisation de bases de données pour des performances optimales.</p>
                </div>
                <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md transition-transform hover:scale-105">
                  <Briefcase size={40} className="text-amber-500 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Gestion de projet</h3>
                  <p className="text-gray-600 dark:text-gray-300">Coordination et suivi de projets web de la conception à la livraison.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="competences" className="py-20 px-4 transition-colors duration-300 dark:bg-gray-900">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Mes compétences</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {skills.map((skillGroup, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 py-4 px-6">
                    <h3 className="text-xl font-bold text-white">{skillGroup.name}</h3>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-2">
                      {skillGroup.items.map((skill, skillIndex) => (
                        <li key={skillIndex} className="flex items-center text-gray-700 dark:text-gray-300">
                          <ChevronRight size={16} className="text-blue-500 mr-2" />
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projets" className="py-20 px-4 transition-colors duration-300 dark:bg-gray-800">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Mes projets</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div key={index} className="bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span 
                            key={techIndex} 
                            className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <button className="flex items-center text-blue-600 dark:text-blue-400 hover:underline">
                     Voir le projet <ExternalLink size={16} className="ml-1" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-4 transition-colors duration-300 dark:bg-gray-900">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Me contacter</span>
            </h2>
            <div className="flex flex-col md:flex-row gap-10">
              <div className="md:w-1/2">
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Nom complet</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white" 
                      placeholder="Votre nom"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white" 
                      placeholder="votre@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
                    <textarea 
                      id="message" 
                      rows={5} 
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white" 
                      placeholder="Votre message..."
                    ></textarea>
                  </div>
                  <button 
                    type="submit" 
                    className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:opacity-90 transition-opacity"
                  >
                    Envoyer le message
                  </button>
                </form>
              </div>
              <div className="md:w-1/2">
                <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg h-full">
                  <h3 className="text-2xl font-bold mb-6">Informations de contact</h3>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <User className="text-blue-500 mr-4 mt-1" />
                      <div>
                        <h4 className="font-semibold">Nom</h4>
                        <p className="text-gray-600 dark:text-gray-300">William Kacheo</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Mail className="text-blue-500 mr-4 mt-1" />
                      <div>
                        <h4 className="font-semibold">Email</h4>
                        <p className="text-gray-600 dark:text-gray-300">willikacheo@outlook.com</p>
                      </div> 
                    </div>
                    <div className="flex items-start">
                      <Phone className="text-blue-500 mr-4 mt-1" />
                      <div>
                        <h4 className="font-semibold">Téléphone</h4>
                        <p className="text-gray-600 dark:text-gray-300">+221 78 535 08 36</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Briefcase className="text-blue-500 mr-4 mt-1" />
                      <div>
                        <h4 className="font-semibold">Éducation</h4>
                        <p className="text-gray-600 dark:text-gray-300">MBA2 en Conception et Développement de Solutions Digitales</p>
                        <p className="text-gray-600 dark:text-gray-300">ISM Dakar</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-8">
                    <h4 className="font-semibold mb-4">Réseaux sociaux</h4>
                    <div className="flex space-x-4">
                      <a href="https://github.com/Kacheo-5" className="p-3 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors">
                        <Github size={24} className="text-gray-800 dark:text-gray-200" />
                      </a>
                      <a href="https://www.linkedin.com/in/william-r-kadoria-kacheo-1a61332b7/" className="p-3 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors">
                        <Linkedin size={24} className="text-gray-800 dark:text-gray-200" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-200 dark:border-gray-700 transition-colors duration-300 dark:bg-gray-800">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <span className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">William Kacheo</span>
              <p className="text-gray-600 dark:text-gray-300 mt-2">Développeur Fullstack</p>
            </div>
            <div className="flex space-x-6">
              <a href="https://github.com/Kacheo-5" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/william-r-kadoria-kacheo-1a61332b7/" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">
                <Linkedin size={20} />
              </a>
              <a href="willikacheo@outlook.com" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">
                <Mail size={20} />
              </a>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-600 dark:text-gray-300">
            <p>&copy; {new Date().getFullYear()} William Robert Kacheo. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;