import { checkError, client } from './client';

export async function getCandies() {
  const response = await client
    .from('candies')
    .select();
    
  return checkError(response);
}

export async function getCars() {
  const response = await client
    .from('cars')
    .select();
  
  return checkError(response);
}