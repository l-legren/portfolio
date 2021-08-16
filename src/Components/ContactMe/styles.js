import styled from "styled-components";
// import {Link} from 'react-router-dom'
import {
    AiOutlineInstagram,
    AiOutlineLinkedin,
    AiOutlineMail,
    AiFillGithub,
} from "react-icons/ai";

export const ContactMeWrapper = styled.div`
    position: relative;
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
`;

export const ContactMeContent = styled.div`
    position: absolute;
    top: 55px;
    width: ${({ theme }) => theme.breakpoints.lg};
    height: 100%;
    display: flex;
    flex-direction: column;
    flex-direction: center;
    justify-content: center;
    align-items: center;
`;

export const ContactMeIcons = styled.div`
    display: flex;
    justify-content: center;
`;

export const ContactMeText = styled.h2`
    font-size: 60px;
    font-weight: 300;
    color: white;
`;

export const IconLink = styled.a`
    margin: 20px;
`;

export const InstagramIcon = styled(AiOutlineInstagram)`
    font-size: 90px;
    color: white;
`;
export const LinkedInIcon = styled(AiOutlineLinkedin)`
    font-size: 90px;
    color: white;
`;

export const MailIcon = styled(AiOutlineMail)`
    font-size: 90px;
    color: white;
`;

export const GitHubIcon = styled(AiFillGithub)`
    font-size: 90px;
    color: white;
`;
