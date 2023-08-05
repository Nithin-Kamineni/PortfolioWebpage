
export interface ProjectsType {
  title: string
  description: string
  image: string[]
  GitHub: string
  hosted: string
  tags: string[]
  points: string[]
  publition: string
}

export const ProjectsData: ProjectsType[] = [
  {
    title: 'UPSC Pre | Educational App with 5k+ users',
    description: `UPSC Pre is a cutting-edge edtech platform designed specifically for aspirants preparing for prestigious exams like UPSC Prelims. Thanks to its innovative features and personalized approach, UPSC Pre has witnessed a remarkable 20% increase in user productivity. As a result of its exceptional performance and user satisfaction, the app has now earned a spot among the top ten UPSC-related applications on the Google Play store.`,
    image: ['https://play-lh.googleusercontent.com/BZsMcxdXk_eaGaZ9vRZnbtrRxXX9qZJviz99F90KIb0vFCE2DYLeQ1zoem5Iu2dJQQ=w2560-h1440-rw',
    'https://play-lh.googleusercontent.com/Qubi0f7RYrg4s9qvUrLFFKiQhlJpz4A-COFfMnEeoU2T4ZC0MnHAQ4mn1QRDMJrNFhQ=w2560-h1440-rw',
    'https://play-lh.googleusercontent.com/ai_W-Vl7AAwQGbh9i54swS_nu9zOGeST9cNiXVKlmhisjbAh55WiKMeVfGrzHgzI3fia=w2560-h1440-rw',
    'https://play-lh.googleusercontent.com/gn8zyQo9MqGynRILAT9_K4-jGAmOqu_OLiJIaLVJVnVp74_oDgbI2uJizg9fR0j5uJM=w2560-h1440-rw',
    'https://play-lh.googleusercontent.com/bcw05Ojjs14y0MlhGfFD2gSV1Wrc5Ee3YlbAXgbY-zfyEcpF9qnnzOLzfeEpQ2eGTiZJ=w2560-h1440-rw',
    'https://play-lh.googleusercontent.com/_xKbp-F9_ubQTq2j1ftZ2e52rPo3mh9i90HrHFCSHmyM8ibMMy0JvPWsHqdgA0k5ZWg=w2560-h1440-rw',
    'https://play-lh.googleusercontent.com/GBJLQlpB3vkudIDU8UQWIbRKx_LmiJUAvTDvq980JQJZgbenrSxSmjEGRQxXA5O52DM=w2560-h1440-rw'
  ],
    GitHub: '',
    publition: '',
    hosted: 'https://play.google.com/store/apps/details?id=com.upscpre.iasprep',
    tags: ['Elasticsearch', 'Dagger', 'RoomDB', 'Nginx', 'AWS', 'Bitbucket', 'Gunicorn', 'Django', 'Python','frontend','backend'],
    points:['Edtech platform for students preparing for 4 different exams conducted by UPSC (Union Public Service Commission) of India',
            'Increased productivity by 20% and is now ranked in the top ten UPSC-related applications on the Google Play store.']
  },
  {
    title: 'PeekNshop | e-commerce for local stores',
    description: `The application will display items and inventories of local stores. The user can view the stores near their vicinity and observe the items available in that store. The users can also order the things they want to be delivered to their homes or office.`,
    image: ['https://user-images.githubusercontent.com/48962308/164381966-91edf596-5d0b-4957-951f-ce17009ad6c5.png',
    'https://user-images.githubusercontent.com/48962308/164381978-90f23600-16b4-4046-9b78-38b8122be4db.png',
    'https://user-images.githubusercontent.com/48962308/164381993-9e9c7eda-5b29-46a5-9f5b-829f57172f60.png',
    'https://user-images.githubusercontent.com/48962308/164382024-d2665e80-92a2-48fe-a786-887842c939de.png',
    'https://user-images.githubusercontent.com/48962308/164382041-56046a3b-fc81-4f4b-9b8c-a05370355940.png',
    'https://user-images.githubusercontent.com/48962308/164382054-177cb551-5025-4aad-9b1c-d5de5145ce5f.png',
    'https://user-images.githubusercontent.com/48962308/164382069-150061d7-8f71-4cc9-af8f-bb6e59fbb100.png',
    'https://user-images.githubusercontent.com/48962308/164382114-b7463322-a0a8-476f-a796-98e3ec566b94.png',
    'https://user-images.githubusercontent.com/48962308/164382119-ace1af1a-3789-4edf-bad3-737ebf679988.png',
    'https://user-images.githubusercontent.com/48962308/164382132-2917193d-ba64-4823-8c7f-f345dc899e0c.png'
  ],
    GitHub: 'https://github.com/Nithin-Kamineni/peekNshop',
    hosted: '',
    publition: '',
    tags: ['GO','Angular','javaScript','HTML','CSS','GORM','MySQL','backend','frontend'],
    points:['E-commerce site for displaying items available in local stores that do not having proper online shopping facilities and feature to set out local offers by accessing the user location',
    'Lead a team of 4 and designed 4 microservices for server-side functionality for setting store registration, store inventory, products checkout, and delivery']
  },
  {
    title: 'Book Wise | Library Managment System',
    description: `Book-Wise is a state-of-the-art library management system designed to streamline and enhance the entire process of library operations. This comprehensive project seamlessly integrates cutting-edge technologies such as React, Spring Boot, Stripe, and SQL to offer a user-friendly experience for both library administrators and clients.`,
    image: ['https://instanteduhelp-14bb3.kxcdn.com/wp-content/uploads/2021/09/1-2.png'],
    GitHub: 'https://github.com/Nithin-Kamineni/LibraryManagmentSystem',
    hosted: 'https://ec2-18-189-18-248.us-east-2.compute.amazonaws.com/home',
    publition: '',
    tags: ['Spring-boot','java','react','typeScript','MySQL','Okta','HTML','frontend','backend','Docker','Micro Services','Kafka','Stripe','Swagger UI', 'Open API'],
    points:['Additional to CRUD functionality, users can reserve and add new books with a server response time of less than 3000ms',
            'OAuth 2.0 protocol for authentication using Okta with user access levels using JWT-based authentication system']
  },
  {
    title: 'Tinder Clone  | Dating app',
    description: `Our Tinder Clone is a modern dating app with like, match, and chat functionalities. It leverages SignalR architecture for real-time communication and is deployed on fly.io using Docker for seamless cloud deployment. The app incorporates role-based JWT authentication for secure user account management, including roles for users and admins.`,
    image: ['https://instanteduhelp-14bb3.kxcdn.com/wp-content/uploads/2021/09/1-2.png'],
    GitHub: 'https://github.com/Nithin-Kamineni/Tinder-Clone',
    hosted: 'https://datingapp-101.fly.dev/',
    publition: '',
    tags: ['Angular','C#','ASP .Net','NUnit','PostgreSQL','SignalR','Socket Programming','Cloudinary','Docker','Jenkins','fly.io','frontend','backend','Swagger UI', 'Open API'],
    points:['Developed a Tinder Clone with like, match, and chat functionalities leveraging signalR architecture for real-time communication and Dockerized the application, published on fly.io for cloud deployment',
            'Programmed roles of users, admins, and moderators with secure role-based JWT authentication for controlling and managing user accounts, including deactivation capabilities']
  },
  {
    title: 'Eshop  | E-commerce clone',
    description: `Eshop is a feature-rich e-commerce application built with C#, ASP .Net, and Blazor. It empowers admins with CRUD capabilities for products and ensures secure payments through Stripe integration. The app incorporates a robust JWT-based authentication system with user access levels, guaranteeing a safe and secure shopping experience for all users.`,
    image: ['https://instanteduhelp-14bb3.kxcdn.com/wp-content/uploads/2021/09/1-2.png'],
    GitHub: 'https://github.com/Nithin-Kamineni/eshopRepo',
    hosted: 'http://eshopclient.azurewebsites.net/',
    publition: '',
    tags: ['C#','ASP .Net','Blazor','SQL server','Stripe','Microsoft Azure','Jenkins', 'frontend','backend','Swagger UI', 'Open API'],
    points:['E-commerce application with CRUD functionalities for products for admins and secure payment functionalities using Stripe.',
            'Implemented a JWT-based authentication system and user access levels in the Eccomerce app to provide secure authentication']
  },
  {
    title: 'Shopwise | E-commerce clone',
    description: `Ecommerce Clone is a feature-rich web app using Spring Boot, Angular, MySQL, and Java. It enables customers to browse products, add items to their cart, and securely checkout with Stripe. Okta integration ensures safe user authentication. The app is containerized with Docker for easy deployment, while Kafka facilitates efficient event streaming.`,
    image: ['https://instanteduhelp-14bb3.kxcdn.com/wp-content/uploads/2021/09/1-2.png'],
    GitHub: 'https://github.com/Nithin-Kamineni/Ecommerce-Angular-Spring',
    hosted: 'https://tubular-bublanina-4fd929.netlify.app/products',
    publition: '',
    tags: ['Angular','Spring-boot', 'MySQL','java','TypeScript','Okta', 'Docker', 'Kafka', 'Stripe','HTML','frontend','backend','Swagger UI', 'Open API'],
    points:['Customers can easily browse products, add items to their cart, and complete the checkout process using payment method leveraging stripe. Oktas authentication integration ensures secure login and registration for users',
            'Containerized the application using Docker. Kafka is employed for efficient event streaming of mails and communication between different microservices, enhancing the overall performance and reliability of the e-commerce clone']
  },
  {
    title: 'Mango  | Food Ordering Site',
    description: `Mango is a food ordering site powered by C#, ASP .Net, and Microservices. With fast server response times below 3000ms, it allows admins to manage products and coupons, while customers can order items using Stripe coupons. The site uses a secure JWT-based authentication system with user access levels for seamless user experience.`,
    image: ['https://instanteduhelp-14bb3.kxcdn.com/wp-content/uploads/2021/09/1-2.png'],
    GitHub: 'https://github.com/Nithin-Kamineni/mango',
    hosted: 'https://mangowebmicroservice.azurewebsites.net/',
    publition: '',
    tags: ['C#','ASP .Net','Blazor','SQL server','Stripe','Microsoft Azure','Jenkins','backend','Swagger UI', 'Open API'],
    points:['Addition to CRUD functionality, admin can add new products and coupons and add customers can order items with stripe coupons with a server response time of less than 3000ms through API gateway.',
            'Using .Net authentications system for authentication with user access levels using JWT-based authentication system utilising multiple microservices.']
  },
  {
    title: 'House Party Clone  | Synchronized Music sharing app',
    description: `Our House Party Clone is a dynamic and interactive app that redefines group music experiences. Users can create or join rooms using a unique code, enabling synchronized music playback and collective track voting for an engaging house party atmosphere. Leveraging the Spotify API, the app allows real-time song search, addition, and management.`,
    image: ['https://instanteduhelp-14bb3.kxcdn.com/wp-content/uploads/2021/09/1-2.png'],
    GitHub: 'https://github.com/Nithin-Kamineni/House-Party-Clone',
    hosted: 'https://housepartycloneappbynithin-9b5ac9a09bbb.herokuapp.com/',
    publition: '',
    tags: ['Django','react', 'Python', 'Javascript', 'Spotify API', 'Socket programming', 'HTML','frontend','backend'],
    points:['Seamless Group Music Experience: Users can create/join rooms with a join code, listen to synchronized songs, and collectively vote to skip tracks, fostering an interactive and engaging house party clone.',
            'Spotify Integration for Dynamic Playlists: The app leverages the Spotify API to enable users to search, add, and manage songs in real-time, ensuring a diverse and customizable music selection for the entire group.']
  },
  {
    title: 'Jira Clone | Project managment tool',
    description: `Jira Clone is a project and issue management tool built with NodeJs, ReactJs, and PostgreSQL. It utilizes OAuth 2.0 protocol for secure authentication, ensuring a mobile-friendly interface. The site includes a dashboard for real-time collaboration, employee performance reporting, and analytics display, enhancing team integration and agile development.`,
    image: ['https://instanteduhelp-14bb3.kxcdn.com/wp-content/uploads/2021/09/1-2.png'],
    GitHub: 'https://github.com/Nithin-Kamineni/Jira-clone',
    hosted: '',
    publition: '',
    tags: ['React','NodeJs', 'javascript', 'PostgreSQL', 'Auth0', 'typeScript','HTML', 'Docker', 'AWS', 'frontend','backend','Swagger UI', 'Open API'],
    points:['Project and Issue management tool for team integration, workflow and agile developmen, which is using OAuth 2.0 protocol for Authentication system with Mobile friendly interface.',
            'Dashboard to manage employee performance featuring reporiting and analytics display for real time collabaration']
  },
  {
    title: 'Disease Identification and Grain Classification of Rice | Research',
    description: `This project develops an ML-based app to detect rice crop diseases from images with high accuracy (97.17% to 99.45%). It also classifies rice grains based on shape, size, and color with 91.30% accuracy. The automated system saves time and labor for farmers, promoting better agricultural production and economic growth in rice-producing regions.`,
    image: ['https://instanteduhelp-14bb3.kxcdn.com/wp-content/uploads/2021/09/1-2.png'],
    GitHub: '',
    hosted: '',
    publition: 'http://jcdronline.org/admin/Uploads/Files/6246bd8e709364.92076684.pdf',
    tags: ['Python', 'CNN', 'Research'],
    points:['High Accuracy Disease Detection: The paper presents an ML-based app capable of accurately identifying rice crop diseases from images with an impressive range of accuracy (97.17% to 99.45%). This level of precision is crucial for early detection and intervention, enabling farmers to take timely measures to control and prevent the spread of diseases, thus potentially saving significant crop losses and enhancing agricultural productivity.',
            'Efficient Grain Classification: The paper also introduces an automated system that classifies rice grains based on their shape, size, and color with an accuracy rate of 91.30%. Accurate grain classification is vital for quality control in the rice industry, helping farmers and processors segregate grains for various purposes such as seed selection, milling, and export. By saving time and labor in this process, the system contributes to improved agricultural efficiency and economic growth in rice-producing regions.']
  },
  {
    title: 'Employee mangment system | Microservices project',
    description: `Project is based on building Microservices with Spring Boot, Spring Cloud, React, Kafka, RabbitMQ, Docker, and REST API. It covers the entire development process, from CRUD REST APIs to centralized configurations, load balancing, distributed tracing, and event-driven microservices. The final project demonstrates an Employee Management system communicating with various microservices`,
    image: ['https://user-images.githubusercontent.com/45392510/258299664-181cb7b8-e2b5-44b0-baa6-7195d1a8a14a.png','https://user-images.githubusercontent.com/45392510/258299405-e915c028-9b87-4c6a-b751-e9d2ec17ece1.png','https://user-images.githubusercontent.com/45392510/258299647-094a1879-cb5d-4833-aa4d-c83f5f0e5daa.png'],
    GitHub: 'https://github.com/Nithin-Kamineni/employee-managment-system',
    hosted: '',
    publition: '',
    tags: ['Spring-boot','java','Zipkin', 'Kafka', 'RabbitMQ','backend','Swagger UI', 'Open API'],
    points:['Microservices using a range of cutting-edge technologies, including Spring Boot, Spring Cloud, React, Kafka, RabbitMQ, Docker, and REST API. It covers all stages of Microservices development, emphasizing practical implementations and real-world project scenarios',
            'APIs with Spring Boot and Spring Data JPA, setting up service registries using Spring Cloud Netflix Eureka, and building API Gateways with Spring Cloud Gateway. They will also learn about distributed tracing using Spring Cloud Sleuth and Zipkin, and resilience patterns with Resilience4J']
  },
  {
    title: 'Progaming Compiler | Java language based JVM compiler',
    description: `Project aims to develop a Java-based programming language with phases like lexer, parser, AST, type checking, JVM, and Assembly code generation`,
    image: ['https://miro.medium.com/v2/resize:fit:887/1*s8dTZYdgq78g7y7bkJDrmg.png','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV3E0AGVANOd5anORFzOPqTcjmIVSPJvhzEvvLvF9O6Oi46TmNbPrZrSyuN5Kb2QQgyxs&usqp=CAU','https://i.ytimg.com/vi/TApMNhQPaCM/maxresdefault.jpg'],
    GitHub: 'https://github.com/Nithin-Kamineni/programming-compiler',
    hosted: '',
    publition: '',
    tags: ['java'],
    points:['Comprehensive Phases: The project covers essential compiler phases, including lexer, parser, AST, and type checking, ensuring a robust language development process.',
            'Code Generation: With JVM and Assembly code generation, the project enables the language to be executed efficiently on different platforms, enhancing its versatility and usability.']
  },
  {
    title: 'Digital Voting System | Research Project',
    description: `This project creates a decentralized e-voting system using Ethereum Blockchain and cryptographic techniques for transparent and private voting. It eliminates the need for a third party, ensuring accurate results and cost reduction. Citizens can legally change their vote anytime, benefiting regions with limited infrastructure and high population density.`,
    image: ['https://repository-images.githubusercontent.com/348623348/0fb955b1-5c09-4af8-ae86-5088058b086c'],
    GitHub: 'https://github.com/Nithin-Kamineni/Online-Voting-System',
    hosted: '',
    publition: 'https://www.taylorfrancis.com/chapters/edit/10.1201/9781003193425-10/lightweight-digital-voting-platform-using-blockchain-technology-nithin-kamineni-veera-nitish-mattaparthi-mona-reddy-mahalakshmi-vamsi-pachamatla-kuldeep-chaurasia-tanmay-bhowmik',
    tags: ['javascript','ethereum','blockchain','Research'],
    points:['Blockchain based system that is used to store the voting informating in a e-ledger']
  },
  {
    title: 'Portfolio | Portfolio Project',
    description: `Personal website to display skills, achivments and previous work in a professional and organized manner. The website will act as a central hub where the owner can exhibit their projects, designs, artwork, or any other creative endeavors.`,
    image: ['https://user-images.githubusercontent.com/45392510/235372460-89e48e6f-a621-4dc9-bcdc-111cafe7a773.png'],
    GitHub: 'https://github.com/Nithin-Kamineni/PortfolioWebpage',
    hosted: 'https://nithinkamineni.com',
    publition: '',
    tags: ['react','typeScript','frontend'],
    points:[]
  },
];
