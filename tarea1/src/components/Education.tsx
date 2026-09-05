interface Degree {
    institution: string;
    title: string;
    period: string;
}

const degrees: Degree[] = [
    {
        institution: 'Universidad del Valle de Mexico',
        title: 'Preparatoria Bicultural',
        period: '2019 - 2023'
    },
    {
        institution: 'Instituto Tecnológico de Estudios Superiores de Occidente',
        title: 'Licenciatura en Ingeniería en Desarrollo de Software',
        period: '2023 - Actualidad'
    }
];

function Education() {
    return (
        <section id='education'>
            <h2 id='education-title'>Educación</h2>
            <ul id='education-list'>
                {degrees.map((degree, index) => (
                    <li key={index}>
                        <h3>{degree.title}</h3>
                        <p>{degree.institution}</p>
                        <p>{degree.period}</p>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default Education;