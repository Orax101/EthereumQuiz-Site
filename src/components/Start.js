import { useState, useEffect, useRef } from "react";
import { MDBBtn } from "mdb-react-ui-kit";
import {ethers} from "ethers";
import oraXLogo from "../components/images/oraXLogo.png";
import wallet from "../components/images/wallet.png";
import swal from 'sweetalert';



  const contractAddress= "0xB5dC68CA2bcdc9a363089F906d60871b6D9A6F94" ;


 const Start = ({ setName, setTimeOut }) => {

  const [publicKey, setPublickey] = useState();
  const [network, setNetwork] = useState();
  const [chainId, setChainId] = useState();
  const [msg, setMsg] = useState();
  const inputRef = useRef();

  const handleClick = () => {
  setTimeOut(false);
  inputRef.current.value && setName(inputRef.current.value);

  if (!inputRef.current.value) {
    swal("Please enter your name before starting the game.");
    return;
  }
};

const connectButton = async () => {
  const { ethereum } = window;
  if (ethereum.isMetaMask) {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const accounts = await provider.send("eth_requestAccounts", []);

    const { name, chainId } = await provider.getNetwork();

    setNetwork(name);
    setChainId(chainId);
    setPublickey(accounts[0]);
    swal("Your connection status","Wallet connected successfully!","success");
  } else {
    setMsg("Install MetaMask");
  }
};
  
  return (
    
    //<div
     // style={{
     //   margin: "auto",
    //   padding: "15px",
    //    maxWidth: "400px",
       // alignContent: "center",
      //  marginTop: "300px",
        
      //}}
    ///>
    
<div class="box">
  <div class="form">
    <img className="oraXLogo" src={oraXLogo}/>
    <p>The Decentralised Network awaits You</p>
      <input
        type="text"
        placeholder="Enter Name"
        ref={inputRef}
        className="form-control"
      />

      <button className="connect-btn" onClick={connectButton}>
        <b> <img className="walletLogo" src={wallet}/>Connect Wallet</b>
        </button> 

      <div className="connection"><p>Address: {publicKey}</p>
      {msg && <p>{msg}</p>}</div>


        <button className="start-btn" onClick={handleClick}>
        <b> Start Game</b>
        </button> 

    

    
    </div></div>
  );
};

export default Start;

