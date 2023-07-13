const config = {
  title: 'BeeLeaf Foundation - Championing the Survival of Bees',
  url: 'https://bee-leaf.dustinheisey.com',
  description:
    'BeeLeaf Foundation is a passionate advocate for bee conservation. Through education, habitat preservation, and policy advocacy, we’re building a future where bees flourish.',
  navigation: {
    logo: {
      src: './public/svg/logo',
      alt: 'BeeLeaf Foundation',
    },
    header: {
      variant: 'spaced',
      theme: 'dark',
      links: [
        {
          label: 'About',
          url: '/about',
          subLinks: [
            { label: 'Community', url: '/about/community' },
            { label: 'Impact', url: '/about/impact' },
            { label: 'Our Work', url: '/about/our-work' },
            { label: 'Partners', url: '/about/partners' },
          ],
        },
        {
          label: 'Learn',
          url: '/learn',
          subLinks: [
            { label: 'Bee Facts', url: '/learn/bee-facts' },
            { label: 'Conservation', url: '/learn/conservation-techniques' },
          ],
        },
        { label: 'Get Involved', url: '/get-involved' },
        { label: 'Contact', url: '/contact' },
      ],
      action: { label: 'Donate', url: '/donate' },
    },
    bottombar: {
      links: [
        { label: 'Home', url: '/', icon: 'home' },
        { label: 'About', url: '/about', icon: 'about' },
        { label: 'Learn', url: '/learn', icon: 'wave' },
        { label: 'Get Involved', url: '/get-involved', icon: 'advocate' },
        { label: 'Contact', url: '/contact', icon: 'contact' },
      ],
      fab: { label: 'Donate', url: '/donate', icon: 'donate' },
    },
    footer: {
      variant: 'mission',
      theme: 'dark',
      mission:
        'Our mission at the BeeLeaf Foundation is to foster an understanding and appreciation of bees and their vital role in our ecosystem. We are committed to promoting bee conservation through education, advocacy, and action. Our goal is to inspire individuals and communities to create environments where bees can thrive, ensuring a sustainable future for these remarkable creatures and the life-sustaining pollination work they perform.',
      groups: [
        {
          title: 'About',
          links: [
            { label: 'Community', url: '/about/community' },
            { label: 'Impact', url: '/about/impact' },
            { label: 'Our Work', url: '/about/our-work' },
            { label: 'Partners', url: '/about/partners' },
            { label: 'Bee Facts', url: '/learn/bee-facts' },
            { label: 'Conservation', url: '/learn/conservation-techniques' },
          ],
        },
        {
          title: 'Nonprofit',
          links: [
            { label: 'Home', url: '/' },
            { label: 'About', url: '/about' },
            { label: 'Learn', url: '/learn' },
            { label: 'Get Involved', url: '/get-involved' },
            { label: 'Contact', url: '/contact' },
            { label: 'Donate', url: '/donate' },
          ],
        },
        {
          title: 'Legal',
          links: [
            {
              label: 'Privacy Policy',
              url: 'https://www.termsfeed.com/live/d5271eb0-e06a-49f5-9021-99c0bb40389b',
            },
            {
              label: 'Terms of Service',
              url: 'https://www.termsfeed.com/live/dc519ac0-71e6-49d3-a0d6-f9ce86815fa5',
            },
            {
              label: 'Cookies',
              url: 'https://www.termsfeed.com/live/012a4e98-08d0-48ab-b716-764b86ca84df',
            },
            { label: 'Sitemap', url: '/sitemap.xml' },
          ],
        },
      ],
      social: [
        {
          label: 'Medium',
          icon: 'logo-medium',
          url: 'https://medium.com/@dustin_heisey',
        },
        {
          label: 'Dribbble',
          icon: 'logo-dribbble',
          url: 'https://dribbble.com/dustin_heisey',
        },
        {
          label: 'Behance',
          icon: 'logo-behance',
          url: 'https://www.behance.net/dustin_heisey',
        },
        {
          label: 'LinkedIn',
          icon: 'logo-linkedin',
          url: 'https://www.linkedin.com/in/heiseydustin/',
        },
      ],
      copywrite: '© 2023 BeeLeaf Foundation. All rights reserved.',
    },
  },
  pages: [
    {
      url: 'index',
      header: false,
      title: 'Join BeeLeaf Foundation: Become a Hero for Bees Today!',
      description:
        'At BeeLeaf Foundation, you can be the hero bees desperately need. Join us in the fight to conserve bee populations through education, conservation, and action.',
      regions: {
        hero: {
          layout: 'split',
          theme: 'dark',
          start: {
            component: 'img',
            src: 'bee-hero.png',
            alt: 'bee',
          },
          end: {
            component: 'text',
            get navbar() {
              return config.navigation
            },
            size: 'hero',
            headline: 'Join the Hive, Save the Bees',
            body: "Imagine a world where the soft hum of bees fills the air, where flowers bloom in abundance thanks to their tireless work. This is the world we're fighting for, and we need you.",
            btn: {
              label: 'Join the Hive',
              url: '/get-involved',
            },
          },
        },
        problem: {
          layout: 'end-heavy',
          class: 'inset',
          end: {
            component: 'text',
            size: 'region',
            headline:
              'Our Bees are in Danger and their survival is crucial for our ecosystem',
          },
          start: {
            component: 'list',
            icon: 'remove',
            items: [
              'Pesticides: Toxic chemicals harming bee populations.',
              'Habitat Loss: Shrinking habitats deprive bees of food.',
              'Climate Change: Altered weather disrupts bee foraging patterns.',
              'Colony Collapse Disorder (CCD): Mysterious honeybee colony losses threaten ecosystems.',
              'Invasive Species: Non-native plants and pests harm native bees.',
              'Intensive Agriculture: Industrial practices limit bee forage and health.',
            ],
          },
        },
        guide: {
          layout: 'start-heavy',
          end: {
            component: 'text',
            size: 'region',
            overline: 'BeeLeaf Foundation: Your Guide to Bee Conservation',
            headline: "We're here to help you help the bees",
            body: "We are BeeLeaf Foundation, a dedicated team of bee enthusiasts, conservationists, and educators committed to reversing the decline of bee populations. We provide resources, education, and opportunities for you to get involved. With us, you're not alone in this fight. Together, we can turn the tide.",
          },
          start: {
            component: 'img',
            src: 'guide.png',
            alt: 'Guide',
          },
        },
        plan: {
          layout: 'switcher',
          overline: 'Our Plan: Education, Conservation, and Action',
          headline: 'Together, we can create a brighter future for our bees',
          items: [
            {
              component: 'blurb',
              icon: 'book',
              headline: 'Education',
              body: 'Knowledge is power. We aim to educate the public about the importance of bees. Through workshops, webinars, and community outreach, we’re spreading the word about the vital role bees play in our ecosystem.',
            },
            {
              component: 'blurb',
              icon: 'shield',
              headline: 'Conservation',
              body: 'Protecting Bee Habitats. We’re working tirelessly to conserve and restore bee habitats. From planting wildflowers to creating urban bee sanctuaries, every action we take is a step towards a safer world for our bees.',
            },
            {
              component: 'blurb',
              icon: 'advocate',
              headline: 'Action',
              body: 'Advocacy for Policy Change. We’re advocating for policies that protect bees and their habitats. From lobbying against harmful pesticides to promoting sustainable farming practices, we’re making sure our voices - and the buzz of the bees - are heard.',
            },
          ],
        },
        action: {
          layout: 'split',
          theme: 'dark',
          start: {
            component: 'text',
            size: 'region',
            overline: 'Together, We Can Ensure a Future for Bees',
            headline: 'Join us in creating a world where bees thrive',
            body: "With your help, we can create a world where bees are no longer at risk. A world where our food supply is secure, our flowers bloom, and our children can marvel at the humble bee. Imagine the joy of seeing a child's face light up at the sight of a bee, knowing that they have a future in a world where bees thrive. This is the future we're striving for. Join us in making this vision a reality.",
            btn: {
              label: 'Get Involved',
              url: '/get-involved',
            },
          },
          end: {
            component: 'img',
            src: 'bees-thrive.png',
            alt: 'Bees Thriving',
          },
        },
      },
    },
    {
      url: 'about',
      title: 'About BeeLeaf Foundation: Our Mission to Save Bees',
      description:
        "Discover the core of BeeLeaf Foundation's dedication to bee conservation. Our mission, history, and vision reflect our unwavering commitment to protecting these vital creatures.",
      regions: {
        mission: {
          layout: 'end-heavy',
          end: { component: 'img', src: 'mission.png', alt: 'BeeLeaf Mission' },
          start: {
            component: 'text',
            size: 'page',
            overline: 'About BeeLeaf Foundation',
            headline: 'Committed to Bee Health, Education, and Conservation',
            body: 'At BeeLeaf Foundation, we are passionate about the health and survival of bees. Our mission is to educate the public about the vital role bees play in our ecosystem and the crisis they are facing. We are a team of dedicated conservationists, educators, and bee enthusiasts working tirelessly to protect these incredible creatures. Join us in our mission to create a world where bees can thrive.',
          },
        },
        history: {
          layout: 'sparkline',
          variant: 'block-staggered',
          overline: 'Our History',
          headline: 'A Legacy of Love for Bees',
          items: [
            {
              component: 'blurb',
              headline: 'The Beginning',
              body: 'Our journey began with a simple love for bees and a deep concern for their declining populations.',
            },
            {
              component: 'blurb',
              headline: 'The Turning Point',
              body: 'In 2015, we launched our first conservation project, planting wildflowers in a local park. This project was a turning point for us, as it showed us the power of community action. Since then, we have been working tirelessly to conserve and restore bee habitats.',
            },
            {
              component: 'blurb',
              headline: 'The Next Step',
              body: 'In 2018, we launched our first educational program, a series of workshops for children. These workshops were a huge success, and we have since expanded our educational programs to include webinars, community outreach, and more.',
            },
            {
              component: 'blurb',
              headline: 'The Future',
              body: 'We are excited to announce that we are launching our first advocacy campaign in 2020. This campaign will focus on promoting sustainable farming practices and lobbying against harmful pesticides. We are also working on a new conservation project, creating urban bee sanctuaries.',
            },
          ],
        },
        team: {
          layout: 'gallery',
          gap: true,
          overline: 'Our Team',
          headline: 'Meet the Hive',
          body: 'Our team is composed of passionate individuals dedicated to making a difference in the world of bee conservation. From our knowledgeable educators to our tireless conservationists, every member of our team plays a crucial role in our mission.',
          items: [
            {
              component: 'blurb',
              img: { src: 'john-doe.jpeg', alt: 'John Doe' },
              headline: 'John Doe',
              body: 'Founder & CEO',
            },
            {
              component: 'blurb',
              img: { src: 'jane-doe.jpeg', alt: 'Jane Doe' },
              headline: 'Jane Doe',
              body: 'Director of Education',
            },
            {
              component: 'blurb',
              img: { src: 'john-smith.jpeg', alt: 'John Smith' },
              headline: 'John Smith',
              body: 'Director of Conservation',
            },
            {
              component: 'blurb',
              img: { src: 'jane-smith.jpeg', alt: 'Jane Smith' },
              headline: 'Jane Smith',
              body: 'Director of Advocacy',
            },
            {
              component: 'blurb',
              img: { src: 'john-jones.jpeg', alt: 'John Jones' },
              headline: 'John Jones',
              body: 'Director of Communications',
            },
            {
              component: 'blurb',
              img: { src: 'jane-jones.jpeg', alt: 'Jane Jones' },
              headline: 'Jane Jones',
              body: 'Director of Fundraising',
            },
          ],
        },
        action: {
          layout: 'split',
          theme: 'dark',
          gap: true,
          end: { component: 'img', src: 'future.png', alt: 'Bee Future' },
          start: {
            component: 'text',
            size: 'region',
            overline: 'Our Vision',
            headline: 'A Future Where Bees Thrive',
            body: "We envision a future where bees are no longer at risk, where our food supply is secure, our flowers bloom, and our children can marvel at the humble bee. This is the future we're striving for.",
            btn: {
              label: 'Get Involved',
              url: '/get-involved',
            },
          },
        },
      },
    },
    {
      url: 'about/community',
      title: 'Engage with the BeeLeaf Community: United for Bee Conservation',
      description:
        "Become part of the BeeLeaf Foundation's community and join forces with volunteers, donors, and partners who are dedicated to creating a safer world for bees.",
      regions: {
        intro: {
          layout: 'end-heavy',
          end: { component: 'img', src: 'community.png', alt: 'Community' },
          start: {
            component: 'text',
            size: 'page',
            overline: 'Community',
            headline: 'Together for Bees',
            body: 'Our community is at the heart of our work at BeeLeaf Foundation. From volunteers and donors to partners and supporters, every member of our community plays a crucial role in our mission to protect bees.',
          },
        },
        volunteers: {
          layout: 'gallery',
          inset: true,
          overline: 'Our Volunteers',
          headline: 'The Heart of Our Hive',
          body: 'Our volunteers are the heart of our hive. They help with everything from habitat restoration to community outreach. Meet some of our amazing volunteers and learn about their experiences.',
          items: [
            {
              component: 'blurb',
              img: { src: 'john-doe.jpeg', alt: 'John Doe' },
              headline: 'John Doe',
              body: 'Volunteering with BeeLeaf Foundation allows me to play a meaningful role in bee conservation. Seeing the positive impact of my efforts brings me immense joy and fulfillment.',
            },
            {
              component: 'blurb',
              img: { src: 'jane-doe.jpeg', alt: 'Jane Doe' },
              headline: 'Jane Doe',
              body: "Being part of BeeLeaf Foundation's volunteer team is a fantastic opportunity to contribute to the preservation of these essential pollinators. I am grateful for the chance to make a real difference in the world.",
            },
            {
              component: 'blurb',
              img: { src: 'john-smith.jpeg', alt: 'John Smith' },
              headline: 'John Smith',
              body: 'BeeLeaf Foundation has provided me with a platform to actively engage in bee conservation. As a volunteer, I find it incredibly rewarding to witness the positive changes we bring to bee habitats and raise awareness about their importance.',
            },
          ],
        },
        donors: {
          layout: 'end-heavy',
          mobile: 'start',
          start: {
            component: 'img',
            src: 'thriving-bee-habitat.png',
            alt: 'Thriving Bee Habitat',
          },
          end: {
            component: 'stats',
            overline: 'Our Donors',
            headline: 'Making Our Work Possible',
            body: 'Our donors make our work possible. Their generous contributions support our education, conservation, and advocacy efforts. Hear from some of our donors about why they choose to support BeeLeaf Foundation.',
            items: [
              {
                headline: '$1,000,000+',
                body: 'Donated to bee conservation initiatives',
              },
              {
                headline: '5,000+',
                body: 'Individual donors contributing to our mission',
              },
              {
                headline: '25+',
                body: 'Corporate sponsors partnering with BeeLeaf Foundation',
              },
              {
                headline: '10,000+',
                body: 'Volunteer hours dedicated to bee conservation',
              },
            ],
          },
        },
        action: {
          layout: 'split',
          theme: 'dark',
          end: { component: 'img', src: 'solution.png', alt: 'Solution' },
          start: {
            component: 'text',
            size: 'region',
            overline: 'Join Our Community',
            headline: 'Be a Part of the Solution',
            body: 'Join our community and be a part of the solution. Whether you volunteer, donate, or spread the word about the importance of bees, you can make a difference.',
            btn: {
              label: 'Get Involved',
              url: '/get-involved',
            },
          },
        },
      },
    },
    {
      url: 'about/impact',
      title: 'BeeLeaf Foundation Impact: Paving the Way for Bees to Thrive',
      description:
        "Witness the tangible impact of BeeLeaf Foundation’s efforts in bee conservation. Through numbers and stories, see how we're making a difference.",
      regions: {
        intro: {
          layout: 'end-heavy',
          end: {
            component: 'img',
            src: 'making-a-difference.png',
            alt: 'Making a Difference',
          },
          start: {
            size: 'page',
            component: 'text',
            overline: 'Our Impact',
            headline: 'Making a Difference for Bees',
            body: "At BeeLeaf Foundation, we're making a difference for bees. From educating the public and conserving habitats to advocating for better policies, our work is having a real impact.",
          },
        },
        numbers: {
          layout: 'end-heavy',
          mobile: 'start',
          start: {
            component: 'text',
            size: 'region',
            overline: 'Our Impact',
            headline: 'By the Numbers',
            body: "See our impact by the numbers. From the number of people we've educated and habitats we've conserved to the policies we've influenced, these numbers tell the story of our impact.",
          },
          end: {
            component: 'stats',
            items: [
              {
                headline: '50,000+',
                body: 'People educated about bee conservation',
              },
              {
                headline: '10,000+',
                body: 'Habitats conserved for bee populations',
              },
              {
                headline: '100+',
                body: 'Policies influenced for bee-friendly practices',
              },
            ],
          },
        },
        stories: {
          layout: 'end-heavy',
          mobile: 'start',
          inset: true,
          start: {
            component: 'img',
            ar: 'avatar-img',
            src: 'jessica.jpeg',
            alt: 'Jessica',
          },
          end: {
            component: 'blockquote',
            quote:
              "I've been blown away by the impact BeeLeaf Foundation has had. BeeLeaf Foundation is making a remarkable difference, and I'm proud to support their impactful work.",
            author: 'Jessica, BeeLeaf Foundation Supporter',
          },
        },
        action: {
          layout: 'split',
          theme: 'dark',
          start: {
            component: 'img',
            src: 'how-you-can-help.png',
            alt: 'How You Can Help',
          },
          end: {
            component: 'text',
            size: 'region',
            overline: 'How You Can Help',
            headline: 'Be a Part of Our Impact',
            body: 'You can be a part of our impact. Learn how you can get involved and make a difference for bees.',
            btn: {
              label: 'Get Involved',
              url: '/get-involved',
            },
          },
        },
      },
    },
    {
      url: 'about/our-work',
      title: 'Our Work: Education, Conservation, and Advocacy for Bees',
      description:
        'Dive into BeeLeaf Foundation’s multifaceted approach to saving bees. Our education, conservation, advocacy, research, and partnerships are making the world safer for bees.',
      regions: {
        intro: {
          layout: 'end-heavy',
          end: { component: 'img', src: 'our-work.png', alt: 'Our Work' },
          start: {
            size: 'page',
            component: 'text',
            overline: 'Our Work',
            headline:
              'Saving Bees Through Education, Conservation, and Advocacy',
            body: "From spreading awareness about the importance of bees to tirelessly working towards the conservation and restoration of their habitats, we're committed to our buzzing friends. We stand up for bees, advocating for policies that protect them and their habitats, and we're not afraid to lobby against harmful pesticides and promote sustainable farming practices.",
          },
        },
        gallery: {
          layout: 'gallery',
          inset: true,
          headline: 'How We Are Making a Difference',
          body: 'Discover how BeeLeaf Foundation is spreading the buzz about bees, protecting their habitats, advocating for their rights, and advancing bee health through research.',
          items: [
            {
              component: 'card',
              theme: 'primary-container',
              span: 2,
              overline: 'Education',
              headline: 'Spreading the Buzz about Bees',
              body: 'We believe that education is the first step towards change. We offer workshops, webinars, and resources to educate the public about the importance of bees and the challenges they face.',
            },
            {
              component: 'card',
              theme: 'tertiary-container',
              overline: 'Conservation',
              headline: 'Protecting Bee Habitats',
              body: 'We work tirelessly to conserve and restore bee habitats. From planting wildflowers to creating urban bee sanctuaries, we are committed to creating a safer world for our bees.',
            },
            {
              component: 'card',
              theme: 'tertiary-container',
              overline: 'Advocacy',
              headline: 'Standing Up for Bees',
              body: 'We advocate for policies that protect bees and their habitats. We lobby against harmful pesticides and promote sustainable farming practices to ensure the buzz of bees continues to fill the air.',
            },
            {
              component: 'card',
              theme: 'secondary-container',
              span: 2,
              overline: 'Research',
              headline: 'Advancing Bee Health and Conservation',
              body: "We conduct and support research to advance our understanding of bees, the threats they face, and the most effective conservation strategies. Our research informs our education and advocacy efforts, ensuring we're making the biggest impact possible.",
            },
          ],
        },
        partnerships: {
          layout: 'split',
          theme: 'dark',
          start: {
            component: 'img',
            src: 'become-a-partner.png',
            alt: 'Become a Partner',
          },
          end: {
            component: 'text',
            size: 'region',
            overline: 'Partnerships',
            headline: 'Collaborating for Change',
            body: 'We collaborate with other organizations, schools, businesses, and government agencies to amplify our impact. Together, we can achieve more for bees.',
            btn: {
              label: 'See Our Partners',
              url: '/about/partners',
            },
          },
        },
      },
    },
    {
      url: 'about/partners',
      title:
        'Meet BeeLeaf Foundation’s Partners: Together for Bee Conservation',
      description:
        'Learn about the diverse partners of BeeLeaf Foundation and how collaborations are amplifying the positive impact on bee conservation across the globe.',
      regions: {
        intro: {
          layout: 'end-heavy',
          end: {
            component: 'img',
            src: 'collaboration.png',
            alt: 'Collaboration',
          },
          start: {
            size: 'page',
            component: 'text',
            overline: 'Our Partners',
            headline: 'Collaborating for Bees',
            body: "We're proud to partner with other organizations, schools, businesses, and government agencies to amplify our impact. Together, we can achieve more for bees.",
          },
        },
        partners: {
          layout: 'switcher',
          overline: 'Our Partners',
          headline: 'Joining Forces for Our Planet',
          body: 'Discover other organizations doing incredible work for environmental protection.',
          items: [
            {
              component: 'blurb',
              headline: "Ocean's Voice",
              img: { src: 'oceansvoice-logo.png', alt: "Ocean's Voice Logo" },
            },
            {
              component: 'blurb',
              headline: 'City Roots',
              img: { src: 'cityroots-logo.png', alt: 'City Roots' },
            },
            {
              component: 'blurb',
              headline: 'Desert Bloom',
              img: { src: 'desertbloom-logo.png', alt: 'Desert Bloom' },
            },
          ],
        },
        action: {
          layout: 'split',
          theme: 'dark',
          start: {
            component: 'img',
            src: 'lush-bee-habitat.png',
            alt: 'Lush Bee Habitat',
          },
          end: {
            component: 'text',
            size: 'region',
            overline: 'Partner with Us',
            headline: 'Join Us in Our Mission',
            body: 'Interested in partnering with us? Learn about the benefits of partnership and how to become a partner. Together, we can make a bigger impact for bees.',
            btn: {
              label: 'Get Involved',
              url: '/get-involved',
            },
          },
        },
      },
    },
    {
      header: false,
      url: 'learn',
      title:
        'Learn About Bees with BeeLeaf Foundation: Understanding Our Buzzing Friends',
      description:
        'Dive into the world of bees and learn about their importance, threats, and ways to help with BeeLeaf Foundation. Discover how these fascinating creatures play a vital role in our ecosystem.',
      regions: {
        intro: {
          layout: 'split',
          theme: 'dark',
          start: { component: 'img', src: 'learning.png', alt: 'Learning' },
          end: {
            component: 'text',
            get navbar() {
              return config.navigation
            },
            size: 'page',
            overline: 'Learn About Bees',
            headline: 'Understanding Our Buzzing Friends',
            body: 'Bees are fascinating creatures with a vital role in our ecosystem. Dive into the world of bees and learn about their importance, the threats they face, and what you can do to help.',
          },
        },
        importance: {
          layout: 'start-heavy',
          start: { component: 'img', src: 'importance.png', alt: 'Importance' },
          end: {
            component: 'text',
            size: 'region',
            overline: 'Importance of Bees',
            headline: 'The Tiny Heroes of Our Ecosystem',
            body: "Bees are more than just honey producers. They're crucial pollinators that help plants reproduce. Without bees, our food supply and biodiversity are at risk. Learn more about why bees matter.",
            btn: {
              label: 'Learn About Bees',
              variant: 'secondary',
              url: '/learn/bee-facts',
            },
          },
        },
        threats: {
          layout: 'end-heavy',
          end: { component: 'img', src: 'wasteland.png', alt: 'Wasteland' },
          start: {
            component: 'text',
            size: 'region',
            overline: 'Threats to Bees',
            headline: 'The Challenges Bees Face',
            body: 'From pesticides and habitat loss to climate change, bees are up against numerous threats. Understanding these threats is the first step towards protecting our buzzing friends.',
            btn: {
              label: 'Learn About Conservation',
              variant: 'secondary',
              url: '/learn/conservation-techniques',
            },
          },
        },
        resources: {
          layout: 'switcher',
          inset: true,
          overline: 'Resources',
          headline: 'Dive Deeper into the World of Bees',
          items: [
            {
              component: 'card',
              theme: 'primary-container',
              icon: 'article',
              overline: 'Articles',
              headline: 'Read Our Articles',
              body: 'Read our articles about bees and their conservation. From the latest research to tips for helping bees, our articles cover a wide range of topics.',
            },
            {
              component: 'card',
              theme: 'tertiary-container',
              icon: 'video',
              overline: 'Videos',
              headline: 'Watch Our Videos',
              body: 'Watch our videos about bees and their conservation. From educational videos to inspiring stories, our videos will help you learn more about bees.',
            },
            {
              component: 'card',
              theme: 'secondary-container',
              icon: 'books',
              overline: 'Educational Materials',
              headline: 'Explore Our Educational Materials',
              body: 'Explore our educational materials about bees and their conservation. From lesson plans to activity sheets, our educational materials are perfect for teachers, parents, and students.',
            },
          ],
        },
        action: {
          layout: 'split',
          theme: 'dark',
          start: {
            component: 'img',
            src: 'bee-friend.png',
            alt: 'Friend to The Bees',
          },
          end: {
            component: 'text',
            size: 'region',
            overline: 'How to Help',
            headline: 'Be a Friend to Bees',
            body: 'There are many ways you can help bees, from planting a bee-friendly garden to reducing your use of pesticides. Discover how you can make a difference in the lives of bees.',
            btn: {
              label: 'Take Action',
              url: '/get-involved',
            },
          },
        },
      },
    },
    {
      url: 'learn/bee-facts',
      title: 'Bee Facts: Discover the Fascinating World of Bees',
      description:
        'Uncover amazing facts about bees, their complex behaviors, anatomy, and the different species. Learn how these incredible insects are essential components of our ecosystem.',
      regions: {
        intro: {
          layout: 'end-heavy',
          end: { component: 'img', src: 'world.png', alt: 'World of Bees' },
          start: {
            component: 'text',
            size: 'page',
            overline: 'Bee Facts',
            headline: 'Discover the Fascinating World of Bees',
            body: 'Bees are amazing creatures with complex behaviors and crucial roles in our ecosystem. Here are some fascinating facts about bees.',
          },
        },
        anatomy: {
          layout: 'start-heavy',
          start: { component: 'img', src: 'anatomy.png', alt: 'Bee Anatomy' },
          end: {
            component: 'text',
            size: 'region',
            overline: 'Bee Anatomy',
            headline: 'Understanding the Bee Body',
            body: "From their compound eyes to their stingers, every part of a bee's body is perfectly adapted for their lifestyle. Learn more about bee anatomy and how it helps them survive and thrive.",
          },
        },
        behavior: {
          layout: 'end-heavy',
          end: { component: 'img', src: 'behavior.png', alt: 'Bee Behavior' },
          start: {
            component: 'text',
            size: 'region',
            overline: 'Bee Behavior',
            headline: 'The Social Life of Bees',
            body: "Bees are social insects with complex behaviors. Discover the world inside a beehive, from the queen bee's royal duties to the amazing dances bees use to communicate.",
          },
        },
        types: {
          layout: 'switcher',
          inset: true,
          overline: 'Types of Bees',
          headline: 'Meet the Bee Family',
          body: 'There are over 20,000 species of bees in the world, each with its own unique traits and behaviors. Get to know some of the most common types of bees.',
          items: [
            {
              component: 'blurb',
              img: { src: 'honey-bee.png', alt: 'wave' },
              headline: 'Honey Bees',
            },
            {
              component: 'blurb',
              img: { src: 'bumble-bee.png', alt: 'wave' },
              headline: 'Bumble Bees',
            },
            {
              component: 'blurb',
              img: { src: 'carpenter-bee.png', alt: 'wave' },
              headline: 'Carpenter Bees',
            },
          ],
        },
        conservation: {
          layout: 'split',
          theme: 'dark',
          end: { component: 'img', src: 'distress.png', alt: 'Bee Distress' },
          start: {
            component: 'text',
            size: 'region',
            overline: 'Bee Conservation',
            headline: 'Why Bees Need Our Help',
            body: 'Bees are facing numerous threats, from habitat loss and pesticides to climate change. Learn why bee conservation is so important and what you can do to help.',
            btn: {
              label: 'Learn About Conservation',
              url: '/learn/conservation-techniques',
            },
          },
        },
      },
    },
    {
      url: 'learn/conservation-techniques',
      title: 'Conservation Techniques: Protecting Bees and Their Habitats',
      description:
        "Learn about BeeLeaf Foundation's conservation techniques that are critical in protecting bees and their habitats. Discover how habitat restoration, sustainable farming, and education make a difference.",
      regions: {
        intro: {
          layout: 'end-heavy',
          end: { component: 'img', src: 'protection.png', alt: 'Protection' },
          start: {
            component: 'text',
            size: 'page',
            overline: 'Conservation Techniques',
            headline: 'Protecting Our Buzzing Friends',
            body: "At BeeLeaf Foundation, we use a variety of conservation techniques to protect bees and their habitats. Learn about these techniques and how they're helping to secure a future for bees.",
          },
        },
        grid: {
          layout: 'stack',
          headline: 'Conservation Techniques',
          items: [
            {
              component: 'article',
              img: { src: 'habitat.png', alt: 'Bee Habitat' },
              overline: 'Habitat Restoration',
              headline: 'Giving Bees a Place to Call Home',
              body: "Habitat loss is a major threat to bees. We're working to restore bee habitats by planting wildflowers, creating urban bee sanctuaries, and advocating for land management practices that benefit bees.",
            },
            {
              component: 'article',
              img: { src: 'farming.png', alt: 'Farming' },
              overline: 'Sustainable Farming',
              headline: 'Farming with Bees in Mind',
              body: 'Many farming practices are harmful to bees. We promote sustainable farming practices that protect bees, such as reducing pesticide use, planting cover crops, and providing habitat for bees on farmland.',
            },
            {
              component: 'article',
              img: { src: 'education.png', alt: 'Education and Advocacy' },
              overline: 'Education and Advocacy',
              headline: 'Spreading the Word about Bees',
              body: 'Education and advocacy are crucial for bee conservation. We educate the public about the importance of bees and advocate for policies that protect bees and their habitats.',
            },
            {
              component: 'article',
              img: { src: 'research.png', alt: 'Research and Monitoring' },
              overline: 'Research and Monitoring',
              headline: 'Keeping an Eye on Our Bees',
              body: 'We conduct and support research to monitor bee populations, understand the threats they face, and evaluate the effectiveness of our conservation efforts.',
            },
          ],
        },
        faq: {
          layout: 'accordion',
          overline: 'lskfjslkjf',
          headline: 'Keeping an Eye on Our Bees',
          body: 'We conduct and support research to monitor bee populations, understand the threats they face, and evaluate the effectiveness of our conservation efforts.',
          items: [
            {
              component: 'details',
              headline: 'Why is habitat restoration important for bees?',
              body: 'Habitat loss is a major threat to bees. By restoring bee habitats through planting wildflowers, creating urban bee sanctuaries, and advocating for bee-friendly land management practices, we provide bees with vital foraging and nesting areas.',
            },
            {
              component: 'details',
              headline: 'How does sustainable farming help protect bees?',
              body: 'Many farming practices harm bees. We promote sustainable farming techniques such as reducing pesticide use, planting cover crops, and providing bee habitats on farmland to ensure the well-being of bees and the preservation of their ecosystems.',
            },
            {
              component: 'details',
              headline:
                'What role does education and advocacy play in bee conservation?',
              body: 'Education and advocacy are crucial for bee conservation. We raise public awareness about the importance of bees, their role as pollinators, and the threats they face. Additionally, we advocate for policies that protect bees and their habitats.',
            },
            {
              component: 'details',
              headline:
                'Why is research and monitoring important for bee conservation?',
              body: 'We conduct and support research to monitor bee populations, understand the challenges they encounter, and evaluate the effectiveness of our conservation efforts. This knowledge helps us develop evidence-based strategies for protecting and preserving bee populations.',
            },
            {
              component: 'details',
              headline: 'How can I contribute to bee conservation efforts?',
              body: 'You can support bee conservation by donating to organizations like BeeLeaf Foundation. Your contribution helps fund habitat restoration projects, research initiatives, education programs, and advocacy campaigns aimed at protecting bees and securing their future.',
            },
          ],
        },
      },
    },
    {
      url: 'contact',
      title: 'Contact BeeLeaf Foundation: We’d Love to Hear from You',
      description:
        'Have questions or suggestions? Reach out to BeeLeaf Foundation through our contact form and engage with us. We’re eager to hear from you.',
      regions: {
        form: {
          layout: 'end-heavy',
          end: { component: 'img', src: 'connect.png', alt: 'Connect' },
          start: {
            component: 'form',
            size: 'page',
            overline: 'Contact Form',
            headline: 'Send Us a Message',
            body: "Fill out our contact form and we'll get back to you as soon as we can. We look forward to hearing from you.",
            inputs: [
              {
                required: true,
                label: 'Full Name',
                id: 'full_name',
                type: 'text',
              },
              { required: true, label: 'Email', id: 'email', type: 'email' },
              {
                required: true,
                label: 'Message',
                id: 'message',
                type: 'textarea',
              },
            ],
            submit: 'Connect',
          },
        },
      },
    },
    {
      url: 'donate',
      title: 'Donate to BeeLeaf Foundation: Support Our Work for Bees',
      description:
        'Your donation to BeeLeaf Foundation can make a big impact in educating people, conserving habitats, and advocating for bee-friendly policies. Learn how your gift can help bees thrive.',
      regions: {
        intro: {
          layout: 'end-heavy',
          end: {
            component: 'img',
            src: 'positive.png',
            alt: 'Positive Impact',
          },
          start: {
            size: 'page',
            component: 'text',
            overline: 'Donate',
            headline: 'Support Our Work and Make a Difference for Bees',
            body: 'Your donation can help us educate more people, conserve more habitats, and advocate for better policies. Every contribution, no matter how small, can make a big difference for bees.',
          },
        },
        why: {
          layout: 'start-heavy',
          start: { component: 'img', src: 'impact.png', alt: 'Impact' },
          end: {
            component: 'list',
            overline: 'Why Donate',
            headline: 'Your Gift Can Make a Big Impact',
            body: 'Your donation can help us provide education resources, restore bee habitats, advocate for bee-friendly policies, and much more. Learn more about the impact of your gift.',
            icon: 'check',
            items: [
              'Creating bee awareness through educational materials.',
              'Restoring bee-friendly habitats for foraging and nesting.',
              'Funding scientific bee conservation initiatives.',
              'Providing resources for sustainable beekeeping practices.',
              'Promoting bee-friendly policies and regulations.',
              'Engaging communities in bee conservation efforts.',
            ],
          },
        },
        form: {
          layout: 'end-heavy',
          end: { component: 'img', src: 'donate.png', alt: 'Donation' },
          start: {
            component: 'form',
            overline: 'How to Donate',
            headline: 'Giving Made Easy',
            body: 'Donating is easy. You can donate online, by mail, or by phone. We also accept gifts of stock, planned gifts, and more. Learn about all the ways you can give.',
            inputs: [
              {
                required: true,
                label: 'Donation Amount',
                id: 'donation-amount',
                type: 'range',
                min: '5',
                max: '1000',
                step: '15',
                value: '5',
                output: '$',
              },
              {
                required: true,
                label: 'Donation Frequency',
                id: 'donation-frequency',
                type: 'checkbox-cards',
                cards: [
                  { value: 'One Time', icon: 'dollar' },
                  { value: 'Yearly', icon: 'calendar' },
                  { value: 'Monthly', icon: 'calendar-month' },
                ],
              },
            ],
            submit: 'Send Donation',
          },
        },
      },
    },
    {
      header: false,
      url: 'get-involved',
      title: 'Get Involved with BeeLeaf Foundation: Join the Hive',
      description:
        'There are many ways to get involved with BeeLeaf Foundation. Whether you donate, volunteer, fundraise, or advocate, your participation can make a monumental difference for bees.',
      regions: {
        intro: {
          layout: 'split',
          theme: 'dark',
          start: {
            component: 'img',
            src: 'get-involved.png',
            alt: 'Get Involved',
          },
          end: {
            component: 'text',
            get navbar() {
              return config.navigation
            },
            size: 'page',
            overline: 'Get Involved',
            headline: 'Join the Hive and Make a Difference',
            body: 'There are many ways to get involved with BeeLeaf Foundation. Whether you donate, volunteer, or spread the word about the importance of bees, you can make a difference.',
          },
        },
        grid: {
          layout: 'gallery',
          col: 2,
          inset: true,
          overline: 'How to Get Involved',
          headline: 'There Are Many Ways to Help Bees',
          body: 'Whether you donate, volunteer, fundraise, or advocate, your participation can make a monumental difference for bees. Learn about all the ways you can get involved.',
          items: [
            {
              theme: 'primary-container',
              component: 'card',
              overline: 'Donate',
              headline: 'Support Our Work',
              body: 'Your donation can help us educate more people, conserve more habitats, and advocate for better policies. Every contribution, no matter how small, can make a big difference for bees.',
            },
            {
              theme: 'tertiary-container',
              component: 'card',
              overline: 'Volunteer',
              headline: 'Lend a Hand for Bees',
              body: 'Volunteering is a rewarding way to support our work. From habitat restoration projects to community outreach events, there are many ways to lend a hand for bees.',
            },
            {
              theme: 'tertiary-container',
              component: 'card',
              overline: 'Fundraise',
              headline: 'Rally Support for Bees',
              body: 'Fundraising is a fun and effective way to support our work. Whether you host a bake sale, run a marathon, or celebrate a special occasion, you can rally support for bees.',
            },
            {
              theme: 'secondary-container',
              component: 'card',
              overline: 'Advocate',
              headline: 'Stand Up for Bees',
              body: 'Advocacy is a powerful way to support bees. Learn how to advocate for policies that protect bees and their habitats, and use your voice to make a difference.',
            },
          ],
        },
      },
    },
  ],
}

module.exports = config
