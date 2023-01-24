import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import { themStyle } from "./assets/styles/themeStyle";
import { Router } from "./router";
import { AppContextProvider } from "./components/context/provider";

const query = new QueryClient();

export function App() {
  return (
    <ThemeProvider theme={themStyle}>
      <AppContextProvider>
        <BrowserRouter>
          <QueryClientProvider client={query}>
            <Router />
          </QueryClientProvider>
        </BrowserRouter>
      </AppContextProvider>
    </ThemeProvider>
  );
}
