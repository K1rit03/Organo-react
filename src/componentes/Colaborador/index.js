import './Colaborador.css'

const Colaborador = ({nick,imagem,lane}) => {
    return (<div className='colaborador'>
        <div className='cabecalho'>
            <img src= {imagem} alt= {nick}/>
        </div>
        <div className='rodape'>
            <h4>{nick}</h4>
            <h5>{lane}</h5>
        </div>
    </div>)
}

export default Colaborador