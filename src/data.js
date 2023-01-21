const data = [
    {
      id: 1,
      question: " What is the Ethereum Virtual Machine?",
      answers: [
        {
          text: "Decentralized database",
          correct: true,
        },
        {
          text: "Computing platform",
          correct: false,
        },
        {
          text: "Cryptocurrency",
          correct: false,
        },
        {
          text: " Peer-to-peer",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "What is Ethereum?",
      answers: [
        {
          text: "Blockchain",
          correct: true,
        },
        {
          text: "Platform",
          correct: false,
        },
        {
          text: "Cryptocurrency",
          correct: false,
        },
        {
          text: "Protocol",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question:
        "What is Solidity??",
      answers: [
        {
          text: "Library",
          correct: false,
        },
        {
          text: "Frame work",
          correct: false,
        },
        {
          text: "Language",
          correct: true,
        },
        {
          text: "Virtual Machine",
          correct: false,
        },
      ],
    },
    {
      id: 4,
      question: "Which type of language is solidity?",
      answers: [
        {
          text: "Procedure Oriented",
          correct: false,
        },
        {
          text: "Object Oriented",
          correct: true,
        },
        {
          text: "Scripting Language",
          correct: false,
        },
        {
          text: "low level language",
          correct: false,
        },
      ],
    },
    {
      id: 5,
      question: "Which among the following is Ethereum's native browser?",
      answers: [
        {
          text: "Mist",
          correct: true,
        },
        {
          text: "Block",
          correct: false,
        },
        {
          text: "Mime",
          correct: false,
        },
        {
          text: "Edge",
          correct: true,
        },
      ],
    },
    {
        id: 6,
        question: "Code in Solidity can be",
        answers: [
          {
            text: "Expressions",
            correct: false,
          },
          {
            text: "Statements",
            correct: false,
          },
          {
            text: "Expressions and statements",
            correct: true,
          },
          {
            text: "Statements",
            correct: false,
          },
        ],
      },
      {
        id: 7,
        question: "The blocks on the blockchain represents units of",
        answers: [
          {
            text: "memory",
            correct: false,
          },
          {
            text: "time",
            correct: true,
          },
          {
            text: "data",
            correct:false,
          },
          {
            text: "transaction",
            correct: false,
          },
        ],
      },
      {
        id: 8,
        question: "Ether based own tokens can be launched on which Ethereum chains?",
        answers: [
          {
            text: "public chains only",
            correct: false,
          },
          {
            text: "Private chains only",
            correct: false,
          },
          {
            text: "Both public and private chains",
            correct: true,
          },
          {
            text: "own tokens cant be generated",
            correct: false,
          },
        ],
      },
      {
        id: 9,
        question: "Accounts in Ethereum are represented by?",
        answers: [
          {
            text: "hexidecimal address",
            correct: true,
          },
          {
            text: "binary address",
            correct: false,
          },
          {
            text: "octal address",
            correct: false,
          },
          {
            text: "network address",
            correct: false,
          },
        ],
      },
      
      {
        id:10,
        question: "As part of block processing protocol, every node on EVM is?",
        answers: [
          {
            text: "highly parallel",
            correct: false,
          },
          {
            text: "highly centralized",
            correct: false,
          },
          {
            text: "highly redundant",
            correct: true,
          },
          {
            text: "highly sequential",
            correct: false,
          },
        ],
      },
      {
        id: 11,
        question: "In Bitcoin, the block time is usually?",
        answers: [
          {
            text: "1 minute",
            correct: false,
          },
          {
            text: "10 minutes",
            correct: true,
          },
          {
            text: "100 seconds",
            correct: false,
          },
          {
            text: "1 hour",
            correct: false,
          },
        ],
      },
      {
        id: 12,
        question: "Which among the following is true with respect to EVM?",
        answers: [
          {
            text: "it is designed for specific purposes",
            correct: false,
          },
          {
            text: "ownerless virtual machine",
            correct: true,
          },
          {
            text: "accepts any programming language",
            correct: false,
          },
          {
            text: "it is licensed",
            correct: false,
          },
        ],
      },
      {
        id: 13,
        question: "In case of Ethereum, the virtual machines are created with?",
        answers: [
          {
            text: "hardware only",
            correct: false,
          },
          {
            text: "software only",
            correct: false,
          },
          {
            text: "both hardware and software",
            correct: true,
          },
          {
            text: "both hardware and firmeare",
            correct: false,
          },
        ],
      },
      {
        id: 14,
        question: "Blockchain technology is consists of how many pillars?",
        answers: [
          {
            text: "9",
            correct: false,
          },
          {
            text: "5",
            correct: false,
          },
          {
            text: "7",
            correct: false,
          },
          {
            text: "3",
            correct: true,
          },
        ],
      },
      {
        id: 15,
        question: "The term used for a blockchain splits is?",
        answers: [
          {
            text: "A fork",
            correct: true,
          },
          {
            text: "A merger",
            correct: false,
          },
          {
            text: "A division",
            correct: false,
          },
          {
            text: "None of the above",
            correct: false,
          },
        ],
      },
  ];
  
  const prizeMoney = [
    { id: 1, amount: "0.0000500" },
    { id: 2, amount: "0.0001500" },
    { id: 3, amount: "0.0003000" },
    { id: 4, amount: "0.0006000" },
    { id: 5, amount: "0.00100000" },
    { id: 6, amount: "0.00150000" },
    { id: 7, amount: "0.00250000" },
    { id: 8, amount: "0.00400000" },
    { id: 9, amount: "0.00600000" },
    { id: 10, amount: "0.010000000" },
    { id: 11, amount: "0.050000000" },
    { id: 12, amount: "0.100000000" },
    { id: 13, amount: "0.300000000" },
    { id: 14, amount: "0.500000000" },
    { id: 15, amount: "1.0000000000" },
  ].reverse();
  
  export { prizeMoney, data };


  /*What is Ethereum?
Blockchain
Platform
Cryptocurrency
Protocol
Answer: Platform
What is Solidity?
Language
Framework
Library
Virtual Machine
Answer: Language
What is a smart contract?
Digital agreement
Legal document
Computer program
All of the above
Answer: Computer program
What is a DApp?
Decentralized application
Distributed ledger
Cryptocurrency
Smart contract
Answer: Decentralized application
What is a DAO?
Decentralized autonomous organization
Digital asset exchange
Token sale platform
Smart contract development tool
Answer: Decentralized autonomous organization
What is a blockchain?
Public ledger
Private database
Cryptocurrency exchange
Smart contract platform
Answer: Public ledger
What is a consensus algorithm?
Method of reaching agreement
Cryptographic hash function
Virtual machine
Blockchain explorer
Answer: Method of reaching agreement
What is a nonce?
Random number
Cryptographic hash
Block header field
Private key
Answer: Random number
What is a gas limit?
Maximum amount of computation a block can perform
Minimum amount of ether required for a transaction
Cryptocurrency exchange rate
Block header field
Answer: Maximum amount of computation a block can perform
What is a private key?
Secret code
Public address
Digital signature
All of the above
Answer: Secret code
What is a public address?
Account identifier
Digital signature
Private key
All of the above
Answer: Account identifier
What is a digital signature?
Cryptographic proof of authenticity
Private key
Public address
All of the above
Answer: Cryptographic proof of authenticity
What is a transaction hash?
Unique identifier
Cryptographic hash
Private key
Public address
Answer: Unique identifier
What is a



christopherblaze1@gmail.com
number 14 and 15 is missing
What is the max number of nodes in a single Ethereum chain?
Options:
A. 16
B. 32
C. 128
D. 1024
Answer: D

What is the process of changing Ethereum network's protocol?
Options:
A. Hardfork
B. Softfork
C. Chain split
D. Protocol update
Answer: A
*/