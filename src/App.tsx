import { Button, ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter, Route } from "react-router-dom"

import theme from "./theme/theme"
import { Router } from "./router/Router"

function App() {
  return (
   <ChakraProvider theme={theme}>
     <BrowserRouter>
      <Router />
     </BrowserRouter>
   </ChakraProvider>
  );
}

export default App;
