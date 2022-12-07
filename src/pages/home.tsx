import { useState } from 'react';
import './home.css';

export function Home(){

    const [carro, setCarro] = useState("");
    const [modelo, setModelo] = useState("");
    const [valor, setValor] = useState("");

    return(

        <div className='container'>
            <div className='block'>
                <h2>Listagem de carros</h2>
                <table>
                    <thead>
                    <tr>
                        <th>modelo</th>
                        <th>id dono</th>
                        <th>valor</th>
                        <th>ano</th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Fiat uno</td>
                            <td> 2 </td>
                            <td> 2</td>
                            <td> 200</td>
                        </tr>
                        <tr>
                            <td>Fiat uno</td>
                            <td> 2 </td>
                            <td> 2</td>
                            <td> 200</td>
                        </tr>
                        <tr>
                            <td>Fiat uno</td>
                            <td> 2 </td>
                            <td> 2</td>
                            <td> 200</td>
                        </tr>
                    </tbody>
                </table>

            </div>
            <div className='block'>
                <form >
                    <div className="content">
                    <h2>Buscar carro</h2>

                    <input
                        placeholder="Digite o id do carro"
                    />
                    <br />
                    <br />
                    <button type="submit">Buscar</button>
                        {/* <div>
                        <p>
                            <b>Modelo:</b> Fiat uno
                        </p>
                        <p>
                            <b>id dono</b> 2
                        </p>
                        <p>
                            <b>valor</b>  2
                        </p>
                        </div> */}
                    </div>
                </form>

            </div>
            <div className='block'>
                <form >
                    <div className="content">
                        <h2>Comprar carro</h2>

                        <input
                            placeholder="Digite o id do carro"
                        />
                        <br />
                        <br />
                        <button type="submit">Comprar</button>
                    </div>
                </form>

            </div>
        </div>
    );
}