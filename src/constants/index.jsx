import {
  office1,
  office2,
  office3,
  office4,
  office5,
  office6,
  office7,
} from "../assets";

const prices = [
  {
    id: 0,
    title: "Starter",
    cost: "Free",
    features: [
      {
        id: 0,
        desc: "3 templates",
      },
      {
        id: 1,
        desc: "90 days access",
      },
      {
        id: 2,
        desc: "Unlimited customisation",
      },
      {
        id: 3,
        desc: "Download as PDF",
      },
      {
        id: 4,
        desc: "Download as Docx",
      },
    ],
  },
  {
    id: 1,
    title: "Classic",
    cost: "$ 15",
    features: [
      {
        id: 0,
        desc: "3 templates",
      },
      {
        id: 1,
        desc: "90 days access",
      },
      {
        id: 2,
        desc: "Unlimited customisation",
      },
      {
        id: 3,
        desc: "Download as PDF",
      },
      {
        id: 4,
        desc: "Download as Docx",
      },
    ],
  },
  {
    id: 2,
    title: "Premium",
    cost: "$ 50",
    features: [
      {
        id: 0,
        desc: "3 templates",
      },
      {
        id: 1,
        desc: "90 days access",
      },
      {
        id: 2,
        desc: "Unlimited customisation",
      },
      {
        id: 3,
        desc: "Download as PDF",
      },
      {
        id: 4,
        desc: "Download as Docx",
      },
    ],
  },
];

const posts = [
  {
    id: 0,
    img: office1,
    title: "How to manage a Difficult Co-worker",
    desc: "We all get to work with and manage a difficult co-worker at some point. That colleague with the ackward sense of humor, the one that has no idea of personal space and that assistant who loves to talk non-stop. In as much as we would love to work in a friendly and productive environment [...]",
  },
  {
    id: 1,
    img: office2,
    title: "How to Know when a Company is Nearing Insolvency",
    desc: "It is not exactly hard to know when a company is nearing insolvency. No director, manager, or even supervisor would come out and tell employees that the organisation would soon collapse. Assuming you are even suspecting at all, they will even start giving assurance that might cast the doubt out of your mind [...]",
  },
  {
    id: 2,
    img: office3,
    title: "Is HR Really Your Friend?",
    desc: "We all get to work with and manage a difficult co-worker at some point. That colleague with the ackward sense of humor, the one that has no idea of personal space and that assistant who loves to talk non-stop. In as much as we would love to work in a friendly and productive environment [...]",
  },
  {
    id: 3,
    img: office4,
    title: "How To Detect a Toxic Workplace",
    desc: "Being a able to detect a toxic workplace would save yiu a lot of stress and emotional troubles. But the question is, can you detect one? When you are seeking a job and searching all over the internet, asking friends and other connections, filling applications - for a job, you would be happy to even [...]",
  },
  {
    id: 4,
    img: office5,
    title: "How to be Successful at a New Job",
    desc: "being successful at a new job is something you should allocate your time, energy and commitment to. Yes, you have been hired, but hope you know you were hired based on how you perfformed at the interview. Your performance at your interview only told your recruiter or manager that you may be able to do [...]",
  },
  {
    id: 5,
    img: office6,
    title: "How to Achieve Balance While Working Multiple Jobs",
    desc: "TIme may become very difficult to manage or achieve balance while working multiple jobs. A lot of times, we strive to attain a decent work-life balance while striving to make a decent living. Working an extra job or even jobs may sound like a simple answer to some of your financial problems. While you are [...]",
  },
  {
    id: 6,
    img: office7,
    title: "5 Tips on How to Succeed at a Remote Job (Work From Home)",
    desc: "It is good to search for some tips on how to succeed at a remote job. Before the year 2020, which is also the year of COVID-19 , a lot of professionals, most especially writers and software engineers have been working from home. Not referring to freelancers only, but salary earners as well that do not [...]",
  },
  {
    id: 7,
    img: office7,
    title: "How to Get a remote Job from Nigeria",
    desc: "Every young professional is likely looking for how to get a remote job from Nigeria. Why won't they? There are a lot of perks attached to working in a company anywhere in teh world from Nigeria. In March 2020, the world was on lockdown due to the COVID_19. Health professionals deemed it best that the [...]",
  },
];

const categories = [
  {
    id: 0,
    title: "Career & Professional Development",
  },
  {
    id: 1,
    title: "Revamped CV",
  },
  {
    id: 3,
    title: "Study & Work Abroad",
  },
  {
    id: 4,
    title: "Study Abroad",
  },
  {
    id: 5,
    title: "Uncategorized",
  },
];

const trendingTags = [
  {
    id: 0,
    title: "21 Century",
  },
  {
    id: 1,
    title: "A9 Algorithm",
  },
  {
    id: 2,
    title: "Amazon",
  },
  {
    id: 3,
    title: "Blue Origin",
  },
  {
    id: 4,
    title: "Business",
  },
  {
    id: 5,
    title: "Cloud",
  },
  {
    id: 6,
    title: "CV",
  },
  {
    id: 7,
    title: "Cover Letter",
  },
  {
    id: 8,
    title: "Colleagues",
  },
  {
    id: 9,
    title: "Criitical Thinking",
  },
  {
    id: 10,
    title: "Crime",
  },
  {
    id: 11,
    title: "Cloud",
  },
  {
    id: 12,
    title: "Employment",
  },
  {
    id: 13,
    title: "DevOps",
  },
  {
    id: 14,
    title: "Employment in Nigeria",
  },
  {
    id: 15,
    title: "Entrepreneur",
  },
  {
    id: 16,
    title: "Forbes",
  },
  {
    id: 17,
    title: "Fraud",
  },
  {
    id: 18,
    title: "Job Hunting",
  },
  {
    id: 19,
    title: "Holiday",
  },
  {
    id: 20,
    title: "International Students",
  },
  {
    id: 21,
    title: "Interview",
  },
  {
    id: 22,
    title: "Interview",
  },
  {
    id: 23,
    title: "Leave",
  },
  {
    id: 24,
    title: "Job Scam",
  },
  {
    id: 25,
    title: "Leadership",
  },
  {
    id: 26,
    title: "Vacation",
  },
  {
    id: 27,
    title: "Programming",
  },
  {
    id: 28,
    title: "Remote Jobs",
  },
  {
    id: 29,
    title: "Success",
  },
  {
    id: 30,
    title: "Richest Man Alive",
  },
  {
    id: 31,
    title: "Quit",
  },
  {
    id: 32,
    title: "Professional CV",
  },
  {
    id: 33,
    title: "Relax",
  },
  {
    id: 34,
    title: "Toxic",
  },
  {
    id: 35,
    title: "Vacation",
  },
  {
    id: 36,
    title: "Work",
  },
];
export { prices, posts, categories, trendingTags };
