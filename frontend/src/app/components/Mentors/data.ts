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
    name: "Shuvam Tiwari",
    position: "Software Engineer",
    linkedin_url: "https://www.linkedin.com/in/bishal-joshi-7a3711203",
    image: "https://enkoki.github.io/static_images/deerhack26/Shubham_Tiwari.jpg",
  },
  {
    name: "Toshika Ojha",
    position: "Client Success Consultant",
    linkedin_url: "https://www.linkedin.com/in/toshikaojha/",
    image:"https://ghostuf.github.io/static_images/toshika_ojha.jpg"
  },
  {
    name: "Luja Chitrakar",
    position: "Blockchain Developer",
    linkedin_url: "https://www.linkedin.com/in/luja-chitrakar/",
    image:"https://ghostuf.github.io/static_images/luja_chitrakar.jpeg"
  },
  {
    name: "Mala Deep Upadhaya",
    position: "Data Consultant",
    linkedin_url: "https://www.linkedin.com/in/maladeep",
    image: "https://enkoki.github.io/static_images/deerhack26/Mala_Deep_Upadhaya.PNG"
  },
  {
    name: "Aashutosh Poudel",
    position: "QA Engineer",
    linkedin_url: "https://www.linkedin.com/in/elishabaniya",
    image: "https://enkoki.github.io/static_images/deerhack26/Aashutosh_Poudel.JPG"
  },
  {
    name: "Rahul Raj Singh",
    position: "UI/UX Engineer",
    linkedin_url: "https://www.linkedin.com/in/yashaswee-sakha/",
    image: "https://enkoki.github.io/static_images/deerhack26/Rahul_Raj_Shah.jpg"
  },
  {
    name: "Mamata Maharjan",
    position: "Senior Software Engineer",
    linkedin_url: "https://www.linkedin.com/in/mamata-maharjan-b4197b178",
    image: "https://enkoki.github.io/static_images/deerhack26/Mamata_Maharjan.jpg"
  },
  {
    name: "Sushan Shakya",
    position: "Data Engineer",
    linkedin_url: "https://www.linkedin.com/in/er-sushan-shakya-88b78b17b/",
    image: "https://ghostuf.github.io/static_images/sushan_shakya.jpg"
  },
  {
    name: "Prashant Malla",
    position: "Embedded System Engineer",
    linkedin_url: "https://www.linkedin.com/in/prashant-malla-139339b2",
    image: "https://ghostuf.github.io/static_images/prashant_malla.jpg"
  },
  {
    name: "Saru Manandhar",
    position: "Software Engineer",
    linkedin_url: "https://www.linkedin.com/in/saru-manandhar-71222614a",
    image: "https://enkoki.github.io/static_images/deerhack26/Saru_Manandhar.jpg"
  },
    {
    name: "Labbi",
    position: "Lead Engineer",
    linkedin_url: "https://www.linkedin.com/in/avinash-mishra-np/", // No LinkedIn URL provided
    image: "https://enkoki.github.io/static_images/deerhack26/Labbi.jpg"
  },
  {
    name: "Sarun Luitel",
    position: "Machine Learning Engineer",
    linkedin_url: "https://www.linkedin.com/in/rojanupreti/", // No LinkedIn URL provided
    image: "https://enkoki.github.io/static_images/deerhack26/Sarun_Luitel.jpg"
  },
   {
    name: "Minalma Basnet",
    position: "Lead Engineer",
    linkedin_url: "https://www.linkedin.com/in/avinash-mishra-np/", // No LinkedIn URL provided
    image: "https://enkoki.github.io/static_images/deerhack26/Minamla_Basnet.jpeg"
  },
 
]

export { Mentors_value }
