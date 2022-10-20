import { clusterApiUrl, Connection } from "@solana/web3.js";

async function main() {
  const connection =  new Connection(clusterApiUrl("devnet"), "confirmed");

  const rent = await connection.getMinimumBalanceForRentExemption(10);
  console.log(`rent: ${rent}`)
}

main();
