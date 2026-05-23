// import { BACKEND_URL, SERVER_URL } from "@/app/utils/config";
// import UserEntity from "@/app/types/userentity";

// const transformMentorData = (mentor: any) => ({
//   name: mentor.attributes.name,
//   position: mentor.attributes.position,
//   image: SERVER_URL + mentor.attributes.image.data.attributes.url,
//   linkedin_url: mentor.attributes.linkedin_url,
// });

// const fetchData = async () => {
//   try {
//     const response = await fetch(`${BACKEND_URL}/api/mentors?populate=image`, {
//       cache: "no-store",
//     });

//     if (!response.ok) {
//       console.log(`Failed to fetch data. Status: ${response.status}`);
//       return [];
//     }

//     const data = await response.json();

//     const mentors: UserEntity[] = data.data.map(transformMentorData);

//     return mentors;
//   } catch (error) {
//     console.error("Error fetching judges");
//     return [];
//   }
// };

// export default fetchData;
import Mentors from "@/app/types/mentors"

const Mentors_value: Mentors[] = [

   {
    name: "Mamata Maharjan",
    position: "Sr. Data Engineer",
    linkedin_url: "https://www.linkedin.com/in/mamata-maharjan-b4197b178",
    image: "https://enkoki.github.io/static_images/deerhack26/Mamata_Maharjan.jpg"
  },
   {
    name: "Rahul Raj Singh",
    position: "Robotics Engineer",
    linkedin_url: "https://www.linkedin.com/in/rahulrajshah",
    image: "https://enkoki.github.io/static_images/deerhack26/Rahul_Raj_Shah.jpg"
  },

   {
    name: "Mala Deep Upadhaya",
    position: "Data Consultant / Dataksha Analytics",
    linkedin_url: "https://www.linkedin.com/in/maladeep",
    image: "https://ghostuf.github.io/static_images/mala_deep_upadhyaya.jpg"
  },
   {
    name: "Aashutosh Poudel",
    position: "Co-Founder of InfoShapers",
    linkedin_url: "https://linkedin.com/in/aashutoshpoudel",
    image: "https://enkoki.github.io/static_images/deerhack26/Aashutosh_Poudel.JPG"
  },
  {
    name: "Shuvam Tiwari",
    position: "Sr. Blockchain Engineer",
    linkedin_url: "https://www.linkedin.com/in/shubhtiwari5/",
    image: "https://enkoki.github.io/static_images/deerhack26/Shubham_Tiwari.jpg",
  },
  {
    name: "Toshika Ojha",
    position: "Client Success Consultant ",
    linkedin_url: "https://www.linkedin.com/in/toshikaojha/",
    image:"https://ghostuf.github.io/static_images/toshika_ojha.jpg"
  },
  {
    name: "Luja Chitrakar",
    position: "Solana Developer",
    linkedin_url: "https://www.linkedin.com/in/lujachitrakar/",
    image:"https://ghostuf.github.io/static_images/luja_chitrakar.jpeg"
  },
 
 
 
 
  {
    name: "Sushan Shakya",
    position: "Sr. Software Engineer",
    linkedin_url: "https://www.linkedin.com/in/er-sushan-shakya-88b78b17b/",
    image: "https://ghostuf.github.io/static_images/sushan_shakya.jpg"
  },
  {
    name: "Prashant Malla",
    position: "Sr. Embedded Software Engineer",
    linkedin_url: "https://www.linkedin.com/in/prashant-malla-139339b2/",
    image: "https://ghostuf.github.io/static_images/prashant_malla.jpg"
  },
  {
    name: "Saru Manandhar",
    position: "Software Engineer",
    linkedin_url: "https://www.linkedin.com/in/saru-manandhar-71222614a/",
    image: "https://ghostuf.github.io/static_images/saru_manandhar.jpg"
  },
    {
    name: "Labbi Karmacharya",
    position: "Data Research Fellow / Equitech Futures, Lecturer ",
    linkedin_url: "https://www.linkedin.com/in/labbi-karmacharya/", 
    image: "https://enkoki.github.io/static_images/deerhack26/Labbi.jpg"
  },
  {
    name: "Sarun Luitel",
    position: "Owner at Dormo Solutions Pvt. Ltd.",
    linkedin_url: "https://www.linkedin.com/in/sarunluitel/", 
    image: "https://enkoki.github.io/static_images/deerhack26/Sarun_Luitel.jpg"
  },
   {
    name: "Minalma Basnet",
    position: "Customer Success Manager",
    linkedin_url: "https://www.linkedin.com/in/minalma-basnet/", 
    image: "https://enkoki.github.io/static_images/deerhack26/Minamla_Basnet.jpeg"
  },
 
]

export { Mentors_value }
