import Projects from '../components/Projects';
//import Footer from '../components/Footer';


const Portfolio = () => {
    const projects = [
        {
            title: 'Project One',
            text: 'This webpage application features several different components that cover helpful tips and information pertaining to studying, acclimating to the classroom via zoom, test prep and more.',
            image: '/images/project1.png',
            deployedLink: 'https://brownfielde.github.io/team-project-1/',
            repoLink: 'https://github.com/brownfielde/team-project-1.git',
        },
        {
            title: 'README Generator',
            text: 'A professional README generator.',
            image: '/images/readme-generator.png',
            //deployedLink: 'https://brownfielde.github.io/team-project-1/',
            repoLink: 'https://github.com/brownfielde/readme-generator',
        },
        {
            title: 'Employee Tracker Database',
            text: 'A command-line application dedicated to managing a database of employees, managers, departments, roles and salaries. This application makes use of the inquirer package to accept user input and return a result based on data entered.',
            image: '/images/employee-tracker.png',
            //deployedLink: 'https://brownfielde.github.io/team-project-1/',
            repoLink: 'https://github.com/brownfielde/employee-tracker',
        },
        // {
        //     title: 'Project One',
        //     image: 'src/assets/images/demo-1 copy.png',
        //     deployedLink: 'https://brownfielde.github.io/team-project-1/',
        //     repoLink: 'https://github.com/brownfielde/team-project-1.git',
        // },
    
    ];

    return (
        <div className="portfolio">
            <h2></h2>
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