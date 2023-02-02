import TableCell from '@mui/material/TableCell';

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
