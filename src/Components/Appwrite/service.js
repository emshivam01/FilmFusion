import { Client, Account, Databases } from "appwrite";

const client = new Client();

client
  .setEndpoint("https://filmfusion.vercel.app/")
  .setProject(process.env.REACT_APP_PROJECT_ID);

export const account = new Account(client, Headers);

export const databases = new Databases(
  client,
  process.env.REACT_APP_DATABASE_ID
);
