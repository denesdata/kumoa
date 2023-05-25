import type { ThemeConfig, HeadConfig, HeaderConfig, FooterConfig, DateConfig, FeedConfig } from '$lib/types/general'

export const theme: ThemeConfig = [
  {
    name: 'dracula',
    text: '🟦 Default'
  },
  {
    name: 'night',
    text: '⚫ Dark'
  },
  {
    name: 'winter',
    text: '⚪ Light'
  }
]

export const head: HeadConfig = {}

export const header: HeaderConfig = {
  search: {
    provider: 'google'
  },
  nav: [
    {
      text: 'Hírek',
      link: '/highlights'
    },
    {
      text: 'Blog',
      link: '/blog'
    },
    {
      text: 'Adatok',
      link: '/modelling'
    },
    {
      text: 'Térképek',
      link: '/explorables'
    },
    {
      text: 'About',
      children: [
        {
          text: 'Project',
          link: '/about/project'
        },
        {
          text: 'Team',
          link: '/about/team'
        },
        {
          text: 'Prizes',
          link: '/about/prizes'
        },
        {
          text: 'Data',
          link: '/about/data'
        },
        {
          text: 'Publications',
          link: '/about/publications'
        },
        {
          text: 'Careers',
          link: '/about/careers'
        }
      ]
    }
  ]
}

export const footer: FooterConfig = {
  nav: [
    {
      text: 'Feed',
      link: '/atom.xml'
    },
    {
      text: 'Sitemap',
      link: '/sitemap.xml'
    }
  ]
}

export const date: DateConfig = {
  locales: 'en-US',
  options: {
    year: 'numeric',
    weekday: 'long',
    month: 'long',
    day: 'numeric'
  }
}

export const feed: FeedConfig = {}
