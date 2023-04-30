export interface LinkType {
  id: string,
  title: string;
  linkTo: string;
}

export const LinksData: LinkType[] = [
  {
    id:'home',
    title: 'Home',
    linkTo: '#home',
  },
  {
    id:'experience',
    title: 'Experience',
    linkTo: '#experience',
  },
  {
    id:'projects',
    title: 'Projects',
    linkTo: '#projects',
  },
  {
    id:'skills',
    title: 'Skills',
    linkTo: '#skills',
  },
  {
    id:'blogs',
    title: 'Blogs',
    linkTo: '#blogs'
  },
  {
    id:'contact',
    title: 'Contact',
    linkTo: '#contact',
  },
  {
    id:'resume',
    title: 'Resume',
    linkTo: 'https://drive.google.com/file/d/1hPL8aVCV_U5vv6sSt25x-Qotd-twoQ6w/view?usp=sharing'
  }
];
