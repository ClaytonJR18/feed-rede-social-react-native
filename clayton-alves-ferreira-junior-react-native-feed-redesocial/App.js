import React from 'react';
import styled from 'styled-components/native';
import Header from './components/Header';
import InputContainer from './components/InputContainer';
import Avatar from './components/Avatar';
import Card from './components/Card';

const DATA = [
  {
    id: '1',
    userAvatar: require('./assets/images/avatar2.png'),
    userName: 'Paula Coelho',
    postText:
      'Hotel room view',
    postImage: require('./assets/images/post1.png')
  },
  {
    id: '2',
    userAvatar: require('./assets/images/avatar4.png'),
    userName: 'Bruno Oliveira',
    postText:
      'Car View',
    postImage: require('./assets/images/post2.png')
  },
  {
    id: '3',
    userAvatar: require('./assets/images/avatar3.png'),
    userName: 'Jack Stanford',
    postText:
      'Wall view',
    postImage: require('./assets/images/post3.png')
  },
  {
    id: '4',
    userAvatar: require('./assets/images/avatar4.png'),
    userName: 'Peter Walker',
    postText:
      'City Nights ',
    postImage: require('./assets/images/post4.png')
  }
];

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: white;
`;

const RowContainer = styled.View`
  width: 100%;
  padding-horizontal: 10px;
  flex-direction: row;
`;

export default function App() {
  return (
    <Container>
      <Header headerTitle='FaceApp' />
      <RowContainer>
        <Avatar imageSource={require('./assets/images/avatar1.png')} />
        <InputContainer />
      </RowContainer>
      <Card data={DATA} />
    </Container>
  );
}
