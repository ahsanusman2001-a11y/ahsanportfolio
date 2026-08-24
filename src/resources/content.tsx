import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Ahsan",
  lastName: "Ali",
  name: "Ahsan Ali",
  role: "Senior Full Stack Developer & Team Lead",
  avatar: "/images/avatar-ahsan.jpg",
  email: "ahsanusman2001@gmail.com",
  location: "Asia/Karachi",
  languages: ["English"],
  locale: "en",
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/ahsanusman2001-a11y",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/ahsan-ali-a232bb262/",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building web solutions that solve real business problems</>,
  featured: {
    display: false,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Once UI</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      I'm {person.firstName}, a {person.role.toLowerCase()} with 8+ years of
      professional experience building websites, web applications, and business
      platforms using PHP, Laravel, WordPress, WooCommerce, React, and modern
      frontend technologies.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I'm Ahsan Ali, a Senior Full Stack Developer and Team Lead with several years
        of experience building modern web applications and business solutions.
        I specialize in PHP, Laravel, WordPress, WooCommerce, JavaScript, and
        modern frontend technologies.
        <br /><br />
        I have worked on a wide range of projects including hotel booking systems,
        e-commerce platforms, healthcare applications, learning management systems,
        CMS platforms, real estate websites, and event management systems.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "ITSec Pvt Ltd",
        timeframe: "Dec 2021 - Present",
        role: "Senior Web Developer & Team Lead",
        achievements: [
          <>
            Develop and maintain web applications using PHP, Laravel, WordPress,
            WooCommerce, JavaScript, and modern frontend technologies.
          </>,
          <>
            Lead and coordinate a team of 5 developers while contributing to
            architecture, development, debugging, and deployment.
          </>,
          <>
            Work across multiple domains including e-commerce, healthcare,
            hotel booking, CMS, real estate, and event management.
          </>,
        ],
        images: [],
      },
      {
        company: "Stallions Technologies",
        timeframe: "May 2020 - Aug 2021",
        role: "Web Developer",
        achievements: [
          <>
            Developed and maintained dynamic web applications using PHP,
            Laravel, JavaScript, MySQL, and WordPress.
          </>,
          <>
            Built custom features, APIs, database functionality, and
            responsive frontend interfaces.
          </>,
        ],
        images: [],
      },
      {
        company: "Creatives Aura",
        timeframe: "Mar 2018 - Mar 2020",
        role: "Web Developer",
        achievements: [
          <>
            Developed websites and web applications using PHP, WordPress,
            JavaScript, HTML, CSS, and MySQL.
          </>,
          <>
            Implemented custom functionality and responsive interfaces
            based on project requirements.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Diploma",
        description: <>Professional diploma and technical education.</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical skills",
    skills: [
      {
        title: "Backend Development",
        description: (
          <>
            Building scalable web applications and backend systems using PHP,
            Laravel, MySQL, REST APIs, and modern development practices.
          </>
        ),
        tags: [
          {
            name: "PHP",
            icon: "php",
          },
          {
            name: "Laravel",
            icon: "laravel",
          },
          {
            name: "MySQL",
            icon: "mysql",
          },
          {
            name: "REST API",
            icon: "globe",
          },
        ],
        images: [],
      },
      {
        title: "Frontend Development",
        description: (
          <>
            Creating responsive and interactive interfaces using JavaScript,
            React, Next.js, HTML5, CSS3, Tailwind CSS, Bootstrap, jQuery, and AJAX.
          </>
        ),
        tags: [
          {
            name: "JavaScript",
            icon: "javascript",
          },
          {
            name: "React",
            icon: "react",
          },
          {
            name: "Next.js",
            icon: "nextjs",
          },
          {
            name: "HTML5",
            icon: "html",
          },
          {
            name: "CSS3",
            icon: "css",
          },
          {
            name: "Tailwind CSS",
            icon: "tailwind",
          },
          {
            name: "Bootstrap",
            icon: "bootstrap",
          },
          {
            name: "jQuery",
            icon: "jquery",
          },
        ],
        images: [],
      },
      {
        title: "WordPress & E-commerce",
        description: (
          <>
            Developing and customizing WordPress and WooCommerce websites,
            including custom plugins, integrations, and e-commerce functionality.
          </>
        ),
        tags: [
          {
            name: "WordPress",
            icon: "wordpress",
          },
          {
            name: "WooCommerce",
            icon: "woocommerce",
          },
          {
            name: "Elementor",
            icon: "elementor",
          },
          {
            name: "Shopify",
            icon: "shopify",
          },
        ],
        images: [],
      },
      {
        title: "Development Tools",
        description: (
          <>
            Working with modern development tools and workflows for version
            control, API integration, debugging, and deployment.
          </>
        ),
        tags: [
          {
            name: "Git",
            icon: "git",
          },
          {
            name: "GitHub",
            icon: "github",
          },
          {
            name: "JSON",
            icon: "json",
          },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "",
  description: "",
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
