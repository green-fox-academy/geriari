'use strict';

const accounts: any[] = [
  { clientName: 'Igor', accountNumber: 11234543, balance: 203004099.2 },
  { clientName: 'Vladimir', accountNumber: 43546731, balance: 5204100071.23 },
  { clientName: 'Sergei', accountNumber: 23456311, balance: 1353600.0 }
];

// Create function that returns the name and balance of cash on an account in a list
// getNameAndBalance(11234543);
// should return: ['Igor', 203004099.2]

function getNameAndBalance(account: number): void {
  for (let i: number = 0; i < accounts.length; i++) {
    if (accounts[i].accountNumber === account) {
      console.log(accounts[i].clientName, accounts[i].balance);
    }
  } 
}

getNameAndBalance(11234543);

// Create function that transfers an amount of cash from one account to another
// it should have four parameters:
//  - the accounts
//  - from accountNumber
//  - to accountNumber
//  - amount of cash to transfer
//
// Log "404 - account not found" if any of the account numbers don't exist to the console.

// transferAmount(accounts, 43546731, 23456311, 500.0);
//After printing the "accounts" it should look like:
// const accounts = [
//	{ clientName: 'Igor', accountNumber: 11234543, balance: 203004099.2 },
//	{ clientName: 'Vladimir', accountNumber: 43546731, balance: 5204099571.23 },
//	{ clientName: 'Sergei', accountNumber: 23456311, balance: 1354100.0 }
//]

function transferAmount(accountsList: any[], fromAccNum: number, toAccNum: number, amount: number): void {
  let fromAccIndex = accountsList.map(function(e) { return e.accountNumber; }).indexOf(fromAccNum);
  let toAccIndex = accountsList.map(function(e) { return e.accountNumber; }).indexOf(toAccNum);
  if (fromAccIndex === -1 || toAccIndex === -1) {
    console.log('404 - account not found');
  } else {
    accountsList[fromAccIndex].balance = accountsList[fromAccIndex].balance - amount;
    accountsList[toAccIndex].balance = accountsList[toAccIndex].balance + amount;
  }
}

transferAmount(accounts, 43546731, 23456311, 500.0);
console.log(accounts);

export = {
  getNameAndBalance,
  transferAmount,
  accounts
};
