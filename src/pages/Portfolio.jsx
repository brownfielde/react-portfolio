import Projects from '../components/Projects';


const Portfolio = () => {
    const projects = [
        {
            title: 'Project One',
            text: 'This webpage application features several different components that cover helpful tips and information pertaining to studying, acclimating to the classroom via zoom, test prep and more.',
            image: 'src/assets/images/demo-1 copy.png',
            deployedLink: 'https://brownfielde.github.io/team-project-1/',
            repoLink: 'https://github.com/brownfielde/team-project-1.git',
        },
        {
            title: 'README Generator',
            image: 'src/assets/images/demo-1 copy.png',
            deployedLink: 'https://brownfielde.github.io/team-project-1/',
            repoLink: 'https://github.com/brownfielde/team-project-1.git',
        },
        {
            title: 'Project One',
            image: 'src/assets/images/demo-1 copy.png',
            deployedLink: 'https://brownfielde.github.io/team-project-1/',
            repoLink: 'https://github.com/brownfielde/team-project-1.git',
        },
        {
            title: 'Project One',
            image: 'src/assets/images/demo-1 copy.png',
            deployedLink: 'https://brownfielde.github.io/team-project-1/',
            repoLink: 'https://github.com/brownfielde/team-project-1.git',
        },
    
    ];

    return (
        <div className="portfolio">
            <h2> Rashelle's Projects</h2>
            {projects.map((projects,index) => (
                <Projects 
                key={index}
                title={projects.title}
                text={projects.text}
                image={projects.image}
                deployedLink={projects.deployedLink}
                repoLink={projects.repoLink}
                />
            ))}
        </div>
    );
};

export default Portfolio; 