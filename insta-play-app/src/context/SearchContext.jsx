import { createContext, useContext } from "react";
import useSessionStorage from "../components/custom-hook/useSessionStorage";

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchText, setSearchText, removeSearchText] = useSessionStorage(
    "searchText",
    ""
  );

  return (
    <SearchContext.Provider
      value={{ searchText, setSearchText, removeSearchText }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => useContext(SearchContext);
