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
    <nav className="flex justify-between items-center p-4 bg-gradient-to-r from-[#003465] to-[#003465] text-white">
      <Link to="/" className="text-xl">AcadeMe</Link> {/* Link para a página inicial */}

      <div className='button-container flex gap-1 items-center'> {/* Adicionado items-center aqui */}
        <Link to="/signup"> {/* Link para a página de Cadastro */}
          <Button shape='pill' buttonStyle='default' className="ml-2 px-4 py-2 text-softWhite mb-2">Cadastro</Button>
        </Link>
        <Link to="/login"> {/* Link para a página de Login */}
          <Button shape='pill' buttonStyle='light' className="ml-2 px-4 py-2 text-softWhite mb-2">Login</Button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;