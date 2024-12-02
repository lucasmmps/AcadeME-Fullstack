import React from 'react';
import './Upload.css';
import logoQueima from '../assets/QueimaFitLogo.svg';
import landingpage from '../assets/QueimaFitLP.png';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar'; // Importe o componente Navbar

const handleAddFile = () => {
    alert("Adicionar arquivo");
};

const handleEditReferences = () => {
    alert("Editar referências");
};

const Upload: React.FC = () => {
  return (
    <div className="upload-container">
      <Navbar /> 
      {/* Main Content */}
      <main className="upload-main">
        {/* Project Details */}
        <section className="project-details ">
    <img src={logoQueima} alt="QueimaFIT Logo" className="project-logo mr-60 ml-40"/>
    <div className="project-info">
        <h1>QueimaFIT</h1>
        <p className="project-meta">
            <strong>Grade Curricular:</strong> Análise e Desenvolvimento de Sistemas &gt; Engenharia de Software
        </p>
        <p>
            Criação de uma landing page utilizando a ferramenta Figma.
        </p>
        <p>
            <strong>Integrantes:</strong> Mikhael N., Caique C., Vinícius F.
        </p>
        <p>
            <strong>Orientadores:</strong> Luiz Alexandre
        </p>
        <p>
            <strong>Data:</strong> 05/12/2024
        </p>
    </div>
</section>

        {/* Posters Section */}
        <section className="posters-section">
    <h2 className="section-title">Pôsteres</h2>
    <div className="posters-grid">
        <div className="poster-card">
            <img
                src={landingpage}
                alt="Landing Page Poster"
                className="poster-image"
            />
            <p className="poster-description">Landing Page</p>
        </div>
        <div className="poster-card">
            <img
                src={logoQueima}
                alt="QueimaFIT Logo"
                className="poster-image"
            />
            <p className="poster-description">Logo QueimaFIT</p>
        </div>
        <div className="poster-card add-image-card">
            <div className="add-icon">+</div>
        </div>
    </div>
</section>

        {/* Files and References */}
        <section className="files-references-section">
    <div className="files-section">
        <h2 className="section-title">Arquivos</h2>
        
        {/* Contêiner para os botões */}
        <div className="button-container">
            <button className="add-file-button mb-1" onClick={handleAddFile}>Adicionar Arquivo</button>
        </div>
        
        <table className="files-table">
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Data</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>README.md</td>
                    <td>05/12/2024</td>
                </tr>
                <tr>
                    <td>index.html</td>
                    <td>05/12/2024</td>
                </tr>
                <tr>
                    <td>style.css</td>
                    <td>05/12/2024</td>
                </tr>
                <tr>
                    <td>landingpage.png</td>
                    <td>05/12/2024</td>
                </tr>
                <tr>
                    <td>logo_queimafit.png</td>
                    <td>05/12/2024</td>
                </tr>
            </tbody>
        </table>
    </div>

    <div className="references-section">
        <h2 className="section-title">Referências</h2>
        
        {/* Contêiner para os botões */}
        <div className="button-container">
            <button className="edit-reference-button" onClick={handleEditReferences}>Editar Referências</button>
        </div>
        
        <p>
            FIGMA. <em>Figma Design.</em> Disponível em:{' '}
            <a href="https://www.figma.com/pt-br/design/" style={{ color: '#003465' }}>
                https://www.figma.com/pt-br/design/
            </a>
            . Acesso em: 01 jun. 2024.
        </p>
    </div>
</section>

        {/* Save Button */}
        <Link to="/Profile">
        <button className="save-button">Salvar alterações </button> 
        </Link>
      </main>
    </div>
  );
};

export default Upload;
