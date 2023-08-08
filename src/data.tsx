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
            <ContactLink iconName={"fa fa-phone"} link={"tel:+91xxxxxxx"} display={"+91 xxxxxxxxxx"} />
        ),
        "email": (
            <ContactLink iconName={"fa-solid fa-envelope"} link={"mailto:xxx@yyy.com"} display={"xxx@yy.com"} />
        ),
    },

};
export default data;