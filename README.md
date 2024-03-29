# EthereumQuiz-Site

  This is a decentralized quiz application, where users can answer a series of Ethereum blockchain-related questions and earn Ether based on their performance. The app utilizes the power of blockchain technology to provide a secure and transparent experience for users. With this application, players can test their knowledge of the Ethereum ecosystem and earn rewards for their understanding. The primary objective of this application is to incentivize individuals to expand their knowledge in the web3 space, thereby promoting the growth and development of the ecosystem.
  
  ## Author

 [@Orax101](https://www.github.com/Orax101)
 
 ## Game Live Demo
 
[@Eth-quiz](https://ethereum-quiz-site.vercel.app/)
 
 ## Tech Stack

**Frontend:** React.js.  

**Backend:** Solidity.

**Frontend IDE:** Visual Studiocode. 

**Smart Contract Testing:** Remix IDE

**Smart Contract Deployment:** Bunzz




## Features
  
- **Withdrawal:**  The users can withdraw the rewards they earned after the game.
- **Decentralized:** The app is built on the Ethereum blockchain, which ensures that the app is decentralized and transparent, and the rewards are automatically distributed to the users.
- **Multiple choice questions:** The app includes a variety of multiple choice questions that test users' knowledge of Ethereum and blockchain technology.
- **Rewards system:**  Users can earn rewards in the form of Ether for correctly answering questions.Upon completion of the quiz, users have the option to withdraw their earned rewards through the implementation of a withdrawal process. The rewards are then transferred to the user's designated wallet, providing a secure and efficient experience.

## Credits 
The gaming format of this app was inspired by trickJs kbc-quiz-app 
(https://github.com/trickjsprogram/kbc-quiz-app) Its Components and "who wants to be a millionaire" style of gaming was used.

## How The Game Works:

- To start, connect to your wallet to play the game. If the connection is successful, you will receive a prompt confirming the connection.
- Once connected, input a short nickname or username in the "enter name" field and click the start button to begin the game.
- The game consists of 15 stages, each with an Ethereum-based question. You have 30 seconds to provide the correct answer to each question, otherwise, the game ends.
- Upon completion of the game, the amount of ETH assigned to the level you ended the game on will become your earnings.
- To withdraw your earnings, there is a button available. However, you must have won a minimum of 0.00004 ETH to be able to withdraw.
- After withdrawing, you can exit the game and reload the page for another game.

## Journal For Web3Afrika Hackathon
- 20/04/2023: The original plan was to deploy the smart contract for this project on the Bunzz platform. However, technical difficulties during deployment rendered this unfeasible. As a result, the smart contract(deployed with remix) was imported as an external module, and given the name 'ethereumQuizApp'. This module was subsequently integrated into the 'ERC20DAOToken' module that already existed on the Bunzz platform.
![bandicam 2023-04-22 15-02-22-752](https://user-images.githubusercontent.com/120677681/233789959-42755f2e-0564-4642-ae3b-56a89fae5ba2.jpg)
- 22/04/2023 This Project was submitted for the Web3Afrika Hackathon sponsored by Bunzz. I clearly stated the issues i faced above on the submission form.
- 23/04/2023: This is to inform you that I have successfully resolved the issue that I reported on the submission form. After numerous attempts, I was able to deploy the smartcontract on Bunzz, and I am pleased to confirm that it has been successfully deployed.
![bandicam 2023-04-24 07-47-59-058](https://user-images.githubusercontent.com/120677681/233922442-b95c8317-a81e-444c-b878-01453acd2a0f.jpg)

## DApp Interface

![bandicam 2023-01-21 06-28-22-735](https://user-images.githubusercontent.com/120677681/213862019-5233e44d-f6f0-47fa-afe0-3fd9e0015e20.jpg)
![bandicam 2023-01-21 06-29-08-885](https://user-images.githubusercontent.com/120677681/213862020-20eb66c1-b2ed-4d21-8f5f-7e400104d19d.jpg)
![bandicam 2023-01-21 06-31-19-639](https://user-images.githubusercontent.com/120677681/213862021-33184853-95ba-44ee-b293-a2a00fcbeef6.jpg)
![bandicam 2023-01-21 06-32-19-042](https://user-images.githubusercontent.com/120677681/213862061-b1fe40fa-316a-41c0-9d50-df8ef92ebed7.jpg)
![bandicam 2023-01-21 06-32-45-977](https://user-images.githubusercontent.com/120677681/213865148-ea583c51-dff8-48f1-9cdf-010b87784dd0.jpg)
![bandicam 2023-01-21 06-36-02-529](https://user-images.githubusercontent.com/120677681/213862026-7353dde3-d3c3-463b-a703-5141965b0e2a.jpg)


## Installation
### Prerequisites
- Node.js v12 or higher
- npm v6 or higher
- Metamask 

### Steps
1) Clone the repository by running the following command:
```bash
git clone https://github.com/Orax101/EthereumQuiz-Site.git
```
2) Navigate to the project directory:
```bash 
cd EthereumQuiz-Site
```
3) Install the project dependencies:
```bash 
npm install
```
4) Start the development server:
```bash 
npm start
```
5) The app will now be running at http://localhost:3000. Connect your wallet to the app and start playing the game.
You can also give a live version of the game if you have deployed the game on any web3 enabled browser like chrome or firefox.

6) Deployment
You can deploy the game on any ethereum network by simply following the steps provided in the deployment documentation provided in the readme.

