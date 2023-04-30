
interface BlogType {
    title: string
    description: string
    image: string
    url: string
    blogTags: string[]
  }
  
  export const BlogsData: BlogType[] = [
    {
      title: 'AI can write your code, are you scared codder? | Chat GPT',
      description: `What if I told you, a day will come in the future where there is a super AI that can write Complex...`,
      // image: "../blogsImages/blogGPT.png",
      image: "https://miro.medium.com/v2/resize:fit:786/format:webp/1*m7fh7sZPerbKScb3xSNWng.png",
      // image: "../assets/profile.png",
      url: 'https://medium.com/@nithinkamineni1/ai-can-write-your-code-are-scared-codder-65860ce44ee',
      blogTags: ['chatGPT'],
    },
    {
      title: 'Why our economy is Failing the working class?',
      description: `Government’s views of the economy could be summarised up in a few short phrases: If it moves, tax it. If it keeps moving regulate it`,
      image: 'https://miro.medium.com/v2/resize:fit:786/format:webp/0*rlLHrSYy1YvD76CC.png',
      url: 'https://nithinkamineni1.medium.com/why-our-economy-is-failing-the-working-class-9a672c6253c5',
      blogTags: ['economy'],
    },
  ];
  