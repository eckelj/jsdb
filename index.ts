import { Connection } from 'bigchaindb-driver';
import type { TransactionOperations } from 'bigchaindb-driver';

const endpoint = 'https://test.ipdb.io/api/v1/';
const main = async () => {
  const connection = new Connection(endpoint);
  const id = '44aff48de21f92d8361708f6ef21dbb4774042962198646882d20e495a87778d';
  const tx = await connection.getTransaction<
    TransactionOperations.CREATE | TransactionOperations.TRANSFER
  >(id);
  console.log(tx.asset);
  console.log(tx.operation);
  switch (tx.operation) {
    case 'TRANSFER':
      console.log(tx.asset.id);
      break;
    case 'CREATE':
      console.log(tx.asset.data);
      break;
  }
};

(async function () {
  await main();
})();
