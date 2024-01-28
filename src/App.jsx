import ColorPicker from "./components/ColorPicker"
import { ChakraProvider, Box } from "@chakra-ui/react"

const App = () => {
  return (
      <ChakraProvider>
       <ColorPicker /> 
      </ChakraProvider>
  )
}

export default App