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

clear();

const prompt = inquirer.createPromptModule();

// Define your info object here
const info = {
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
  achievements: [
    "Solved 450+ Leetcode questions.",
    "CodeChef 4-Star coder with a max rating of 1864.",
    "Qualified in Google Hash Code, Kick Start, and Code Jam.",
  ],
};

const questions = [
  {
    type: "list",
    name: "action",
    message: "What would you like to do?",
    choices: [
      {
        name: `Send me an ${chalk.green.bold("email")}?`,
        value: () => {
          open(`mailto:${info.email}`);
          console.log("\nDone, see you soon at inbox.\n");
        },
      },
      {
        name: `Download my ${chalk.magentaBright.bold("Resume")}?`,
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
        name: `Schedule a ${chalk.redBright.bold("Meeting")}?`,
        value: () => {
          open("https://calendly.com/singhsatyam312005/30min");
          console.log("\n See you at the meeting \n");
        },
      },
      {
        name: "Just quit.",
        value: () => {
          console.log("Hasta la vista.\n");
        },
      },
    ],
  },
];

// Display the box with information
const data = {
  name: chalk.bold.green("             Praveen Kumar"),
  phone: chalk.gray("+91-9798951680"),
  email: chalk.blue("praveenkumar21uics@gmail.com"),
  github: chalk.magenta("github: sha0urya"),
  linkedin: chalk.cyan("linkedin: sha0urya"),
};

const me = boxen(
  [
    `${data.name}`,
    ``,
    `${chalk.white.bold("Phone:")} ${data.phone}`,
    `${chalk.white.bold("Email:")} ${data.email}`,
    `${chalk.white.bold("GitHub:")} ${data.github}`,
    `${chalk.white.bold("LinkedIn:")} ${data.linkedin}`,
    ``,
    `${chalk.italic("I am currently looking for new opportunities.")}`,
    `${chalk.italic("Feel free to reach out via email or LinkedIn.")}`,
  ].join("\n"),
  {
    margin: 1,
    padding: 1,
    borderStyle: "single",
    borderColor: "green",
  }
);

console.log(me);

prompt(questions).then((answer) => answer.action());
