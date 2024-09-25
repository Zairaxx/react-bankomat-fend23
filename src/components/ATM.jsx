import { useEffect, useState } from "react"

export default function ATM ({newMessage,balance, deposit, withdraw}) {

    let [amount,setAmount] = useState(0);

    useEffect(() => {
        newMessage("ATM is now ready to use");
    },[])

    useEffect(() => {
        return () => {newMessage("ATM is shutting down.");}
    },[])

    return <>
            <h2>Saldo: {balance}</h2>
            <input type="number" onChange={(e) => {setAmount(e.target.value)}}/>
            <button onClick={() => {deposit(+amount)}}>Insättning</button>
            <button onClick={() => {withdraw(+amount)}}>Uttag</button>
           </>

}