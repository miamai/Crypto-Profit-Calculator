import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { useState } from 'react';
import { useFetchChart } from '../../hook/fetchCrypto';

import { Modal, Box } from '@mui/material';
import './styles.css';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: { xs: 275, sm: 375 },
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: { xs: 2, sm: 4 },
  textAlign: 'center',
};

const Chart = ({ chart_coin }) => {
  const { historialData } = useFetchChart(chart_coin);
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  const options = {
    chart: {
      styledMode: true,
      spacingLeft: 0,
      spacingBottom: 0,
      className: 'pointerChart',
      events: {
        click: function (event) {
          return setOpen(true);
        },
      },
    },
    title: { text: '' },
    time: {
      timezoneOffset: -8 * 60,
    },
    xAxis: {
      title: {
        text: '台灣時間',
      },
      type: 'datetime',
    },
    yAxis: {
      title: {
        text: 'USDT',
      },
      labels: {
        formatter: function () {
          return (
            '$' + (this.value / 1000 < 1 ? this.value : this.value / 1000 + 'k')
          );
        },
      },
    },
    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'top',
    },
    accessibility: {
      enabled: false,
    },
    credits: {
      enabled: false,
    },
    plotOptions: {
      spline: {
        marker: {
          enabled: false,
        },
      },
    },
    series: [
      {
        name: 'Price',
        type: 'spline',
        data: historialData,
        tooltip: {
          valueDecimals: 2,
        },
        label: {
          connectorAllowed: false,
        },
      },
    ],
    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 600,
          },
          chartOptions: {
            legend: {
              enabled: false,
            },
            yAxis: {
              labels: {
                align: 'left',
                x: 0,
                y: -2,
              },
            },
          },
        },
      ],
    },
  };

  return (
    <>
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
        containerProps={{ className: 'chartContainer' }}
      />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <HighchartsReact
            highcharts={Highcharts}
            options={options}
            containerProps={{ className: 'chartModalContainer' }}
          />
        </Box>
      </Modal>
    </>
  );
};

export default Chart;
