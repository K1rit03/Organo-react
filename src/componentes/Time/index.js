import Colaborador from '../Colaborador'
import './Time.css'

const Time = (props) => {
    return (
        props.jogadores.length > 0 && (
            <section className='time' style={{ backgroundColor: props.corSegundaria }}>
                <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
                <div className='jogadores'>
                    {props.jogadores.map(jogador => (
                        <Colaborador
                            key={jogador.nick}
                            nick={jogador.nick}
                            lane={jogador.lane}
                            imagem={jogador.imagem}
                        />
                    ))}
                </div>
            </section>
        )
    );
};

export default Time