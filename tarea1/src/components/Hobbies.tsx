const hobbies: string[] = [
    'Language Studies',
    'Music',
    'Bodybuilding',
    'Racing',
    'Video Games',
    'Reading'
];

function Hobbies() {
    return (
        <section id='hobbies'>
            <h2 id='hobbies-title'>Hobbies</h2>
            <ul id='hobbies-list'>
                {hobbies.map((hobby, index) => (
                    <li key={index}>{hobby}</li>
                ))}
            </ul>
        </section>
    );
}

export default Hobbies;