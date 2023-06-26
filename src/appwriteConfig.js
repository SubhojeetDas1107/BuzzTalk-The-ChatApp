import { Client, Account, Databases } from 'appwrite';

export const API_ENDPOINT = 'https://cloud.appwrite.io/v1'
export const PROJECT_ID = '6499c7e31d9ef2aa6dee'
export const DATABASE_ID = '6499cb6c14c4f607a648'
export const COLLECTION_ID_MESSAGES = '6499cb8f21997247ad8d'

const client = new Client()
    .setEndpoint(API_ENDPOINT) 
    .setProject(PROJECT_ID);    

export const account = new Account(client);
export const databases = new Databases(client)

export default client;