import { Client, Account, Databases } from 'appwrite';

export const API_ENDPOINT = 'https://cloud.appwrite.io/v1'
export const PROJECT_ID = '6499f4b43803c4178229'
export const DATABASE_ID = '6499f521d05086eeb716'
export const COLLECTION_ID_MESSAGES = '6499f5343b4ffafd892d'

const client = new Client()
    .setEndpoint(API_ENDPOINT) 
    .setProject(PROJECT_ID);    

export const account = new Account(client);
export const databases = new Databases(client)

export default client;
