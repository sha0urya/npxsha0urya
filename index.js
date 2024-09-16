#!/usr/bin/env node

"use strict";

import boxen from "boxen";
import chalk from "chalk";
import inquirer from "inquirer";
import clear from "clear";
import open from "open";
import fs from "fs";
import ora from "ora";
import cliSpinners from "cli-spinners";
import request from "request";
import path from "path";

// Clear the console
clear();

// Spinner for loader
const spinner = ora({ text: "Loading", spinner: cliSpinners.material });
spinner.start();

// Welcome message
const welcomeMessage = `
   ┌──────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
   │                                                                                                              │
   │   Praveen Kumar                                                                                              │
   │                                                                                                              │
   │   Phone: +91-9798951680                                                                                      │
   │   Email: praveenkumar21uics@gmail.com                                                                        │
   │   GitHub Username: sha0urya                                                                                  │
   │   LinkedIn Username: sha0urya                                                                                │
   │                                                                                                              │
   │   I am currently looking for new opportunities.                                                              │
   │   Feel free to reach out via email or LinkedIn.                                                              │
   │                                                                                                              │
   │   🗣️: Terminal is the ultimate game of trust. One wrong move, and it’s “oops, there goes your system.”🧨💥   │
   │                                                                                                              │
   └──────────────────────────────────────────────────────────────────────────────────────────────────────────────┘
`;

console.log(
  boxen(welcomeMessage, {
    padding: 1,
    margin: 1,
    borderStyle: "double",
    borderColor: "green",
  })
);

// Data sections
const eduBg = [
  {
    title: "B.Tech in Computer Science Engineering",
    desc: "INDIAN INSTITUTE OF INFORMATION TECHNOLOGY AGARTALA || 2021 ~ 2025",
  },
  {
    title: "Senior Secondary",
    desc: "DHARIKSHAN PD. H/S || BSEB Board || 2019 ~ 2021",
  },
  {
    title: "Secondary",
    desc: "CHAPRA CENTRAL SCHOOL || CBSE Board || 2019",
  },
];

const achievementsData = [
  "Solved 450+ Leetcode questions, achieved max 1968 rating and 7 badges.",
  "CodeChef 4-Star with maximum rating-1864.",
  "Google Hash Code'2022, Google Kick Start'2022 and Google Code Jam'2022: QUALIFIED",
  "Postman Student Expert.",
  "Solved 600+ Data Structures and Algorithm problems.",
  "Secured 481st place in Reply Code Challenge 2022.",
];

const experience = [
  {
    company: "Buyeazzy",
    role: "Software Development Intern",
    location: "Mysore, Karnataka (In-Office)",
    period: "May 2024 – July 2024",
    description: [
      "Worked on the front end using ReactJs and NextJs.",
      "Developed common components like modals, date pickers.",
      "Resolved inventory issues and led UI development for product management.",
    ],
  },
  {
    company: "Online Jaoo",
    role: "Software Development Intern",
    location: "Remote",
    period: "Aug 2024 – Present",
    description: [
      "Optimized SQL queries, enhanced security with user session management.",
      "Developed React.js components with module CSS.",
    ],
  },
];

const positionsData = [
  {
    role: "Web Development Lead",
    organization: "Google Developer Students Club, IIIT AGARTALA",
    duration: "July 2022 - July 2023",
    description: "Mentored juniors in web development.",
  },
  {
    role: "Technical Content Writer",
    organization: "HackTechHub",
    duration: "July 2022 - Aug 2023 (Remote)",
    description: "Authored technical documents on DSA and web development.",
  },
];

const projects = [
  {
    id: 1,
    title: "Chat-Karo",
    desc: "Developed a full-stack private chat application",
    url: "https://chatkaro.live/",
  },
  {
    id: 2,
    title: "One last Option",
    desc: "Developed and deployed a responsive blog application",
    url: "https://one-last-option.onrender.com/",
  },
];

const skillsData = [
  {
    category: "Languages",
    items: ["C", "C++", "SQL", "JavaScript", "TypeScript"],
  },
  {
    category: "Computer Science Fundamentals",
    items: [
      "Data Structures",
      "Algorithms",
      "DBMS",
      "OOP",
      "Operating Systems",
      "System Design",
    ],
  },
  {
    category: "Developer Tools",
    items: [
      "Git",
      "GitHub",
      "MySQL Workbench",
      "XAMPP",
      "VS Code",
      "AWS",
      "MS Office",
      "Canva",
    ],
  },
  {
    category: "Web Technologies",
    items: [
      "HTML",
      "CSS",
      "Bootstrap",
      "Node.js",
      "Express.js",
      "MongoDB",
      "React.js",
      "Next.js",
    ],
  },
];

