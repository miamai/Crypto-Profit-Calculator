import { TableCell, Box } from '@mui/material';

export const PriceTableCell = ({ children }) => {
  return (
    <TableCell
      sx={{
        color:
          children < 0 || children.includes('-') ? 'text.loss' : 'text.gain',
      }}
    >
      {children}
    </TableCell>
  );
};

export const CenterTableCell = ({ children }) => {
  return (
    <TableCell>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>{children}</Box>
    </TableCell>
  );
};
