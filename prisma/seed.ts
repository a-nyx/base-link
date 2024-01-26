import prisma from "./dbClient";

const seed = async () => {
  await prisma.user.deleteMany();
  await seed404();
  await seedDemos();
  await seedSamples();
};

const seed404 = async () => {
  await prisma.user.create({
    data: {
      email: "404@demo",
      slug: "not-found",
      name: "404 Not Found",
      bgCss: {
        backgroundImage: "linear-gradient(0deg, #FFDEE9 0%, #B5FFFC 100%)",
      },
      isPublished: true,
      isDemo: false,
      components: {
        create: [
          {
            type: "intro",
            order: 1,
            details: {
              name: "404 Not Found",
              headline: "There is no one at this address.",
            },
          },
          {
            type: "list",
            order: 2,
            details: {
              title: "Where to go next?",
              links: [
                {
                  href: "https://www.youtube.com/watch?v=h6fcK_fRYaI",
                  label: "A short story for you",
                },
                {
                  label: "A song for you",
                  href: "https://www.youtube.com/watch?v=U51Dyep7Mmc",
                },
                {
                  label: "A short film for you",
                  href: "https://www.youtube.com/watch?v=cWs4WA--eKU",
                },
              ],
            },
          },
        ],
      },
    },
  });

  console.log("404 Page seeded.");
};

const seedDemos = async () => {
  await prisma.user.create({
    data: {
      email: "ronaldinho@demo",
      slug: "ronaldinho",
      name: "Ronaldinho",
      bgCss: {
        backgroundImage: "linear-gradient(to top, #accbee 0%, #e7f0fd 100%)",
      },
      isPublished: true,
      isDemo: true,
      components: {
        create: [
          {
            type: "intro",
            order: 1,
            details: {
              name: "Ronaldinho Gaúcho",
              headline: "Football Maestro",
            },
          },
          {
            type: "icons",
            order: 2,
            details: {
              linkedin: "",
              instagram: "https://www.instagram.com/ronaldinho/",
              github: "",
              twitter: "https://twitter.com/10Ronaldinho",
              facebook: "https://www.facebook.com/ronaldinho",
              tiktok: "",
              youtube: "",
              spotify: "",
            },
          },
          {
            type: "icons",
            order: 3,
            details: {
              linkedin: "",
              instagram: "",
              github: "",
              twitter: "",
              facebook: "",
              tiktok: "https://www.tiktok.com/@ronaldinho",
              youtube: "https://www.youtube.com/RonaldinhoGaucho",
              spotify: "https://open.spotify.com/artist/5AJWGh9NGtTwzTCVq7zFbe",
            },
          },
          {
            type: "list",
            order: 4,
            details: {
              title: "",
              links: [
                {
                  label: "Moments of Genius",
                  href: "https://www.youtube.com/watch?v=e5ylJxfhlRE",
                },
                {
                  href: "https://www.youtube.com/watch?v=-Gc2twGGHFA",
                  label: "Olé - Brazil vs Portugal",
                },
              ],
            },
          },
        ],
      },
    },
  });

  await prisma.user.create({
    data: {
      email: "shakira@demo",
      slug: "shakira",
      name: "Shakira",
      bgCss: {
        backgroundImage:
          "linear-gradient( 184.1deg,  rgba(249,255,182,1) 44.7%, rgba(226,255,172,1) 67.2% )",
      },
      isPublished: true,
      isDemo: true,
      components: {
        create: [
          {
            type: "intro",
            order: 1,
            details: {
              name: "Shakira Isabel",
              headline: "Rhythm Enchantress",
            },
          },
          {
            type: "icons",
            order: 2,
            details: {
              linkedin: "",
              instagram: "https://www.instagram.com/shakira",
              github: "",
              twitter: "https://twitter.com/shakira",
              facebook: "https://www.facebook.com/shakira",
              tiktok: "",
              youtube: "https://www.youtube.com/shakira",
              spotify: "",
            },
          },
          {
            type: "list",
            order: 3,
            details: {
              title: "Most Popular on YouTube",
              links: [
                {
                  href: "https://www.youtube.com/watch?v=pRpeEdMmmQ0",
                  label: "Waka Waka (This Time for Africa)",
                },
                {
                  href: "https://www.youtube.com/watch?v=DUT5rEU6pqM",
                  label: "Hips Don't Lie",
                },
                {
                  href: "https://www.youtube.com/watch?v=6Mgqbai3fKo",
                  label: "Chantaje",
                },
              ],
            },
          },
        ],
      },
    },
  });

  await prisma.user.create({
    data: {
      email: "ghibli@demo",
      slug: "ghibli",
      name: "Studio Ghibli",
      bgCss: {
        backgroundColor: "#00FFFF",
      },
      isPublished: true,
      isDemo: true,
      components: {
        create: [
          {
            type: "intro",
            order: 1,
            details: {
              name: "Studio Ghibli",
              headline: "Fantasy Atelier",
            },
          },
          {
            type: "icons",
            order: 2,
            details: {
              linkedin: "",
              instagram: "",
              github: "",
              twitter: "https://twitter.com/GKIDSfilms",
              facebook: "https://www.facebook.com/GKIDSfilms",
              tiktok: "",
              youtube: "",
              spotify: "",
            },
          },
          {
            type: "icons",
            order: 3,
            details: {
              linkedin: "",
              instagram: "https://www.instagram.com/GKIDSfilms/",
              github: "",
              twitter: "",
              facebook: "",
              tiktok: "",
              youtube:
                "https://www.youtube.com/channel/UCb9ME2w6Y_4jChUVlWdltVg",
              spotify: "",
            },
          },
          {
            type: "list",
            order: 4,
            details: {
              title: "Memorable Moments",
              links: [
                {
                  href: "https://www.youtube.com/watch?v=70NhEBzLKU8",
                  label: "Don't Breathe, Chihiro!",
                },
                {
                  label: "Totoro and the Catbus",
                  href: "https://www.youtube.com/watch?v=nqAxRJhUT3k",
                },
                {
                  href: "https://www.youtube.com/watch?v=Guxx_KTm_6M",
                  label: "Gather Around For Breakfast!",
                },
              ],
            },
          },
        ],
      },
    },
  });

  console.log("Demo profiles seeded.");
};

