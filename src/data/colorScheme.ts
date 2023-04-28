interface colorSchemeProjectTagsType {
    technology: string
    color: string
  }

interface colorSchemeBlogTagsType {
    technology: string
    color: string
  }

  const techList = [
        {
          technology: 'Python',
          color: 'Yellow',
        },
        {
          technology: 'Java',
          color: 'Red',
        },
        {
          technology: 'C',
          color: 'Orange',
        },
        {
          technology: 'C++',
          color: 'Yellow',
        },
        {
          technology: 'GO',
          color: 'Green',
        },
        {
          technology: 'Node.js',
          color: 'Teal',
        },
        {
          technology: 'JavaScript',
          color: 'Blue',
        },
        {
          technology: 'TypeScript',
          color: 'Cyan',
        },
        {
          technology: 'Dart',
          color: 'Purple',
        },
        {
          technology: 'Flutter',
          color: 'Pink',
        },
        {
          technology: 'Express',
          color: 'Gray',
        },
        {
          technology: 'Spring-boot',
          color: 'Red',
        },
        {
          technology: 'Bootstrap',
          color: 'Orange',
        },
        {
          technology: 'Angular',
          color: 'Yellow',
        },
        {
          technology: 'ReactJs',
          color: 'Green',
        },
        {
          technology: 'Kubernetes',
          color: 'Teal',
        },
        {
          technology: 'Docker',
          color: 'Blue',
        },
        {
          technology: 'CI/CD',
          color: 'Cyan',
        },
        {
          technology: 'HTML/CSS',
          color: 'Purple',
        },
        {
          technology: 'Nginx',
          color: 'Pink',
        },
        {
          technology: 'Android Studio',
          color: 'Gray',
        },
        {
          technology: 'OOP/OOD',
          color: 'Red',
        },
        {
          technology: 'Full stack development',
          color: 'Orange',
        },
        {
          technology: 'MySQL',
          color: 'Yellow',
        },
        {
          technology: 'MS SQL Server',
          color: 'Green',
        },
        {
          technology: 'Postman',
          color: 'Teal',
        },
        {
          technology: 'REST',
          color: 'Blue',
        },
        {
          technology: 'MongoDB',
          color: 'Cyan',
        }
      ];
  const BlogList: colorSchemeBlogTagsType[] = [
        {
          technology: 'Python',
          color: 'Yellow',
        },
        {
          technology: 'Java',
          color: 'Red',
        },
        {
          technology: 'C',
          color: 'Orange',
        },
        {
          technology: 'C++',
          color: 'Yellow',
        },
        {
          technology: 'GO',
          color: 'Green',
        },
        {
          technology: 'Node.js',
          color: 'Teal',
        },
        {
          technology: 'JavaScript',
          color: 'Blue',
        },
        {
          technology: 'TypeScript',
          color: 'Cyan',
        },
        {
          technology: 'Dart',
          color: 'Purple',
        },
        {
          technology: 'Flutter',
          color: 'Pink',
        },
        {
          technology: 'Express',
          color: 'Gray',
        },
        {
          technology: 'Spring-boot',
          color: 'Red',
        },
        {
          technology: 'Bootstrap',
          color: 'Orange',
        },
        {
          technology: 'Angular',
          color: 'Yellow',
        },
        {
          technology: 'ReactJs',
          color: 'Green',
        },
        {
          technology: 'Kubernetes',
          color: 'Teal',
        },
        {
          technology: 'Docker',
          color: 'Blue',
        },
        {
          technology: 'CI/CD',
          color: 'Cyan',
        },
        {
          technology: 'HTML/CSS',
          color: 'Purple',
        },
        {
          technology: 'Nginx',
          color: 'Pink',
        },
        {
          technology: 'Android Studio',
          color: 'Gray',
        },
        {
          technology: 'OOP/OOD',
          color: 'Red',
        },
        {
          technology: 'Full stack development',
          color: 'Orange',
        },
        {
          technology: 'MySQL',
          color: 'Yellow',
        },
        {
          technology: 'MS SQL Server',
          color: 'Green',
        },
        {
          technology: 'Postman',
          color: 'Teal',
        },
        {
          technology: 'REST',
          color: 'Blue',
        },
        {
          technology: 'MongoDB',
          color: 'Cyan',
        },
      {
        technology: 'ChatGPT',
        color: 'green', // dark blue-grey
    },
    {
        technology: 'DevOps',
        color: 'Blue', // yellow
    },
    {
        technology: 'Economy',
        color: 'Green', // purple
    },
    {
        technology: 'Roadmap',
        color: 'Teal', // green
    },
    {
        technology: 'Software',
        color: 'Pink', // pink
    },
  ];
  
 export const techHashMap:Record<string, string> = {};
export const blogHashMap:Record<string, string> = {};

techList.forEach((tech) => {
  techHashMap[tech.technology.toLowerCase()] = tech.color.toLowerCase();
});

BlogList.forEach((blog) => {
    blogHashMap[blog.technology.toLowerCase()] = blog.color.toLowerCase();
  });