"use strict"
import db from '../db';
import makeModel from '../helpers/makeModel';

const COLLECTION_NAME = 'calendarEvents';

const CalendarEvents = makeModel(COLLECTION_NAME);

CalendarEvents.create = (title, date) => {
  const newEvent = {
    title,
    date
  };
  return COLLECTION_NAME.insert(newEvent);
}

export default CalendarEvents;