const socials = [
  { id: 1, title: "GitHub", url: "https://github.com/sha0urya", tab: 12 },
  {
    id: 2,
    title: "Leetcode",
    url: "https://leetcode.com/u/praveenkr21uics/",
    tab: 10,
  },
  {
    id: 3,
    title: "CodeChef",
    url: "https://www.codechef.com/users/star5r",
    tab: 10,
  },
  {
    id: 4,
    title: "One-on-One Meeting",
    url: "https://calendly.com/singhsatyam312005/30min",
    tab: 0,
  },
  {
    id: 5,
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/sha0urya/",
    tab: 10,
  },
  { id: 6, title: "Twitter", url: "https://twitter.com/sha0urya2", tab: 11 },
  { id: 7, title: "Instagram", url: "https://instagram.com/sha0urya", tab: 9 },
];

// Inquirer questions
const questions = [
  {
    type: "list",
    name: "action",
    message: "What would you like to do?",
    choices: [
      {
        name: "Education",
        value: () => {
          eduBg.forEach((edu) =>
            console.log(`${chalk.bold(edu.title)}\n${edu.desc}\n`)
          );
        },
      },
      {
        name: "Achievements",
        value: () => {
          achievementsData.forEach((achieve) =>
            console.log(`- ${chalk.green(achieve)}\n`)
          );
        },
      },
      {
        name: "Experience",
        value: () => {
          experience.forEach((exp) =>
            console.log(
              `${chalk.bold(exp.role)} at ${chalk.cyan(exp.company)} (${
                exp.period
              })\n${exp.description.join("\n")}\n`
            )
          );
        },
      },
      {
        name: "Positions",
        value: () => {
          positionsData.forEach((pos) =>
            console.log(
              `${chalk.bold(pos.role)} at ${chalk.cyan(pos.organization)} (${
                pos.duration
              })\n${pos.description}\n`
            )
          );
        },
      },
      {
        name: "Projects",
        value: () => {
          projects.forEach((project) =>
            console.log(
              `${chalk.bold(project.title)}\n${project.desc}\nURL: ${chalk.blue(
                project.url
              )}\n`
            )
          );
        },
      },
      {
        name: "Skills",
        value: () => {
          skillsData.forEach((skill) =>
            console.log(
              `${chalk.bold(skill.category)}: ${skill.items.join(", ")}\n`
            )
          );
        },
      },
      {
        name: "Socials",
        value: () => {
          socials.forEach((social) =>
            console.log(
              `${chalk.bold(social.title)}: ${chalk.blue(social.url)}\n`
            )
          );
        },
      },
      {
        name: "Send me an email?",
        value: () => {
          open(`mailto:praveenkumar21uics@gmail.com`);
        },
      },
      {
        name: "Download my Resume?",
        value: () => {
          const loader = ora({
            text: "Downloading Resume...",
            spinner: cliSpinners.material,
          }).start();
          let pipe = request(
            "https://drive.google.com/uc?export=download&id=1og65lNZs0dv8-gej4ZfHDV4Pz23pfEmQ"
          ).pipe(fs.createWriteStream("./praveen-resume.pdf"));
          pipe.on("finish", function () {
            let downloadPath = path.join(process.cwd(), "praveen-resume.pdf");
            console.log(`\nResume Downloaded at ${downloadPath}\n`);
            open(downloadPath);
            loader.stop();
          });
        },
      },
      {
        name: "Schedule a Meeting?",
        value: () => {
          open("https://calendly.com/singhsatyam312005/30min");
          console.log("\nLet's talk soon!\n");
        },
      },
      {
        name: "Exit",
        value: () => {
          console.log("Goodbye!");
          process.exit();
        },
      },
    ],
  },
];

// Ask the questions
inquirer
  .prompt(questions)
  .then((answer) => {
    answer.action();
  })
  .catch((error) => {
    console.error("Error:", error);
  })
  .finally(() => {
    spinner.stop();
  });
