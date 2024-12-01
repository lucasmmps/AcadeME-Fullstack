import React from 'react';
import { Link } from 'react-router-dom'; // Importando Link do React Router
import '../index.css';
import '../index';
import { TextBar } from './TextBar';
import { Button } from './Button';
import { FaSearch } from 'react-icons/fa'; // Importando o ícone de busca

const Navbar: React.FC = () => {
  const handleSearch = () => {
    // Lógica para realizar a busca
    console.log('Buscando...');
  };

  return (
    <nav className="flex justify-between items-center p-4 bg-darkBlue text-white">
      <Link to="/" className="text-xl">AcadeMe</Link> {/* Link para a página inicial */}
      
      <div className="flex items-center"> {/* Contêiner flexível para a barra de pesquisa e o botão */}
        <TextBar placeholder='Procurar Perfil...' style={{ width: '300px' }} /> {/* Aumentando a largura */}
        <button
          onClick={handleSearch}
          className="ml-2 bg-lightBlue text-softWhite rounded-full px-4 py-2 hover:bg-darkBlue transition duration-300 flex items-center"
        >
          <FaSearch className="text-lg" /> {/* Ícone de busca */}
        </button>
      </div>

      <div className='button-container flex gap-1'>
        <Link to="/signup"> {/* Link para a página de Cadastro */}
          <Button shape='pill' buttonStyle='default' className="ml-2 px-4 py-2 text-softWhite">Cadastro</Button>
        </Link>
        <Link to="/login"> {/* Link para a página de Login */}
          <Button shape='pill' buttonStyle='light' className="ml-2 px-4 py-2 text-softWhite">Login</Button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;