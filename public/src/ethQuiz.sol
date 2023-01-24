//SPDX-License-Identifier: UNLICENSED

pragma solidity >=0.8.7;

contract ethQuiz {

//address of the owner of the smart contract
address payable public owner;

//Making sure that only the owner calls the smart contract
constructor(){
    owner= payable(msg.sender);
       }  
//funding the smart contract
    receive() external payable {
    }
  
//for users to withraw funds from the smart contract
function withdraw(uint256 amount) external {
    require(amount <= address(this).balance, "too much!");
    payable(msg.sender).transfer(amount);
    }

//to check the available balance in the smart contract
function getBalance() external view returns (uint){
    return address(this).balance;
    }
}
//initial amount on smart contract:300000000000000000 wei