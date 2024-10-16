import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const client = createClient({
  projectId: 't0c50267',  // Get this from your Sanity dashboard
  dataset: 'production',    // Typically 'production', unless you're using another dataset  
  useCdn: true,            // `false` if you want to ensure fresh data
});

const builder = imageUrlBuilder(client);

// Function to generate the image URL
export const urlFor = (source) => builder.image(source);

export const getprojects = async () => {
  return await client.fetch(`*[_type == "project"]{
    name,
    shortDescription,
    "image":thumbnail,
    "slug":slug.current,
    "tech":techStack[] -> {name,logo},
    url
    }`);
};
export const getLast4Projects = async () => {
  return await client.fetch(`*[_type == "project"] | order(_createdAt desec)[0...4]{
    name,
    shortDescription,
    "image":thumbnail,
    "slug":slug.current,
    "tech":techStack[] -> {name,logo},
    url
    }`);
};
export const getprojectDetails = async (slug) => {
  const query = `*[_type == "project" && slug.current == $slug]{
    name,
    shortDescription,
    "image": mainImage,
    "tech": techStack[] -> {name, logo},
    sections,
    url
  }`;

  const params = { slug };  // Use params to pass slug safely

  const data = await client.fetch(query, params);  // Pass the params to the query
  return data;
};

export const getTech = async () => {
  return await client.fetch(`*[_type == "tech"]`);
};

export default client;
