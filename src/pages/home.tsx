import { useEffect, useState } from 'react';
import web3 from "../utils/web3";
import vehicle from "../contracts/vehicle.contract";
import './home.css';

export function Home() {
    const [id, setId] = useState("");
    const [carro, setCarro] = useState<any>([]);
    const [chassi, setChassi] = useState("");
    const [modelo, setModelo] = useState("");
    const [valor, setValor] = useState("");
    const [ano, setAno] = useState("");
    const [idDono, setIdDono] = useState("");
    const [valorToBuy, setValorToBuy] = useState("");
    const [idToBuy, setIdToBuy] = useState("");
    const [owner, setOwner] = useState("")
    const [balance, setBalance] = useState("")

    const [loadingInsert, setLoadingInsert] = useState(false);


    const handleCarro = async (event: any) => {
        event.preventDefault();
        try {
            setLoadingInsert(true);
            const contas = await web3.eth.getAccounts();
            const response = await vehicle.methods.addVehicle(modelo, chassi, ano, valor)
                .send({ from: contas[0] });
            console.log(response);
            setLoadingInsert(false);

        }
        catch (err) {
            setLoadingInsert(false);
            alert("Erro ao cadastrar carro");
            console.log(err)
        }
    }

    const handleBuy = async (event: any) => {
        event.preventDefault();
        try {
            setLoadingInsert(true);
            const contas = await web3.eth.getAccounts();
            const response = await vehicle.methods.buyVehicle(idToBuy)
                .send({
                    from: contas[0],
                    value: web3.utils.toWei(valorToBuy, 'ether')
                });
            console.log(response);
            setLoadingInsert(false);

        }
        catch (err) {
            setLoadingInsert(false);
            alert("Erro ao comprar carro");
            console.log(err)
        }
    }



    const getVehicle = async () => {
        try {
            const response = await vehicle.methods.getVehicles().call();

            setCarro(response);

        }
        catch (err) {
            alert("Erro ao buscar carro");
            console.log(err)
        }
    }

    const getOwner = async () => {
        try {
            const response = await vehicle.methods.owner().call();
            setOwner(response);
        }
         catch (err) {
            alert("Erro ao consultar dono")
            console.log(err)
        }
    }

    const getBalance = async () => {
        try {
            const response = await vehicle.methods.getBalance().call();
            setBalance(response);
            console.log(response)
        }
        catch (err) {
            alert("Erro ao consultar saldo")
            console.log(err)
        }
    }



    useEffect(() => {
        getVehicle();
        getOwner();
        getBalance();
    }, [loadingInsert])

    return (
        <>
            <div className="container cadastrar">
                <div className='block cadastrar'>
                    <form onSubmit={handleCarro}>
                        <div className="content">
                            <h2>Cadastrar carro</h2>
                            <div className="inputs-group">
                                <div className="group">
                                    <label>Modelo</label>
                                    <input
                                        placeholder="Digite o modelo do carro"
                                        onChange={(event) => { setModelo(event.target.value) }}
                                    />
                                </div>
                                <div className="group">
                                    <label>Chassi</label>
                                    <input
                                        placeholder="Digite o chassi do carro"
                                        onChange={(event) => { setChassi(event.target.value) }}
                                    />
                                </div>
                                <div className="group">
                                    <label>Ano</label>

                                    <input
                                        placeholder="Digite o ano do carro"
                                        type={"number"}
                                        onChange={(event) => { setAno(event.target.value) }}
                                    />
                                </div>
                                <div className="group">
                                    <label>Valor</label>
                                    <input
                                        placeholder="Digite o valor"
                                        type={"number"}

                                        onChange={(event) => { setValor(event.target.value) }}
                                    />
                                </div>

                            </div>
                            <br />
                            <br />
                            <button type="submit">Cadastrar</button>
                            {loadingInsert ? (
                                <h5>Processando cadastro do Veiculo...</h5>
                            ) : (
                                <>
                                    <br />
                                    <br />
                                </>
                            )}
                        </div>
                    </form>

                </div>
            </div>
            <div className='container'>
                <div className='block'>
                    <h2>Listagem de carros</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>modelo</th>
                                <th>proprietário</th>
                                <th>chassi</th>
                                <th>valor</th>
                                <th>ano</th>
                            </tr>
                        </thead>
                        <tbody>
                            {carro.map((carro: any, idx: any) => (
                                <tr key={idx}>
                                    <td>{carro.id}</td>
                                    <td>{carro.model}</td>

                                    <td>{carro.owner.substring(0, 10)}...</td>
                                    <td>{carro.chassi}</td>
                                    <td>{carro.price}</td>
                                    <td>{carro.year}</td>
                                </tr>
                            ))}

                        </tbody>
                    </table>

                </div>
                <div className='block'>
                    <form onSubmit={handleBuy}>
                        <div className="content">
                            <h2>Comprar carro</h2>

                            <input
                                placeholder="Digite o id do carro"
                                onChange={(event) => { setIdToBuy(event.target.value) }}
                            />
                            <input
                                placeholder="Digite o valor"

                                onChange={(event) => { setValorToBuy(event.target.value) }}
                            />
                            <br />
                            <br />
                            <button type="submit">Comprar</button>
                        </div>
                    </form>

                </div>

                <h4>Saldo do contrato: {balance} eth</h4>
            </div>

        </>

    );
}