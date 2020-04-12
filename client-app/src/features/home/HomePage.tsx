import React from 'react';
import { Container, Segment, Header, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../app/layout/assets/dove.svg';

const HomePage = () => {
  return (
    <Segment inverted textAlign='center' vertical className='masthead'>
      <Container text>
        <Header as='h1' inverted>
          <Logo style={{ marginRight: '10px' }} />
          Dover
        </Header>
        <Header as='h2' inverted content='Connect with friends and the world around you on Dover.' />
        <Button as={Link} to='/activities' size='huge' inverted>
          Explore
        </Button>
      </Container>
    </Segment>
  );
};

export default HomePage;
