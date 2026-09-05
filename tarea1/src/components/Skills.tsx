const tecnologies: string[] = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Node.js",
  "Express",
  "MongoDB",
  'Cassandra'
];

function Skills() {
    return (
        <section id='skills'>
            <h2 id='skills-title'>Habilidades</h2>
            <ul id='skills-list'>
                {tecnologies.map((tecnology, index) => (
                    <li key={index} className='skill-item'>
                        {tecnology}
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default Skills;