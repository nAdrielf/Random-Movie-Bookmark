import React from 'react';
import styled from 'styled-components';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import PinterestIcon from '@material-ui/icons/Pinterest';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import PlaceIcon from '@material-ui/icons/Place';
import CallIcon from '@material-ui/icons/Call';
import EmailIcon from '@material-ui/icons/Email';

const Container = styled.div`
  display: flex;
  margin: 0 50px;
`;
const Left = styled.div`
  flex: 1;
  padding: 20px;
`;
const Logo = styled.h1`
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 15px;
`;
// const Desc = styled.div`
//   margin-bottom: 25px;
//   letter-spacing: 2px;
// `;
const SocialCont = styled.div`
  display: flex;
`;
const Icon = styled.div`
  width: 40px;
  height: 40px;
  color: white;
  border-radius: 50px;
  background-color: #${(props) => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 15px;
  cursor: pointer;
`;
const Center = styled.div`
  flex: 1;
  padding: 20px;
`;
const Title = styled.h3`
  margin-bottom: 30px;
  font-size: 25px;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;
const Right = styled.div`
  flex: 1;
  padding: 20px;
`;
const ContactItem = styled.div`
  margin-bottom: 20px;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>.FILM.</Logo>
        {/* <Desc>
          Our film collections are beyond limit. We assure you that our
          collections is the most complete in the world.
        </Desc> */}
        <SocialCont>
          <Icon color="385999">
            <FacebookIcon />
          </Icon>
          <Icon color="e4405f">
            <InstagramIcon />
          </Icon>
          <Icon color="55acee">
            <TwitterIcon />
          </Icon>
          <Icon color="e60023">
            <PinterestIcon />
          </Icon>
          <Icon color="128c7e">
            <WhatsAppIcon />
          </Icon>
        </SocialCont>
      </Left>
      <Center>
        <Title>Link</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Bookmark</ListItem>
          <ListItem>Movies</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Documentary</ListItem>
          <ListItem>Terms</ListItem>
          <ListItem>Tv Series</ListItem>
          <ListItem>My Account</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contacts</Title>
        <ContactItem>
          <PlaceIcon style={{ marginRight: '10px' }} />
          Jl. Jend. Sudirman, Kabupaten Kota, 52312
        </ContactItem>
        <ContactItem>
          <CallIcon style={{ marginRight: '10px' }} />
          (+62) 123 4561 7892
        </ContactItem>
        <ContactItem>
          <EmailIcon style={{ marginRight: '10px' }} />
          _store@email.com
        </ContactItem>
      </Right>
    </Container>
  );
};

export default Footer;
