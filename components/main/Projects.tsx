import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  // Inline styles for the ProjectCard container
  const cardStyle = {
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
    margin: '0 10px',
    borderRadius: '10px',
    overflow: 'hidden',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    width: '45%', // Reduced width to 45% of the container
    maxWidth: '500px', // Limiting the maximum width to 500px
  };

  // Inline styles for the images
  const imageStyle = {
    width: '100%',
    aspectRatio: '16 / 9',
    objectFit: 'cover',
    height: '100px', // Reduced height to 200px
  };

  // Inline styles for the card content
  const contentStyle = {
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    flexGrow: '1',
    justifyContent: 'space-between',
  };

  // Inline styles for the flex container
  const flexContainerStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'stretch',
    flexWrap: 'wrap', // Allow the cards to wrap to the next line
    gap: '20px', // Add some spacing between the cards
  };

  return (
    <div className="flex flex-col items-center justify-center py-20" id="projects">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10">
        Our AI solutions
      </h1>
      <div style={flexContainerStyle}>
        <div style={cardStyle}>
          <ProjectCard
            src="/lol.png"
            title="Custom AI assistants for hotels"
            description="We develop custom AI solutions for hotels that helps users with room service, concierge, and more. Our AI can handle guest requests, provide recommendations, and even anticipate guest needs to deliver a seamless hospitality experience. can be used in platforms like on WhatsApp, web, SMS, and more"
            imageStyle={imageStyle}
            contentStyle={contentStyle}
          />
        </div>
        <div style={cardStyle}>
          <ProjectCard
            src="/NextWebsite.jpeg"
            title="RAG powered custom AI for Hospitals"
            description="Get seamless healthcare with our AI in your hospital's app. It tracks health, reminds you to take medication, schedules doctor appointments, and handle emergencies. Our AI analyzes cancer reports accurately, offers post-op dietary advice, Stay updated 24/7 via calls and app alerts on WhatsApp, web, SMS, and more."
            imageStyle={imageStyle}
            contentStyle={{ ...contentStyle, fontWeight: 'bold' }}
          />
        </div>
        <div style={cardStyle}>
          <ProjectCard
            src="/SpaceWebsite.png"
            title="AI -powered Law Firm Assistant"
            description="Elevate your law firm with our AI assistant. Streamline client interactions, automate tasks, and boost efficiency. From scheduling appointments to client outreach, Grow your firm with our 24/7 support. Hosted on different platforms like on WhatsApp, web, SMS, and more"
            imageStyle={imageStyle}
            contentStyle={contentStyle}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;