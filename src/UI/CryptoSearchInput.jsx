import * as React from 'react';
import { Box, TextField, Autocomplete } from '@mui/material';

const CryptoSearchInput = (props) => {
  return (
    <Autocomplete
      // id='crypto-select'
      options={cryptoList}
      sx={{ width: ['100%', '300px'] }}
      onChange={(event, newValue) => {
        event.defaultMuiPrevented = true;
        props.setEnteredCoin(newValue.symbol);
      }}
      getOptionLabel={(option) => option.symbol}
      renderOption={(props, option) => (
        <Box
          component='li'
          sx={{ '& > img': { mr: 2, flexShrink: 0 } }}
          {...props}
        >
          <img
            src={`/cryptoicons/${option.symbol.toLowerCase()}.svg`}
            width='24'
            alt='error'
          />
          {option.symbol} {option.name}
        </Box>
      )}
      renderInput={(params) => (
        <TextField {...params} variant='filled' label='貨幣' />
      )}
    />
  );
};

export const cryptoList = [
  { symbol: 'AAVE', name: 'AAVE', color: '#2ebac6' },
  { symbol: 'ADA', name: 'Cardano', color: '#0d1e30' },
  { symbol: 'ADX', name: 'AdEx', color: '#1b75bc' },
  { symbol: 'AION', name: 'Aion', color: '#00bfec' },
  { symbol: 'ALGO', name: 'Algorand', color: '#000000' },
  { symbol: 'AMP', name: 'HyperSpace (Synereo)', color: '#2daee4' },
  { symbol: 'ANKR', name: 'Ankr Network', color: '#2e6bf6' },
  { symbol: 'ANT', name: 'Aragon', color: '#2cd3e1' },
  { symbol: 'APE', name: 'ApeCoin', color: '#0054f9' },
  { symbol: 'ARDR', name: 'Ardor', color: '#3c87c7' },
  { symbol: 'ATM', name: 'ATMChain', color: '#346fce' },
  { symbol: 'ATOM', name: 'Cosmos', color: '#2e3148' },
  { symbol: 'AUTO', name: 'Cube', color: '#fab431' },
  { symbol: 'AVAX', name: 'Avalanche', color: '#e84142' },
  { symbol: 'BAL', name: 'Balancer', color: '#1e1e1e' },
  { symbol: 'BAND', name: 'Band Protocol', color: '#516aff' },
  { symbol: 'BAT', name: 'Basic Attention Token', color: '#ff5000' },
  { symbol: 'BCH', name: 'Bitcoin Cash', color: '#8dc351' },
  { symbol: 'BEAM', name: 'Beam', color: '#0b76ff' },
  { symbol: 'BLZ', name: 'Blazecoin', color: '#18578c' },
  { symbol: 'BNB', name: 'Binance Coin', color: '#f3ba2f' },
  { symbol: 'BNT', name: 'Bancor Network Token', color: '#000d2b' },
  { symbol: 'BTC', name: 'Bitcoin', color: '#f7931a' },
  { symbol: 'BTS', name: 'BitShares', color: '#35baeb' },
  { symbol: 'BTT', name: 'BitTorrent', color: '#000000' },
  { symbol: 'CHZ', name: 'Chiliz', color: '#cd0124' },
  { symbol: 'COMP', name: 'Compound', color: '#00d395' },
  { symbol: 'CRV', name: 'Curve DAO Token', color: '#40649f' },
  { symbol: 'CTXC', name: 'Cortex', color: '#000000' },
  { symbol: 'CVC', name: 'Civic', color: '#3ab03e' },
  { symbol: 'DAI', name: 'Dai', color: '#f4b731' },
  { symbol: 'DASH', name: 'Dash', color: '#008ce7' },
  { symbol: 'DATA', name: 'Streamr DATAcoin', color: '#e9570f' },
  { symbol: 'DCR', name: 'Decred', color: '#2ed6a1' },
  { symbol: 'DENT', name: 'Dent', color: '#666666' },
  { symbol: 'DGB', name: 'DigiByte', color: '#006ad2' },
  { symbol: 'DOCK', name: 'Dock', color: '#786dbc' },
  { symbol: 'DOGE', name: 'Dogecoin', color: '#c3a634' },
  { symbol: 'DOT', name: 'Polkadot', color: '#e6007a' },
  { symbol: 'ELF', name: 'aelf', color: '#2b5ebb' },
  { symbol: 'ETC', name: 'Ethereum Classic', color: '#328332' },
  { symbol: 'ETH', name: 'Ethereum', color: '#627eea' },
  { symbol: 'EUR', name: 'EUR', color: '#0f8ff8' },
  { symbol: 'FLUX', name: 'Flux', color: '#2b61d1' },
  { symbol: 'FUN', name: 'FunFair', color: '#ed1968' },
  { symbol: 'GBP', name: 'GBP', color: '#bc3fe0' },
  { symbol: 'GMT', name: 'STEPN', color: '#dbb358' },
  { symbol: 'GRT', name: 'The Graph', color: '#5942cc' },
  { symbol: 'GTO', name: 'Gifto', color: '#7f27ff' },
  { symbol: 'HOT', name: 'Holo', color: '#8834ff' },
  { symbol: 'ICP', name: 'Internet Computer', color: '#292a2e' },
  { symbol: 'ICX', name: 'ICON', color: '#1fc5c9' },
  { symbol: 'IOST', name: 'IOStoken', color: '#1c1c1c' },
  { symbol: 'IOTX', name: 'IoTeX', color: '#00d4d5' },
  { symbol: 'KMD', name: 'Komodo', color: '#2b6680' },
  { symbol: 'KNC', name: 'Kyber Network', color: '#31cb9e' },
  { symbol: 'KSM', name: 'Kusama', color: '#000000' },
  { symbol: 'LEND', name: 'ETHLend', color: '#0fa9c9' },
  { symbol: 'LINK', name: 'ChainLink', color: '#2a5ada' },
  { symbol: 'LPT', name: 'Livepeer Token', color: '#000000' },
  { symbol: 'LRC', name: 'Loopring', color: '#2ab6f6' },
  { symbol: 'LSK', name: 'Lisk', color: '#0d4ea0' },
  { symbol: 'LTC', name: 'Litecoin', color: '#bfbbbb' },
  { symbol: 'MANA', name: 'Decentraland', color: '#ff2d55' },
  { symbol: 'MATIC', name: 'Polygon', color: '#6f41d8' },
  { symbol: 'MCO', name: 'Crypto.com', color: '#103f68' },
  { symbol: 'MFT', name: 'Mainframe', color: '#da1157' },
  { symbol: 'MITH', name: 'Mithril', color: '#00316d' },
  { symbol: 'MKR', name: 'Maker', color: '#1aab9b' },
  { symbol: 'MLN', name: 'Melon', color: '#0b1529' },
  { symbol: 'MTL', name: 'Metal', color: '#1e1f25' },
  { symbol: 'NANO', name: 'Nano', color: '#4a90e2' },
  { symbol: 'NEBL', name: 'Neblio', color: '#50479e' },
  { symbol: 'NEO', name: 'NEO', color: '#58bf00' },
  { symbol: 'NEXO', name: 'Nexo', color: '#1a4199' },
  { symbol: 'NKN', name: 'NKN', color: '#23336f' },
  { symbol: 'NMR', name: 'Numeraire', color: '#050708' },
  { symbol: 'NPXS', name: 'Pundi X', color: '#f5d100' },
  { symbol: 'NULS', name: 'Nuls', color: '#82bd39' },
  { symbol: 'OMG', name: 'OMG Network', color: '#101010' },
  { symbol: 'ONE', name: 'Harmony', color: '#00aee9' },
  { symbol: 'ONG', name: 'SoMee.Social', color: '#000000' },
  { symbol: 'ONT', name: 'Ontology', color: '#32a4be' },
  { symbol: 'OXT', name: 'Orchid', color: '#5f45ba' },
  { symbol: 'PAX', name: 'PAX Token', color: '#398260' },
  { symbol: 'PAXG', name: 'PAX Gold', color: '#e4ce4d' },
  { symbol: 'POLY', name: 'Polymath Network', color: '#4c5a95' },
  { symbol: 'POWR', name: 'Power Ledger', color: '#05bca9' },
  { symbol: 'QNT', name: 'Quant', color: '#000000' },
  { symbol: 'QTUM', name: 'Qtum', color: '#2e9ad0' },
  { symbol: 'RAY', name: 'Raydium', color: '#6c45dc' },
  { symbol: 'REN', name: 'Ren', color: '#080817' },
  { symbol: 'REP', name: 'Augur', color: '#602a52' },
  { symbol: 'REQ', name: 'Request', color: '#00e6a0' },
  { symbol: 'RLC', name: 'iExec RLC', color: '#ffd800' },
  { symbol: 'RVN', name: 'Ravencoin', color: '#384182' },
  { symbol: 'SAND', name: 'The Sandbox', color: '#04adef' },
  { symbol: 'SC', name: 'Siacoin', color: '#20ee82' },
  { symbol: 'SKL', name: 'SKALE Network', color: '#000000' },
  { symbol: 'SNX', name: 'Synthetix', color: '#5fcdf9' },
  { symbol: 'SOL', name: 'Solana', color: '#66f9a1' },
  { symbol: 'STEEM', name: 'Steem', color: '#4ba2f2' },
  { symbol: 'STORJ', name: 'Storj', color: '#2683ff' },
  { symbol: 'STORM', name: 'Storm', color: '#080d98' },
  { symbol: 'STRAT', name: 'Stratis', color: '#1387c9' },
  { symbol: 'STX', name: 'Stacks', color: '#5546ff' },
  { symbol: 'SUSHI', name: 'SushiSwap', color: '#d65892' },
  { symbol: 'SYS', name: 'Syscoin', color: '#0082c6' },
  { symbol: 'THETA', name: 'Theta Network', color: '#2ab8e6' },
  { symbol: 'TOMO', name: 'TomoChain', color: '#1a1f36' },
  { symbol: 'TRX', name: 'TRON', color: '#ef0027' },
  { symbol: 'TUSD', name: 'TrueUSD', color: '#2b2e7f' },
  { symbol: 'UMA', name: 'UMA', color: '#ff4a4a' },
  { symbol: 'UNI', name: 'Uniswap', color: '#ff007a' },
  { symbol: 'USDC', name: 'USD Coin', color: '#3e73c4' },
  { symbol: 'UTK', name: 'UTRUST', color: '#30367a' },
  { symbol: 'VET', name: 'VeChain', color: '#15bdff' },
  { symbol: 'VTHO', name: 'VeThor Token', color: '#2a5284' },
  { symbol: 'WAN', name: 'Wanchain', color: '#136aad' },
  { symbol: 'WAVES', name: 'Waves', color: '#0155ff' },
  { symbol: 'WTC', name: 'Waltonchain', color: '#8200ff' },
  { symbol: 'XEM', name: 'NEM', color: '#67b2e8' },
  { symbol: 'XLM', name: 'Stellar', color: '#000000' },
  { symbol: 'XMR', name: 'Monero', color: '#ff6600' },
  { symbol: 'XRP', name: 'XRP', color: '#23292f' },
  { symbol: 'XTZ', name: 'Tezos', color: '#a6e000' },
  { symbol: 'XVG', name: 'Verge', color: '#00cbff' },
  { symbol: 'YFI', name: 'yearn.finance', color: '#006ae3' },
  { symbol: 'ZEC', name: 'Zcash', color: '#ecb244' },
  { symbol: 'ZEN', name: 'Horizen', color: '#00eaab' },
  { symbol: 'ZIL', name: 'Zilliqa', color: '#49c1bf' },
  { symbol: 'ZRX', name: '0x', color: '#302c2c' },
];

export default CryptoSearchInput;
