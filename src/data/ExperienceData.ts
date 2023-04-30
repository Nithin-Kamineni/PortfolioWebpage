interface ExperienceDataType {
  title: string;
  date: string;
  details: string[];
}

export const ExperienceData: ExperienceDataType[] = [
  {
    title: 'Graduate Student Assistant | trafficml.com',
    date: ' Jan 2023 _ April 2023',
    details: [
      'Developed and hosted web applications using NodeJs, PostgresSQL, AWS SDK, reactJS, Javascript, CI/CD, Docker, Kubernetes', 
      'Developed a real-time traffic monitoring system, displaying sensor data from thousands of intersections in multiple cities like Gainesville, Orlando, etc. and displaying them from AWS S3 buckets', 
      'Harnessed technologies like Node.js, React, Express.js, PostgreSQL, AWS Cloud and Auth0 to design and develop a fully functional web application in a team of 4', 
      'Deployment in AWS with Kubernetes and Docker services with 0 downtime using multiple cluster nodes',
    ],
  },
  {
    title: 'Associate Data Engineer | Celebal Technologies Pvt Ltd',
    date: 'Aug 2021 - Oct 2021',
    details: [
      'Worked with a technologies like  Python, PySpark, Azure Data Factory, MS SQL server, Microsoft Azure',
      'Processed 1.5 TB by building a data pipeline in Azure Data Factory of unstructured and Structured data using Pyspark in Databricks environmen',
      'Collaborated with a team of business analyst to reduce data processing time by 2 days by cluster processing in Microsoft Azure cloud to generate PNL reports',
    ],
  },
  {
    title: 'Software Devloper Intern | Fintroops Fintech Solutions',
    date: 'Aug 2021 - Oct 2021',
    details: [
      'Developed web applications using Node.js, Express, MS SQL server, Postman',
      'Designed and Prepared full-stack web application for a car trading platform using a variety of technologies including Express, Node.js, Bootstrap, and JavaScrip',
      'Improved user experience by reducing latency and response time by more than 50% of search services API by optimising search queries in SQL',
    ],
  }
];
