const hre = require("hardhat");

async function main() {

  const ChiamakaUgwu = await hre.ethers.getContractFactory("ChiamakaUgwu");
  const chiamakaUgwu = await ChiamakaUgwu.deploy(1000000, 50);

  await chiamakaUgwu.deployed();
  console.log("ChiamakaUgwu token deployed:", chiamakaUgwu.address);

}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
