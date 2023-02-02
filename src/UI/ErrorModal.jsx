import { useState } from 'react';
import { Box, Typography, Modal } from '@mui/material';
import AnnouncementIcon from '@mui/icons-material/Announcement';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#ffffff',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  textAlign: 'center',
};

const ErrorModal = () => {
  const [open, setOpen] = useState(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <Box sx={{ color: 'secondary.main' }}>
            <AnnouncementIcon fontSize='large' />
            <Typography id='modal-modal-title' variant='h5' component='h2'>
              錯誤發生
            </Typography>
          </Box>
          <Typography id='modal-modal-description' sx={{ mt: 2 }}>
            請選擇一個貨幣，或是所選的幣無法取得資料
            <br />
            請再試一次!
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default ErrorModal;
