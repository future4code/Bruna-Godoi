import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={1}
          fotoPost={7}
        />
        <Post
          nomeUsuario={'Sara Kathlyn'}
          fotoUsuario = {2}
          fotoPost= {3}
        />
        <Post
          nomeUsuario={'Brenda'}
          fotoUsuario = {4}
          fotoPost= {5}
        />
      </MainContainer>
    );
  }
}

export default App;
