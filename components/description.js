import { Box } from '@theme-ui/components';

export const Description = ({ children, sx }) => (
  <Box
    as='section'
    sx={{
      pb: 2,
      mb: 4,
      borderBottom: '1px solid',
      borderBottomColor: 'muted',
      div: {
        pb: 3,
      },
      ...sx,
    }}
  >
    {children}
  </Box>
);
