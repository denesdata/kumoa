import type { SiteConfig } from '$lib/types/site'

export const site: SiteConfig = {
  protocol: import.meta.env.URARA_SITE_PROTOCOL ?? import.meta.env.DEV ? 'http://' : 'https://',
  domain: import.meta.env.URARA_SITE_DOMAIN ?? 'data.csaladen.es/kumoa',
  title: 'Külhoni Magyar Oktatási Adatfelfedező',
  subtitle: 'Nemzetpolitikai Kutatóintézet',
  lang: 'hu-HU',
  description: 'Powered by SvelteKit/Urara',
  author: {
    avatar: '/assets/logo/npki.png',
    name: 'Külhoni Magyar Oktatási Adatfelfedező',
    status: '',
    bio: 'Nemzetpolitikai Kutatóintézet'
  },
  themeColor: '#3D4451',
  category: {
    "hirek": {
      "name": "Hírek",
      "description": "",
      "img": "/assets/logo/v.png"
    },
    "blog": {
      "name": "Blog",
      "description": "",
      "img": "/assets/logo/y.png"
    },
    "adat": {
      "name": "Adatok",
      "description": "",
      "img": "/assets/logo/r.png"
    },
    "terkep": {
      "name": "Térképek",
      "description": "This is a very long category description that spans over two lines",
      "img": "/assets/logo/blue-globe.png"
    },
    "archivum": {
      "name": "Archívum",
      "description": "",
      "img": "/assets/logo/c.png"
    },
    "rolunk": {
      "name": "Rólunk",
      "description": "",
      "img": "/assets/logo/a.png"
    }
  }
}
