import { createContext, ReactNode } from "react";

export const AppContext = createContext({
  stateFormProfile: Boolean,
  setStateFormProfile: (props:Boolean) => {},
  stateFormMovie: Boolean,
  setStateFormMovie: (props:Boolean) => {},
  stateFormSerie: Boolean,
  setStateFormSerie: (props:Boolean) => {},
  stateFormAnime: Boolean,
  setStateFormAnime: (props:Boolean) => {},
});

type Props = {
  children: ReactNode;
};

export function AppContextProvider({ children }: Props) {
  return (
    <AppContext.Provider
      value={{
        stateFormProfile: Boolean,
        setStateFormProfile: Boolean,
        stateFormMovie: Boolean,
        setStateFormMovie: Boolean,
        stateFormSerie: Boolean,
        setStateFormSerie: Boolean,
        stateFormAnime: Boolean,
        setStateFormAnime: Boolean,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
