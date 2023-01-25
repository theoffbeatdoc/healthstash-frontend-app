import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: '23932f24c7ea4071af83cd62f587b305',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: '소프트웨어 엔지니어, 한창완',
  domain: 'about.1c1.dev',
  author: '1chang1',

  // open graph metadata (optional)
  description: 'Software Engineer, 한창완의 이력서',

  // social usernames (optional)

  twitter: 'transitive_bs',
  github: 'transitive-bullshit',
  linkedin: 'fisch2',
  // mastodon: '#', // optional mastodon profile URL, provides link verification

  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: {
    '/careers-p2achai': '7a39a94e4e104d04ab14385f244e5613',
    '/careers-teamluckly': 'SW-12-6c60cc7c9b064bab9963598a1da21805',
    '/careers-teamrare': 'SW-12-93c0e513e98048209b20b117210959e4',
    '/careers-rokaf': '15-8cfb950730264881a2e90576617db4a6',
    '/careers-ajou': '0ddbb2fb30814fbdb1d6156f64839ca9',
    '/projects-teft': 'Teft-3796aad2db414f82a85569be93247268',
    '/projects-ojjam': 'f0f7beabb162475583cfe432179ae4a1',
    '/projects-mytypetest': 'd4dbb5d3300140e9a947598d11a4c07e',
    '/projects-stady': 'STADY-84595d1b794745baaa8fd2c79ad49ecf',
    '/projects-routelog': 'RouteLog-10d1892dc4c848dc998cc989a68bc2d9',
    '/projects-traffin': 'TRAFFIN-24971d0c6a8e470e8d05ac7ed12327d4',
    '/projects-hyowonlife': '750da52c857648978e315f5d11c00daf',
    '/projects-tothesky': 'toTheSky-1b33457e15fa4ba3851eb685f2edbfac'
  },

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  // navigationStyle: 'default',
  navigationStyle: 'custom',
  navigationLinks: [
    {
      title: 'Intro',
      id: '#link-intro'
    },
    {
      title: 'Careers',
      id: '#link-careers'
    },
    {
      title: 'Projects',
      id: '#link-projects'
    }
  ]
})
