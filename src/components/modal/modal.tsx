import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import MediaCard from '../card';
import MediaCardFlavor from '../card/cardsabores';
import CloseIcon from '@mui/icons-material/Close';
import kit10 from '../../assets/images/Kit_10.png';
import kit15 from '../../assets/images/Kit_15.png';
import kit20 from '../../assets/images/Kit_20.png';
import kit30 from '../../assets/images/Kit_30.png';
import './modal.css'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90%',
  bgcolor: 'background.paper',
  boxShadow: 24,
  display: 'flex',
  flexWrap: 'wrap',
  flexDirection: 'column',
  borderRadius: '10px'
};

export default function FlavorsModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <Box className="BoxKits">
        <div onClick={handleOpen}><MediaCard imagePath={kit10}/></div>
        <div onClick={handleOpen}><MediaCard imagePath={kit15}/></div>
        <div onClick={handleOpen}><MediaCard imagePath={kit20}/></div>
        <div onClick={handleOpen}><MediaCard imagePath={kit30}/></div>
      </Box>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>

          <Box sx={style}>
              <Box sx={{ display: 'flex', flexDirection: 'row-reverse', flex: 1 }}>
                <Button onClick={handleClose} className="CloseButton" variant="contained" disableElevation sx={{ borderRadius: '0 5px 0 5px'}}>
                  <CloseIcon />
                </Button>
              </Box>


              <Box className='flavorsPanel' >
                  <MediaCardFlavor imagePath="https://s2.glbimg.com/zCucirf9qhCtELEw9mHdvE4OZH8=/512x320/smart/e.glbimg.com/og/ed/f/original/2019/01/17/marmita.jpg" />
                  <MediaCardFlavor imagePath="https://s2.glbimg.com/zCucirf9qhCtELEw9mHdvE4OZH8=/512x320/smart/e.glbimg.com/og/ed/f/original/2019/01/17/marmita.jpg" />
                  <MediaCardFlavor imagePath="https://s2.glbimg.com/zCucirf9qhCtELEw9mHdvE4OZH8=/512x320/smart/e.glbimg.com/og/ed/f/original/2019/01/17/marmita.jpg" />
                  <MediaCardFlavor imagePath="https://s2.glbimg.com/zCucirf9qhCtELEw9mHdvE4OZH8=/512x320/smart/e.glbimg.com/og/ed/f/original/2019/01/17/marmita.jpg" />
                  <MediaCardFlavor imagePath="https://s2.glbimg.com/zCucirf9qhCtELEw9mHdvE4OZH8=/512x320/smart/e.glbimg.com/og/ed/f/original/2019/01/17/marmita.jpg" />
                  <MediaCardFlavor imagePath="https://s2.glbimg.com/zCucirf9qhCtELEw9mHdvE4OZH8=/512x320/smart/e.glbimg.com/og/ed/f/original/2019/01/17/marmita.jpg" />
                  <MediaCardFlavor imagePath="https://s2.glbimg.com/zCucirf9qhCtELEw9mHdvE4OZH8=/512x320/smart/e.glbimg.com/og/ed/f/original/2019/01/17/marmita.jpg" />
                  <MediaCardFlavor imagePath="https://s2.glbimg.com/zCucirf9qhCtELEw9mHdvE4OZH8=/512x320/smart/e.glbimg.com/og/ed/f/original/2019/01/17/marmita.jpg" />
                  <MediaCardFlavor imagePath="https://s2.glbimg.com/zCucirf9qhCtELEw9mHdvE4OZH8=/512x320/smart/e.glbimg.com/og/ed/f/original/2019/01/17/marmita.jpg" />
                  <MediaCardFlavor imagePath="https://s2.glbimg.com/zCucirf9qhCtELEw9mHdvE4OZH8=/512x320/smart/e.glbimg.com/og/ed/f/original/2019/01/17/marmita.jpg" />
                  <MediaCardFlavor imagePath="https://s2.glbimg.com/zCucirf9qhCtELEw9mHdvE4OZH8=/512x320/smart/e.glbimg.com/og/ed/f/original/2019/01/17/marmita.jpg" />
                  <MediaCardFlavor imagePath="https://s2.glbimg.com/zCucirf9qhCtELEw9mHdvE4OZH8=/512x320/smart/e.glbimg.com/og/ed/f/original/2019/01/17/marmita.jpg" />
                  <MediaCardFlavor imagePath="https://s2.glbimg.com/zCucirf9qhCtELEw9mHdvE4OZH8=/512x320/smart/e.glbimg.com/og/ed/f/original/2019/01/17/marmita.jpg" />
                  <MediaCardFlavor imagePath="https://s2.glbimg.com/zCucirf9qhCtELEw9mHdvE4OZH8=/512x320/smart/e.glbimg.com/og/ed/f/original/2019/01/17/marmita.jpg" />
                  <MediaCardFlavor imagePath="https://s2.glbimg.com/zCucirf9qhCtELEw9mHdvE4OZH8=/512x320/smart/e.glbimg.com/og/ed/f/original/2019/01/17/marmita.jpg" />
                  <MediaCardFlavor imagePath="https://s2.glbimg.com/zCucirf9qhCtELEw9mHdvE4OZH8=/512x320/smart/e.glbimg.com/og/ed/f/original/2019/01/17/marmita.jpg" />
                  <MediaCardFlavor imagePath="https://s2.glbimg.com/zCucirf9qhCtELEw9mHdvE4OZH8=/512x320/smart/e.glbimg.com/og/ed/f/original/2019/01/17/marmita.jpg" />
                  <MediaCardFlavor imagePath="https://s2.glbimg.com/zCucirf9qhCtELEw9mHdvE4OZH8=/512x320/smart/e.glbimg.com/og/ed/f/original/2019/01/17/marmita.jpg" />
                  <MediaCardFlavor imagePath="https://s2.glbimg.com/zCucirf9qhCtELEw9mHdvE4OZH8=/512x320/smart/e.glbimg.com/og/ed/f/original/2019/01/17/marmita.jpg" />
                  <MediaCardFlavor imagePath="https://s2.glbimg.com/zCucirf9qhCtELEw9mHdvE4OZH8=/512x320/smart/e.glbimg.com/og/ed/f/original/2019/01/17/marmita.jpg" />
                  <MediaCardFlavor imagePath="https://s2.glbimg.com/zCucirf9qhCtELEw9mHdvE4OZH8=/512x320/smart/e.glbimg.com/og/ed/f/original/2019/01/17/marmita.jpg" />
                  <MediaCardFlavor imagePath="https://s2.glbimg.com/zCucirf9qhCtELEw9mHdvE4OZH8=/512x320/smart/e.glbimg.com/og/ed/f/original/2019/01/17/marmita.jpg" />
                  <MediaCardFlavor imagePath="https://s2.glbimg.com/zCucirf9qhCtELEw9mHdvE4OZH8=/512x320/smart/e.glbimg.com/og/ed/f/original/2019/01/17/marmita.jpg" />
                  <MediaCardFlavor imagePath="https://s2.glbimg.com/zCucirf9qhCtELEw9mHdvE4OZH8=/512x320/smart/e.glbimg.com/og/ed/f/original/2019/01/17/marmita.jpg" />
                  <MediaCardFlavor imagePath="https://s2.glbimg.com/zCucirf9qhCtELEw9mHdvE4OZH8=/512x320/smart/e.glbimg.com/og/ed/f/original/2019/01/17/marmita.jpg" />
                  <MediaCardFlavor imagePath="https://s2.glbimg.com/zCucirf9qhCtELEw9mHdvE4OZH8=/512x320/smart/e.glbimg.com/og/ed/f/original/2019/01/17/marmita.jpg" />
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'row-reverse'}}>
                <Button sx={{ padding: '10px 30px'}}>Salvar</Button>
              </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
