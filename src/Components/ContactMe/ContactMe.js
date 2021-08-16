import React from "react";
import {
    ContactMeIcons,
    ContactMeWrapper,
    ContactMeText,
    IconLink,
    InstagramIcon,
    LinkedInIcon,
    MailIcon
} from "../ContactMe/styles";
import { ContactMeContent } from "./styles";

export default function ContactMe() {
    return (
        <ContactMeWrapper>
            <ContactMeContent>
                <ContactMeText>
                    Contact Me
                </ContactMeText>
                <ContactMeIcons>
                    <IconLink href="https://www.instagram.com/l.legren/">
                        <InstagramIcon />
                    </IconLink>
                    <IconLink href="https://www.linkedin.com/in/carlos-leret/">
                        <LinkedInIcon />
                    </IconLink>
                    <IconLink href="mailto:carlosleret@gmail.com">
                        <MailIcon />
                    </IconLink>
                </ContactMeIcons>
            </ContactMeContent>
        </ContactMeWrapper>
    );
}
