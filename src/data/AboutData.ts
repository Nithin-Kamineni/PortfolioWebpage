
interface AboutType {
  firstName: string,
  lastName: string,
  about1: string,
  about2: string,
  roles: string[],
  aboutHeading: string,
  aboutText: string,
  aboutFeature1: string,
  aboutFeature2: string,
  aboutFeature3: string,
  imageUrl: string
}


export const AboutData: AboutType = {
  firstName: 'Venkata Nithin',
  lastName: 'Kamineni',
  about1: '<A Developer who loves to build cool things />',
  about2: '<Frontend Developer And Web Designer />',
  roles: [
    "FullStack Developer",
    "Backend Developer",
    "Software Developer",
    "Data Engineer",
  ],
  aboutHeading:"A digital Product design agency",
  aboutText:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore",
  aboutFeature1:"Business Planning",
  aboutFeature2:"Financial Planning",
  aboutFeature3:"Market Analysis",
  imageUrl:"https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
};
