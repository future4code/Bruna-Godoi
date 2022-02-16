import CharacterListPage from './componentes/ListaDePersonagens/CharacterListPage';
import { useState } from 'react';
import CharacterDetailPage from './componentes/DetalheDePersonagens/CharacterDetailPage';

function App() {
  const [selectPage, setSelectPage] = useState('page-list');
  const renderPage = () => {
    switch (selectPage) {
      case 'page-list':
        return <CharacterListPage setSelectPage={setSelectPage} />;
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
