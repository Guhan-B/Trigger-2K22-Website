import Facebook from "../../assets/social icons/Facebook.svg";
import Instagram from "../../assets/social icons/Instagram.svg";
import LinkedIn from "../../assets/social icons/LinkedIn.svg";

import QUERYIT_POSTER from "../../assets/posters/QUERYIT.png"; 
import CODE_IN_CHAOS_POSTER from "../../assets/posters/CODE IN CHAOS.png"; 
import VALORANT_POSTER from "../../assets/posters/VALORANT.png";
import SHARK_TANK_POSTER from "../../assets/posters/SHARK TANK.png";
import BATTLE_OF_WORDS_POSTER from "../../assets/posters/BATTLE OF WORDS.png";
import OLPC_POSTER from "../../assets/posters/OLPC.png";
import PYMARATHON_POSTER from "../../assets/posters/PYMARATHON.png";
import REVERSE_CODING_POSTER from "../../assets/posters/REVERSE CODING.png";
import SIGHT_ON_SIGHT_POSTER from "../../assets/posters/SIGHT ON SIGHT.png";
import CONNEXIONS_POSTER from "../../assets/posters/CONNEXIONS.png";

export const socials = [
    {
        id: 2,
        name: "Instagram",
        icon: Instagram,
        url: "https://www.instagram.com/act.mit/",
    },
    {
        id: 3,
        name: "Facebook",
        icon: Facebook,
        url: "https://www.facebook.com/act.mitindia.1",
    },
    {
        id: 5,
        name: "LinkedIn",
        icon: LinkedIn,
        url: "https://www.linkedin.com/in/prayatna-mit/",
    },
];

