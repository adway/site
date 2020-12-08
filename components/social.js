import {Flex} from 'theme-ui'
import {Instagram, Linkedin, Mail, Twitter} from 'react-feather'

export const Social = ({children, sx, size = 25}) => (
<>
  <Flex sx={{
    m: 'auto', justifyContent: 'center', mt: 3, a: {px: 2} ,
    ...sx}}>
    <a href="https://instagram.com/_adway"><Instagram size = {size}/></a>
    <a href="https://linkedin.com/adwaywadekar"><Linkedin size = {size}/></a>
    <a href="https://twitter.com/_adway"><Twitter size = {size}/></a>
    <a href="mailto:adway@adway.io"><Mail size = {size}/></a>
  </Flex>
</>
)