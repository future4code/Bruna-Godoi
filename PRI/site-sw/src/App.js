import CharacterListPage from './componentes/ListaDePersonagens/CharacterListPage';
import { useState, useEffect } from 'react';
import CharacterDetailPage from './componentes/DetalheDePersonagens/CharacterDetailPage';

function App() {
  const [URLPersonagem, setURLPersonagem] = useState('');

  const [selectPage, setSelectPage] = useState('page-list');
  const renderPage = (props) => {
    switch (selectPage) {
      case 'page-list':
        return (
          <CharacterListPage
            setURLPersonagem={setURLPersonagem}
            setSelectPage={setSelectPage}
          />
        );
      case 'detail-page':
        return (
          <CharacterDetailPage
            setSelectPage={setSelectPage}
            setURLPersonagem={setURLPersonagem}
          />
        );
      default:
        return <CharacterListPage setSelectPage={setSelectPage} />;
    }
  };
  return (
    <div>
      <h1>Star Wars</h1>
      {renderPage()}
    </div>
  );
}

export default App;
