import React from "react";
import styled from "styled-components";

const FooterGroup = styled.div`
  background: #f1f3f5;
  padding: 50px 0;
  display: grid;
  grid-gap: 20px;
`;
const Text = styled.p`
  font-size: 24px;
  font-weight: 600;
  color: #486791;
  max-width: 500px;
  margin: 0 auto;
  text-align: center;
`;
const Button = styled.button`
  background: linear-gradient(102.24deg, #56ccf2 0%, #3436e7 100%);
  box-shadow: 0px 10px 20px rgba(101, 41, 255, 0.15);
  border-radius: 30px;
  color: white;
  border: none;
  padding: 16px 60px;
  font-weight: 600;
  font-size: 24px;
  justify-self: center;
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  cursor: pointer;

  &:hover {
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
    transform: translateY(-3px);
  }
`;

const Copyright = styled.div`
  color: #486791;
  max-width: 500px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Footer = ({ children }) => {
  const openLinkedIn = () => {
    window.open("https://www.linkedin.com/in/hector-moreno-929674217/");
  };
  return (
    <FooterGroup>
      <Text>Take a look at my github by clicking the button below</Text>
      <Button onClick={openLinkedIn}>Look at Linked In</Button>
      <Copyright>{children}</Copyright>
    </FooterGroup>
  );
};

export default Footer;
