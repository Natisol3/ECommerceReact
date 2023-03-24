
import { Card } from '@chakra-ui/react'

import React from 'react'

const Card = () => {
return (
        <Card maxW='sm'>
<CardBody>
    <Image
    src= "../src/assets/piñata.png"
    alt="piñata"
    class= "piñata"
    />
    <Stack mt='6' spacing='3'>
    <Heading size='md'>Piñata cumpleaños</Heading>
    <Text>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore at eaque laborum quo corrupti nobis sunt, consequuntur eos quidem eligendi fuga dolorem, in laudantium, sequi quas aliquid distinctio iusto tempora.
    </Text>
    <Text color='blue.600' fontSize='2xl'>
        $4100
    </Text>
    </Stack>
</CardBody>
<Divider />
<CardFooter>
    <ButtonGroup spacing='2'>
    <Button variant='solid' colorScheme='blue'>
        Buy now
    </Button>
    <Button variant='ghost' colorScheme='blue'>
        Add to cart
    </Button>
    </ButtonGroup>
</CardFooter>
</Card>
)
}

export default Item