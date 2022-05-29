import React from 'react';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import pagesMenu from '../../pages';
const Index = () => {
  return (
    <div>
      <Box
        display={'flex'}
        flexDirection="column"
        justifyContent={'center'}
        height={'100%'}>
        <ButtonGroup variant="text" color="primary" aria-label="">
          {pagesMenu.map((item, key) => {
            return (
              <Button key={key} color="white" link={item.link}>
                <Typography fontSize={'15px'} variant={'body1'} color="white">
                  {item.title}
                </Typography>
              </Button>
            );
          })}
        </ButtonGroup>
      </Box>
    </div>
  );
};

export default Index;
