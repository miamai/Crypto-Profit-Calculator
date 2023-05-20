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
  Tooltip,
  Box,
} from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import HelpIcon from '@mui/icons-material/Help';

import { PriceTableCell, CenterTableCell } from '../../UI/TableCellStyle';
import FormContext from '../../store/form-context';
import Chart from './Chart';

const FavoritesForm = ({ coindata }) => {
  const { removeItemHandler, searchList: searchs } = useContext(FormContext);
  const descriptText = `點擊圖表放大`;
  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell># 自選</TableCell>
              <TableCell>名稱</TableCell>
              <TableCell>價格 USDT</TableCell>
              <TableCell>24hr %</TableCell>
              <CenterTableCell>
                24hr 變動
                <Tooltip title={descriptText} placement='top-start'>
                  <IconButton>
                    <HelpIcon
                      sx={{ color: 'primary.main', fontSize: '14px' }}
                    />
                  </IconButton>
                </Tooltip>
              </CenterTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {searchs.map((search, i) => {
              const { lastPrice, priceChangePercent } =
                coindata?.filter(
                  (data) => data.symbol === search.favCoin + 'USDT'
                )[0] || {};

              return (
                <TableRow
                  key={i}
                  sx={{
                    '&.MuiTableRow-root:hover': {
                      backgroundColor: 'rgba(245, 176, 65,0.08)',
                    },
                  }}
                >
                  <CenterTableCell>
                    <IconButton
                      sx={{ padding: 0 }}
                      onClick={() => {
                        removeItemHandler(search.id);
                      }}
                    >
                      <StarIcon
                        sx={{
                          color: 'primary.main',
                          '&:hover': { color: 'white' },
                        }}
                      />
                    </IconButton>
                    {i}
                  </CenterTableCell>
                  <CenterTableCell>
                    <img
                      src={`/cryptoicons/${search.favCoin.toLowerCase()}.svg`}
                      width='24'
                      alt='error'
                    />
                    {search.favCoin}
                  </CenterTableCell>
                  <TableCell>{(+lastPrice).toFixed(2)}</TableCell>
                  <PriceTableCell>
                    {(+priceChangePercent).toFixed(2)}
                  </PriceTableCell>
                  <TableCell>
                    <Chart chart_coin={search.favCoin} />
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

export default FavoritesForm;
