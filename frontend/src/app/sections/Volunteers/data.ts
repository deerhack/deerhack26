// import { BACKEND_URL, SERVER_URL } from "@/app/utils/config";
// import UserEntity from "@/app/types/userentity";

// const transformVolunteerData = (volunteer: any) => ({
//   name: volunteer.attributes.name,
//   position: volunteer.attributes.position,
//   image: SERVER_URL + volunteer.attributes.image.data.attributes.url,
//   linkedin_url: volunteer.attributes.linkedin_url,
// });
//
// const fetchData = async () => {
//   try {
//     const response = await fetch(
//       `${BACKEND_URL}/api/volunteers?populate=image`,
//       {
//         cache: "no-store",
//       },
//     );
//
//     if (!response.ok) {
//       console.log(`Failed to fetch data. Status: ${response.status}`);
//       return [];
//     }
//
//     const data = await response.json();
//
//     const volunteers: UserEntity[] = data.data.map(transformVolunteerData);
//
//     return volunteers;
//   } catch (error) {
//     console.error("Error fetching volunteers");
//     return [];
//   }
// };
//
// export default fetchData;

import Volunteers from "@/app/types/volunteers";

export const Volunteers_value : Volunteers[] = [
    {
        name: "Aarush Dangol",
        image: "https://ghostuf.github.io/static_images/oc/aarush_dangol.jpg",
        linkedin_url: "https://www.linkedin.com/in/aarush-dangol-a5393836b/",
    },
    {
        name: "Aryan Shahi",
        image: "https://ghostuf.github.io/static_images/oc/aryan_shahi.png",
        linkedin_url: "https://www.linkedin.com/in/aryan-shahi-074b8a36b/",
    },
    {
        name: "Ayushna Rana",
        image: "https://ghostuf.github.io/static_images/oc/ayushna_rana.png",
        linkedin_url: "https://www.linkedin.com/in/ayushna-rana-84b97236b/",
    },
    {
        name: "Bhanu Prakash KC",
        image: "https://ghostuf.github.io/static_images/oc/bhanu_prakash_kc.jpg",
        linkedin_url: "https://www.linkedin.com/in/bhanu-prakash-kc/",
    },
    {
        name: "Bibisha Adhikari",
        image: "https://ghostuf.github.io/static_images/oc/bibisha_adhikari.jpg",
        linkedin_url: "https://www.linkedin.com/in/bibisha-adhikari-5a5a55310/",
    },
    {
        name: "Diya Shahi",
        image: "https://ghostuf.github.io/static_images/oc/diya_shahi.jpeg",
        linkedin_url: "https://www.linkedin.com/in/diya-shahi-85973336b/",
    },
    {
        name: "Drishya Karki",
        image: "https://ghostuf.github.io/static_images/oc/drishya_karki.png",
        linkedin_url: "https://www.linkedin.com/in/drishya-karki-542204370/",
    },
    {
        name: "Fayal Subedi",
        image: "https://ghostuf.github.io/static_images/oc/fayal_subedi.png",
        linkedin_url: "https://www.linkedin.com/in/fayal-subedi-a17b1936b/",
    },
    {
        name: "Ishan Baidya Khadgi",
        image: "https://ghostuf.github.io/static_images/oc/ishan_baidya_khadgi.png",
        linkedin_url: "https://www.linkedin.com/in/ishan-vaidya-26a5b4285/",
    },
    {
        name: "Johnson Shrestha",
        image: "https://ghostuf.github.io/static_images/oc/johnson_shrestha.png",
        linkedin_url: "https://www.linkedin.com/in/johnson-shrestha-79029b347/",
    },
    {
        name: "Khushi Ojha",
        image: "https://ghostuf.github.io/static_images/oc/khushi_ojha.jpg",
        linkedin_url: "",
    },
    {
        name: "Princika Chapagain",
        image: "https://ghostuf.github.io/static_images/oc/princika_chapagain.jpeg",
        linkedin_url: "",
    },
    {
        name: "Samikshya Acharya",
        image: "https://ghostuf.github.io/static_images/oc/samikshya_acharya.jpg",
        linkedin_url: "https://www.linkedin.com/in/samiksha-acharya-66597536b/",
    },
    {
        name: "Sandhya Sharma",
        image: "https://ghostuf.github.io/static_images/oc/sandhya_sharma.png",
        linkedin_url: "www.linkedin.com/in/sandhya-sharma-3770062a6",
    },
    {
        name: "Shreyansh Pokhrel",
        image: "https://ghostuf.github.io/static_images/oc/shreyansh_pokhrel.png",
        linkedin_url: "https://www.linkedin.com/in/shreyansh-pokharel-912201352/",
    },

    {
        name: "Shine Pathak",
        image: "https://ghostuf.github.io/static_images/oc/shine_pathak.jpg",
        linkedin_url: "https://www.linkedin.com/in/shine-pathak-8a011824b?trk=contact-info",
    },

    {
        name: "Smriti Adhikari",
        image: "https://ghostuf.github.io/static_images/oc/smriti_adhikari.jpg",
        linkedin_url: "https://www.linkedin.com/in/smriti-adhikari-8341b5327/",
    },
    {
        name: "Sophiya Parajuli",
        image: "https://ghostuf.github.io/static_images/oc/sophiya_parajuli.jpeg",
        linkedin_url: "https://www.linkedin.com/in/sophiya-parajuli-18973336b/",
    },
    {
        name: "Swadha Pandey",
        image: "https://ghostuf.github.io/static_images/oc/swadha_pandey.jpg",
        linkedin_url: "",
    },
    {
        name: "Swornim Raj Subedi",
        image: "https://ghostuf.github.io/static_images/oc/swornim_raj_subedi.jpeg",
        linkedin_url: "https://www.linkedin.com/in/swornim-raj-subedi-806392341/",
    },
    {
        name: "Tejaswi Vaijo",
        image: "https://ghostuf.github.io/static_images/oc/tejaswi_vaijo.jpg",
        linkedin_url: "https://www.linkedin.com/in/tejaswi-v-a0264632b/",
    },
];
