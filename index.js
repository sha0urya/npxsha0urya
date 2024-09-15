import chalk from "chalk";
import boxen from "boxen";

export const info = {
  name: "Praveen Kumar",
  phone: "+91-9798951680",
  email: "praveenkumar21uics@gmail.com",
  github: "sha0urya",
  linkedin: "sha0urya",
  education:
    "Bachelor of Technology in Computer Science - IIIT Agartala (2021-2025), CGPA: 7.64",
  experience: [
    {
      company: "Online Jaoo",
      role: "Software Development Intern (Remote)",
      duration: "Aug 2024 – Present",
      details: [
        "Led the development of interactive React.js components with modular CSS.",
        "Boosted frontend performance by 75%.",
        "Streamlined backend architecture with optimized PostgreSQL queries.",
      ],
    },
    {
      company: "Buyeazzy",
      role: "Software Development Intern",
      duration: "May 2024 – July 2024",
      location: "Mysore, Karnataka",
      details: [
        "Developed a ReactJS and NextJS frontend, reducing load times by 25%.",
        "Integrated product management features, decreasing paperwork by 85%.",
      ],
    },
  ],
  projects: [
    {
      name: "Terminal Portfolio",
      tech: "React, TypeScript",
      description:
        "A terminal-style portfolio website with 20+ commands and PWA support.",
    },
    {
      name: "One Last Option",
      tech: "MERN Stack, Tailwind CSS, Redux Toolkit",
      description:
        "A responsive blog application with search and JWT authentication.",
    },
    {
      name: "Chat-Karo",
      tech: "Next.js, Tailwind CSS, Firebase",
      description:
        "A private chat app with real-time notifications and customizable profiles.",
    },
  ],
  roles: [
    {
      role: "Technical Content Writer",
      organization: "HackTechHub",
      duration: "July 2022 – Aug 2023",
      details:
        "Authored technical documents on Data Structures, Algorithms, and Web Development.",
    },
    {
      role: "Web Development Lead",
      organization: "Google Developer Students Club, IIIT Agartala",
      duration: "July 2022 – July 2023",
      details:
        "Mentored 200+ students, boosting project completion rates by 40%.",
    },
  ],
  achievements: [
    "Solved 450+ Leetcode questions.",
    "CodeChef 4-Star coder with a max rating of 1864.",
    "Qualified in Google Hash Code, Kick Start, and Code Jam.",
  ],
};

// Format your output with chalk and boxen
const output = `
${chalk.bold.green("Praveen Kumar")}
${chalk.gray("+91-9798951680")} | ${chalk.blue(
  "praveenkumar21uics@gmail.com"
)} | ${chalk.magenta("github: sha0urya")} | ${chalk.cyan("linkedin: sha0urya")}

${chalk.bold("Education:")}
${info.education}

${chalk.bold("Experience:")}
${info.experience
  .map(
    (exp) =>
      `${chalk.bold(exp.role)} at ${exp.company} (${exp.duration}, ${
        exp.location || ""
      })\n${exp.details.join("\n")}\n`
  )
  .join("\n")}

${chalk.bold("Projects:")}
${info.projects
  .map(
    (proj) => `${chalk.bold(proj.name)} (${proj.tech})\n${proj.description}\n`
  )
  .join("\n")}

${chalk.bold("Roles and Responsibilities:")}
${info.roles
  .map(
    (role) =>
      `${chalk.bold(role.role)} at ${role.organization} (${role.duration})\n${
        role.details
      }\n`
  )
  .join("\n")}

${chalk.bold("Achievements:")}
${info.achievements.join("\n")}
`;

console.log(
  boxen(output, {
    padding: 1,
    margin: 1,
    borderStyle: "round",
    borderColor: "green",
  })
);
