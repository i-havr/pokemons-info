import { Box } from '../Box/Box';

export const Footer = () => {
  return (
    <Box
      as="footer"
      backgroundColor="grey"
      p={4}
      display="flex"
      justifyContent="space-between"
      width="100%"
      height="auto"
      borderTop="1px solid black"
    >
      Hello, I'm your footer :)
    </Box>
  );
};
