import React from 'react';
import { Menu, Container, Button } from 'semantic-ui-react';
import { ReactComponent as Logo } from '../../app/layout/assets/dove.svg';

interface IProps {
  openCreateForm: () => void;
}

const NavBar: React.FC<IProps> = ({ openCreateForm }) => {
  return (
    <Menu fixed='top' inverted>
      <Container>
        <Menu.Item header>
          <Logo style={{ marginRight: '10px' }} />
          Dover
        </Menu.Item>
        <Menu.Item name='Activities' />
        <Menu.Item>
          <Button onClick={openCreateForm} color='blue'>
            Create Activity
          </Button>
        </Menu.Item>
      </Container>
    </Menu>
  );
};

export default NavBar;
