import { Client, Account, ID } from "appwrite";

const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1/")
  .setProject("64ab9aac08b91cd6e771");

const Headers = { Accept: "application/json", Origin: "http://localhost:3000" };

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
