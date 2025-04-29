interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Wormwood Saga',
    description: `What if everything you took for truth turned out not to be? What if over time you came to realize that how you perceived the world was wrong? What if it all did not matter because a plan was in motion to make it all right and you were unknowingly a key player?`,
    imgSrc: '/static/images/wormwoodSaga.png',
    href: 'https://www.wormwoodsaga.com',
  },
  {
    title: 'My Writing Vitae',
    description: `A collection of my writings assembled in one place from across the internet. What can I say? I love to write.`,
    imgSrc: '/static/images/vitae.png',
    href: 'https://isaac-tait.github.io/',
  },
  {
    title: 'I Love To Fish',
    description:
      'I love to fish, skiing comes in a very close second. So, I built a website about fishing in an attempt to share with the world why I love to fish so much...',
    imgSrc: '/static/images/fish.jpg',
    href: 'https://www.iloveto.fish/',
  },
  {
    title: 'VW Type Two',
    description:
      'I built this site with Svelte to sell my 1969 VW Bus. It was hard to part with Donna a.k.a. "The Champ" but we needed the money to buy our first home...',
    imgSrc: '/static/images/vw.jpeg',
    href: 'https://vwtypetwo.com/',
  },
  {
    title: 'Gravel Cycling',
    description:
      'While living in California I fell in love with gravel cycling. I do not cycle as much as I used to but I have two full custom bikes and so I keep this blog alive by writing from time to time.',
    imgSrc: '/static/images/cycling.jpg',
    href: 'https://macadamgrinding.com/',
  },
  {
    title: 'Royal Ridges',
    description:
      'My brother is the Executive Director of Royal Ridges Retreat. He desperately needed a new site so I built him this one using GatsbyJS.',
    imgSrc: '/static/images/royalridges.png',
    href: 'https://royalridges.org/',
  },
  {
    title: 'Technical Blog',
    description:
      'So, how many blogs can one guy have? I say as many as you want so here is my technical blog. Enjoy!',
    imgSrc: '/static/images/mountains.jpeg',
    href: 'https://blog.mountaintopcoding.com/',
  },
  {
    title: 'Starship for Sale',
    description:
      'I read the first book in the series and thought it would be cool to build a fan site. The site may look ugly but I was trying to stay true to the book.',
    imgSrc: '/static/images/night.jpg',
    href: 'https://starship-for-sale-git-main-isaactait.vercel.app/',
  },
  {
    title: 'The OG mountainTopCoding(🏔);',
    description: 'I built this site in 2019 while taking the free React course on Scrimba.',
    imgSrc: '/static/images/ski.jpeg',
    href: 'https://mountaintopcoding.com/#/',
  },
  {
    title: 'My Resume',
    description:
      'Currently I am a freelance developer on Upwork but I am always interested in employment. Take a look at my resume and drop me a line and we can chat about how I can help your site grow.',
    imgSrc: '/static/images/desert.jpeg',
    href: 'https://mountaintop-coding.s3.us-west-1.amazonaws.com/Isaac_Tait_Resume.pdf',
  },
  {
    title: 'Paintball',
    description:
      'I had a blast building (and maintaining) Royal Ridges website. So, I was more than happy to build them another site for their new business venture...',
    imgSrc: '/static/images/nightSky.jpg',
    href: 'https://royalridgespaintball.com/',
  },
  {
    title: 'Exploring and Pondering',
    description:
      '[ARCHIVED] A long time coming - I finally am breaking free of thirty years of evangelical fundamentalist indoctrination and making up my own mind about life and spirituality.',
    imgSrc: '/static/images/beach.jpg',
    href: 'https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1745956371/mountainTopCoding/E_P_Screenshot_aznybd.png',
  },
]

export default projectsData
