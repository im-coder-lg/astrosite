import type{ NavItems } from './types'

export const NAV_ITEMS: NavItems = {
    home: {
        path: '/',
        title: 'home'
    },
    blog: {
        path: '/blog',
        title: 'blog'
    },
    tags: {
        path: '/tags',
        title: 'tags'
    },
    media: {
        path: '/media',
        title: 'media'
    },
    about: {
        path: '/about',
        title: 'about'
    }
}

export const SITE = {
    // Your site's detail?
    name: "im-coder-lg's Astro blog",
    title: 'My Astro blog',
    description: 'A cool thing, this is.',
    url: 'https://imcoderlg-rkt.netlify.app',
    githubUrl: 'https://github.com/im-coder-lg',
    listDrafts: true
    // description ?
}

export const PAGE_SIZE = 8
