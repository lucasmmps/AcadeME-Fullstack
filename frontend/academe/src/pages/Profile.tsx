import React, { useRef } from 'react';
import './Profile.css';
import Navbar from '../components/Navbar'; // Exemplo de caminho, ajuste conforme necessário
import ProjectCard from '../components/ProjectCard'; // Exemplo de caminho, ajuste conforme necessário
import { TextArea } from '../components/TextArea'; // Importando o componente TextArea
import UserIcon from '../assets/UserIcon.svg';
import { useNavigate } from 'react-router-dom';
import logoBlockchain from '../assets/logoBlockchain.svg';
import logoVambora from '../assets/logoVamboraFatec.svg';
import logoRedeNeural from '../assets/logoRedeneural.svg';


const Profile: React.FC = () => {
    const ref = useRef<HTMLButtonElement | null>(null);
    const navigate = useNavigate();
    const handleGoToUpload = () => {
        navigate('/Upload'); // Redirecionamento para a página de Upload
    };
  
    return (
        <div className="app-container">
            {/* Barra de navegação */}
            <Navbar />

            <div className="profiles-layout">
        {/* Sidebar do perfil */}
        <aside className="profile-sidebar flex flex-col justify-between justify-content: space-between">
          <div className="profile-header">
            <img 
              src={UserIcon}
              alt="Foto de perfil" 
              className="profile-image border-2 border-softWhite p-2"
            />
            <h1 className="profile-name font-extrabold">Mikhael Canarinho Nóbrega</h1>
            <TextArea background='transparent' textColor='white' borderColor='white' placeholder='Descrição do perfil...' className='profile-description'/>
            <TextArea background='transparent' textColor='white' borderColor='white' placeholder='Curso...' className='course'/>
            <div className="interest-area">
              <h2 className='font-extrabold'>Áreas de Interesse</h2>
              <TextArea background='transparent' textColor='white' borderColor='white' placeholder='Áreas de interesse...' className='interest-area'/>
            </div>
          </div>
        </aside>

                {/* Área central - Projetos */}
                <main className="projects-section">
                    {/* Filtros */}
                    <div className="projects-filters">
                        <input
                            type="text"
                            placeholder="Pesquisar projeto..."
                            className="search-input"
                        />
                        <div className="filters-group" >
                           
                            <button 
                                className="btn btn-add"
                                onClick={handleGoToUpload} // Redirecionamento para o upload
                            >
                               Adicionar Projeto +
                            </button>
                        </div>
                    </div>

                    {/* Lista de Projetos */}
                    <div className="projects-list">
                        <ProjectCard
                            title="Blockchain"
                            description="Este trabalho apresenta a tecnologia blockchain, que organiza dados em blocos ligados de forma cronológica..."
                            tags={["Blockchain", "Criptografia Assimétrica", "Segurança da Informação"]}
                            date="03/12/2024"
                            imageUrl={logoBlockchain}
                        />
                        <ProjectCard
                            title="Vambora Fatec"
                            description="Projeto de aplicativo mobile para agendamento de caronas entre estudantes da Fatec."
                            tags={["Mobile", "Mobilidade Urbana", "Engenharia de Software"]}
                            date="15/10/2024"
                            imageUrl={logoVambora}
                        />
                        <ProjectCard
                            title="Rede Neural para Reconhecimento de Caracteres com Backpropagation"
                            description="Desenvolvimento de uma rede neural simples na linguagem Python para reconhecimento de padrões..."
                            tags={["Inteligência Artificial", "Backpropagation"]}
                            date="23/09/2024"
                            imageUrl={logoRedeNeural}
                        />
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Profile;
