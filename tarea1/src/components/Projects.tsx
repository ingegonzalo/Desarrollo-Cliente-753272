interface Project {
  id: number;
  name: string;
  description: string;
  tecnologies: string;
  link: string;
}

const projects: Project[] = [
  {
    id: 1,
    name: 'Projecto Invencible',
    description: 'Un juego estilo arcade inspirado en la popular serie de television de Invencible.',
    tecnologies: 'Java',
    link: 'https://youtu.be/R_Vv8h2lxFE?si=mOfF2Vx-myFlDxL-'
  },
  {
    id: 2,
    name: 'ChronoQuest',
    description: 'Un gestor personal con funcionalidades de calendario, tareas y notas, con herramientas de gamification',
    tecnologies: 'Typescript, Node, Handlebars, Express, MongoDB',
    link: 'https://github.com/Dakewer/ChronoQuest.git'
  },
  {
    id: 3,
    name: 'Interfaz Pacientes & Doctores Hospital Psiquiatrico',
    description: 'Una pagina web donde los familiares de los pacientes pueden ver el estado de sus familiares y los doctores pueden ver la informacion de sus pacientes.',
    tecnologies: 'JavaScript, CSS, HTML, Node, Express, MongoDB',
    link: 'https://github.com/ingegonzalo/Proyecto-Final-Dorx.git'
  }
];

function Projects() {
    return (
        <section id='projects'>
            <h2 id='projects-title'>Proyectos</h2>
            <ul id='projects-list'>
                {projects.map((project) => (
                    <li key={project.id} className='project-item'>
                        <h3>{project.name}</h3>
                        <p>{project.description}</p>
                        <p><strong>Tecnologías:</strong> {project.tecnologies.split(', ').join(', ')}</p>
                        <a href={project.link} target='_blank' rel='noopener noreferrer'>Ver {project.name}</a>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default Projects;