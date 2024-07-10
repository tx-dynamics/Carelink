import React from 'react';
import {Text} from 'react-native';
import {formatDistanceToNow, format} from 'date-fns';

const TimeAgoComponent = ({date}) => {
  const currentDate = new Date();
  const diffInDays = (currentDate - new Date(date)) / (1000 * 60 * 60 * 24);

  let timeAgo;
  if (diffInDays < 1) {
    timeAgo = formatDistanceToNow(new Date(date), {
      includeSeconds: false,
      addSuffix: true,
    });
  } else if (diffInDays < 30) {
    timeAgo = format(new Date(date), 'dd/MM/yyyy');
  } else {
    timeAgo = format(new Date(date), 'MM/yyyy');
  }

  return <Text>{timeAgo}</Text>;
};

export default TimeAgoComponent;
