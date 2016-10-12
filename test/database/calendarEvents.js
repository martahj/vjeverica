import test from 'ava';
import CalendarEvents from '../../database/models/calendarEvents';
console.log('CalendarEvents', CalendarEvents);

const firstEvent = {title: 'One', date: 'now'};

test.before(async t => {
  console.log('CAl events', CalendarEvents);
  await CalendarEvents.create(firstEvent);
})

test('it gets everything in the database', t => {
  const allEvents = Promise.resolve()
  t.deepEqual(await CalendarEvents.getAll(), firstEvent);
})
