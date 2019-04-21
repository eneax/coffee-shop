import React from 'react'
import styled from 'styled-components'


const InfoSection = styled.section`
  padding-top: 3rem;
  padding-bottom: 3rem;
`

const Container = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;

  /* media */
  @media (min-width: 576px) {
    max-width: 540px;
  }
  @media (min-width: 768px) {
    max-width: 720px;
  }
  @media (min-width: 992px) {
    max-width: 960px;
  }
  @media (min-width: 1200px) {
    max-width: 1140px;
  }
`

const InfoWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  -ms-flex: 0 0 83.333333%;
  flex: 0 0 83.333333%;
  max-width: 83.333333%;

  @media (min-width: 576px) {
    -ms-flex: 0 0 66.666667%;
    flex: 0 0 66.666667%;
    max-width: 66.666667%;
  }

  margin-right: auto;
  margin-left: auto;
  text-align: center;

  p {
    font-size: 1.25rem;
    font-weight: 300;
    color: #6c757d;
    margin-bottom: 3rem;
  }
`

const HeadingTwo = styled.h2`
  color: #222;
  text-transform: uppercase;
  text-align: center;

  font-size: 3.5rem;
  font-weight: 300;
  line-height: 1.2;
  font-weight: 700;
`

const Input = styled.input`
  display: inline-block;
  font-weight: 400;
  color:  rgb(255, 158, 9);
  text-align: center;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-color: transparent;
  border: 1px solid rgb(255, 158, 9);
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  &:hover {
    background:  rgb(255, 158, 9);
    color: #2d1e1f;
  }
  &:focus, &.focus {
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }

  text-transform: uppercase;
`


const Newsletter = () => (
  <InfoSection>
    <Container>
      <InfoWrapper>
        <HeadingTwo>Join Our Newsletter</HeadingTwo>


        {/* Begin MailChimp Signup Form */}
        <link href="//cdn-images.mailchimp.com/embedcode/slim-10_7.css" rel="stylesheet" type="text/css" />
        <div id="mc_embed_signup">
          <form style={{ textAlign: 'center', padding: '10px 0 10px 0%' }} action="https://coolwebsite.us12.list-manage.com/subscribe/post?u=d85f808a9af64d58bbb1fa212&amp;id=a2fef2579b" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" rel="noopener noreferrer" noValidate>
            <div id="mc_embed_signup_scroll">
              {/* Do not remove this or risk form bot signups */}
              <div style={{ position: "absolute", left: "-5000px", ariaHidden: "true" }}>
                <input type="text" name="b_d85f808a9af64d58bbb1fa212_a2fef2579b" tabIndex="-1" value="" />
              </div>
              <div class="clear">
                <Input style={{border: '1px solid rgb(255, 158, 9)'}} type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" />
              </div>
            </div>
          </form>
        </div>
        {/* End MailChimp Signup Form */}
      </InfoWrapper>
    </Container>
  </InfoSection>
)

export default Newsletter
