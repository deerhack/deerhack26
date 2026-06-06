// app/lib/data.ts

import Team from "@/app/types/team";


const teamsData: Array<Team> = [
  {
    id: 1,
    name: "Event Co-leads",
    organizers: [
      {
        id: 101,
        name: "Drishya Karki",
        image: "https://enkoki.github.io/static_images/deerhack26/leads/DrishyaKarki1.png",
        linkedin_url: "https://www.linkedin.com/in/drishya-karki-542204370/",
        position: "Event Co-lead",
      },
      {
        id: 102,
        name: "Shreyansh Pokharel",
        image: "https://enkoki.github.io/static_images/deerhack26/leads/ShreyanshPokharel.jpg",
        linkedin_url: "https://www.linkedin.com/in/shreyansh-pokharel-912201352/",
        position: "Event Co-lead",
      },
    ],
  },
  
  {
    id: 3,
    name: "Creative Leads",
    organizers: [
      {
        id: 301,
        name: "Aryan Shahi",
        image: "https://enkoki.github.io/static_images/deerhack26/leads/AryanShahi.png",
        linkedin_url: "https://www.linkedin.com/in/aryan-shahi-257639373/",
        position: "Design Team",
      },
      {
        id: 302,
        name: "Hardik Shakya",
        image: "https://enkoki.github.io/static_images/deerhack26/leads/HardikShakya.jpg",
        linkedin_url: "https://www.linkedin.com/in/hardik-shakya-231139339/",
        position: "Design Team",
      },
    ],
  },
  {
    id: 2,
    name: "Technical Leads",
    organizers: [
      {
        id: 201,
        name: "Ishan Baidya Khadgi",
        image: "https://enkoki.github.io/static_images/deerhack26/leads/IshanBaidya.jpg",
        linkedin_url: "https://www.linkedin.com/in/ishan-vaidya-26a5b4285/",
        position: "Technical Team",
      },
      {
        id: 202,
        name: "Aarush Dangol",
        image: "https://enkoki.github.io/static_images/deerhack26/leads/AarushDangol.png",
        linkedin_url: "https://www.linkedin.com/in/aarush-dangol-a5393836b/",
        position: "Technical Team",
      },
    ],
  },
  {
    id: 8,
    name: "Documentation and Outreach Leads",
    organizers: [
      {
        id: 801,
        name: "Bibisha Adhikari",
        image: "https://enkoki.github.io/static_images/deerhack26/leads/BibishaAdhikari.jpg",
        linkedin_url: "https://www.linkedin.com/in/bibisha-adhikari-5a5a55310",
        position: "Documentation",
      },
     
    ],
  },

  {
    id: 5,
    name: "PR and Social Media Leads",
    organizers: [
      {
        id: 501,
        name: "Bhanu Prakash KC",
        image: "https://enkoki.github.io/static_images/deerhack26/leads/BhanuKc.jpg",
        linkedin_url: "https://np.linkedin.com/in/bhanu-prakash-kc",
        position: "PR and Social Media",
      },
      {
        id: 502,
        name: "Sarwa Shrestha",
        image: "https://enkoki.github.io/static_images/deerhack26/leads/SarwaShrestha.jpeg",
        linkedin_url: "https://www.linkedin.com/in/sarwa-shrestha-1a14b332a/",
        position: "PR and Social Media",
      },
      {
        id: 503,
        name: "Mohak Giri",
        image: "https://enkoki.github.io/static_images/deerhack26/leads/MohakGiri.png",
        linkedin_url:
          "https://www.linkedin.com/in/mohak-giri-0a3299375",
        position: "PR and Social Media",
      },
    ],
  },
  {
    id: 4,
    name: "Judges and Mentor Coordinator",
    organizers: [
      {
        id: 401,
        name: "Aarashee Thapa",
        image: "https://enkoki.github.io/static_images/deerhack26/leads/AarasheeThapa.jpg",
        linkedin_url: "https://www.linkedin.com/in/aarashee-thapa-b3a7423b1",
        position: "Judges and Mentor Coordinator",
      },
    ],
  },

  {
    id: 6,
    name: "Logistics Lead",
    organizers: [
      {
        id: 601,
        name: "Shine Pathak",
        image: "https://enkoki.github.io/static_images/deerhack26/leads/DrishyaKarki.jpeg",
        linkedin_url: "https://www.linkedin.com/in/shine-pathak-8a011824b",
        position: "Logistics",
      },
    ],
  },
];

export default teamsData;