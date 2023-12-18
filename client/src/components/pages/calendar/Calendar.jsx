import React, { useState } from 'react';

//pages
import Section from '@/components/layout/Section/Section';
import CalendarHeader from '../../general/calendar/CalendarHeader';
import CalendarSidebar from '../../general/calendar/CalendarSidebar';
import Month from '../../general/calendar/Month';

//utils
import { getMonth } from '@/components/general/calendar/utils';
const Calendar = () => {
  const [currentMonth, setcurrentMonth] = useState(getMonth());
  return (
    <Section title='Calendar'>
      <div className='h-screen flex flex-columns'>
        <CalendarHeader />
        <div className='flex flex-1'>
          <CalendarSidebar />
          <Month month={currentMonth}/>
        </div>
      </div>
    </Section>
  );
};

export default Calendar;
