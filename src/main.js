'use strict';

import {createSiteMenuTemplate} from './view/site-menu.js';
import {createTripInfoTemplate} from './view/trip-info.js';
import {createTripCostTemplate} from './view/trip-cost.js';
import {createFilterTemplate} from './view/filter.js';
import {createEventsSortTemplate} from './view/events-sort.js';
import {createEventsListTemplate} from './view/events-list.js';
import {createEventTemplate} from './view/event.js';
import {createEditEventFormTemplate} from './view/edit-event.js';
import {generateEvent} from './mock/event.js';

const EVENT_COUNT = 3;
const events = new Array(EVENT_COUNT).fill().map(generateEvent);

const render = (container, template, place='beforeEnd') => {
  container.insertAdjacentHTML(place, template);
};

const siteMainHeaderElement = document.querySelector('.trip-main');
const siteNavigationElement = siteMainHeaderElement.querySelector('.trip-controls__navigation');
const filterElement = siteMainHeaderElement.querySelector('.trip-controls__filters');
const tripEventsElement = document.querySelector('.trip-events');

render(siteMainHeaderElement, createTripInfoTemplate(), 'afterBegin');
const tripInfoElement = siteMainHeaderElement.querySelector('.trip-info');
render(tripInfoElement, createTripCostTemplate());

render(siteNavigationElement, createSiteMenuTemplate());
render(filterElement, createFilterTemplate());

render(tripEventsElement, createEventsSortTemplate());
render(tripEventsElement, createEventsListTemplate());
const eventsListElement = tripEventsElement.querySelector('.trip-events__list');
render(eventsListElement, createEditEventFormTemplate());

for (const event of events) {
  render(eventsListElement, createEventTemplate(event));
}

