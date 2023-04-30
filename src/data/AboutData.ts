
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
  about1: '< A developer, who has passion for creating awesome things />',
  about2: '<I\'m a product guy. My passion is building great ideas with smart people and delivering thought-leading, massive scale apps that impact millions of people. I enjoy working on things that customers love, value and use every day.  />',
  roles: [
    "FullStack Developer",
    "Backend Developer",
    "Software Developer",
    "Data Engineer",
    "Backend Developer",
  ],
  aboutHeading:"Hi I am Nithin Kamineni",
  aboutText:"I'm a product guy. My passion is building great ideas with smart people and delivering thought-leading, massive scale apps that impact millions of people. I enjoy working on things that customers love, value and use every day. ",
  aboutFeature1:"I'm passionate about executing on technical, cultural/organization, and product forming challenges",
  aboutFeature2:"I've worked in different startups giving me the understanding of how to build products from scratch and scale them to million of user as well as the value of a team in building great products",
  aboutFeature3:"I've worked both in technical and other roles which help me to accurately understand the customer's perspective while building the products",
  imageUrl:"https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
};
