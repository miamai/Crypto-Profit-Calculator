import { useContext } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
} from '@mui/material';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';

import { PriceTableCell, CenterTableCell } from '../../UI/TableCellStyle';
import FormContext from '../../store/form-context';

const CheckedProfitForm = () => {
  const { removeItemHandler, outputList: outputs } = useContext(FormContext);
  const purchaseDate = new Date().toISOString().split('T')[0];

  return (
    <div>
      <h2>結算表</h2>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell>賣出幣</TableCell>
              <TableCell>結算價格 USDT</TableCell>
              <TableCell>成本價格 USDT</TableCell>
              <TableCell>成本價格 TWD</TableCell>
              <TableCell>賣出數量</TableCell>
              <TableCell>結算損益 TWD</TableCell>
              <TableCell>結算損益 %</TableCell>
              <TableCell>賣出日期</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {outputs?.map((output) => {
              return (
                <TableRow
                  key={output.id}
                  sx={{
                    '&.MuiTableRow-root:hover': {
                      backgroundColor: 'rgba(245, 176, 65,0.08)',
                    },
                  }}
                >
                  <CenterTableCell>
                    <IconButton
                      sx={{ padding: 0 }}
                      onClick={() => removeItemHandler(output.id)}
                    >
                      <IndeterminateCheckBoxIcon
                        sx={{ '&:hover': { color: 'primary.main' } }}
                      />
                    </IconButton>
                    {output.coin}
                  </CenterTableCell>
                  <TableCell>{output.endPrice.toFixed(2)}</TableCell>
                  <TableCell>{output.cost}</TableCell>
                  <TableCell>
                    {output.usdtTwd
                      ? (output.usdtTwd * output.cost).toFixed(2)
                      : '讀取中'}
                  </TableCell>
                  <TableCell>{output.quantity}</TableCell>
                  <PriceTableCell>
                    {output.usdtTwd
                      ? (
                          output.usdtTwd *
                          output.quantity *
                          (output.endPrice - output.cost)
                        ).toFixed(2)
                      : '讀取中'}
                  </PriceTableCell>
                  <PriceTableCell>
                    {((output.endPrice - output.cost) / output.cost).toFixed(
                      2
                    ) + '%'}
                  </PriceTableCell>
                  <TableCell>{purchaseDate}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default CheckedProfitForm;
