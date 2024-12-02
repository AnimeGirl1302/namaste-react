import { CDN_URL } from "./constants"

export const getImageCDNLink = (cloudinaryImageId) => {
  return CDN_URL + cloudinaryImageId;
}


// two types of export/import

// default 
// named import 