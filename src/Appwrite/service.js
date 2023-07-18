import { Client, Account, Databases } from "appwrite";

const client = new Client();

client
  .setEndpoint("http://localhost/v1")
  .setProject(process.env.REACT_APP_PROJECT_ID);

export const account = new Account(client, Headers);

export const databases = new Databases(
  client,
  process.env.REACT_APP_DATABASE_ID
);

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
