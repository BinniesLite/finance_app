import React from 'react';
import PropTypes from 'prop-types';
import { AiOutlineArrowDown } from 'react-icons/ai';
import { AiOutlineArrowUp } from 'react-icons/ai';
import {
  Avatar,
  Card,
  CardContent,
  Stack,
  SvgIcon,
  Typography,
  useMediaQuery,
} from '@mui/material';

const DBCard = ({ name, difference, positive = false, sx, value, icon }) => {
  const isMediumScreen = useMediaQuery((theme) => theme.breakpoints.down('md'));
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  const getBackgroundColor = () => {
    if (name === 'Total Income') {
      return 'green';
    } else if (name === 'Total Expense') {
      return 'red';
    } else if (name === 'Total Balance') {
      return 'blue';
    }
  };
  return (
    <Card sx={sx}>
      <CardContent>
        <Stack
          alignItems='flex-start'
          direction='row'
          justifyContent='space-between'
          spacing={3}
        >
          <Stack spacing={1}>
            <Typography color='text.secondary' variant='overline'>
              {name}
            </Typography>
            <Typography variant='h4'>${value}</Typography>
          </Stack>
          {isSmallScreen ? null : (
            <Avatar
              sx={{
                backgroundColor: getBackgroundColor(),
                height: 56,
                width: 56,
              }}
            >
              <SvgIcon>{icon}</SvgIcon>
            </Avatar>
          )}
        </Stack>
        {difference && (
          <Stack alignItems='center' direction='row' spacing={2} sx={{ mt: 2 }}>
            <Stack alignItems='center' direction='row' spacing={0.5}>
              <SvgIcon color={positive ? 'success' : 'error'} fontSize='small'>
                {positive ? <AiOutlineArrowUp /> : <AiOutlineArrowDown />}
              </SvgIcon>
              <Typography
                color={positive ? 'success.main' : 'error.main'}
                variant='body2'
              >
                {difference}%
              </Typography>
            </Stack>
            <Typography color='text.secondary' variant='caption'>
              Since last week
            </Typography>
          </Stack>
        )}
      </CardContent>
    </Card>
  );
};

DBCard.prototypes = {
  name: PropTypes.string.isRequired,
  difference: PropTypes.number,
  positive: PropTypes.bool,
  sx: PropTypes.object,
  value: PropTypes.string.isRequired,
  icon: PropTypes.elementType.isRequired,
};

export default DBCard;
