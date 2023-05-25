import type { ThemeConfig, HeadConfig, HeaderConfig, FooterConfig, DateConfig, FeedConfig } from '$lib/types/general'

export const theme: ThemeConfig = [
  {
    name: 'winter',
    text: '⚪ Világos'
  },
  {
    name: 'night',
    text: '⚫ Sötét'
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
      link: '/hirek'
    },
    {
      text: 'Blog',
      link: '/blog'
    },
    {
      text: 'Adatok',
      link: '/adat'
    },
    {
      text: 'Térképek',
      link: '/terkep'
    },
    {
      text: 'Archívum',
      link: '/archivum'
    },
    {
      text: 'Rólunk',
      children: [
        {
          text: 'Projekt',
          link: '/rolunk/projekt'
        },
        {
          text: 'Csapat',
          link: '/rolunk/csapat'
        },
        {
          text: 'Publikációk',
          link: '/rolunk/publikaciok'
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
  ],
  img: '/assets/logo/npat-logo.png'
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
