import React, { useContext } from 'react';
import { Menu, Container, Button } from 'semantic-ui-react';
import { ReactComponent as Logo } from '../../app/layout/assets/dove.svg';
import ActivityStore from '../../app/stores/activityStore';
import { observer } from 'mobx-react-lite';

const NavBar: React.FC = () => {
  const activityStore = useContext(ActivityStore);
  return (
    <Menu fixed='top' inverted>
      <Container>
        <Menu.Item header>
          <Logo style={{ marginRight: '10px' }} />
          Dover
        </Menu.Item>
        <Menu.Item name='Activities' />
        <Menu.Item>
          <Button
            onClick={activityStore.openCreateForm}
            positive
            content='Create Activity'
          />
        </Menu.Item>
      </Container>
    </Menu>
  );
};

export default observer(NavBar);
