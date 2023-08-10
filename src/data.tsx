import ContactLink from "./Components/ContactLink";

const data = {
    "name": "Prashanth Kumar",
    "role": "Student",
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
            "company": "Sololearn.inc",
            "post": "Graphics Designer",
            "from": "May 2023",
            "to": "June 3045",
            "desc": "__Lorem__ **ipsum dolor** sit amet,\n **consectetur adipisicing elit**. Odio quas nostrum iure, beatae aut amet deleniti. Aspernatur nostrum in quam."
        },
        {
            "company": "Sololearn.inc",
            "post": "Graphics Designer",
            "from": "May 2023",
            "to": "June 3045",
            "desc": "__Lorem__ **ipsum dolor** sit amet,\n **consectetur adipisicing elit**. Odio quas nostrum iure, beatae aut amet deleniti. Aspernatur nostrum in quam."
        },
        {
            "company": "Sololearn.inc",
            "post": "Graphics Designer",
            "from": "May 2023",
            "to": "June 3045",
            "desc": "__Lorem__ **ipsum dolor** sit amet,\n **consectetur adipisicing elit**. Odio quas nostrum iure, beatae aut amet deleniti. Aspernatur nostrum in quam."
        },
        {
            "company": "Sololearn.inc",
            "post": "Graphics Designer",
            "from": "May 2023",
            "to": "June 3045",
            "desc": "__Lorem__ **ipsum dolor** sit amet,\n **consectetur adipisicing elit**. Odio quas nostrum iure, beatae aut amet deleniti. Aspernatur nostrum in quam."
        },
        {
            "company": "Sololearn.inc",
            "post": "Graphics Designer",
            "from": "May 2023",
            "to": "June 3045",
            "desc": "__Lorem__ **ipsum dolor** sit amet,\n **consectetur adipisicing elit**. Odio quas nostrum iure, beatae aut amet deleniti. Aspernatur nostrum in quam."
        },
    ],
    "education":[
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