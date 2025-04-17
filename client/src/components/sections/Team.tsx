import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { getTeamMembers, urlFor } from "@/lib/sanity";

interface TeamMember {
  _id: string;
  name: string;
  position: string;
  image?: any;
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

  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        const result = await getTeamMembers();
        setTeamMembers(result);
      } catch (error) {
        console.error("Error fetching team members:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTeamMembers();
  }, []);

  // Fallback team members if none are found in Sanity
  const fallbackTeamMembers: TeamMember[] = [
    {
      _id: "1",
      name: "Ryan Ashford-Smit",
      position: "Centre Manager",
      bio: "Dedicated to helping clients achieve their health and strength goals through the revolutionary OsteoStrong methodology.",
      order: 1
    },
    {
      _id: "2",
      name: "Victoria Ashford-Smit",
      position: "Centre Manager",
      bio: "Passionate about improving clients' quality of life through OsteoStrong's unique approach to bone and muscle health.",
      order: 2
    },
    {
      _id: "3",
      name: "Vanessa",
      position: "Lead Coach",
      bio: "Specializes in guiding clients through the OsteoStrong system to achieve optimal results for bone density and overall strength.",
      order: 3
    }
  ];

  // Use fallback data if no team members are found in Sanity
  const displayTeamMembers = teamMembers.length > 0 ? teamMembers : fallbackTeamMembers;

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
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayTeamMembers.map((member) => (
              <Card key={member._id} className="bg-white rounded-xl overflow-hidden shadow-md">
                <div className="h-64 bg-neutral-200 flex items-center justify-center">
                  {member.image ? (
                    <img
                      src={urlFor(member.image).width(500).height(500).url()}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center">
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
                  {member.bio && (
                    <p className="text-gray-700 mb-4">{member.bio}</p>
                  )}
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
        )}
      </div>
    </section>
  );
};

export default Team;
