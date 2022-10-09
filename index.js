// const ethereumButton = document.querySelector('.enableEthereumButton');

// ethereumButton.addEventListener('click', () => {
//   //Will Start the metamask extension
//   ethereum.request({ method: 'eth_requestAccounts' });
// });

const ethereumButton = document.querySelector('.enableEthereumButton');
const showAccount = document.querySelector('.showAccount');
const showAccount1 = document.querySelector('.showAccount1'); 
const showAccount2 = document.querySelector('.showAccount2'); 
const showAccount3 = document.querySelector('.showAccount3');

ethereumButton.addEventListener('click', () => {
  getAccount();
});

async function getAccount() {
  const accounts = await ethereum.request({ method: 'eth_requestAccounts' });

  const account = accounts[0];
  showAccount.innerHTML = account;

  const account1 = accounts[1];
  showAccount1.innerHTML = account1;

  const account2 = accounts[2];
  showAccount2.innerHTML = account2;

}