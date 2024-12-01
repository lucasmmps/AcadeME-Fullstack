import { useRef } from 'react';
import { Button, buttonVariants } from '../components/Button';
import { TextBar } from '../components/TextBar';
import { TextArea } from '../components/TextArea';
import './App.css';

function App() {

  const ref = useRef <null | HTMLButtonElement> (null)
  
  return (
    <div className="App">
      <Button ref={ref} size='default' shape='pill' iconRight='add' >Novo</Button>
      <TextBar variant="default" textSize="lg" label="Blockchain" placeholder="Digite algo..." iconLeft="search" hideIconsOnInput />
      <TextBar variant="default" textSize="sm" className="extra-class" />
      
      <TextArea
        label="Descrição"
        borderColor="blue" // Variante de estilo padrão
        textSize="md" // Tamanho médio do texto
        textColor="blue" // Cor do texto
        labelSize="md" // Tamanho médio do label
        labelColor="blue" // Cor do label
        placeholder="Digite sua descrição aqui..."
        rows={5} // Número de linhas do TextArea
      />

      <TextArea
        className="mt-6"
        label="Comentários"
        borderColor="light_gray" // Variante de estilo com borda vermelha para indicar erro
        textSize="sm" // Tamanho pequeno do texto
        textColor="gray" // Cor cinza para o texto
        labelSize="sm" // Tamanho pequeno do label
        labelColor="dark_blue" // Cor azul escuro para o label
        placeholder="Digite seus comentários..."
        rows={3} // Número de linhas do TextArea
      />
    </div>
  );
}

export default App;
