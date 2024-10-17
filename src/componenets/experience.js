import React from 'react';

const experiences = [
  {
    company: "Insomea",
    title: "Web Development Intern",
    startDate: "February 2024",
    endDate: "August 2024",
    description: "Designed and deployed an internal management platform for Azure and Office 365 subscriptions, with features for tracking consumption and automated notifications.",
    achievements: [
      "Centralized the administration of Azure and Office 365 subscriptions.",
      "Automated reminders for renewals and deadlines.",
      "Implemented subscription tracking tools."
    ],
    tags: ["ReactJs", "Azure AD", "SSO", "Power BI", "Azure DevOps", "Git"],
    logo: "/img/insomea-logo.jpg" // Placeholder logo
  },
  {
    company: "Acteol (Access Group)",
    title: "Web Development Intern",
    startDate: "July 2023",
    endDate: "July 2023",
    description: "Developed a full-stack web app to collect customer feedback with dynamic form creation and management.",
    achievements: [
      "Created a customizable feedback collection system.",
      "Developed a full-stack solution."
    ],
    tags: [".Net MVC", "MySQL"],
    logo: "/img/acteol-logo.png" // Placeholder logo
  },
  {
    company: "Telnet",
    title: "Web Development Intern",
    startDate: "June 2022",
    endDate: "June 2022",
    description: "Developed a web-based survey application to measure employee engagement.",
    achievements: [
      "Created a survey tool for company-wide employee engagement.",
    ],
    tags: ["ReactJs", "NodeJs", "MongoDB"],
    logo: "/img/telnet-logo.png" // Placeholder logo
  },
  {
    company: "Telnet",
    title: "Mobile Development Intern",
    startDate: "August 2021",
    endDate: "August 2021",
    description: "Developed an event management system for smoother planning and interaction.",
    achievements: [
      "Participated in event management system development."
    ],
    tags: ["Android SDK", "SQLite", "Git"],
    logo: "/img/telnet-logo.png" // Placeholder logo
  }
];

const Experience = () => {
  return (
    <section className="section">
      <div className="container">
        <h1 className="title">Experience</h1>
        <hr />
        {experiences.map((exp, index) => (
          <div className="card  experience-card" key={index}>
            <div className="card-content">
              <div className="media">
                <div className="media-left">
                  <figure className="image is-48x48">
                    <img src={exp.logo} alt={exp.company} />
                  </figure>
                </div>
                <div className="media-content">
                  <p className="title is-4">{exp.company}</p>
                  <p className="subtitle is-6">{exp.title} - <time>{exp.startDate}</time> - <time>{exp.endDate}</time></p>
                </div>
              </div>
              <div className="content">
                <p>{exp.description}</p>
                <ul>
                  {exp.achievements.map((ach, i) => (
                    <li key={i}>{ach}</li>
                  ))}
                </ul>
                <div className="tags">
                  {exp.tags.map((tag, i) => (
                    <span key={i} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
