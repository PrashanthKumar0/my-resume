import ContactLink from "./Components/ContactLink";

const data = {
    "name": "Prashanth Kumar",
    "role": "Student",
    "aboutMe": "- A diligent Btech student, fueled by an unwavering curiosity to decipher the underlying intricacies of innovation.\n- Proficient in **full-stack web development**, with an emphasis on **React & Next.js**.\n- Enthralled by the domain of **graphics programming**, **game development**, and adeptness in **low-level systems**.\n- Committed participant in the world of **open-source initiatives**.",
    "contacts": {
        "address": "Discovering beauty in every corner of exploration.",
        "github": (
            <ContactLink iconName={"fa-brands fa-github"} link={"https://github.com/prashanthKumar0"} display={"/ PrashanthKumar0"} />
        ),
        "phone": (
            <ContactLink iconName={"fa fa-phone"} link={"tel:+91xxxxxxxxxx"} display={"+91 xxxxxxxxxx"} />
        ),
        "email": (
            <ContactLink iconName={"fa-solid fa-envelope"} link={"mailto:giri00421@gmail.com"} display={"xxx@yy.com"} />
        ),
    },
    "skills": {
        "Web Dev (Frontend)": 5,
        "PHP": 3,
        "NodeJs": 4,
        "ReactJs": 3,
        "SQL": 5,
        "Tailwind": 4,
        "Javascript": 5,
        "Python - Pygame": 3,
        "C++ & STL": 4,
        "OpenGL": 3,
    },
    "experiences": [
        {
            "company": "Bakraw - himalayangoatmeat",
            "post": "Frontend React Dev",
            "from": "May 2023",
            "to": "June 2024",
            "desc":
                "- Spearheaded **frontend** development and maintenance for [himalayangoatmeat.com](https://himalayangoatmeat.com), a touchstone of Uttarakhand's identity.\n" +
                "- Adeptly harnessed **React**, **Tailwind**, and **Next.js** for an impeccable user experience.\n" +
                "- Orchestrated seamless frontend-backend **React** integration for holistic functionality.\n" +
                "- Ensured responsive design to accommodate Uttarakhand's diverse audience across devices."

        },
    ],
    "education": [
        {
            "institute": "School Of Engineering - JNU",
            "course": "B.Tech + M.Tech (Dual) Computer Science Engineering",
            "from": "October 2022",
            "to": "Present",
            "desc": "Pursuing academic excellence at JNU School of Engineering, a bastion of learning within the esteemed Jawaharlal Nehru University in New Delhi. Where scholarly pursuits harmonize with a mosaic of cultural diversity."
        },
    ],
    "projects":[
        {repo:"https://github.com/PrashanthKumar0/jnu-notifications-bot"},
        {repo:"https://github.com/PrashanthKumar0/chip8-emulator"},
        {repo:"https://github.com/PrashanthKumar0/PhiSicks2D.js"},
        {repo:"https://github.com/PrashanthKumar0/kitten-cannon-remake"},
        {repo:"https://github.com/PrashanthKumar0/Center-Or-Death-2"},
        {repo:"https://github.com/PrashanthKumar0/Indo-music-player"},
    ],
};


export default data;