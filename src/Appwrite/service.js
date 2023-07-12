import { Client, Account } from "appwrite";

const client = new Client();

client.setEndpoint("http://localhost/v1").setProject("64aecd511bef766b28d3");

export const account = new Account(client, Headers);

// export const createAccount = ({ email, password }) => {
//   const account = new Account(client);

//   const promise = account.create(ID.unique, email, password);
//   promise.then(
//     function (response) {
//       console.log(response); // Success
//     },
//     function (error) {
//       console.log(error); // Failure
//     }
//   );
// };
