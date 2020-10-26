import { PostcodeResponse } from "../types/Postcodes";
import FetchWrapper from "./Api";
import { PostcodeApiUrl } from "./Constants";

export const GetLocation = async (
  postcode: string
): Promise<PostcodeResponse> => {
  const getUrl = PostcodeApiUrl + postcode;
  return await FetchWrapper.Get<PostcodeResponse>(getUrl);
};
