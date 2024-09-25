import { useState } from "react";
import ATM from "./ATM";
export default function ATMWrapper(){

  let [showATM,setShowATM] = useState(false);
  let [messages, setMessages] = useState([]);
  let [balance,setBalance] = useState(0);


  let newMessage = (msg) => {
    let updatedMessages = [...messages,msg];
    setMessages(updatedMessages)
  }

  let deposit = (amount) => {
    if(amount === 0) {
        newMessage("Please select amount");
    } else {
    newMessage("Deposited " + amount + "kr.");
    setBalance(balance + amount)
    }
  }

  let withdraw = (amount) => {
    if(amount === 0) {
        newMessage("Please select amount");
    } else if(amount <= balance) {
    newMessage("Withdrew " + amount + "kr.")
    setBalance(balance - amount);
}  else {
        newMessage("You don't have enough money in your bank account.")
    }
  }


    return(
     <>
        <button onClick={() => { setShowATM(!showATM)}}>Toggle ATM</button>
        <h2> Message Box </h2>
        <ul>
            {messages.map((msg,i) => <li key={i}>{msg}</li>)}
        </ul>
        {showATM && <ATM 
        newMessage={newMessage}
        balance={balance}
        deposit={deposit}
        withdraw={withdraw}

        />}
     </>

    )
}