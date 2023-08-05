interface colorSchemeProjectTagsType {
    technology: string
    color: string
  }

interface colorSchemeBlogTagsType {
    technology: string
    color: string
  }

  const techList = [
    { technology: 'Python', color: '#306998' },
    { technology: 'Java', color: '#007396' },
    { technology: 'C', color: '#A8B9CC' },
    { technology: 'C++', color: '#00599C' },
    { technology: 'GO', color: '#00ADD8' },
    { technology: 'Node.js', color: '#339933' },
    { technology: 'JavaScript', color: '#F7DF1E' },
    { technology: 'TypeScript', color: '#007ACC' },
    { technology: 'Dart', color: '#0175C2' },
    { technology: 'Flutter', color: '#02569B' },
    { technology: 'Express', color: '#000000' },
    { technology: 'Spring-boot', color: '#6DB33F' },
    { technology: 'Bootstrap', color: '#7952B3' },
    { technology: 'Angular', color: '#DD0031' },
    { technology: 'React', color: '#61DAFB' },
    { technology: 'Kubernetes', color: '#326CE5' },
    { technology: 'Docker', color: '#2496ED' },
    { technology: 'CI/CD', color: '#6D6D6D' },
    { technology: 'HTML', color: '#E34F26' },
    { technology: 'CSS', color: '#1572B6' },
    { technology: 'Nginx', color: '#269539' },
    { technology: 'Android Studio', color: '#3DDC84' },
    { technology: 'OOP/OOD', color: '#FF4500' },
    { technology: 'Full stack development', color: '#8A2BE2' },
    { technology: 'MySQL', color: '#4479A1' },
    { technology: 'SQL Server', color: '#CC2927' },
    { technology: 'Postman', color: '#FF6C37' },
    { technology: 'REST', color: '#6CB33F' },
    { technology: 'MongoDB', color: '#47A248' },
    { technology: 'Research', color: '#8F8F8F' },
    { technology: 'Elasticsearch', color: '#005571' }, 
    { technology: 'Dagger', color: '#FC5300' }, 
    { technology: 'RoomDB', color: '#FF4081' }, 
    { technology: 'AWS', color: '#FF9900' }, 
    { technology: 'Bitbucket', color: '#205081' }, 
    { technology: 'Gunicorn', color: '#45B8AC' }, 
    { technology: 'GORM', color: '#311C87' }, 
    { technology: 'Django', color: '#092E20' }, 
    { technology: 'frontend', color: '#00BFFF' }, 
    { technology: 'backend', color: '#FF1493' }, 
    { technology: 'SignalR', color: '#9F409F' }, 
    { technology: 'C#', color: '#68217A' },
    { technology: 'ASP .Net', color: '#0C2461' }, 
    { technology: 'Blazor', color: '#512BD4' }, 
    { technology: 'SQL server', color: '#CC2927' }, 
    { technology: 'Socket programming', color: '#FFD700' }, 
    { technology: 'Spotify API', color: '#1ED760' }, 
    { technology: 'Microsoft Azure', color: '#0078D4' }, 
    { technology: 'Jenkins', color: '#D24939' }, 
    { technology: 'Swagger UI', color: '#85EA2D' }, 
    { technology: 'Open API', color: '#3D3D3D' }, 
    { technology: 'Auth0', color: '#EB5424' }, 
    { technology: 'Okta', color: '#3D4B8A' }, 
    { technology: 'Zipkin', color: '#FAB040' }, 
    { technology: 'Kafka', color: '#231F20' }, 
    { technology: 'RabbitMQ', color: '#FF6600' },

  ]
  ;
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