import spirograph from '../assets/spirograph.png';
import careerPage from '../assets/careerPage.png';
import multiply from '../assets/multiply.png';
import mealPlanner from '../assets/mealPlanner.png';

const projectsDescription = {
  projectOne: {
    title: 'Spirograph App',
    description: 'Drawing app that makes mathematical roulette curves. React | JS | Paper.js | Styled Components | ESLint | Airbnb JS Style Guide.',
    image: spirograph,
    projectLink: 'https://frosty-raman-e9f7d7.netlify.com/',
    gitHubLink: 'https://github.com/alex-alina/spirograph',
  },
  projectTwo: {
    title: 'Career Page',
    description: 'Job posting page connected to an application form. React | JavaScript | Material-UI | CSS | SPA | Input validation.',
    image: careerPage,
    projectLink: 'https://optimistic-lamarr-981db4.netlify.com/',
    gitHubLink: 'https://github.com/alex-alina/ams-recruitment',
  },
  projectThree: {
    title: 'Meal Planner',
    description: 'Sustainable and planet friendly meal planner app (SPA). TypeScript | Koa | TypeORM | PostgreSQL| React | Redux | JS | CSS.',
    image: mealPlanner,
    projectLink: 'https://planet-friendly-meal-planner.netlify.com',
    gitHubLink: 'https://github.com/alex-alina/dinner-planner-client',
  },
  projectFour: {
    title: 'Multiply Landing Page',
    description: 'Static page with signup form that collects emails. React | JavaScript | Express | Sequelize | PostgreSQL | CSS | UI/UX.',
    image: multiply,
    projectLink: 'https://competent-golick-0dcc04.netlify.com/',
    gitHubLink: 'https://github.com/alex-alina/multiply-client',
  },
  buttons: {
    openProject: 'Open Project',
    gitHub: 'Open on GitHub',
  }
}

export default projectsDescription;