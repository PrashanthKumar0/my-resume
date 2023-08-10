import ContactLink from "./Components/ContactLink";

const data = {
    "name": "Prashanth Kumar",
    "role": "Student",
    "aboutMe": "- A passionate Btech student, driven by a genuine curiosity to understand core concepts behind creations.\n- Skilled in **full-stack web development** with a focus on **React & Next.js**.\n- Intrigued by **graphics programming**, **game development**, and embracing **low-level systems**.\n- Eager contributor to **open-source initiatives**.",
    "contacts": {
        "address": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, non!",
        "github": (
            <ContactLink iconName={"fa-brands fa-github"} link={"https://github.com/prashanthKumar0"} display={"https://github.com/prashanthKumar0"} />
        ),
        "phone": (
            <ContactLink iconName={"fa fa-phone"} link={"tel:+91xxxxxxxxxx"} display={"+91 xxxxxxxxxx"} />
        ),
        "email": (
            <ContactLink iconName={"fa-solid fa-envelope"} link={"mailto:giri00421@gmail.com"} display={"xxx@yy.com"} />
        ),
    },
    "skills": {
        //  score out of 5
        "Web Dev(Frontend)": 5,
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
                "- **Frontend** development and maintenance for [himalayangoatmeat.com](https://himalayangoatmeat.com) (**Uttarakhand Govt.**) during my first year of college.\n" +
                "- Expertly harnessed **React**, **Tailwind**, and **Next.js** for a seamless user journey.\n" +
                "- Collaborated for cohesive frontend-backend **React** integration.\n" +
                "- Enforced responsive design, optimizing performance across devices for Uttarakhand residents."

        },
      ],
    "education": [
        {
            "institute": "Sololearn.inc",
            "course": "Graphics Designer",
            "from": "May 2023",
            "to": "June 3045",
            "desc": "__Lorem__ **ipsum dolor** sit amet,\n **consectetur adipisicing elit**. Odio quas nostrum iure, beatae aut amet deleniti. Aspernatur nostrum in quam."
        },
    ]

};

export default data;