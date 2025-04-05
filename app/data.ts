type Project = {
  name: string
  description: string
  link: string
  video: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'Park Street Brethren Church App',
    description:
      "A side project I'm working on where you can listen to sermon recordings and download slides.",
    link: 'https://github.com/ws998116/psbc',
    video: '/psbc.mp4',
    id: 'project1',
  },
  // {
  //   name: 'Goldberry App',
  //   description: 'Demo app for a local coffee shop.',
  //   link: 'https://github.com/ws998116/goldberry-expo',
  //   video: '/goldberry.mov',
  //   id: 'project2',
  // },
  {
    name: 'Flite Test App',
    description:
      "A mobile app for Flite Test's video content and a virtual hangar for RC aircraft. Featuring a flight tracker where you can log flights using a Remote ID and your phone's Bluetooth!",
    link: 'https://apps.apple.com/us/app/flite-test/id6447209095',
    video: '/flitetest.mp4',
    id: 'project3',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Fin Feather Fur Outfitters',
    title: 'Full Stack Developer',
    start: '2024',
    end: 'Present',
    link: 'https://finfeatherfur.com',
    id: 'work1',
  },
  {
    company: 'Tritium Electronics',
    title: 'Director of Product Development',
    start: '2021',
    end: '2024',
    link: 'https://tritiumelectronics.com/',
    id: 'work2',
  },
  {
    company: 'Collins Aerospace',
    title: 'Computer Engineering Co-op',
    start: '2019',
    end: '2019',
    link: 'https://www.collinsaerospace.com/',
    id: 'work3',
  },
  {
    company: 'Schaeffler Group',
    title: 'Engineering Co-op',
    start: '2017',
    end: '2018',
    link: 'https://www.schaeffler.com/en/',
    id: 'work4',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Up and Running',
    description: 'Creating my original personal website',
    link: '/blog/2024-09-23-up-and-running',
    uid: 'blog-1',
  },
  {
    title: 'Headspace',
    description: 'Feeling inspired and motivated',
    link: '/blog/2024-09-05-headspace',
    uid: 'blog-2',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/ws998116',
  },
]

export const EMAIL = 'ws998116@gmail.com'
