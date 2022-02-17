import CharacterListPage from './componentes/ListaDePersonagens/CharacterListPage';
import { useState, useEffect } from 'react';
import CharacterDetailPage from './componentes/DetalheDePersonagens/CharacterDetailPage';
import ItensDaLista from './componentes/ListaDePersonagens/ItensDaLista';

function App() {
  const [URLPersonagem, setURLPersonagem] = useState('');
  console.log(URLPersonagem);

  const [selectPage, setSelectPage] = useState('page-list');
  const renderPage = () => {
    switch (selectPage) {
      case 'page-list':
        return (
          <CharacterListPage
            ssetURLPersonagem={setURLPersonagem}
            setSelectPage={setSelectPage}
          />
        );
      case 'detail-page':
        return <CharacterDetailPage setSelectPage={setSelectPage} />;
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
