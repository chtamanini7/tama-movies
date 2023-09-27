import { createContext, useState } from "react";

export const AppContext = createContext();
const AppContextProvider = ({children}) =>{
    const [contextMovieNumber, setContextMovieNumber] = useState();
    const [contextTeamOne, setContextTeamOne] = useState(0);
    const [contextTeamTwo, setContextTeamTwo] = useState(0);
    const [contextColor, setContextColor] = useState("ROSA");
    const [textContextColor, setTextContextColor] = useState("pinkText")
    const [contextNames, setContextNames] = useState([]);
    const [players, setPlayers] = useState([]);
    const [unoIndex, setUnoIndex] = useState(1);
    const [dosIndex, setDosIndex] = useState(1);
    const [tresIndex, setTresIndex] = useState(1);
    const [cuatroIndex, setCuatroIndex] = useState(1);
    const [cincoIndex, setCincoIndex] = useState(1);
    const [seisIndex, setSeisIndex] = useState(1);
    const [escaleraIndex, setEscaleraIndex] = useState(1);
    const [fullIndex, setFullIndex] = useState(1);
    const [pokerIndex, setPokerIndex] = useState(1);
    const [generalaIndex, setGeneralaIndex] = useState(1);
    const [dobleIndex, setDobleIndex] = useState(1);

    const resetValues = () =>{
        if(window.confirm("Are you sure?")){
            console.log('llego a reset');
            setCincoIndex(1);
            setPlayers([]);
            setCuatroIndex(1);
            setDosIndex(1);
            setTresIndex(1);
            setUnoIndex(1);
            setSeisIndex(1);
            setEscaleraIndex(1);
            setFullIndex(1);
            setPokerIndex(1);
        }
    }
    
    const addPlayersToGenerala = (val) =>{
        val.forEach(element => {
            const newPlayer = {
                name: element,
                uno: 0,
                dos: 0,
                tres: 0,
                cuatro: 0,
                cinco: 0,
                seis: 0,
                escalera: 0,
                full: 0,
                poker: 0,
                generala: 0,
                doble: 0,
                total: 0
            }
            setPlayers(players => [newPlayer, ...players]);
        });
        
        console.log(players);
    }

    const playerUpdater = (name,key) => {
        switch(key){
            case "uno":
                playerUpdateUno(name)
                break;
            case "dos":
                playerUpdateDos(name)
                break;
            case "tres":
                playerUpdateTres(name)
                break;
            case "cuatro":
                playerUpdateCuatro(name)
                break;
            case "cinco":
                playerUpdateCinco(name)
                break;
            case "seis":
                playerUpdateSeis(name)
                break;
            case "escalera":
                playerUpdateEscalera(name)   
                break;
            case "full":
                playerUpdateFull(name)
                break;
            case "poker":
                playerUpdatePoker(name)
                break;
            case "generala":
                playerUpdateGenerala(name)
                break;
            default:
                playerUpdateDoble(name)
        }
    }

    const calculateTotal = () =>{
        players.forEach(player =>{
            const newState = players.map( player => {
                const totalSum = player.uno + player.dos + player.tres + player.cuatro + player.cinco + player.seis + player.escalera + player.full + player.poker + player.generala + player.doble;
                return {...player, total: totalSum}
            });
            setPlayers(newState);
        });
    }

    const playerUpdateUno = (name) => {
        const functionNumbers = [0,1,2,3,4,5];
        setUnoIndex((prevIndex) => (prevIndex + 1 >= functionNumbers.length ? 0 : prevIndex + 1));
        console.log(functionNumbers[unoIndex]);
        const newState = players.map( player => {
            if(player.name === name){
                return {...player, uno: functionNumbers[unoIndex]}
            }
            return player;
        });
        setPlayers(newState);
    }
    const playerUpdateDos = (name) => {
        const functionNumbers = [0,2,4,6,8,10];
        setDosIndex((prevIndex) => (prevIndex + 1 >= functionNumbers.length ? 0 : prevIndex + 1));
        const newState = players.map( player => {
            if(player.name === name){
                return {...player, dos: functionNumbers[dosIndex]}
            }
            return player;
        });
        setPlayers(newState);
    }
    const playerUpdateTres = (name) => {
        const functionNumbers = [0,3,6,9,12,15];
        setTresIndex((prevIndex) => (prevIndex + 1 >= functionNumbers.length ? 0 : prevIndex + 1));
        const newState = players.map( player => {
            if(player.name === name){
                return {...player, tres: functionNumbers[tresIndex]}
            }
            return player;
        });
        setPlayers(newState);
    }
    const playerUpdateCuatro = (name) => {
        const functionNumbers = [0,4,8,12,16,20];
        setCuatroIndex((prevIndex) => (prevIndex + 1 >= functionNumbers.length ? 0 : prevIndex + 1));
        const newState = players.map( player => {
            if(player.name === name){
                return {...player, cuatro: functionNumbers[cuatroIndex]}
            }
            return player;
        });
        setPlayers(newState);
    }
    const playerUpdateCinco = (name) => {
        const functionNumbers = [0,5,10,15,20,25];
        setCincoIndex((prevIndex) => (prevIndex + 1 >= functionNumbers.length ? 0 : prevIndex + 1));
        const newState = players.map( player => {
            if(player.name === name){
                return {...player, cinco: functionNumbers[cincoIndex]}
            }
            return player;
        });
        setPlayers(newState);
    }
    const playerUpdateSeis = (name) => {
        const functionNumbers = [0,6,12,18,24,30];
        setSeisIndex((prevIndex) => (prevIndex + 1 >= functionNumbers.length ? 0 : prevIndex + 1));
        const newState = players.map( player => {
            if(player.name === name){
                return {...player, seis: functionNumbers[seisIndex]}
            }
            return player;
        });
        setPlayers(newState);
    }
    const playerUpdateEscalera = (name) => {
        const functionNumbers = [0,20,23,25];
        setEscaleraIndex((prevIndex) => (prevIndex + 1 >= functionNumbers.length ? 0 : prevIndex + 1));
        const newState = players.map( player => {
            if(player.name === name){
                return {...player, escalera: functionNumbers[escaleraIndex]}
            }
            return player;
        });
        setPlayers(newState);
    }
    const playerUpdateFull = (name) => {
        const functionNumbers = [0,30,33,35];
        setFullIndex((prevIndex) => (prevIndex + 1 >= functionNumbers.length ? 0 : prevIndex + 1));
        const newState = players.map( player => {
            if(player.name === name){
                return {...player, full: functionNumbers[fullIndex]}
            }
            return player;
        });
        setPlayers(newState);
    }
    const playerUpdatePoker = (name) => {
        const functionNumbers = [0,40,43,45];
        setPokerIndex((prevIndex) => (prevIndex + 1 >= functionNumbers.length ? 0 : prevIndex + 1));
        const newState = players.map( player => {
            if(player.name === name){
                return {...player, poker: functionNumbers[pokerIndex]}
            }
            return player;
        });
        setPlayers(newState);
    }
    const playerUpdateGenerala = (name) => {
        const functionNumbers = [0,50];
        setGeneralaIndex((prevIndex) => (prevIndex + 1 >= functionNumbers.length ? 0 : prevIndex + 1));
        const newState = players.map( player => {
            if(player.name === name){
                return {...player, generala: functionNumbers[generalaIndex]}
            }
            return player;
        });
        setPlayers(newState);
    }
    const playerUpdateDoble = (name) => {
        const functionNumbers = [0,100];
        setDobleIndex((prevIndex) => (prevIndex + 1 >= functionNumbers.length ? 0 : prevIndex + 1));
        const newState = players.map( player => {
            if(player.name === name){
                return {...player, doble: functionNumbers[dobleIndex]}
            }
            return player;
        });
        setPlayers(newState);
    }
    
    return(
        <AppContext.Provider value={{
            setContextColor, 
            setContextMovieNumber, 
            setContextNames, 
            contextColor, 
            contextMovieNumber, 
            contextNames, 
            setTextContextColor, 
            textContextColor,
            contextTeamOne,
            setContextTeamOne,
            contextTeamTwo,
            setContextTeamTwo,
            players,
            addPlayersToGenerala,
            playerUpdater,
            resetValues,
            calculateTotal
            }}>
            {children}
        </AppContext.Provider>
    );
}

export default AppContextProvider;