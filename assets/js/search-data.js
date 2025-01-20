// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-education",
          title: "education",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/education/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "In progress.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "internships-",
          title: '',
          description: "",
          section: "Internships",},{id: "internships-",
          title: '',
          description: "",
          section: "Internships",},{id: "news-ccpc-bronze-medal",
          title: 'CCPC Bronze Medal.',
          description: "",
          section: "News",},{id: "news-website-created",
          title: 'Website created.',
          description: "",
          section: "News",},{id: "projects-rookiedb",
          title: 'RookieDB',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_rookiedb/";
            },},{id: "projects-xv6",
          title: 'XV6',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_xv6/";
            },},{id: "projects-texthydra",
          title: 'TextHydra',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_texthydra/";
            },},{id: "services-",
          title: '',
          description: "",
          section: "Services",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%68%61%72%76%79%68%79%79@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/NekoYellow", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/yueyuan-huang-1a28042a1", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
