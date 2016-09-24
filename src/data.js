
module.exports = {
  name: 'Efflam Daniel',
  title: 'Efflam',
  mail: 'hi@efflam.io',
  favicon: 'favicon.png',
  location: 'Paris, France',
  byline: `
    Developer specializing in real-time graphics rendering & modular architecture on the web platform.
  `,
  job: 'Lead Creative Developer',
  copyright: '© 2016 Efflam Daniel',
  nav: [
    { href: '//twitter.com/efflam', title: 'Twitter' },
    { href: '//github.com/efflam', title: 'Github' },
    { href: '//www.linkedin.com/in/efflam', title: 'LinkedIn' },
  ],
  projects: [
    {
      href: 'http://livreblanc.linkfluence.publicisnurun.fr',
      name: 'Nurun Whitepaper #01',
      description: 'Interactive 3D data visualization',
      tags: ['react', 'regl']
    },
    {
      href: 'https://www.purina-one.fr/bifensis/index.html',
      name: 'Purina One Bifensis',
      description: 'Scroll controlled WebGL experience',
      tags: ['gsap', 'three.js']
    },
    {
      href: 'http://fr.special-t.com/media/ogreen/fr_FR',
      name: 'SPECIAL.T O\'Green',
      description: 'Immersive WebGL experience',
      tags: ['three.js']
    }
  ],
  "awards": [
    {
      "name": "Site of the Day",
      "from": "TheFWA",
      "count": 1
    },
    {
      "name": "Site of the Day",
      "from": "Awwwards",
      "count": 1
    },
    {
      "name": "Cutting Edge Project of the Week",
      "from": "TheFWA & Abobe",
      "count": 1
    }
  ],
  scripts: {
    ga: '(function(i,s,o,g,r,a,m){i["GoogleAnalyticsObject"]=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,"script","//www.google-analytics.com/analytics.js","ga");ga("create", "", "auto");ga("send", "pageview");'
  }
};

