import type { SiteConfig } from '$lib/types/site'

export const site: SiteConfig = {
  protocol: import.meta.env.URARA_SITE_PROTOCOL ?? import.meta.env.DEV ? 'http://' : 'https://',
  domain: import.meta.env.URARA_SITE_DOMAIN ?? 'urara-demo.netlify.app',
  title: 'Külhoni Magyar Oktatási Adatfelfedező',
  subtitle: 'Nemzetpolitikai Kutatóintézet',
  lang: 'en-US',
  description: 'Powered by SvelteKit/Urara',
  author: {
    avatar: 'https://data.csaladen.es/npki/suli/img/npki.png',
    name: 'Külhoni Magyar Oktatási Adatfelfedező',
    status: '',
    bio: 'Nemzetpolitikai Kutatóintézet'
  },
  themeColor: '#3D4451',
  category: {
    "highlights": {
      "name": "Hírek",
      "description": "",
      "img": "/assets/logo/v.png"
    },
    "blog": {
      "name": "Blog",
      "description": "",
      "img": "/assets/logo/y.png"
    },
    "modelling": {
      "name": "Adatok",
      "description": "",
      "img": "/assets/logo/r.png"
    },
    "explorables": {
      "name": "Térképek",
      "description": "This is a very long category description that spans over two lines",
      "img": "/assets/logo/blue-globe.png"
    },
    "about": {
      "name": "Rólunk",
      "description": "",
      "img": "/assets/logo/a.png"
    }
  }
}