export const events = [
    {
        id: 1,
        title: "PyMarathon",
        description: "A coding event for Python enthusiasts",
        poster: PYMARATHON_POSTER,
        registrationLink: "https://docs.google.com/forms/d/11iAQrLoZ_DkGl0IzXdCPGl-FId2ABi6S0KiNVLZCu4Q/edit?ts=637bb647",
        tags: ["Technical"],
        teamSize: 2,
        venue: "CB 103",
        schedule: "26th November, 2022 01:00 PM",
        organizers: [
            {
                name: "Keerthana VS",
                mobileNumber: "+91 90949 83616"
            },
            {
                name: "Vaibhavalakshmi",
                mobileNumber: "+91 80562 60189"
            }
        ],
        rules: [
            "Team must consist of 2 members",
            "Round 1 consists of 20 MCQs which must be solved in 30 minutes",
            "Round 2 consists of 3 programming questions which must be solved in 1 hour and teams shortlisted from MCQ round will participate",
        ]
    },
    {
        id: 2,
        title: "OLPC",
        description: "Race against the clock with your coding prowess",
        poster: OLPC_POSTER,
        registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSedLu5VeOByuxT4oUMxts5TIuqejLCZw7JoSk9xyu8sf4ZOXQ/viewform?usp=sf_link",
        tags: ["Technical"],
        teamSize: 1,
        venue: "ONLINE",
        schedule: "25th November, 2022 08:00 PM - 10:00 PM",
        organizers: [
            {
                name: "Dejoe Nithin",
                mobileNumber: "+91 63831 06929"
            },
            {
                name: "Karthikeyan",
                mobileNumber: "+91 63827 69253"
            }
        ],
        rules: [
            "Individual Event",
            "Plagiarism will be checked",
            "The organizer result is final",
        ]
    },
    {
        id: 3,
        title: "Reverse Coding",
        description: "Guess the logic based on the given testcases",
        poster: REVERSE_CODING_POSTER,
        registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLScnI8CoUe_fzBeGtlEyvi9Kp4EoQHroZreEvB5CJaDT3TR43Q/viewform?usp=sf_link",
        tags: ["Technical"],
        teamSize: 3,
        venue: "CB 203",
        schedule: "26th November, 2022 01:00 PM",
        organizers: [
            {
                name: "Yogeeswar S",
                mobileNumber: "+91 95662 76235"
            },
            {
                name: "Sham Ganesh",
                mobileNumber: "+91 73585 99256"
            }
        ],
        rules: [
            "Team of 2 or 3 members",
            "First round: pen and paper",
            "Second round: Guess the logic and code it",
            "The result of the organizers is final",
        ]
    },
    {
        id: 4,
        title: "Code in Chaos",
        description: "Our mind is said to work differently when put in disarray. Let's test your problem solving skills and coding knowledge in a chaotic environment",
        poster: CODE_IN_CHAOS_POSTER,
        registrationLink: "https://forms.gle/n3UQxJYcFf3AdpYRA",
        tags: ["Technical"],
        teamSize: 2,
        venue: "CB 103",
        schedule: "26th November, 2022 01:00 PM",
        organizers: [
            {
                name: "Swetha B",
                mobileNumber: "+91 93903 99405"
            },
            {
                name: "Chandana",
                mobileNumber: "+91 63021 40219"
            }
        ],
        rules: [
            "A team may contain maximum of 2 members",
            "Round 1 will be a Pen and Paper Round any interested participants can take part",
            "The shortlists of Round 1 can participate in Round 2",
            "Round 2 will be a hands-on coding round",
        ]
    },

    {
        id: 5,
        title: "Query It",
        description: "A team of 2 members were they should write the queries for the given questions",
        poster: QUERYIT_POSTER,
        registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSfxIZJ6vN7MRWbGTgvjFUwOXBHaVYY0FGtrWTIXIOmeLCfeVg/viewform?usp=sf_link",
        tags: ["Technical"],
        teamSize: 2,
        venue: "CB 206",
        schedule: "26th November, 2022 01:00 PM",
        organizers: [
            {
                name: "Rubak Preyan G",
                mobileNumber: "+91 79046 43141"
            },
            {
                name: "Sudharsan GV",
                mobileNumber: "+91 88389 24764"
            }
        ],
        rules: [
            "A team of 2 members can partcipate in this.",
            "Two rounds will be conducted.",
            "First Round: 20 MCQ question will be given and it need to be completed in 30 minutes.",
            "Second Round: selected teams from round 1 will be given next set of questions. They should write the queries with 30 minutes.",
        ]
    },

    {
        id: 6,
        title: "Sight on site",
        description: "Sight on site will test your memory power, attention to detail and also how well can your act and remember things!",
        poster: SIGHT_ON_SIGHT_POSTER,
        registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSdTbD_jE0ZcIcXu7dINHeb1dGXDQ0pWWDHqAybUv14EWnv5wg/viewform?usp=sf_link",
        tags: ["Technical"],
        teamSize: 3,
        venue: "CB 302",
        schedule: "26th November, 2022 01:00 PM",
        organizers: [
            {
                name: "Hafna Fathima M",
                mobileNumber: "+91 82486 62716"
            },
            {
                name: "Sowmya J",
                mobileNumber: "+91 90875 72646"
            }
        ],
        rules: [
            "Team of 2 - 3 members",
            "ROUNDS: Round 1->Prelims: An image will be displayed and the participants have to observe it carefully within in 1 min. Later questions will be asked based on their observations.15 questions - 10 mins.",
            "Round2-> Finals: Those who are qualified from the prelims will attend the final round.",
            "This is more like dumbcharades except with a twist. Any one participants will be given a set of 10 words to memorize with in the given timelimit. Later they have to act it to their team mates based on how many words they remember.",
        ]
    },

    {
        id: 7,
        title: "Battle of words",
        description: "This event is a debate ,where students can put forward their views on a given  topic and showcase their oratory and debating skills.",
        poster: BATTLE_OF_WORDS_POSTER,
        registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSfyKpjB9uk6bn0CwYFRgVuanyP7h-0hQZt_e-Qs58E15-ExOA/viewform?usp=sf_link",
        tags: ["Technical"],
        teamSize: 1,
        venue: "CB Conference Hall - Ground floor",
        schedule: "26th November, 2022 01:00 PM",
        organizers: [
            {
                name: "Shri Nikhithaa R M",
                mobileNumber: "+91 63802 79903"
            },
            {
                name: "Keerthika M",
                mobileNumber: "+91 94923 56084"
            }
        ],
        rules: [
            "Team size 1(this is an individual event)",
            "There will be 2 rounds, prelims and finals.Students qualifying the prelims will get to the final round.",
            "Students will be divided into two groups randomly and topic for the debate will be given.",
            "Students should speak on the affirmative or the negative side of the topic, as allocated to their team.",
            "Since it's an individual event ,students' speaking skills will be assessed based on their individual participation and the winner will be selected based on certain marking criteria.",
            "Topics for the debate will be given on the spot.",
        ]
    },

    {
        id: 8,
        title: "Valorant",
        description: "Valorant is a 5v5 multiplayer first-person shooter (FPS) where one team attacks and the other defends.",
        poster: VALORANT_POSTER,
        registrationLink: "https://forms.gle/tPuiukURgUpJnfMh6",
        tags: ["Gaming", "Online"],
        teamSize: 5,
        venue: "Online",
        schedule: "26th November, 2022 08:00 PM",
        organizers: [
            {
                name: "Gokkul E",
                mobileNumber: "+91 87546 55683"
            },
            {
                name: "Bindesh Gugan",
                mobileNumber: "+91 99416 88555"
            }
        ],
        rules: [
            "5 members per team.",
            "Finals will be a best of three.",
            "Other matches will be knockout.",
            "Map selection rules will be announced during the match day.",
        ]
    },

    {
        id: 9,
        title: "Shark Tank",
        description: "This event aimed at teams of size 2 to 4 judges the participants based upon the viability and innovativeness of their startup ideas presented.",
        poster: SHARK_TANK_POSTER,
        registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSfGQTC4c4UwPcQzivwyWZOPdsqb_azzRRErDcbdk96M4hFIwQ/viewform",
        tags: ["Technical"],
        teamSize: 4,
        venue: "CB Conference Hall",
        schedule: "Sunday, 11am- 1pm",
        organizers: [
            {
                name: "Akshaya Arunachalam",
                mobileNumber: "+91 91504 62586"
            },
            {
                name: "Niveditha B",
                mobileNumber: "+91 94999 52748"
            }
        ],
        rules: [
            "Teams will be presented with an interesting and unique problem.",
            "Teams will be given 20 minutes to come up with a viable product and pitch their product/service to a panel of 3 judges. ",
            "The pitch must include:  A product name and tagline ,A basic product sketch/idea ,Market survey  ,A budget breakdown, Form of marketing ",
            "The product/service will be judged based on feasibility, creativity, and desirability.  ",
        ]
    },

    {
        id: 10,
        title: "Connexions",
        description: "Comprehend the clues provided in the image to arrive at the right word.",
        poster: CONNEXIONS_POSTER,
        registrationLink: "https://forms.gle/DCagJUycAiYRhuGm6",
        tags: ["Technical"],
        teamSize: 2,
        venue: "HPC / GJ Conference",
        schedule: "Saturday, 3pm - 5pm",
        organizers: [
            {
                name: "Vezhaventhan T",
                mobileNumber: "+91 89250 52595"
            },
            {
                name: "Antony Gunal P",
                mobileNumber: "+91 63827 49941"
            }
        ],
        rules: [
            "Max two per team.",
            "Words related to Computer science and technology.",
        ]
    },
];

export const technicalEventManager = {
    name: "Danush Gupta",
    mobileNumber: "+91 91766 21042"
};

export const nonTechnicalEventManager = {
    name: "Saravana Sethu G",
    mobileNumber: "+91 81249 27271"
};

export const aboutContent = "ACT established in the year 2010, comprises of aspiring students and elite faculty members of the Department of Computer Technology, Anna University, MIT campus. Our association is a rendezvous for all technology enthusiasts to communicate their ideas and excel in the field of computer science. ACT fosters a strong spirit of collaboration and partnering with the industry. Trigger is as an Intra College Technical Fest hosted by Association of Computer Technologists (ACT) under the Department of Computer Technology. It is conducted during the month of August. Students participate in Trigger to show case their talents on both technical and non-technical events which will boost them up in developing their skills. Collaboration among the students from other departments help them in attaining knowledge on various flavors of thrust areas.";