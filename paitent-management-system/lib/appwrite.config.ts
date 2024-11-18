import * as sdk from 'node-appwrite';
import { Client, Users } from 'appwrite';

export const {
    PROJECT_ID, API_KEY, DATABASE_ID, PATIENT_COLLECTION_ID, DOCTOR_COLLECTION_ID, APPOINTMENT_COLLECTION_ID, 
    NEXT_PUBLIC_BUCKET_ID: BUCKET_ID,
    NEXT_PUBLIC_ENDPOINT
} = process.env;

// Log the Appwrite endpoint
console.log('Appwrite Endpoint:', NEXT_PUBLIC_ENDPOINT);

const client = new sdk.Client();

client.setEndpoint(NEXT_PUBLIC_ENDPOINT!).setProject(PROJECT_ID!).setKey(API_KEY!)

export const databases = new sdk.Databases(client);
export const storage = new sdk.Storage(client);
export const messaging = new sdk.Messaging(client);
export const users = new sdk.Users(client);
console.log('Users Service:', users);
