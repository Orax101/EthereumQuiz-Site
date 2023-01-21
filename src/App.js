import { useState, useEffect, useRef } from "react";
import { MDBRow, MDBCol, MDBListGroup, MDBBtn } from "mdb-react-ui-kit";
import "./App.css";
import Quiz from "./components/Quiz";
import { data, prizeMoney } from "./data";
import Timer from "./components/Timer";
import Start from "./components/Start";
import abi from "./abi.json";
import {ethers} from "ethers";
import { ethereum } from "web3";
import swal from 'sweetalert';

function App() {
  const [name, setName] = useState(null);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [timeOut, setTimeOut] = useState(false);
  const [earned, setEarned] = useState("0");

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(
        prizeMoney.find((item) => item.id === questionNumber - 1).amount
      );
  }, [questionNumber]);

  useEffect(() => {
    if (window.ethereum) {
      setUserAddress(window.ethereum.selectedAddress);
    }
  }, []);

  const contractAddress = "0xB5dC68CA2bcdc9a363089F906d60871b6D9A6F94";
  const [userAddress, setUserAddress] = useState(null);
  const earnedInWei = ethers.utils.parseEther(earned);
  const handleWithdraw = async () => {
    
    const {ethereum} = window;
    const threshold = 0.004;

    if (earned < threshold) {
      swal("Withdrawal failed","Sorry you can't withdraw amount less than 0.004 Eth","error");
      return;
    }
    
    if (ethereum) {
      console.log("withdrawing")
      
      const provider = new ethers.providers.Web3Provider(ethereum, "any");
      const signer = provider.getSigner();
      const contract = new ethers.Contract(contractAddress, abi, signer);
      try {
        const tx = await contract.withdraw(earnedInWei);
        await tx.wait();
        swal("Withdrawal Status","Withdrawal was succesful","success" );
      } catch (error) {
        console.error("Transaction Error: ", error);
      }
    } else {
      console.error("No web3 provider found. Please install MetaMask or use another web3 provider");
    }
  }

  return (
    <div className="App">
      {!name ? (
        <Start setName={setName} setTimeOut={setTimeOut} />
      ) : (
        <MDBRow>
          <MDBCol md="9">
            <div className="main">
              {timeOut ? (
                <div className="GameEnd"><h1 className="earned">You Earned Total: {earned}</h1>
                 <button className="withraw-btn" onClick={handleWithdraw}>
               <b>Withraw Earnings</b>
               </button>
               
              </div>
               
               
              
                
              ) : (
                <>
                  <div style={{ height: "50%", position: "relative" }}>
                    <div className="timer">
                      <Timer
                        setTimeOut={setTimeOut}
                        questionNumber={questionNumber}
                      />
                    </div>
                  </div>
                  <div style={{ height: "50%" }}>
                    <Quiz
                      data={data}
                      questionNumber={questionNumber}
                      setQuestionNumber={setQuestionNumber}
                      setTimeOut={setTimeOut}
                    />
                  </div>
                </>
              )}
            </div>
          </MDBCol>
          <MDBCol md="3" className="money">
            <MDBListGroup className="money-list">
              <MDBRow>
                <span className="mb-2">
                  <MDBBtn
                    style={{ float: "right" }}
                    className="mx-2"
                    color="light"
                    onClick={() => setTimeOut(true)}
                  >
                    Quit
                  </MDBBtn>
                  <MDBBtn
                    style={{ float: "right" }}
                    onClick={() => {
                      setName(null);
                      setQuestionNumber(1);
                      setEarned("Ξ 0");
                    }}
                  >
                    Exit
                  </MDBBtn>
                </span>
                <MDBCol md="6">Name: {name}</MDBCol>
                <MDBCol md="6">Total Earned: {earned}</MDBCol>
              </MDBRow>
              <hr />
              {prizeMoney.map((item) => (
                <>
                  <li
                    className={
                      questionNumber === item.id ? "item active" : "item"
                    }
                  >
                    <h5 className="amount">{item.amount}</h5>
                  </li>
                </>
              ))}
            </MDBListGroup>
          </MDBCol>
        </MDBRow>
      )}
    </div>
  );
}

export default App;   