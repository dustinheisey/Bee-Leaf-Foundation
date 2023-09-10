const config = {
  title: 'Urbanity Foundation - Advocating for Livable Cities',
  url: 'https://www.urbanityfoundation.org',
  description:
    'Urbanity Foundation advocates for sustainable, equitable, and human-centric urban design. Through education, research, and policy reform, we envision cities as vibrant community spaces that enhance quality of life.',
  navigation: {
    logo: {
      src: './logo.svg',
      alt: 'Urbanity Foundation',
    },
    header: {
      variant: 'spaced',
      theme: 'dark',
      links: [
        {
          label: 'About',
          url: '/about',
          subLinks: [
            { label: 'Our Mission', url: '/about/our-mission' },
            { label: 'Our Team', url: '/about/our-team' },
            { label: 'Our Impact', url: '/about/our-impact' },
          ],
        },
        {
          label: 'Issues',
          url: '/issues',
          subLinks: [
            { label: 'Housing', url: '/issues/housing' },
            { label: 'Transportation', url: '/issues/transportation' },
            { label: 'Public Spaces', url: '/issues/public-spaces' },
          ],
        },
        { label: 'Get Involved', url: '/get-involved' },
        { label: 'Donate', url: '/donate' },
      ],
      action: {
        label: 'Take Action',
        url: '/take-action',
      },
    },
    bottombar: {
      links: [
        { label: 'Home', url: '/', icon: 'home' },
        { label: 'About', url: '/about', icon: 'info-circle' },
        { label: 'Issues', url: '/issues', icon: 'alert-circle' },
        { label: 'Get Involved', url: '/get-involved', icon: 'users' },
        { label: 'Donate', url: '/donate', icon: 'dollar-sign' },
      ],

      fab: {
        label: 'Take Action',
        url: '/take-action',
        icon: 'rocket',
      },
    },
    footer: {
      variant: 'mission',
      theme: 'dark',
      mission:
        ' Our mission at Urbanity Foundation is to advocate for sustainable, equitable, and human-centric urban design. We believe cities should enhance quality of life through livable built environments, accessible public spaces, affordable housing, and convenient transportation options. By conducting research, educating the public, and pushing for policy reform, we aim to make cities vibrant community spaces that serve all people.',
      groups: [
        {
          title: 'About',
          links: [
            { label: 'Our Mission', url: '/about/our-mission' },
            { label: 'Our Team', url: '/about/our-team' },
            { label: 'Our Impact', url: '/about/our-impact' },
          ],
        },
        {
          title: 'Issues',
          links: [
            { label: 'Housing', url: '/issues/housing' },
            { label: 'Transportation', url: '/issues/transportation' },
            { label: 'Public Spaces', url: '/issues/public-spaces' },
          ],
        },
        {
          title: 'Quick Links',
          links: [
            { label: 'Home', url: '/' },
            { label: 'Get Involved', url: '/get-involved' },
            { label: 'Donate', url: '/donate' },
            { label: 'Take Action', url: '/take-action' },
          ],
        },
        {
          title: 'Legal',
          links: [
            { label: 'Privacy Policy', url: '/privacy-policy' },
            { label: 'Terms of Use', url: '/terms' },
            { label: 'Contact', url: '/contact' },
          ],
        },
      ],

      social: [
        {
          label: 'Facebook',
          icon: 'facebook',
          url: '',
        },
        {
          label: 'Twitter',
          icon: 'twitter',
          url: '',
        },
        {
          label: 'Instagram',
          icon: 'instagram',
          url: '',
        },
      ],

      copyright: '© 2023 Urbanity Foundation. All rights reserved.',
    },
  },
  pages: [
    {
      url: 'index',
      title: 'Join Us in Creating Thriving, Livable Cities for All',
      description:
        'Urbanity Foundation advocates for sustainable, human-centric urban design. Help us make cities vibrant community spaces through education, policy reform, and community action.',
      regions: {
        hero: {
          layout: 'split',
          theme: 'dark',

          start: {
            component: 'img',
            src: 'city-hero.jpg',
            alt: 'City skyline',
          },

          end: {
            component: 'text',
            size: 'hero',
            headline: 'Join Us in Creating Thriving, Livable Cities for All',
            body: 'At Urbanity Foundation, we envision cities designed for people, not cars. Where affordable housing, green spaces, clean air, and sustainable transportation foster healthy, connected communities. We advocate for urban development centered on human needs through research, education, policy reform, and community action.',
            btn: {
              label: 'Get Involved',
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
            headline: 'Our Cities Face Immense Challenges',
          },

          start: {
            component: 'list',
            icon: 'remove',
            items: [
              'Unaffordable housing prices and shortages',
              'Inadequate and inefficient public transit',
              'Lack of pedestrian-friendly infrastructure',
              'Pollution and environmental degradation',
              'Exclusionary zoning laws',
              'Racial and economic segregation',
            ],
          },
        },

        solution: {
          layout: 'start-heavy',

          start: {
            component: 'img',
            src: 'solution.jpg',
            alt: 'Public plaza rendering',
          },

          end: {
            component: 'text',
            size: 'region',
            headline: "It Doesn't Have to Be This Way",
            body: 'At Urbanity Foundation, we believe better is possible. Cities designed for people, not cars. Where neighborhoods are diverse, housing is affordable, and streets are safe and walkable. We advocate for policy reform and community-driven solutions to make our cities vibrant, sustainable, and equitable places for all.',
          },
        },

        action: {
          layout: 'split',
          theme: 'dark',

          end: {
            component: 'img',
            src: 'get-involved.jpg',
            alt: 'Volunteers planting trees',
          },

          start: {
            component: 'text',
            size: 'region',
            headline: 'Get Involved in the Movement for Livable Cities',
            body: "We need advocates, volunteers, donors, and partners in the fight for better, more livable cities. Add your voice to the movement through education, community action, policy reform, and more. Let's reimagine cities as spaces that enhance our quality of life.",
            btn: {
              label: 'Join Us',
              url: '/get-involved',
            },
          },
        },
      },
    },
    {
      url: 'about',
      title: 'About Urbanity Foundation - Our Mission for Livable Cities',
      description:
        "Learn about Urbanity Foundation's mission, team, and impact in advocating for sustainable, human-centric urban design. Discover how we're working to make cities vibrant community spaces.",
      regions: {
        intro: {
          layout: 'end-heavy',

          end: {
            component: 'img',
            src: 'about-hero.jpg',
            alt: 'Volunteers planting trees',
          },

          start: {
            component: 'text',
            size: 'page',
            headline: 'Advocating for Livable, Sustainable Cities',
            body: 'At Urbanity Foundation, we believe cities should be designed for people, not cars. We advocate for urban development focused on community, accessibility, equity, and environmental sustainability. Learn about our mission, team, and impact.',
          },
        },

        mission: {
          layout: 'start-heavy',

          start: {
            component: 'img',
            src: 'mission.jpg',
            alt: 'People gathered in public plaza',
          },

          end: {
            component: 'text',
            size: 'region',
            headline:
              'Our Mission: Reimagining Cities as Vibrant Community Spaces',
            body: 'Our mission is to advocate for sustainable, equitable, and human-centric urban design. We conduct research, educate the public, and push for policy reform to make cities more livable. Our vision is vibrant neighborhoods with affordable housing, green spaces, clean air, and transportation options that connect communities and enhance quality of life.',
          },
        },

        team: {
          layout: 'gallery',
          inset: true,

          headline: 'Meet Our Team of Urban Design Advocates',

          items: [
            {
              component: 'blurb',
              img: {
                src: 'lisa-jones.jpg',
                alt: 'Lisa Jones',
              },
              headline: 'Lisa Jones',
              body: 'Executive Director',
            },
            {
              component: 'blurb',
              img: {
                src: 'john-smith.jpg',
                alt: 'John Smith',
              },
              headline: 'John Smith',
              body: 'Director of Policy',
            },
            {
              component: 'blurb',
              img: {
                src: 'jane-doe.jpg',
                alt: 'Jane Doe',
              },
              headline: 'Jane Doe',
              body: 'Director of Education',
            },
          ],
        },

        impact: {
          layout: 'split',
          theme: 'dark',

          start: {
            component: 'text',
            size: 'region',
            headline: 'Our Impact: Tangible Change in Cities Nationwide',
            body: 'Through education, research, advocacy, and policy reform, we are making real change happen. See our impact by the numbers. And learn how you can get involved and make a difference.',
          },

          end: {
            component: 'img',
            src: 'impact.jpg',
            alt: 'Volunteers at community event',
          },
        },

        action: {
          layout: 'split',

          start: {
            component: 'img',
            src: 'get-involved-about.jpg',
            alt: 'People marching with signs',
          },

          end: {
            component: 'text',
            size: 'region',
            headline: 'Join Us and Be a Part of Our Impact',
            body: "Add your voice to the growing movement for livable cities. You can make an immense difference through education, volunteer work, advocacy, donations, and more. Let's reimagine cities as vibrant spaces that serve communities.",
            btn: {
              label: 'Get Involved',
              url: '/get-involved',
            },
          },
        },
      },
    },
    {
      url: 'issues',
      title: 'The Issues Shaping Our Cities',
      description:
        'Learn about the major issues impacting urban life today and how we can create change, from housing affordability and transportation access to environmental sustainability.',
      regions: {
        intro: {
          layout: 'split',
          theme: 'dark',

          start: {
            component: 'img',
            src: 'issues-hero.jpg',
            alt: 'City with traffic',
          },

          end: {
            component: 'text',
            size: 'page',
            headline: 'The Issues Shaping Our Cities',
            body: 'The way our cities are designed has immense impact on our lives. From housing affordability to transportation access, major issues shape urban life. At Urbanity Foundation, we advocate solutions centered on community, accessibility, and sustainability.',
          },
        },

        highlights: {
          layout: 'gallery',
          inset: true,

          headline: 'Explore Key Issues and Our Solutions',

          items: [
            {
              component: 'card',
              img: {
                src: 'housing.jpg',
                alt: 'Affordable housing',
              },
              headline: 'Housing Affordability',
              body: 'Advocating for inclusive zoning, increased density, and affordable units.',
              link: {
                label: 'Learn More',
                url: '/issues/housing',
              },
            },
            {
              component: 'card',
              img: {
                src: 'transit.jpg',
                alt: 'Public transit',
              },
              headline: 'Transportation Access',
              body: 'Pushing for investment in public transit and walkable, bikeable neighborhoods. ',
              link: {
                label: 'Learn More',
                url: '/issues/transportation',
              },
            },
            {
              component: 'card',
              img: {
                src: 'parks.jpg',
                alt: 'Public park',
              },
              headline: 'Public Spaces',
              body: 'Championing green spaces, parks, plazas and pedestrian infrastructure.',
              link: {
                label: 'Learn More',
                url: '/issues/public-spaces',
              },
            },
          ],
        },

        action: {
          layout: 'split',
          theme: 'dark',

          start: {
            component: 'text',
            size: 'region',
            headline: 'Get Involved in Shaping Your City',
            body: "Make your voice heard on the issues impacting your community. Get involved through advocacy, education, volunteering, donations, and more. Let's build better cities together.",
            btn: {
              label: 'Take Action',
              url: '/take-action',
            },
          },

          end: {
            component: 'img',
            src: 'take-action.jpg',
            alt: 'People at community meeting',
          },
        },
      },
    },
    {
      url: 'issues/housing',
      title: 'Fighting for Housing Affordability and Access',
      description:
        'Learn about our work advocating for more affordable, inclusive housing policies through zoning reform, increased density, and community land trusts.',
      regions: {
        intro: {
          layout: 'end-heavy',

          end: {
            component: 'img',
            src: 'housing-hero.jpg',
            alt: 'Affordable housing units',
          },

          start: {
            component: 'text',
            size: 'page',
            headline: 'Fighting for Housing Affordability and Access',
            body: 'Lack of affordable housing limits economic mobility and segregates communities. We advocate solutions like zoning reform, increased density, land trusts, and community-driven development.',
          },
        },

        problem: {
          layout: 'split',

          start: {
            component: 'text',
            size: 'region',
            headline: 'The Housing Affordability Crisis',
            body: 'Nearly half of renters are cost-burdened nationwide. Inadequate supply of affordable units coupled with exclusionary zoning limits options. Segregation persists with low-income housing clustered in certain areas. The human impacts are immense.',
          },

          end: {
            component: 'img',
            src: 'cost-burdened.jpg',
            alt: 'Cost burdened households map',
          },
        },

        solutions: {
          layout: 'gallery',
          inset: true,

          headline: 'Our Solutions',

          items: [
            {
              component: 'article',
              img: {
                src: 'zoning.jpg',
                alt: 'Zoning meeting',
              },
              headline: 'Reform Zoning Laws',
              body: 'We push for upzoning to allow multifamily units, abolishing single-family zoning, and ending other exclusionary practices.',
            },
            {
              component: 'article',
              img: {
                src: 'density.jpg',
                alt: 'Dense housing',
              },
              headline: 'Increase Density',
              body: 'We advocate for policies that allow building taller, higher-density developments to increase supply.',
            },
            {
              component: 'article',
              img: {
                src: 'clt.jpg',
                alt: 'Community land trust homes',
              },
              headline: 'Fund Community Land Trusts',
              body: 'We support community-driven land trusts that provide permanently affordable housing.',
            },
          ],
        },

        action: {
          layout: 'split',
          theme: 'dark',

          end: {
            component: 'img',
            src: 'advocate.jpg',
            alt: 'Advocacy march',
          },

          start: {
            component: 'text',
            size: 'region',
            headline: 'Join the Movement for Housing Justice',
            body: 'Diverse coalitions of renters, homeowners, developers, unions and more are pushing for affordable housing. Make your voice heard through education, community organizing, voting and public advocacy.',
            btn: {
              label: 'Take Action',
              url: '/take-action',
            },
          },
        },
      },
    },
    {
      url: 'issues/transportation',
      title: 'Advocating for Accessible, Sustainable Transit',
      description:
        'Learn about our work pushing for investment in public transportation and walkable, bikeable neighborhoods that connect communities and reduce car dependency.',
      regions: {
        intro: {
          layout: 'end-heavy',
          end: {
            component: 'img',
            src: 'transit-hero.jpg',
            alt: 'Bus station',
          },
          start: {
            component: 'text',
            size: 'page',
            headline: 'Advocating for Accessible, Sustainable Transit',
            body: 'Convenient public transit and walkable neighborhoods connect communities, spur economic growth, and reduce environmental impact. We push for major investment and reform in transportation planning centered on accessibility, affordability and sustainability. ',
          },
        },
        problem: {
          layout: 'split',
          start: {
            component: 'text',
            size: 'region',
            headline: 'Auto-Centric Transportation Fails Communities',
            body: 'Car dependency results from lack of transit options. It harms air quality, disrupts neighborhood  connectivity, inhibits economic mobility, and more. Those unable to drive, like seniors, persons with disabilities, youth, and low-income people, suffer most. Meanwhile, congestion keeps increasing.',
          },
          end: {
            component: 'img',
            src: 'congestion.jpg',
            alt: 'Traffic congestion',
          },
        },
        solutions: {
          layout: 'gallery',
          inset: true,

          headline: 'Our Solutions',

          items: [
            {
              component: 'article',
              img: {
                src: 'light-rail.jpg',
                alt: 'Light rail train',
              },
              headline: 'Build Light Rail',
              body: 'We advocate major expansion of rail systems to connect communities and reduce car trips.',
            },
            {
              component: 'article',
              img: {
                src: 'brt.jpg',
                alt: 'Bus rapid transit station',
              },
              headline: 'Invest in Bus Rapid Transit',
              body: 'We support designated bus lanes and routes with train-like capacity and speed to increase ridership.',
            },
            {
              component: 'article',
              img: {
                src: 'biking.jpg',
                alt: 'Protected bike lane',
              },
              headline: 'Develop Bike Infrastructure',
              body: 'We push for protected bike lanes, trails, parking and other infrastructure to make cycling safe, convenient.',
            },
            {
              component: 'article',
              img: {
                src: 'walking.jpg',
                alt: 'Pedestrian area',
              },
              headline: 'Create Walkable Neighborhoods',
              body: 'We advocate for wide sidewalks, pedestrian streets, traffic calming, and density with services in walking distance.',
            },
          ],
        },
        action: {
          layout: 'split',
          theme: 'dark',
          start: {
            component: 'text',
            size: 'region',
            headline: 'Push for Better Transit in Your Area',
            body: 'Join the movement for accessible transportation options. Attend public meetings, write elected officials, volunteer, or donate to a transit advocacy group. Together, we can transform car-centric cities.',
            btn: {
              label: 'Take Action',
              url: '/take-action',
            },
          },

          end: {
            component: 'img',
            src: 'transit-rally.jpg',
            alt: 'Transit rally',
          },
        },
      },
    },

    {
      url: 'issues/public-spaces',
      title: 'Championing Parks, Plazas and Pedestrian Places',
      description:
        'Learn about our efforts to advocate for high-quality public spaces that create vibrant communities, from urban parks and greenways to plazas and pedestrian streets.',
      regions: {
        intro: {
          layout: 'end-heavy',

          end: {
            component: 'img',
            src: 'public-space-hero.jpg',
            alt: 'Public plaza',
          },

          start: {
            component: 'text',
            size: 'page',
            headline: 'Championing Parks, Plazas and Pedestrian Places',
            body: 'Public spaces foster community, health, and economic growth when designed well. We advocate for high-quality parks, plazas, greenways and pedestrian infrastructure to nurture vibrant urban life.',
          },
        },

        problem: {
          layout: 'split',

          start: {
            component: 'text',
            size: 'region',
            headline: 'Declining Quality and Access',
            body: 'Many public spaces today are uninviting, unsafe, lacking amenities, or disconnected from neighborhoods. Residents in certain areas especially lack access. This limits usage and community cohesion.',
          },

          end: {
            component: 'img',
            src: 'run-down-park.jpg',
            alt: 'Run down park',
          },
        },

        solutions: {
          layout: 'gallery',
          inset: true,

          headline: 'Our Solutions',

          items: [
            {
              component: 'article',
              img: {
                src: 'green-space.jpg',
                alt: 'Greenway',
              },
              headline: 'Create Greenways',
              body: 'We support converting abandoned rail lines and riparian corridors to linear parks connecting communities.',
            },
            {
              component: 'article',
              img: {
                src: 'parks.jpg',
                alt: 'Park',
              },
              headline: 'Revitalize Parks',
              body: 'We advocate renovating and programming parks to make them inviting, safe community spaces.',
            },
            {
              component: 'article',
              img: {
                src: 'plaza.jpg',
                alt: 'Public plaza',
              },
              headline: 'Build Plazas',
              body: 'We recommend developing plazas with seating, art, greenery and programming to create lively public gathering spots. ',
            },
            {
              component: 'article',
              img: {
                src: 'pedstreets.jpg',
                alt: 'Pedestrian street',
              },
              headline: 'Design Pedestrian Streets',
              body: 'We support car-free pedestrian zones with ample sidewalk space, seating, lighting and other amenities.',
            },
          ],
        },

        action: {
          layout: 'split',
          theme: 'dark',

          start: {
            component: 'text',
            size: 'region',
            headline: 'Join the Push for Quality Public Spaces',
            body: 'Help make the case for better parks, plazas, and pedestrian infrastructure in your area. Attend meetings, write officials, or volunteer with campaigns working to create inviting public spaces.',
            btn: {
              label: 'Take Action',
              url: '/take-action',
            },
          },

          end: {
            component: 'img',
            src: 'public-space-action.jpg',
            alt: 'Volunteers doing park cleanup',
          },
        },
      },
    },

    {
      url: 'take-action',
      title: 'Take Action for Livable Cities',
      description:
        'Make your voice heard on urban issues. You can help create change through education, volunteering, advocacy and more. Join the movement for vibrant, sustainable, and equitable cities.',
      regions: {
        intro: {
          layout: 'split',
          theme: 'dark',

          start: {
            component: 'img',
            src: 'take-action-hero.jpg',
            alt: 'Advocates marching',
          },

          end: {
            component: 'text',
            size: 'page',
            headline: 'Take Action for Livable Cities',
            body: 'Join us in the movement for vibrant, sustainable, equitable urban communities. You can help create positive change through education, volunteering, advocacy, donations and more.',
          },
        },

        actionItems: {
          layout: 'gallery',

          headline: 'Ways To Get Involved',

          items: [
            {
              component: 'article',
              img: {
                src: 'email.jpg',
                alt: 'Email advocacy',
              },
              headline: 'Contact Elected Officials',
              body: 'Write or email your city council members, mayor, and other leaders to make your voice heard on important issues.',
            },
            {
              component: 'article',
              img: {
                src: 'protest.jpg',
                alt: 'Protestors',
              },
              headline: 'Attend Public Meetings',
              body: 'Share your perspective at city planning, zoning, and development meetings open to the public. ',
            },
            {
              component: 'article',
              img: {
                src: 'volunteer.jpg',
                alt: 'Volunteer event',
              },
              headline: 'Volunteer',
              body: 'Volunteer with campaigns and organizations working to create change on issues you care about.',
            },
            {
              component: 'article',
              img: {
                src: 'donate.jpg',
                alt: 'Donation',
              },
              headline: 'Donate',
              body: 'Donate to non-profit advocacy groups to help support their critical work.',
            },
          ],
        },

        outcomes: {
          layout: 'split',
          theme: 'dark',

          start: {
            component: 'text',
            size: 'region',
            headline: 'Create Lasting Change in Your City',
            body: 'By taking action, you can help bring about real improvements on housing affordability, transportation access, sustainability, and more. Get involved to shape your city for the better!',
            btn: {
              label: 'Join Us',
              url: '/get-involved',
            },
          },

          end: {
            component: 'img',
            src: 'outcome.jpg',
            alt: 'New transit station',
          },
        },
      },
    },

    {
      url: 'get-involved',
      title: 'Get Involved in the Movement for Better Cities',
      description:
        'You can help make cities more livable through volunteering, advocacy, donations, education, and more. Join our community of passionate urban advocates creating positive change.',
      regions: {
        intro: {
          layout: 'split',
          theme: 'dark',

          start: {
            component: 'img',
            src: 'get-involved-hero.jpg',
            alt: 'Volunteer event',
          },

          end: {
            component: 'text',
            size: 'page',
            headline: 'Get Involved in the Movement for Better Cities',
            body: 'Join our community of passionate urban advocates creating positive change. You can help make cities more livable through volunteering, advocacy, donations, education, and more.',
          },
        },

        tiles: {
          layout: 'gallery',
          inset: true,

          items: [
            {
              component: 'tile',
              size: 'double',
              headline: 'Become a Member',
              body: 'Join our network of supporters. Members receive action alerts, newsletters, and opportunities to get involved.',
              actions: [
                {
                  label: 'Learn More',
                  url: '/membership',
                },
                {
                  label: 'Become a Member',
                  url: '/membership',
                  theme: 'primary',
                  size: 'lg',
                },
              ],
            },
            {
              component: 'tile',
              size: 'double',
              headline: 'Make A Donation',
              body: 'With your gift, we can educate more people, advocate for critical policy reforms, and cultivate community-driven solutions.',
              actions: [
                {
                  label: 'Learn More',
                  url: '/donate',
                },
                {
                  label: 'Donate Now',
                  url: '/donate',
                  theme: 'primary',
                  size: 'lg',
                },
              ],
            },
            {
              component: 'tile',
              headline: 'Volunteer',
              body: 'Share your skills with us through communications, outreach, research, event planning, and more impactful roles.',
              actions: [
                {
                  label: 'See Openings',
                  url: '/volunteer',
                  theme: 'primary',
                },
              ],
            },
            {
              component: 'tile',
              headline: 'Attend an Event',
              body: 'Join us at online or in-person forums, lectures, workshops and other events to learn and connect with fellow advocates.',
              actions: [
                {
                  label: 'Upcoming Events',
                  url: '/events',
                  theme: 'primary',
                },
              ],
            },
          ],
        },

        action: {
          layout: 'split',

          start: {
            component: 'text',
            size: 'region',
            headline: 'We Need You in the Fight for Livable Cities',
            body: 'When more people join together, our voices are amplified and we can drive real change. Add your passion and talents to the movement!',
            btn: {
              label: 'Join Us',
              url: '/take-action',
              theme: 'primary',
              size: 'lg',
            },
          },

          end: {
            component: 'img',
            src: 'join-us.jpg',
            alt: 'People at community event',
          },
        },
      },
    },

    {
      url: 'contact',
      title: 'Contact Us | Urbanity Foundation',
      description:
        'Have questions or want to discuss a partnership? Reach out to Urbanity Foundation via our contact form. We look forward to hearing from you.',
      regions: {
        intro: {
          layout: 'split',

          start: {
            component: 'img',
            src: 'contact-hero.jpg',
            alt: 'People connecting',
          },

          end: {
            component: 'text',
            size: 'page',
            headline: 'Contact Us',
            body: 'Have questions or want to discuss a partnership? Reach out using our contact form below. We look forward to hearing from you!',
          },
        },

        form: {
          layout: 'end-heavy',

          end: {
            component: 'img',
            src: 'community.jpg',
            alt: 'Community event',
          },

          start: {
            component: 'form',
            headline: 'Send Us a Message',

            inputs: [
              {
                label: 'Name',
                id: 'name',
                required: true,
                type: 'text',
              },
              {
                label: 'Email',
                id: 'email',
                required: true,
                type: 'email',
              },
              {
                label: 'Message',
                id: 'message',
                required: true,
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
      title: 'Donate to Urbanity Foundation',
      description:
        'With your donation, Urbanity Foundation can advocate for critical reforms, mobilize communities, and educate more people. Help make cities more livable and equitable.',
      regions: {
        intro: {
          layout: 'split',

          start: {
            component: 'text',
            size: 'page',
            headline: 'Donate to Support Our Mission',
            body: 'Your donation allows us to advocate for policy reforms, mobilize communities, educate more people and create real change. Help us build more livable, equitable cities.',
          },

          end: {
            component: 'img',
            src: 'donate-hero.jpg',
            alt: 'Advocates at city council meeting',
          },
        },

        impact: {
          layout: 'split',

          start: {
            component: 'text',
            size: 'region',
            headline: 'Your Gift Has Impact',
            body: 'See how your donation can help make cities more sustainable, accessible, and vibrant community spaces.',
          },

          end: {
            component: 'list',
            icon: 'check',
            items: [
              'Train advocates in effective community organizing strategies',
              'Sustain our watchdog role analyzing legislation',
              'Expand our outreach and education programs',
              'Engage partners through events, workshops and conferences',
              'Fund critical research that informs our advocacy',
            ],
          },
        },

        form: {
          layout: 'split',

          start: {
            component: 'img',
            src: 'community-power.jpg',
            alt: 'Volunteers at community meeting',
          },

          end: {
            component: 'form',
            headline: 'Help Build Power in Our Communities',

            inputs: [
              {
                label: 'Donation Amount',
                id: 'amount',
                type: 'range',
                min: 5,
                max: 500,
                step: 5,
                value: 25,
                output: '$',
              },
              {
                label: 'Frequency',
                id: 'frequency',
                type: 'checkbox-cards',
                cards: [
                  { value: 'One-time', icon: 'dollar' },
                  { value: 'Monthly', icon: 'calendar' },
                  { value: 'Annually', icon: 'calendar-alt' },
                ],
              },
            ],

            submit: 'Donate Now',
          },
        },
      },
    },
  ],
}

module.exports = config
