import { Ed25519Keypair, Connection, Transaction } from "bigchaindb-driver";
//import { TransactionOperations } from "bigchaindb-driver/types/transaction"
const endpoint = "https://test.ipdb.io/api/v1/";
const main = async () => {
  const connection = new Connection(endpoint);
  const id = "44aff48de21f92d8361708f6ef21dbb4774042962198646882d20e495a87778d";
  const tx = await connection.getTransaction(id)
  console.log(tx.asset)
  console.log(tx.operation)
  switch(tx.operation) {
    //case TransactionOperations.TRANSFER:
      //console.log(tx.asset.id)
      //break;
    //case TransactionOperations.CREATE:
      //console.log(tx.asset.data)
      //break;
  }
}


main()
