import { useState } from 'react';
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import Colaborador from './componentes/Colaborador';

function App() {
  const times = [
    {
      nome: 'Desafiante',
      corPrimaria: '#daa520',
      corSegundaria: '#ffde89',
    },
    {
      nome: 'Grão Mestre',
      corPrimaria: '#ff0000',
      corSegundaria: '#ff9999',
    },
    {
      nome: 'Mestre',
      corPrimaria: '#ff6600',
      corSegundaria: '#ffcc99',
    },
    {
      nome: 'Diamante',
      corPrimaria: '#00ccff',
      corSegundaria: '#99ebff',
    },
    {
      nome: 'Esmeralda',
      corPrimaria: '#00cc00',
      corSegundaria: '#99e699',
    },
  ];

  const [jogadores, setJogadores] = useState([]);

  const aoNovoJogadorAdicionado = (jogador) => {
    setJogadores([...jogadores, jogador]);
  };

  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map((time) => time.nome)} aoJogadorCadastrado={aoNovoJogadorAdicionado} />

      {times.map((time) => (
        <Time
          key={time.nome}
          nome={time.nome}
          corPrimaria={time.corPrimaria}
          corSegundaria={time.corSegundaria}
          jogadores={jogadores.filter((jogador) => jogador.time === time.nome)}
        />
      ))}
    </div>
  );
}

export default App;