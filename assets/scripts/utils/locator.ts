import { PostcodeResponse } from "../types/Postcodes";
import FetchWrapper from "./Api";
import { PostcodeApiUrl } from "./Constants";

/* 
This is a function to call postcodes.io with a user input postcode in order to resolve the latitude and longitude
*/

export const GetLocation = async (
  postcode?: string
): Promise<PostcodeResponse> => {
  const getUrl = PostcodeApiUrl + postcode;
  return await FetchWrapper.Get<PostcodeResponse>(getUrl);
};
