import { useState } from 'react'
import colors from '../dataColor'
import { Box, Heading, Button } from '@chakra-ui/react'

const ColorPicker = () => {
  const [color, setColor] = useState(colors[0])

  const divStyle = { backgroundColor: color }

  return (
    <Box p={5} style={divStyle} minH='100vh'>
      <Box display='flex' justifyContent='center'>
        <Heading mb={5} color='black.200'>Selected color: {color}</Heading>
      </Box>
      <Box display='flex' justifyContent='center' flexWrap='wrap'>
       {colors.map((colorName) => (
        <Button
          w='135px'
          size='lg'
          variant='outline'
          m={1} 
          onClick={() => setColor(colorName)}
        >
          {colorName}
        </Button>
      ))} 
      </Box>
    </Box>
  )
}

export default ColorPicker