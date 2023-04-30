
export interface ProjectsType {
  title: string
  description: string
  image: string
  GitHub: string
  hosted: string
  tags: string[]
}

export const ProjectsData: ProjectsType[] = [
  {
    title: 'UPSC Pre | Educational App with 5k+ users',
    description: `FUPSC Pre app is designed for IAS aspirants and anyone who is preparing for exams like UPSC Prelims`,
    image: 'https://play-lh.googleusercontent.com/BZsMcxdXk_eaGaZ9vRZnbtrRxXX9qZJviz99F90KIb0vFCE2DYLeQ1zoem5Iu2dJQQ=w2560-h1440-rw',
    GitHub: '',
    hosted: 'https://play.google.com/store/apps/details?id=com.upscpre.iasprep',
    tags: ['Elasticsearch', 'Dagger', 'RoomDB', 'Nginx', 'AWS', 'Bitbucket', 'Gunicorn', 'Django', 'Python','frontend','backend']
  },
  {
    title: 'PeekNshop | e-commerce for local stores',
    description: `Look at local store's inventory and know whether the items they are looking for are available or not.`,
    image: 'https://user-images.githubusercontent.com/48962308/164381966-91edf596-5d0b-4957-951f-ce17009ad6c5.png',
    GitHub: 'https://github.com/Nithin-Kamineni/peekNshop',
    hosted: '',
    tags: ['GO','Angular','javaScript','HTML','CSS','GORM','MySQL','backend']
  },
  {
    title: 'Library Managment System',
    description: `System to manage operations of universities library`,
    image: 'https://instanteduhelp-14bb3.kxcdn.com/wp-content/uploads/2021/09/1-2.png',
    GitHub: 'https://github.com/Nithin-Kamineni/LibraryManagmentSystem',
    hosted: '',
    tags: ['Spring-boot','java','react','typeScript','HTML','frontend','backend']
  },
  {
    title: 'Online Voting System | Private Project',
    description: `Blockchain based system that is used to store the voting informating in a e-ledger`,
    image: 'https://repository-images.githubusercontent.com/348623348/0fb955b1-5c09-4af8-ae86-5088058b086c',
    GitHub: 'https://github.com/Nithin-Kamineni/Online-Voting-System',
    hosted: '',
    tags: ['javascript','ethereum','blockchain']
  },
  {
    title: 'Portfolio | Private Project',
    description: `Personal website to display skills and achivments`,
    image: 'https://user-images.githubusercontent.com/45392510/235372460-89e48e6f-a621-4dc9-bcdc-111cafe7a773.png',
    GitHub: '',
    hosted: 'https://nithinkamineni.com',
    tags: ['python','javaScript','react','typeScript','django','frontend']
  },
];
