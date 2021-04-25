import { Container, Box } from '@theme-ui/components';
import { Social } from './social';

export default () => (
  <Box as='footer' sx={{ textAlign: 'center', px: 2, py: [3, 4] }}>
    <Container
      sx={{
        maxWidth: 640,
        alignItems: 'center',
        justifyContent: 'center',
        color: 'text',
        a: { color: 'inherit' }
      }}
    >
      <Box>&copy; Adway S. Wadekar</Box>
      <Box sx={{fontSize: 0}}>e-mail: <a href="mailto:adway.wadekar@duke.edu">adway@adway.io</a> &#8226; <a href="/resume.pdf">Résumé</a></Box>
    </Container>
  </Box>
);
