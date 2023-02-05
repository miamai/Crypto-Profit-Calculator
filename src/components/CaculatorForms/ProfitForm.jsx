import { useContext, useEffect, useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Box,
} from '@mui/material';

import { PriceTableCell } from '../../UI/TableCellStyle';
import ErrorModal from '../../UI/ErrorModal';
import FormContext from '../../store/form-context';
import { useFetchData } from '../../hook/fetchCrypto';

const ProfitForm = () => {
  const { stopItemHandler, inputList: inputs } = useContext(FormContext);
  const { cryptoData, usdtTwd, fetchCryptoError } = useFetchData();

  const purchaseDate = new Date().toISOString().split('T')[0];

  return (
    <div>
      {fetchCryptoError && <ErrorModal />}

      <h2>試算表</h2>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell>持有幣</TableCell>
              <TableCell>及時價格 USDT</TableCell>
              <TableCell>成本價格 USDT</TableCell>
              <TableCell>成本價格 TWD</TableCell>
              <TableCell>成本數量</TableCell>
              <TableCell>目前損益 TWD</TableCell>
              <TableCell>目前損益 %</TableCell>
              <TableCell>購買日期</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {inputs.map((input) => {
              const curPrice = +cryptoData?.filter(
                (data) => data.symbol === input.coin + 'USDT'
              )[0].lastPrice;

              return (
                <TableRow
                  key={input.id}
                  sx={{
                    '&.MuiTableRow-root:hover': {
                      backgroundColor: 'rgba(245, 176, 65,0.08)',
                    },
                  }}
                >
                  <TableCell>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <img
                        src={`/cryptoicons/${input.coin.toLowerCase()}.svg`}
                        width='24'
                        alt='error'
                      />
                      {input.coin}
                    </Box>
                  </TableCell>
                  <TableCell>{curPrice.toFixed(2)}</TableCell>
                  <TableCell>{input.cost}</TableCell>
                  <TableCell>
                    {usdtTwd ? (usdtTwd * input.cost).toFixed(2) : '讀取中'}
                  </TableCell>
                  <TableCell>{input.quantity}</TableCell>
                  <PriceTableCell>
                    {usdtTwd
                      ? (
                          usdtTwd *
                          input.quantity *
                          (curPrice - input.cost)
                        ).toFixed(2)
                      : '讀取中'}
                  </PriceTableCell>
                  <PriceTableCell>
                    {((curPrice - input.cost) / input.cost).toFixed(2) + '%'}
                  </PriceTableCell>
                  <TableCell>{purchaseDate}</TableCell>
                  <TableCell>
                    <Button
                      onClick={() => {
                        stopItemHandler(input.id, curPrice, usdtTwd);
                      }}
                      variant='contained'
                    >
                      結算
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ProfitForm;
