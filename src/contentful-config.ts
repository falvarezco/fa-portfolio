import { createClient } from 'contentful'

export const client: any = () => {
  return createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID || '',
    environment: 'master', // defaults to 'master' if not set
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN || '',
  })
}

export const fetchEntry:any = async (entryId: string) => {
  try {
    return await client().getEntry(entryId);
  } catch (error) {
    console.error(error);
    return error;
  }
}
