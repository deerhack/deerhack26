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
        name: "Vizar Panta",
        image: "https://enkoki.github.io/static_images/deerhack26/volunteers/Vizar%20Panta.jpg",
        linkedin_url: "https://www.linkedin.com/in/vizar-panta?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    },
    {
        name: "Sitashma Parajuli",
        image: "https://enkoki.github.io/static_images/deerhack26/volunteers/Sitashma%20Parajuli.png",
        linkedin_url: "https://www.linkedin.com/in/sitashmaparajuli?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },    
    {
        name: "Abiral Shrestha",
        image: "https://enkoki.github.io/static_images/deerhack26/volunteers/Abiral%20Shrestha.jpg",
        linkedin_url: "https://www.linkedin.com/in/abiral-shrestha-a745473b4",
    },          
    {
        name: "Reason Dahal",
        image: "https://enkoki.github.io/static_images/deerhack26/volunteers/Reason%20Dahal.jpg",
        linkedin_url: "https://reason.com.np",
    },    
    {
        name: "Sworup Dhakal",
        image: "https://enkoki.github.io/static_images/deerhack26/volunteers/Sworup%20Dhakal.jpeg",
        linkedin_url: "https://www.linkedin.com/in/sworup-dhakal-b00a033a2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    },  
    {
        name: "Prawal Dahal",
        image: "https://enkoki.github.io/static_images/deerhack26/volunteers/Prawal%20Dahal.jpg",
        linkedin_url: "https://www.linkedin.com/in/prawal-dahal-20a104311?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    },
    {
        name: "Aarambha Bhattarai",
        image: "https://enkoki.github.io/static_images/deerhack26/volunteers/Aarambha%20Bhattarai.jpg",
        linkedin_url: "www.linkedin.com/in/aarambha-bhattarai-5682033a1",
    },       
    {
        name: "Suyog Pant",
        image: "https://enkoki.github.io/static_images/deerhack26/volunteers/Suyog%20Pant.jpg",
        linkedin_url: "https://www.linkedin.com/in/suyog-pant-012424412?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    },          
    {
        name: "Hrit Shrestha",
        image: "https://enkoki.github.io/static_images/deerhack26/volunteers/Hrit%20Shrestha.png",
        linkedin_url: "https://www.linkedin.com/in/hrit-shrestha-4544913b7?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    },    
    {
        name: "Anish Bikram Nembang",
        image: "https://enkoki.github.io/static_images/deerhack26/volunteers/Anish%20Bikram%20Nembang.jpg",
        linkedin_url: "https://www.linkedin.com/in/anish-bikram-nembang/",
    },    
    {
        name: "Luyash Thapa",
        image: "https://enkoki.github.io/static_images/deerhack26/volunteers/Luyash%20Thapa.jpg",
        linkedin_url: "https://www.linkedin.com/in/luyash-thapa-b0bb30404/",
    },           
    {
        name: "Abhinav Thapa",
        image: "https://enkoki.github.io/static_images/deerhack26/volunteers/Abhinav%20Thapa.png",
        linkedin_url: "https://www.linkedin.com/in/abhinavthapa7/",
    },
    {
        name: "Unique Shrestha",
        image: "https://enkoki.github.io/static_images/deerhack26/volunteers/Unique%20Shrestha.jpg",
        linkedin_url: "https://www.linkedin.com/in/unique-shrestha-a0a086412",
    },
    {
        name: "Shubhechchha Baral",
        image: "https://enkoki.github.io/static_images/deerhack26/volunteers/Shubhechchha%20Baral.jpeg",
        linkedin_url: "https://www.linkedin.com/in/shubhechchha-baral-6881b63b2?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    },
    {
        name: "Swornim Raj Subedi",
        image: "https://enkoki.github.io/static_images/deerhack26/volunteers/Swornim%20Raj%20Subedi.jpg",
        linkedin_url: "https://www.linkedin.com/in/swornim-raj-subedi-806392341?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    },
    {
        name: "Bidhi KC",
        image: "https://enkoki.github.io/static_images/deerhack26/volunteers/Bidhi%20KC.jpeg",
        linkedin_url: "https://np.linkedin.com/in/bidhi-kc-9ba098301",
    },        
    {
        name: "Paritosh Dahal",
        image: "https://enkoki.github.io/static_images/deerhack26/volunteers/Paritosh%20Dahal.jpg",
        linkedin_url: "https://www.linkedin.com/in/paritoshdahal",
    },

    {
        name: "Aryan Thapa",
        image: "https://enkoki.github.io/static_images/deerhack26/volunteers/Aryan%20Thapa.jpg",
        linkedin_url: "https://www.linkedin.com/in/aryan-thapa-85024b412",
    },

    {
        name: "Yunish Shrestha",
        image: "https://enkoki.github.io/static_images/deerhack26/volunteers/Yunish%20Shrestha.jpg",
        linkedin_url: "",
    },
    {
        name: "Unnati Sangat",
        image: "https://enkoki.github.io/static_images/deerhack26/volunteers/Unnati%20Sangat.jpeg",
        linkedin_url: "",
    },
    {
        name: "Christina Upreti",
        image: "https://enkoki.github.io/static_images/deerhack26/volunteers/Christina%20Upreti.jpg",
        linkedin_url: "https://www.linkedin.com/in/christina-upreti-06917836a/",
    },
    {
        name: "Kohinoor Shrestha",
        image: "https://enkoki.github.io/static_images/deerhack26/volunteers/Kohinoor%20Shrestha.jpeg",
        linkedin_url: "",
    },
    {
        name: "Sarbesh Shakya",
        image: "https://enkoki.github.io/static_images/deerhack26/volunteers/Sarbesh%20Shakya.jpg",
        linkedin_url: "https://www.linkedin.com/in/sarbesh-shakya-45a528412/",
    },
    {
        name: "Nitesh Singh Bista",
        image: "https://enkoki.github.io/static_images/deerhack26/volunteers/Nitesh%20Singh%20Bista.png",
        linkedin_url: "https://www.linkedin.com/in/nitesh-singh-bista-969981285/",
    },    
    {
        name: "Prasil Adhikari",
        image: "https://enkoki.github.io/static_images/deerhack26/volunteers/Prasil%20Adhikari.jpg",
        linkedin_url: "https://www.linkedin.com/in/prasil-adhikari",
    },
    {
        name: "Shreesha Khanal",
        image: "https://enkoki.github.io/static_images/deerhack26/volunteers/Shreesha%20Khanal.jpg",
        linkedin_url: "https://www.linkedin.com/in/shreesha-khanal-a737b8412",
    },
    {
        name: "Lhakpa Doma Sherpa",
        image: "https://enkoki.github.io/static_images/deerhack26/volunteers/Lhakpa%20Sherpa.jpeg",
        linkedin_url: "",
    },
    {
        name: "Tejaswi Vaijoo",
        image: "https://enkoki.github.io/static_images/deerhack26/volunteers/Tejaswi%20Vaijoo.jpg",
        linkedin_url: "https://www.linkedin.com/in/tejaswi-v-a0264632b/",        
    },
    {
        name: "Safal Silwal",
        image: "https://enkoki.github.io/static_images/deerhack26/volunteers/Safal%20Silwal.png",
        linkedin_url: "https://www.linkedin.com/in/safal-silwal-64129333b?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    },
    {
        name: "Sulav Singh",
        image: "https://enkoki.github.io/static_images/deerhack26/volunteers/Sulav%20Singh.jpeg",
        linkedin_url: "https://www.linkedin.com/in/sulav-singh?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    },
    {
        name: "Bistrit Pandey",
        image: "https://enkoki.github.io/static_images/deerhack26/volunteers/Bistrit%20Pandey.png",
        linkedin_url: "https://www.linkedin.com/in/bistrit-pandey-b520b034a/",
    },
    {
        name: "Rishab Bhakta Pradhan",
        image: "https://enkoki.github.io/static_images/deerhack26/volunteers/Rishab_Bhakta_Pradhan.jpg",
        linkedin_url: "https://www.linkedin.com/in/rishab-b-pradhan/",
    },                                        
];
