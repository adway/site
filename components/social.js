import {Flex} from 'theme-ui'
import {Instagram, Linkedin, Mail, Twitter} from 'react-feather'

export const Social = ({children, sx, size = 25}) => (
<>
  <Flex sx={{
    m: 'auto', justifyContent: 'center', mt: 1, a: {px: 2}, fontSize: 0,
    ...sx}}>
    {/* <a href="https://instagram.com/_adway"><Instagram size = {size}/></a>
    <a href="https://linkedin.com/adwaywadekar"><Linkedin size = {size}/></a>
    <a href="https://twitter.com/_adway"><Twitter size = {size}/></a>
    <a href="mailto:adway@adway.io"><Mail size = {size}/></a> */}
    e-mail: <a href="mailto:adway@adway.io">adway@adway.io</a>
  </Flex>
</>
)