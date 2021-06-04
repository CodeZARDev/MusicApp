import * as React from 'react';
import { getStatusBarHeight } from '../../utils/index';

interface StatusBarProps {
  color?: string
}

const StatusBar = ({
  color = 'black'
}: StatusBarProps) => {
  return (
    <stackLayout background='transparent' backgroundColor={color} row={0} height={getStatusBarHeight()}/>
  )
}

export default StatusBar;
