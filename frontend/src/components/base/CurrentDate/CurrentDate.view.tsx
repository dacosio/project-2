import React, { useState, useEffect } from 'react';
import { CurrentDateProps } from './CurrentDate.props';
import { Container } from './CurrentDate.style';
import { getCurrentDate } from 'utils/Theme';

const CurrentDate = (props: CurrentDateProps): JSX.Element => {
  const [currentDate, setCurrentDate] = useState('');
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  useEffect(() => {
    const updateDate = () => {
      const dateString = getCurrentDate();
      const dateObject = new Date(dateString)

      const dayOfWeek = daysOfWeek[dateObject.getDay()];
      const month = months[dateObject.getMonth()];
      const day = dateObject.getDate();
      const year = dateObject.getFullYear();

      const formattedDate = `${dayOfWeek}, ${month} ${day}, ${year}`;
      setCurrentDate(formattedDate);
    };

    updateDate();

    const intervalId = setInterval(updateDate, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>{currentDate}</>
  );
};

export default CurrentDate;
