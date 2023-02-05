import { useNavigate, useLocation } from 'react-router';
import { useState, useEffect, useContext } from 'react';

import { Box, Tabs, Tab, Typography } from '@mui/material';
import { navtabItems } from '../../UI/consts/navtabItems';
import MyProfit from '../CaculatorForms/MyProfit';
import FormContext from '../../store/form-context';
import { onStore } from '../Login/auth';

function TabPanel(props) {
  const { children, value, id, ...other } = props;

  return (
    <div role='tabpanel' {...other}>
      <Box sx={{ p: 3 }}>
        <Typography component={'div'}>{children}</Typography>
      </Box>
    </div>
  );
}

const HomeTabs = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [value, setValue] = useState('/account');
  const [toComponent, setToComponent] = useState(<MyProfit />);
  const { inputList, outputList, searchList } = useContext(FormContext);

  useEffect(() => {
    // Find the tab item that corresponds to the current location
    const tabItem = navtabItems.find(
      (item) => item.value === location.pathname
    );
    if (tabItem) {
      setValue(tabItem.value);
      setToComponent(tabItem.to);
    }
    // store data
    onStore(inputList, outputList, searchList);
    console.log('成功儲存');
  }, [location, inputList, outputList, searchList]);

  return (
    <>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value}>
          {navtabItems.map((item) => (
            <Tab
              key={item.id}
              icon={item.icon}
              label={item.label}
              value={item.value}
              onClick={() => {
                navigate(item.route);
                setValue(item.value);
                setToComponent(item.to);
              }}
              iconPosition='start'
            />
          ))}
        </Tabs>
      </Box>
      <TabPanel value={value}>{toComponent}</TabPanel>
    </>
  );
};

export default HomeTabs;
