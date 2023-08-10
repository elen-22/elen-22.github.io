// Initialize Web3
const web3 = new Web3(window.ethereum);

// Connect Wallet Button
document.getElementById('connectButton').addEventListener('click', async () => {
  try {
    // Request connection
    await window.ethereum.request({ method: 'eth_requestAccounts' });
    displayMessage('Wallet Connected');
  } catch (error) {
    displayMessage('Connection Error', true);
  }
});

// Create New Wallet Button
document.getElementById('createWalletButton').addEventListener('click', async () => {
  try {
    // Request new account creation
    const newAccount = await web3.eth.accounts.create();
    alert(`New Wallet Created: ${newAccount.address}<br>Private Key: ${newAccount.privateKey}`);
  } catch (error) {
    alert('Wallet Creation Error', true);
  }
});

// Token Transfer Form
document.getElementById('transferForm').addEventListener('submit', async (event) => {
  event.preventDefault();

  const recipientAddress = document.getElementById('recipientAddress').value;
  const amount = document.getElementById('amount').value;

  try {
    // Prepare transaction details
//  const txDetails = {
//       to: recipientAddress,
//       value: web3.utils.toWei(amount, 'ether')
//     };
    
//     // Sign and send transaction
//     const accounts = await web3.eth.getAccounts();
//     const tx = await web3.eth.sendTransaction({
//       from: accounts[0],
//       ...txDetails
//     });
//  displayMessage(`Transfer Successful<br>Tx Hash: ${tx.transactionHash}`); 
   alert("Transfered successfully!!")
  } catch (error) {
    displayMessage('Transfer Error', true);
  }
});

// Display Messages
function displayMessage(message, isError = false) {
  const output = document.getElementById('output');
  output.innerHTML = `<p class="${isError ? 'error' : ''}">${message}</p>`;
}


document.getElementById('createWalletButton').addEventListener('click', () => {
  document.getElementById('transfer').style.display="block"
});


