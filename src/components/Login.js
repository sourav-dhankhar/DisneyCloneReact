import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
    overflow: hidden;
    display: flex;
    flex-direction: column;
    text-align: center;
    height: 100vh;
`;
const Content = styled.div`
    margin-bottom: 10vw;
    width: 100%;
    position: relative;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 80px 40px;
    height: 100%:
`;

const BgImage = styled.div`
  background-image: url("/images/login-background.jpg");
  background-repeat: no-repeat;
  background-position: top;
  background-size: cover;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: -1;
  height: 100%;
`;

const CTA = styled.div`
  max-width: 650px;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const CTALogoOne = styled.img`
  // max-width: 600px;
  width: 100%;
  margin-bottom: 12px;
  min-height: 1px;
  display: block;
`;

const SignUp = styled.a`
  // max-width: 600px;
  font-weight: bold;
  color: #f9f9f9;
  background-color: #0063e5;
  margin-bottom: 12px;
  width: 100%;
  letter-spacing: 1.5px;
  font-size: 18px;
  padding: 16.5px 0;
  border: 1px solid transparent;
  border-radius: 4px;

  &:hover {
    background-color: #0483ee;
  }
`;

const Description = styled.p`
  color: hsla(0,0%,95.3%, 1);
  font-size: 11px;
  margin: 0 0 24px;
  line-height: 1.5;
`;

const CTALogoTwo = styled.img`
  margin-bottom: 20px;
`;

function Login(props) {
  return (
    <Container>
        <Content>
          <CTA>
            <CTALogoOne src="/images/cta-logo-one.svg" alt="" />
            <SignUp>GET ALL THERE</SignUp>
            <Description>
              Get Premier Access to Raya and Last Dragon .Get Premier Access to Raya and Last Dragon .Get Premier Access to Raya and Last Dragon .Get Premier Access to Raya and Last Dragon .
            </Description>
            <CTALogoTwo src="/images/cta-logo-two.png" alt="" />
          </CTA>
          <BgImage/>
        </Content>
    </Container>
  )
}


export default Login;