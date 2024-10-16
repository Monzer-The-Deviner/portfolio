import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 't0c50267',  // Get this from your Sanity dashboard
  dataset: 'production ',       // Typically 'production', unless you're using another dataset
  apiVersion: '2023-09-20',        // Use the latest API version or specify another version
  useCdn: true,                    // `false` if you want to ensure fresh data
})

export default client

export const getprojects = async ()=>client.fetch(`*[_type == "projects"]`)

