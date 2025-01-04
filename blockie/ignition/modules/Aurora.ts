
import { ethers } from "hardhat";

async function main() {
  // Get the ContractFactory for the contract
  const AuroraCont = await ethers.getContractFactory("Aurora");

  console.log("Deploying Aurora...");
  const Aurora = await AuroraCont.deploy();

  // Wait for the deployment to complete
  await Aurora.waitForDeployment();

  // Get the deployed contract's address
  const contractAddress = await Aurora.getAddress();
  console.log("Aurora deployed to:", contractAddress);
}

// Proper error handling
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

