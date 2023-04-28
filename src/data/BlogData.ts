
interface BlogType {
    title: string
    description: string
    image: string
    url: string
    blogTags: string[]
  }
  
  export const BlogsData: BlogType[] = [
    {
      title: 'Portfolio | Private Project',
      description: `Fastest Landing page built with React, Next Js and Styled Components. modern monorepo architecture. Minimal design`,
      image: 'https://erfjs.com/images/protfolio/my_portfolio/img-1.png',
      url: 'google.com',
      blogTags: ['Devops','Hosting','Nginx','chatGPT'],
    },
    {
      title: 'Animated Portfolio',
      description: `Portfolio website built with React v18.2, Typescript,  react-router-dom v6, framer-motion, react-icons, Scss`,
      image: 'https://raw.githubusercontent.com/erfjs/animated-portfolio/main/src/assets/example.png',
      url: 'google.com',
      blogTags: ['Devops','Hosting','Nginx'],
    },
    {
      title: 'Personalized Card | Ejbank',
      description: `You can personalize your bank card as you want. A very interesting program using only HTML, CSS and JavaScript, with which you can change the card name, color and model`,
      image: 'https://raw.githubusercontent.com/erfjs/ejbank/main/img/example.png',
      url: 'google.com',
      blogTags: ['Devops','Hosting','Nginx'],
    },
    {
      title: 'React Todo List',
      description: `A simple to-do list app powered by React, Chakra UI, React icons. Save in Local Storage`,
      image: 'https://raw.githubusercontent.com/erfjs/Todo-list/main/readme/example.png',
      url: 'google.com',
      blogTags: ['Devops','Hosting','Nginx'],
    },
  ];
  