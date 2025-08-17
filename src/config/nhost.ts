import { NhostClient } from '@nhost/react'

// You'll need to replace these with your actual Nhost project details
export const nhost = new NhostClient({
  subdomain: 'your-project-subdomain', // Replace with your Nhost subdomain
  region: 'eu-central-1', // Replace with your Nhost region
})

export const HASURA_GRAPHQL_ENDPOINT = 'https://your-project-subdomain.hasura.eu-central-1.nhost.run/v1/graphql'