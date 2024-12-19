import * as sdk from "node-appwrite";
export const {
  PROJECT_ID,
  API_KEY,
  DATABASE_ID,
  PATIENT_COLLECTION_ID,
  DOCTOR_COLLECTION_ID,
  APPOINMENT_COLLECTION_ID,
  NEXT_PUBLIC_BUCKET_ID: BUCKET_ID,
  NEXT_PUBLIC_ENDPOINT: ENDPOINT,
} = process.env;
console.log(ENDPOINT);

const client = new sdk.Client()
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("6763ba7800260ea2a2c3")
  .setKey(
    "standard_9498afa3c5627765c56cfbe1d407a52088cef775a6c6247a3695f29bf6c91c3f2f16e257307981044bb08f9cbcc4b442a77d11a1522755003dcf16244b93b91ebbf7ac878a6406170f15c218f94f8f54b2984bf7a7b4867af1d62889e10be9354adae43958df71507bc8510dc618b6fe68b5176a4774b7b0739ce8cda9bf38cb"
  );

export const database = new sdk.Databases(client);
export const storage = new sdk.Storage(client);
export const functions = new sdk.Functions(client);
export const messaging = new sdk.Messaging(client);
export const users = new sdk.Users(client);
