import { useRef } from 'react';
import { Button } from '../components/Button';
import { TextBar } from '../components/TextBar';
import logo from '../assets/white-logo.svg'
import classroomMoldure from '../assets/classroom-moldure.svg';
import studentsMoldure from '../assets/happy-students.svg';
import bioCaique from '../assets/Imagem bio Caique.svg';
import bioGui from '../assets/Imagem bio_ fundoGuilherme.svg';
import bioLucas from '../assets/Imagem bio_ fundoLucas.svg';
import stars from '../assets/Stars.svg';
import coloredLogo from '../assets/colored-logo.svg'
import githubLogo from '../assets/GithubLogo.svg'
import moldure from '../assets/squares-moldure.svg'
import './Home.css';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
    const ref = useRef<HTMLButtonElement | null>(null);
    const navigate = useNavigate();
  
    const handleGoToLogin = () => {
      navigate('/Login');
    };
  
    const handleGoToSignUp = () => {
      navigate('/SignUp'); 
    };


//function Home() {

  //const ref = useRef <null | HTMLButtonElement> (null)
  
  return (
    <div className="Home relative">
        
        {/** top section **/}
        <section id="top-section">
            <div className="top-container">
                <h1 className='title text-[#F0F2F5] text-[28px] font-bold pt- pb-2 pr-4 pl-4 text-left w-full'>AcadeMe Inc.</h1>
                <div className="top-content flex flex-col items-center justify-center">
                    <img src={logo} alt="logo" />
                    <h1 className='slogan text-[#f4f0f5] text-[50px] mb-[21px]'>Seja bem-vindo ao seu<br/>futuro acadêmico</h1>
                    <div className="top-buttons-container flex items-center gap-[24px]">
                        <Button 
                            ref={ref}
                            size='default'
                            shape='pill'
                            className='min-w-[171px] px-8 py-2 flex items-center justify-center'                                                      
                            onClick={handleGoToSignUp} // Redirecionamento para a tela do cadastro
                            > Cadastre-se
                        </Button>

                        <Button
                            ref={ref}
                            size='default'
                            shape='pill'
                            className='min-w-[171px] px-8 py-2 flex items-center justify-center'
                            onClick={handleGoToLogin} // Redirecionamento para a tela de login
                        >
                                Login
                        </Button>
                    </div>
                </div>
            </div>
        </section>

        {/** search section **/}
        <section id="search-section">
            <div className="search-container">
                <div className="search-content flex gap-40">
                    <img src={classroomMoldure} alt="classroom" />
                    <div className="search-content-body flex flex-col items-center mt-24 mr-32">
                        <h1 className='search-title text-[#006ACB] text-[40px] mb-[44px]'>O que é o AcadeMe?</h1>
                        <p className='about-search text-[#006ACB] text-[26px] mb-[44px]'>
                        Com o AcadeMe o aluno é capaz de destacar toda a
                        sua trajetória acadêmica trazendo visibilidade para
                        todas atividades feitas na faculdade e credibilidade
                        para seus conhecimentos.
                        </p>
                        <TextBar
                            variant="default"
                            textSize="lg"
                            placeholder="Procurar Perfil..."
                            iconLeft="search"
                            hideIconsOnInput
                        />
                    </div>
                </div>
            </div>
        </section>

        {/** share section **/}
        <section id="share-section" className='bg-gradient-to-r from-[#006ACB] to-[#003465] bg-[length:200%] p-16'>
            <div className="share-container">
                <div className="share-content flex gap-56">
                    <div className="search-content-body flex flex-col items-start mt-24 ml-16">
                        <h1 className='search-title text-[#F0F2F5] text-[40px] text-justify mb-[44px]'>Compartilhe</h1>
                        <p className='about-share text-[#F0F2F5] text-[26px] text-start mb-[44px]'>
                        Você pode compartilhar seu portfólio com
                        colegas, professores e possíveis recrutadores,
                        destacando suas habilidades e conquistas acadêmicas.
                        Tudo isso em um ambiente que valoriza o desenvolvimento do seu potencial.
                        </p>
                    </div>
                    <img src={studentsMoldure} alt="happy-students" />
                </div>
            </div>
        </section>

         {/** feedback section **/}
        <section id='feedback-section' className='bg-white p-20 pb-0'>
            <h1 className='text-[#006ACB] font-bold text-[40px] mb-20'>Feedback dos Usuários</h1>
            <div className='feedback-container flex items-center justify-center gap-8 ml-40 mr-40' >
               
                <div className='message-container flex flex-col items-center text-[#F0F2F5] bg-gradient-to-r from-[#006ACB] to-[#003465] bg-[length:200%] opacity-90 w-[400px] h-[600px] p-10 rounded-xl gap-10'>
                    <div className='userinfo-container flex items-center gap-4'>
                        <img src={bioCaique} alt="Avatar" className='min-h-28 min-w-28'  />
                        <span className='text-2xl'>Caíque C.</span>
                    </div>
                    <p className='about-feedback text-lg mt-6 pl-4 pr-4'>
                    "Essa plataforma foi 
                    essencial para organizar 
                    meus trabalhos acadêmicos. 
                    Pude criar um 
                    portfólio que mostra tudo 
                    o que desenvolvi ao longo 
                    do curso, e ainda é super 
                    fácil de usar!"
                    </p>
                    <img src={stars} alt="Avaliação" className='mt-12' />

                </div>

                <div className='message-container flex flex-col items-center text-[#F0F2F5] bg-gradient-to-r from-[#006ACB] to-[#003465] bg-[length:200%] opacity-90 w-[400px] h-[600px] p-10 rounded-xl gap-10'>
                    <div className='userinfo-container flex items-center gap-4'>
                        <img src={bioGui} alt="Avatar" className='min-h-28 min-w-28'  />
                        <span className='text-2xl'>Guilherme V.</span>
                    </div>
                    <p className='about-feedback text-lg mt-6 pl-4 pr-4'>
                    "O site me ajudou a apresentar meus trabalhos de forma profissional. 
                    É ótimo ter um portfólio acessível para mostrar para 
                    possíveis recrutadores ou até mesmo para amigos!"
                    </p>
                    <img src={stars} alt="Avaliação" className='mt-12' />

                </div>

                <div className='message-container flex flex-col items-center text-[#F0F2F5] bg-gradient-to-r from-[#006ACB] to-[#003465] bg-[length:200%] opacity-90 w-[400px] h-[600px] p-10 rounded-xl gap-10'>
                    <div className='userinfo-container flex items-center gap-4'>
                        <img src={bioLucas} alt="Avatar" className='min-h-28 min-w-28'  />
                        <span className='text-2xl'>Lucas M.</span>
                    </div>
                    <p className='about-feedback text-lg mt-6 pl-4 pr-4'>
                    "Finalmente encontrei um lugar para centralizar todos os 
                    meus projetos da faculdade. Agora, qualquer pessoa pode 
                    ver meu progresso e as coisas que estudei. 
                    Estou muito satisfeito com a plataforma!"
                    </p>
                    <img src={stars} alt="Avaliação" className='mt-6 p-' />

                </div>
            </div>

             {/** footer **/}
<div className='footer-container flex items-start mt-40 gap-8'>
    <img src={coloredLogo} alt="Logo"/>
    <ul className='flex flex-col gap-2 text-[#006ACB] mb-10'>
        <li className='flex items-center gap-4 font-semibold'><img src={githubLogo} alt="GitLogo" className='h-8 w-8'/><span>github.com/caique18</span></li>
        <li className='flex items-center gap-4 font-semibold'><img src={githubLogo} alt="GitLogo" className='h-8 w-8'/><span>github.com/lucasmmps</span></li>
        <li className='flex items-center gap-4 font-semibold'><img src={githubLogo} alt="GitLogo" className='h-8 w-8'/><span>github.com/MikhaelNbg12</span></li>
        <li className='flex items-center gap-4 font-semibold'><img src={githubLogo} alt="GitLogo" className='h-8 w-8'/><span>github.com/v-gui</span></li>
    </ul>
    {/* Nova seção para a imagem moldure */}
    {/*<div className="image-container flex justify-end ml-auto" style={{ marginTop: '-850px',  marginRight: '-80px'}}>
        <img src={moldure} alt="Moldura" className="w-[1000px] h-auto" />
    </div>*/}
</div>
      
        </section>
        <img src={moldure} alt="Moldura" className=" absolute flex bottom-0 right-0 z-0 pointer-events-none w-[700px] h-auto" />
    </div>
    


  );
}




export default Home;
