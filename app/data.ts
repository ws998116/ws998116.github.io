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
      'A mobile app to listen to sermon recordings and download notes.',
    link: 'https://github.com/ws998116/psbc',
    video: '/psbc.mp4',
    id: 'project1',
  },
  {
    name: 'Goldberry App',
    description: 'Demo app for a local coffee shop.',
    link: 'https://github.com/ws998116/goldberry-expo',
    video: '/goldberry.mov',
    id: 'project2',
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
