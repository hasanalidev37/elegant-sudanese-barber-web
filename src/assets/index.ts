// This file is used to export all assets for easier imports
// Prepend the base URL dynamically to ensure correct paths on deployment

const BASE_URL = import.meta.env.BASE_URL;

// Helper function to remove leading slash if present and prepend base URL
const resolvePublicPath = (path: string): string => {
  // Ensure BASE_URL ends with a slash and path doesn't start with one
  const baseUrl = BASE_URL.endsWith('/') ? BASE_URL : BASE_URL + '/';
  const relativePath = path.startsWith('/') ? path.substring(1) : path;
  return baseUrl + relativePath;
};

// Logo and hero image
export const logo = resolvePublicPath("/lovable-uploads/3df9bbdc-322b-4d63-ba7b-127e64f2ae5b.png");
export const heroImage = resolvePublicPath("/lovable-uploads/e478cfeb-78ff-4365-bf67-3927ac518510.png");

// Service images
export const hairServiceImage = resolvePublicPath("/lovable-uploads/f9913f09-9828-430c-b751-35594dde63fe.png");
export const beardServiceImage = resolvePublicPath("/lovable-uploads/f921bd5b-2caa-4b36-85e7-ef1f02257927.png");
export const childrenServiceImage = resolvePublicPath("/lovable-uploads/975402b3-84cf-44ce-90f4-87d27e417faa.png");
export const skinCareServiceImage = resolvePublicPath("/lovable-uploads/2c8c7168-2559-4a90-a5fe-ca8e4e3736ca.png");
export const moroccanBathImage = resolvePublicPath("/lovable-uploads/e5be41c3-de49-4b91-8f9f-2f442bee5543.png");

// About page images
export const aboutUsImage = resolvePublicPath("/lovable-uploads/bbe11dcb-24f8-46a2-952b-a1fd837b31ec.png");
export const salonInterior1 = resolvePublicPath("/lovable-uploads/e34a49f2-aa7f-4563-bf45-bdb8864fd6c7.png");
export const salonInterior2 = resolvePublicPath("/lovable-uploads/9c085d54-13b6-4a29-b550-2c8aa6abfff7.png");
export const salonInterior3 = resolvePublicPath("/lovable-uploads/7452a29c-c11b-419e-b4ab-f9c393df6918.png");
export const salonExterior = resolvePublicPath("/lovable-uploads/b6b8d4c0-b544-4d9a-bb14-57c51f5eaf0c.png");

// Gallery images - Hair
export const hairImage1 = resolvePublicPath("/lovable-uploads/027de505-9463-484b-951b-36ba8a358237.png");
export const hairImage2 = resolvePublicPath("/lovable-uploads/4f1be53c-525d-4a6a-99e3-7dd05d820a44.png");
export const hairImage3 = resolvePublicPath("/lovable-uploads/40fef1ac-0068-4404-a3f4-2ab03b2408d5.png");
export const hairImage4 = resolvePublicPath("/lovable-uploads/38979559-66aa-41d0-a189-27ca0f3ec866.png");
export const hairImage5 = resolvePublicPath("/lovable-uploads/9ca99f77-ee2c-4ecb-90b9-4373b3c0f969.png");

// Gallery images - Beard
export const beardImage1 = resolvePublicPath("/lovable-uploads/c0d5f51d-3c74-40c5-ae1b-c3848536cfe1.png");
export const beardImage2 = resolvePublicPath("/lovable-uploads/088a4bc5-cb20-406e-826f-85a6528596ca.png");
export const beardImage3 = resolvePublicPath("/lovable-uploads/3f1c5a19-faa4-463d-b336-607336205143.png");

// Product images
export const hairCareProductImage = resolvePublicPath("/lovable-uploads/3f1c5a19-faa4-463d-b336-607336205143.png");
export const afterShaveProductImage = resolvePublicPath("/lovable-uploads/e5be41c3-de49-4b91-8f9f-2f442bee5543.png");
export const beardCareProductImage = resolvePublicPath("/lovable-uploads/f921bd5b-2caa-4b36-85e7-ef1f02257927.png");
export const trimmersProductImage = resolvePublicPath("/lovable-uploads/088a4bc5-cb20-406e-826f-85a6528596ca.png");
