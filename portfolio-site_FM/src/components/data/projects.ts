// Shared project data from Sanity CMS - Real portfolio projects

export interface SanityProject {
  _id: string;
  dateCreated: string;
  featured: boolean;
  imageUrl: string;
  industry: string;
  skills: string[];
  title: string;
  urlPath: string;
  description?: string;
}

export interface ArchiveProject {
  id: string;
  title: string;
  year: string;
  type: 'featured' | 'client' | 'personal';
  category: string;
  technologies: string[];
  description: string;
  image?: string;
  status: 'live' | 'archived' | 'private';
  urlPath: string;
}

// Real project data from Sanity CMS - 258+ hospitality projects
export const sanityProjects: SanityProject[] = [
  {
    "_id": "project-258",
    "dateCreated": "2022-06-06",
    "featured": false,
    "imageUrl": "https://cdn.sanity.io/images/669ljbt4/production/08444f99bba9d48769be6f758c4b694ff70ff368-400x300.svg",
    "industry": "other",
    "skills": ["Hotel"],
    "title": "Leto Hydra",
    "urlPath": "https://letohydra.gr/"
  },
  {
    "_id": "project-257",
    "dateCreated": "2024-01-19",
    "featured": false,
    "imageUrl": "https://cdn.sanity.io/images/669ljbt4/production/08444f99bba9d48769be6f758c4b694ff70ff368-400x300.svg",
    "industry": "other",
    "skills": ["Hotel"],
    "title": "Liberte Lacanau",
    "urlPath": "https://libertelacanau.com/"
  },
  {
    "_id": "project-256",
    "dateCreated": "2024-01-19",
    "featured": false,
    "imageUrl": "https://cdn.sanity.io/images/669ljbt4/production/08444f99bba9d48769be6f758c4b694ff70ff368-400x300.svg",
    "industry": "other",
    "skills": ["Hotel"],
    "title": "Libert Landrellec",
    "urlPath": "https://libertelandrellec.com/"
  },
  {
    "_id": "project-255",
    "dateCreated": "2024-01-19",
    "featured": false,
    "imageUrl": "https://cdn.sanity.io/images/669ljbt4/production/08444f99bba9d48769be6f758c4b694ff70ff368-400x300.svg",
    "industry": "other",
    "skills": ["Hotel"],
    "title": "Libert Everdon",
    "urlPath": "https://liberteverdon.com/"
  },
  {
    "_id": "project-254",
    "dateCreated": "2024-04-05",
    "featured": false,
    "imageUrl": "https://cdn.sanity.io/images/669ljbt4/production/08444f99bba9d48769be6f758c4b694ff70ff368-400x300.svg",
    "industry": "other",
    "skills": ["Hotel"],
    "title": "Liss Ard Estate",
    "urlPath": "https://lissardestate.ie/"
  },
  {
    "_id": "project-253",
    "dateCreated": "2025-09-09",
    "featured": false,
    "imageUrl": "https://cdn.sanity.io/images/669ljbt4/production/b0b1e4f74ce4798d768ce1970d08fc489eb33e95-1400x1050.jpg",
    "industry": "other",
    "skills": ["Hotel"],
    "title": "Les Maisons de Lea",
    "urlPath": "https://lesmaisonsdelea.com/"
  },
  {
    "_id": "project-252",
    "dateCreated": "2023-09-10",
    "featured": false,
    "imageUrl": "https://cdn.sanity.io/images/669ljbt4/production/df9a5d72f9d7d0ebe0799cee8b75ed49a9b9484c-1400x7830.webp",
    "industry": "other",
    "skills": ["Hotel"],
    "title": "les Cures Marines",
    "urlPath": "https://lescuresmarines.com/"
  },
  {
    "_id": "project-251",
    "dateCreated": "2024-07-27",
    "featured": false,
    "imageUrl": "https://cdn.sanity.io/images/669ljbt4/production/ffcaa26d9f2c16125711a5e56a130ff6a7225d87-1400x5137.webp",
    "industry": "hospitality",
    "skills": ["Hotel"],
    "title": "Lyric Hotel Paris",
    "urlPath": "https://lyrichotelparis.com/"
  },
  {
    "_id": "project-250",
    "dateCreated": "2025-04-17",
    "featured": false,
    "imageUrl": "https://cdn.sanity.io/images/669ljbt4/production/1322e78f3fc55aed96c610a0591c9976bb2c7dc5-1400x1050.jpg",
    "industry": "other",
    "skills": ["Hotel"],
    "title": "Maison des Armateurs",
    "urlPath": "https://maisondesarmateurs.com/"
  },
  {
    "_id": "project-249",
    "dateCreated": "2024-12-04",
    "featured": false,
    "imageUrl": "https://cdn.sanity.io/images/669ljbt4/production/1322e78f3fc55aed96c610a0591c9976bb2c7dc5-1400x1050.jpg",
    "industry": "other",
    "skills": ["Hotel"],
    "title": "Maison Heler Metz",
    "urlPath": "https://maisonhelermetz.com/"
  },
  {
    "_id": "project-248",
    "dateCreated": "2024-01-04",
    "featured": false,
    "imageUrl": "https://cdn.sanity.io/images/669ljbt4/production/455ca799bba3cf5ace2789ebf89cf175ed6aae49-1400x5303.webp",
    "industry": "hospitality",
    "skills": ["Hotel"],
    "title": "Makass Appart Hotel",
    "urlPath": "https://makassapparthotel.com/"
  },
  {
    "_id": "project-247",
    "dateCreated": "2023-05-31",
    "featured": false,
    "imageUrl": "https://cdn.sanity.io/images/669ljbt4/production/7f8626fc188b40cc4f8f497cb504cd867561e31c-1400x7196.webp",
    "industry": "hospitality",
    "skills": ["Hotel"],
    "title": "Malone Hotels",
    "urlPath": "https://malonehotels.com/"
  },
  {
    "_id": "project-246",
    "dateCreated": "2025-09-09",
    "featured": false,
    "imageUrl": "https://cdn.sanity.io/images/669ljbt4/production/407b5db504b1b03b6863d347802c62575d0888cc-1400x1050.jpg",
    "industry": "other",
    "skills": ["Hotel"],
    "title": "Moulin Plaza",
    "urlPath": "https://moulinplaza.com/"
  },
  {
    "_id": "project-245",
    "dateCreated": "2025-09-09",
    "featured": false,
    "imageUrl": "https://cdn.sanity.io/images/669ljbt4/production/a4d41b7a537e88803fd444378401a01323428d5d-1400x1544.webp",
    "industry": "other",
    "skills": ["Hotel"],
    "title": "My Home in Paris",
    "urlPath": "https://myhomeinparis.fr/"
  },
  {
    "_id": "project-244",
    "dateCreated": "2025-09-09",
    "featured": false,
    "imageUrl": "https://cdn.sanity.io/images/669ljbt4/production/363bf2aa439ade1bc5a116f8cc2872ce03b057ca-1400x4032.webp",
    "industry": "hospitality",
    "skills": ["Hotel"],
    "title": "Odeon Hotel",
    "urlPath": "https://odeonhotel.fr/"
  },
  {
    "_id": "project-243",
    "dateCreated": "2022-09-26",
    "featured": false,
    "imageUrl": "https://cdn.sanity.io/images/669ljbt4/production/4b1f98a792608b9956638c3dccc9e69c740b9a3a-1400x1050.jpg",
    "industry": "hospitality",
    "skills": ["Hotel"],
    "title": "Paris Hotel Lion",
    "urlPath": "https://paris-hotel-lion.com/"
  },
  {
    "_id": "project-242",
    "dateCreated": "2025-09-09",
    "featured": false,
    "imageUrl": "https://cdn.sanity.io/images/669ljbt4/production/4b1f98a792608b9956638c3dccc9e69c740b9a3a-1400x1050.jpg",
    "industry": "hospitality",
    "skills": ["Hotel"],
    "title": "Paris Hotel Yllen Eiffel",
    "urlPath": "https://paris-hotel-yllen-eiffel.com/"
  },
  {
    "_id": "project-241",
    "dateCreated": "2024-07-02",
    "featured": false,
    "imageUrl": "https://cdn.sanity.io/images/669ljbt4/production/79133938f62ecd849f5c957be1f7d1398f27b206-1400x7914.webp",
    "industry": "other",
    "skills": ["Restaurant"],
    "title": "Pecora Negra",
    "urlPath": "https://pecoranegra.fr/"
  },
  {
    "_id": "project-240",
    "dateCreated": "2025-09-09",
    "featured": false,
    "imageUrl": "https://cdn.sanity.io/images/669ljbt4/production/bdab348152a4b09a1e9ed09d85552c7ac3ce71d9-1400x1050.jpg",
    "industry": "other",
    "skills": ["Hotel"],
    "title": "Relais Du Moulin",
    "urlPath": "https://relaisdumoulin.com/"
  },
  {
    "_id": "project-239",
    "dateCreated": "2025-09-09",
    "featured": false,
    "imageUrl": "https://cdn.sanity.io/images/669ljbt4/production/e4ec1b6bd7b6c9943f7fb65d9eb4b73a195514c3-1400x5484.webp",
    "industry": "other",
    "skills": ["Hotel"],
    "title": "The Augustin",
    "urlPath": "https://theaugustin.com/"
  },
  {
    "_id": "project-20",
    "dateCreated": "2022-04-30",
    "featured": true,
    "imageUrl": "https://cdn.sanity.io/images/669ljbt4/production/ca2ff79bc524ef0305b596da23fbb488071f8cd3-1400x5408.webp",
    "industry": "other",
    "skills": ["RV"],
    "title": "Optimum RV",
    "urlPath": "https://optimumrv.com/"
  },
  {
    "_id": "eaef51e2-ea09-46d7-8e5a-2e40d9464122",
    "dateCreated": "2025-09-09",
    "featured": true,
    "imageUrl": "https://cdn.sanity.io/images/669ljbt4/production/221dff7de012cd801cd94233e4e9785defcf4ffb-1400x709.webp",
    "industry": "other",
    "skills": [],
    "title": "Maison Heler",
    "urlPath": ""
  },
  {
    "_id": "935ba1f3-51f1-4baa-bd60-1592dc7ed1d3",
    "dateCreated": "2025-09-09",
    "description": "Luxury hotel rebuild with sliders, filtering, popups; tuned for performance.",
    "featured": true,
    "imageUrl": "https://cdn.sanity.io/images/669ljbt4/production/cea0e993ad43c26ae9017a44242d9e83479f9b43-1400x9460.webp",
    "industry": "hospitality",
    "skills": [],
    "title": "Hotel Palombaggia",
    "urlPath": ""
  },
  {
    "_id": "project-238",
    "dateCreated": "2019-02-22",
    "featured": false,
    "imageUrl": "https://cdn.sanity.io/images/669ljbt4/production/d18b1e298dbb8173388d0b0d3301464d56017e6d-1400x8643.webp",
    "industry": "other",
    "skills": ["Hotel"],
    "title": "Tobira",
    "urlPath": "https://tobira.co.jp/en/myojinkan.html"
  },
  {
    "_id": "project-237",
    "dateCreated": "2025-03-04",
    "featured": false,
    "imageUrl": "https://cdn.sanity.io/images/669ljbt4/production/ab7822d307feed9f8d4f805e70aed0e4948af0b9-1400x1050.jpg",
    "industry": "other",
    "skills": ["Hotel"],
    "title": "Tortiniere",
    "urlPath": "https://tortiniere.fr/"
  },
  {
    "_id": "project-236",
    "dateCreated": "2023-06-23",
    "featured": false,
    "imageUrl": "https://cdn.sanity.io/images/669ljbt4/production/f8dc0a82956b02e26f4c94e946767fa4f416c0dc-1400x2103.webp",
    "industry": "other",
    "skills": ["Hotel"],
    "title": "Valdiski",
    "urlPath": "https://valdiski.com/"
  },
  {
    "_id": "project-235",
    "dateCreated": "2025-09-09",
    "featured": false,
    "imageUrl": "https://cdn.sanity.io/images/669ljbt4/production/902473cb6512589e19d0f27e26344124d4895dcd-1400x7334.webp",
    "industry": "other",
    "skills": ["Hotel"],
    "title": "Welfi Hospitality",
    "urlPath": "https://welfihospitality.com/"
  },
  {
    "_id": "project-234",
    "dateCreated": "2025-09-09",
    "featured": false,
    "imageUrl": "https://cdn.sanity.io/images/669ljbt4/production/b955a1812f806b82e2d68ad8c966512833f461e7-1400x4360.webp",
    "industry": "other",
    "skills": ["Hotel"],
    "title": "Ivi Mare Paphos",
    "urlPath": "https://ivimarepaphos.com/"
  },
  {
    "_id": "project-233",
    "dateCreated": "2025-09-09",
    "featured": false,
    "imageUrl": "https://cdn.sanity.io/images/669ljbt4/production/08f9f9237e96674a342a9f4264d4781dedee4c07-1400x3930.webp",
    "industry": "hospitality",
    "skills": ["Hotel"],
    "title": "Hotel Waldorf",
    "urlPath": "https://hotelwaldorf.fr/"
  },
  {
    "_id": "project-232",
    "dateCreated": "2025-09-09",
    "featured": false,
    "imageUrl": "https://cdn.sanity.io/images/669ljbt4/production/a54a9d6f5506b73b625b8919b1a4727390f7ca5a-1400x769.webp",
    "industry": "hospitality",
    "skills": ["Hotel"],
    "title": "Hotel Sparis Versailles",
    "urlPath": "https://hotelsparisversailles.com/"
  },
  {
    "_id": "project-231",
    "dateCreated": "2025-01-18",
    "featured": false,
    "imageUrl": "https://cdn.sanity.io/images/669ljbt4/production/a058a4cd3052b6ba38c06f0be1241e1a4ee08983-1400x1050.jpg",
    "industry": "hospitality",
    "skills": ["Hotel"],
    "title": "Hotels Demeures Historiques",
    "urlPath": "https://hotels-demeures-historiques.com/"
  },
  {
    "_id": "project-230",
    "dateCreated": "2023-11-09",
    "featured": false,
    "imageUrl": "https://cdn.sanity.io/images/669ljbt4/production/b8165bf19509bbfc0e172b8a4de5f0bcd7b6fee9-1400x4777.webp",
    "industry": "hospitality",
    "skills": ["Hotel"],
    "title": "Hotel Paris Muguet",
    "urlPath": "https://hotelparismuguet.com/"
  },
  {
    "_id": "project-229",
    "dateCreated": "2023-07-25",
    "featured": false,
    "imageUrl": "https://cdn.sanity.io/images/669ljbt4/production/b3259189ff1d03d7aad583c92aaaafd7904d5625-1400x6645.webp",
    "industry": "hospitality",
    "skills": ["Hotel"],
    "title": "Hotel Norman",
    "urlPath": "https://hotelnorman.com/"
  },
  {
    "_id": "project-228",
    "dateCreated": "2022-07-06",
    "featured": false,
    "imageUrl": "https://cdn.sanity.io/images/669ljbt4/production/28adf12bb3ff6193ea439f3b6e8551d9a36cd856-1400x1050.jpg",
    "industry": "hospitality",
    "skills": ["Hotel"],
    "title": "Hotel Monge",
    "urlPath": "https://hotelmonge.com/"
  },
  {
    "_id": "project-185",
    "dateCreated": "2019-01-17",
    "featured": false,
    "imageUrl": "https://cdn.sanity.io/images/669ljbt4/production/5cf6aebf03936b1fccc51849564d6efeb6962b62-1400x1050.jpg",
    "industry": "other",
    "skills": ["Hotel", "Restaurant", "Spa"],
    "title": "The Royal Apollonia",
    "urlPath": "https://theroyalapollonia.com/"
  },
  {
    "_id": "project-184",
    "dateCreated": "2019-03-27",
    "featured": false,
    "imageUrl": "https://cdn.sanity.io/images/669ljbt4/production/dddb782b7d20a297abaa487411f7b58bf9d7aa9e-1400x1050.jpg",
    "industry": "other",
    "skills": ["Hotel", "Restaurant", "Spa"],
    "title": "King Jason Protaras",
    "urlPath": "https://thekingjasonprotaras.com/"
  },
  {
    "_id": "project-183",
    "dateCreated": "2019-03-29",
    "featured": false,
    "imageUrl": "https://cdn.sanity.io/images/669ljbt4/production/29997bc6e5d9c6e8b90dee0f019443c749e55b53-1400x1050.jpg",
    "industry": "other",
    "skills": ["Hotel", "Restaurant", "Spa"],
    "title": "King Jason Paphos",
    "urlPath": "https://thekingjasonpaphos.com/"
  },
  {
    "_id": "project-182",
    "dateCreated": "2019-03-27",
    "featured": false,
    "imageUrl": "https://cdn.sanity.io/images/669ljbt4/production/f94c68f542481f3dc6ec86898b50565fab20ed10-1400x1050.jpg",
    "industry": "other",
    "skills": ["Hotel", "Restaurant", "Spa"],
    "title": "Louis IVI Mare",
    "urlPath": "https://theivimare.com/"
  },
  {
    "_id": "project-181",
    "dateCreated": "2017-11-20",
    "featured": false,
    "imageUrl": "https://cdn.sanity.io/images/669ljbt4/production/bf2690ef09de0da5941dee87c456dbb791211985-1400x1050.jpg",
    "industry": "hospitality",
    "skills": ["Hotel", "Restaurant", "Spa"],
    "title": "Library Hotel",
    "urlPath": "https://libraryhotel.com/"
  },
  {
    "_id": "project-180",
    "dateCreated": "2018-04-17",
    "featured": false,
    "imageUrl": "https://cdn.sanity.io/images/669ljbt4/production/40beadd32d03ddf6fed1dbea36c73795800e378f-1400x1050.jpg",
    "industry": "hospitality",
    "skills": ["Hotel", "Restaurant", "Spa"],
    "title": "Hotel X Toronto",
    "urlPath": "https://hotelxtoronto.com/"
  },
  {
    "_id": "project-140",
    "dateCreated": "2024-10-02",
    "featured": false,
    "imageUrl": "https://cdn.sanity.io/images/669ljbt4/production/aea976019f089749b2a934417bfdb25f1511c966-1400x4577.webp",
    "industry": "hospitality",
    "skills": ["Hotel"],
    "title": "Pomeroy Hotel",
    "urlPath": "https://pomeroyhotel.com/"
  }
];

