"use strict"
import db from '../db';
import makeModel from '../helpers/makeModel';

const COLLECTION_NAME = 'calendarEvents';

const CalendarEvents = makeModel(COLLECTION_NAME);

export default CalendarEvents;
