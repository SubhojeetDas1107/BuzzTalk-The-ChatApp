import { Client, Account, Databases } from 'appwrite';

export const API_ENDPOINT = 'https://cloud.appwrite.io/v1'
export const PROJECT_ID = '6499f7878d1f2fd21da7'
export const DATABASE_ID = '6499f7a9aa5c656716df'
export const COLLECTION_ID_MESSAGES = '6499f7b5a4289801d6bb'

const client = new Client()
    .setEndpoint(API_ENDPOINT) 
    .setProject(PROJECT_ID);    

export const account = new Account(client);
export const databases = new Databases(client)

export default client;