// Transform Sanity data to standardized format
export function transformSanityProjects(projects: SanityProject[]): ArchiveProject[] {
  return projects.map((project) => {
    const year = new Date(project.dateCreated).getFullYear().toString();
    
    // Determine project type
    let type: 'featured' | 'client' | 'personal';
    if (project.featured) {
      type = 'featured';
    } else if (project.title === 'Pecora Negra') {
      type = 'personal';
    } else if (project.industry === 'other' && !project.skills?.includes('Hotel')) {
      type = 'personal';
    } else {
      type = 'client';
    }
    
    // Map industry to category
    const categoryMap: { [key: string]: string } = {
      'hospitality': 'Hospitality',
      'spa-wellness': 'Spa & Wellness',
      'other': project.skills?.includes('Hotel') ? 'Boutique Hotels' : 'Other'
    };
    
    // Determine technologies based on year and skills
    const getTechnologies = (year: string, skills: string[]) => {
      const yearNum = parseInt(year);
      const baseStack = yearNum >= 2020 
        ? ['HTML5', 'CSS3', 'JavaScript', 'SASS', 'Responsive Design']
        : ['HTML', 'CSS', 'JavaScript', 'jQuery'];
        
      if (skills?.includes('Spa')) baseStack.push('Booking System');
      if (skills?.includes('Restaurant')) baseStack.push('Reservation System');
      if (skills?.includes('Golf')) baseStack.push('Tee Time System');
      if (skills?.includes('RV')) baseStack.push('Custom CMS');
      
      return baseStack;
    };

    return {
      id: project._id,
      title: project.title,
      year,
      type,
      category: categoryMap[project.industry] || 'Other',
      technologies: getTechnologies(year, project.skills || []),
      description: project.description === 'Description' || project.description === 'No description available' 
        ? `Professional ${project.skills?.join(' & ') || 'web'} development with custom design and functionality.`
        : project.description || `Professional ${project.skills?.join(' & ') || 'web'} development with custom design and functionality.`,
      image: project.imageUrl,
      status: 'live', // Assuming all are live since they have URLs
      urlPath: project.urlPath || '#'
    };
  });
}

// Get all projects in standardized format
export function getAllProjects(): ArchiveProject[] {
  return transformSanityProjects(sanityProjects);
}

// Get projects by type
export function getFeaturedProjects(): ArchiveProject[] {
  return getAllProjects().filter(p => p.type === 'featured');
}

export function getClientProjects(): ArchiveProject[] {
  return getAllProjects().filter(p => p.type === 'client');
}

export function getPersonalProjects(): ArchiveProject[] {
  return getAllProjects().filter(p => p.type === 'personal');
}