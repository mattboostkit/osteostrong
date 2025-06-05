import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { getTeamMembers, urlFor } from "@/lib/sanity";
import "@/styles/team-photos.css";

interface TeamMember {
  _id: string;
  name: string;
  position: string;
  image?: any;
  imageUrl?: string; // For direct image URLs (fallback)
  bio?: string;
  order: number;
  socialLinks?: {
    linkedin?: string;
    facebook?: string;
    instagram?: string;
    twitter?: string;
  };
}

const Team = () => {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fallback team members if none are found in Sanity
  const fallbackTeamMembers: TeamMember[] = [
    {
      _id: "1",
      name: "Ryan Ashford-Smit",
      position: "Co-owner", // Updated position
      bio: "Ryan Ashford-Smit brings a background in business and technology, with a focus on how innovation can enhance our lives. His understanding of the impact of technology on human performance aligns with OsteoStrong’s approach to improving longevity. As the co-owner of OsteoStrong flagship Centre, Ryan is passionate about helping people live stronger, safer lives through smart, science-backed solutions in a welcoming and supportive environment.", // Updated bio
      order: 1,
      imageUrl: "https://ik.imagekit.io/boostkit/OsteoStrong/Ryan.jpg?updatedAt=1745330109384"
    },
    {
      _id: "2",
      name: "Victoria Ashford-Smit",
      position: "Co-owner & Centre Manager", // Updated position
      bio: "Victoria Ashford-Smit, co-owner and centre manager at OsteoStrong Tunbridge Wells, brings a wealth of experience from the worlds of dance, Pilates, Barre, and Yoga. Her background gives her a deep understanding of anatomy, posture, and movement. With a holistic approach to health and strength, Victoria is passionate about helping members feel confident and supported. She creates a warm, welcoming environment while guiding people to improve alignment, balance, and overall wellbeing through OsteoStrong’s cutting-edge system.", // Updated bio
      order: 2,
      imageUrl: "https://ik.imagekit.io/boostkit/OsteoStrong/Victoria.jpg?updatedAt=1745330109378"
    },
    {
      _id: "3",
      name: "Vanessa", // Assuming Vanessa is still part of the team
      position: "Lead Coach",
      bio: "Specializes in guiding clients through the OsteoStrong system to achieve optimal results for bone density and overall strength.",
      order: 3,
      imageUrl: "https://ik.imagekit.io/boostkit/OsteoStrong/Vanessa.jpg?updatedAt=1745334927772"
    },
    {
      _id: "4",
      name: "Trey Ashford-Smit", // New member
      position: "OsteoStrong Coach", // New position
      bio: "Trey Ashford-Smit is a certified OsteoStrong Coach with a strong interest in sport and fitness. He brings great energy, precision, and care to every session. Trey’s attentive nature and eye for detail help members feel supported and confident. Outside the centre, he enjoys rugby and sailing. His passion for performance and results makes him a valued part of the team.", // New bio
      order: 4 // Assigned order
      // No imageUrl provided, component should handle this
    },
    {
      _id: "5", // Keeping empty slots for now
      name: "",
      position: "",
      bio: "",
      order: 5
    },
    {
      _id: "6",
      name: "",
      position: "",
      bio: "",
      order: 6
    }
  ];

  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        const result = await getTeamMembers();
        console.log('Team members from Sanity:', result);

        if (result && result.length > 0) {
          // Sort team members by order property
          const sortedMembers = [...result].sort((a, b) => (a.order || 999) - (b.order || 999));
          setTeamMembers(sortedMembers);
        } else {
          console.log('No team members found in Sanity, using fallback data');
        }
      } catch (error) {
        console.error("Error fetching team members from Sanity:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTeamMembers();

    // Check if the fallback image URLs are valid
    const checkImageUrls = () => {
      fallbackTeamMembers.forEach(member => {
        if (member.imageUrl) {
          const img = new Image();
          img.onload = () => console.log(`Fallback image for ${member.name} loaded successfully`);
          img.onerror = () => console.error(`Failed to load fallback image for ${member.name}: ${member.imageUrl}`);
          img.src = member.imageUrl;
        }
      });
    };

    checkImageUrls();
  }, []);

  // Use fallback data if no team members are found in Sanity
  const displayTeamMembers = teamMembers.length > 0 ? teamMembers : fallbackTeamMembers;

  // Filter out empty team members (those without names)
  const filteredTeamMembers = displayTeamMembers.filter(member => member.name);

  // Log the team members for debugging
  console.log('Team members to display:', filteredTeamMembers);

  return (
    <section id="team" className="py-16 bg-neutral-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Meet Our Team</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our passionate team of experts is dedicated to helping you achieve your health and strength goals through our unique OsteoStrong methodology.
          </p>
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
          </div>
        ) :
          (filteredTeamMembers.length === 4 || filteredTeamMembers.length === 5 ? (
            <div className="flex flex-wrap justify-center gap-8">
              {filteredTeamMembers.map((member) => (
                <Card key={member._id} className="bg-white rounded-xl overflow-hidden shadow-md flex-none" style={{ width: '350px', maxWidth: '100%' }}>
                  <div className="team-member-photo-container">
                    {member.image ? (
                      <img
                        src={urlFor(member.image).width(800).height(600).url()}
                        alt={member.name}
                        className="team-member-photo object-contain h-64 w-full"
                        loading="eager"
                        onError={(e) => {
                          console.error(`Failed to load Sanity image for ${member.name}`);
                          if (member.imageUrl) {
                            e.currentTarget.src = member.imageUrl;
                          } else {
                            e.currentTarget.style.display = 'none';
                          }
                        }}
                      />
                    ) : member.imageUrl ? (
                      <img
                        src={member.imageUrl}
                        alt={member.name}
                        className="team-member-photo object-contain h-64 w-full"
                        loading="eager"
                        onError={(e) => {
                          console.error(`Failed to load image for ${member.name}`);
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    ) : (
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        <span className="text-neutral-400 mt-2">Team Member Photo</span>
                      </div>
                    )}
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-black mb-2">{member.name}</h3>
                    <p className="text-primary font-medium mb-4">{member.position}</p>
                    {member.bio && <p className="text-gray-700 mb-4">{member.bio}</p>}
                    {member.socialLinks && (
                      <div className="flex space-x-3">
                        {member.socialLinks.linkedin && (
                          <a href={member.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary transition">
                            <i className="fab fa-linkedin"></i>
                          </a>
                        )}
                        {member.socialLinks.facebook && (
                          <a href={member.socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary transition">
                            <i className="fab fa-facebook"></i>
                          </a>
                        )}
                        {member.socialLinks.instagram && (
                          <a href={member.socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary transition">
                            <i className="fab fa-instagram"></i>
                          </a>
                        )}
                        {member.socialLinks.twitter && (
                          <a href={member.socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary transition">
                            <i className="fab fa-twitter"></i>
                          </a>
                        )}
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div
              className={
                `grid gap-8 ` +
                (filteredTeamMembers.length === 1
                  ? 'grid-cols-1'
                  : filteredTeamMembers.length === 2
                  ? 'grid-cols-2'
                  : 'grid-cols-3')
              }
            >
            {/* First row: Ryan and Victoria stretch across the top */}
            {filteredTeamMembers.slice(0, 2).map((member) => (
              <Card
                key={member._id}
                className="bg-white rounded-xl overflow-hidden shadow-md col-span-1 md:col-span-1 lg:col-span-3"
                style={{ gridColumn: 'span 1 / span 1', ...(filteredTeamMembers.length >= 2 ? { gridColumn: 'span 1 / span 1' } : {}) }}
              >
                <div className="team-member-photo-container">
                  {member.image ? (
                    <img
                      src={urlFor(member.image).width(800).height(600).url()}
                      alt={member.name}
                      className="team-member-photo object-contain h-64 w-full"
                      loading="eager"
                      onError={(e) => {
                        console.error(`Failed to load Sanity image for ${member.name}`);
                        if (member.imageUrl) {
                          e.currentTarget.src = member.imageUrl;
                        } else {
                          e.currentTarget.style.display = 'none';
                        }
                      }}
                    />
                  ) : member.imageUrl ? (
                    <img
                      src={member.imageUrl}
                      alt={member.name}
                      className="team-member-photo object-contain h-64 w-full"
                      loading="eager"
                      onError={(e) => {
                        console.error(`Failed to load image for ${member.name}`);
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      <span className="text-neutral-400 mt-2">Team Member Photo</span>
                    </div>
                  )}
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-black mb-2">{member.name}</h3>
                  <p className="text-primary font-medium mb-4">{member.position}</p>
                  {member.bio && <p className="text-gray-700 mb-4">{member.bio}</p>}
                  {member.socialLinks && (
                    <div className="flex space-x-3">
                      {member.socialLinks.linkedin && (
                        <a href={member.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary transition">
                          <i className="fab fa-linkedin"></i>
                        </a>
                      )}
                      {member.socialLinks.facebook && (
                        <a href={member.socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary transition">
                          <i className="fab fa-facebook"></i>
                        </a>
                      )}
                      {member.socialLinks.instagram && (
                        <a href={member.socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary transition">
                          <i className="fab fa-instagram"></i>
                        </a>
                      )}
                      {member.socialLinks.twitter && (
                        <a href={member.socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary transition">
                          <i className="fab fa-twitter"></i>
                        </a>
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
            {filteredTeamMembers.length > 2 &&
              filteredTeamMembers.slice(2).map((member) => (
                <Card key={member._id} className="bg-white rounded-xl overflow-hidden shadow-md">
                  <div className="team-member-photo-container">
                    {member.image ? (
                      <img
                        src={urlFor(member.image).width(800).height(600).url()}
                        alt={member.name}
                        className="team-member-photo object-contain h-64 w-full"
                        loading="eager"
                        onError={(e) => {
                          console.error(`Failed to load Sanity image for ${member.name}`);
                          if (member.imageUrl) {
                            e.currentTarget.src = member.imageUrl;
                          } else {
                            e.currentTarget.style.display = 'none';
                          }
                        }}
                      />
                    ) : member.imageUrl ? (
                      <img
                        src={member.imageUrl}
                        alt={member.name}
                        className="team-member-photo object-contain h-64 w-full"
                        loading="eager"
                        onError={(e) => {
                          console.error(`Failed to load image for ${member.name}`);
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    ) : (
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        <span className="text-neutral-400 mt-2">Team Member Photo</span>
                      </div>
                    )}
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-black mb-2">{member.name}</h3>
                    <p className="text-primary font-medium mb-4">{member.position}</p>
                    {member.bio && <p className="text-gray-700 mb-4">{member.bio}</p>}
                    {member.socialLinks && (
                      <div className="flex space-x-3">
                        {member.socialLinks.linkedin && (
                          <a href={member.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary transition">
                            <i className="fab fa-linkedin"></i>
                          </a>
                        )}
                        {member.socialLinks.facebook && (
                          <a href={member.socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary transition">
                            <i className="fab fa-facebook"></i>
                          </a>
                        )}
                        {member.socialLinks.instagram && (
                          <a href={member.socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary transition">
                            <i className="fab fa-instagram"></i>
                          </a>
                        )}
                        {member.socialLinks.twitter && (
                          <a href={member.socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary transition">
                            <i className="fab fa-twitter"></i>
                          </a>
                        )}
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
          </div>
        ))
      }
    </div>
  </section>
  );
}

export default Team;
