import { PostcodeResponse } from "../types/Postcodes";
import FetchWrapper from "./Api";

const apiUrl = "https://api.postcodes.io/postcodes/";

export const GetLocation = async (postcode: string): Promise<PostcodeResponse> => {
  const getUrl = apiUrl + postcode;
  return await FetchWrapper.Get<PostcodeResponse>(getUrl);
};
