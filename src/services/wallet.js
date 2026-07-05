import { BrowserProvider, formatEther } from "ethers";

export async function connectWallet() {
  if (!window.ethereum) {
    alert("Please install MetaMask");
    return null;
  }

  const provider = new BrowserProvider(window.ethereum);

  await provider.send("eth_requestAccounts", []);

  const signer = await provider.getSigner();

  const address = await signer.getAddress();

  const balance = await provider.getBalance(address);

  return {
    address,
    balance: formatEther(balance),
  };
}