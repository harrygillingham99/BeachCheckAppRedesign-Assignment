import React from "react";
import { createContainer } from "unstated-next";
import {
  MockBeachItem,
  PostcodeRegex,
  SearchBarMessages,
} from "../utils/Constants";

/* 
This is a global state container for the search bar state
*/

interface SearchBarState {
  search?: string;
  validationMessage?: string;
  listFilterData?: MockBeachItem[];
  hadTooltipMessage?: boolean;
}

const useSearchState = () => {
  const [state, setState] = React.useState<SearchBarState>({
    search: "",
    validationMessage: SearchBarMessages.Default,
    listFilterData: [],
    hadTooltipMessage: false,
  });

  /* 
  This method will validate and attempt to clean a postcode input before calling the api. 
  */
  const ValidateSearchInput = (input?: string): String | undefined => {
    const PostcodeExpression = new RegExp(PostcodeRegex);

    if (input === null || input === undefined) {
      return undefined;
    }

    input = input.replace(" ", "").trim();

    if (PostcodeExpression.test(input ?? "") === false) {
      return undefined;
    }
    return input;
  };

  return { state, setState, ValidateSearchInput };
};

export const SearchContainer = createContainer(useSearchState);
