import BarraDeNavegacao from './BarraDeNavegacao';
import '../styles/App.css';

function App() {
  return (
    <div className="app">
      <BarraDeNavegacao
        logo="https://img.freepik.com/vetores-gratis/design-de-logotipo-de-servico-de-reparo-de-moda_23-2150253063.jpg"
        iconeUsuario="https://cdn-icons-png.flaticon.com/512/74/74472.png"
      />
      <main className="conteudo">
        <h1>Bem-vindo à nossa página!</h1>
        <p>Explore nossos serviços e produtos.</p>
      </main>
    </div>
  );
}

export default App;