const seedSamples = async () => {
  await prisma.user.create({
    data: {
      email: "hmy0hmy@gmail.com",
      slug: "a-nyx",
      name: "Adam Nyx",
      bgCss: {
        backgroundColor: "#ffe5ec",
      },
      isPublished: true,
      isDemo: false,
      components: {
        create: [
          {
            type: "intro",
            order: 1,
            details: {
              name: "Adam Nyx",
              headline: "Web Developer & Educator",
            },
          },
          {
            type: "icons",
            order: 2,
            details: {
              linkedin: "https://www.linkedin.com/in/a-nyx/",
              instagram: "",
              github: "https://github.com/a-nyx",
              twitter: "",
              facebook: "",
              tiktok: "",
              youtube: "",
              spotify: "",
            },
          },
          {
            type: "list",
            order: 3,
            details: {
              title: "WebDev Bookmarks",
              links: [
                {
                  href: "https://www.linkedin.com/pulse/web-maps-open-source-serverless-adam-nyx-mpt1c/",
                  label: "Web Maps: Open-source & Serverless",
                },
                {
                  label: "Climate Dashboard",
                  href: "https://newsinteractives.cbc.ca/features/2023/climate-dashboard/",
                },
                {
                  label: "Maple Code",
                  href: "https://www.meetup.com/maple-code/",
                },
              ],
            },
          },
        ],
      },
    },
  });

  console.log("Sample profiles seeded.");
};

// Execute
seed()
  .catch(async (e) => console.error("Seeding Failed!", e))
  .finally(async () => await prisma.$disconnect());
