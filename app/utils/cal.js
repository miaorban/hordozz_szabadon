import { today } from '@internationalized/date';

const eventTypes = {
  mini: 2430834,
  maxi: 2433041,
  hordozovalaszto: 2430832
}

const locations = {
  online: {
    type: "integration",
    integration: "google-meet"
  },
  offline: {
    type: "address"
  }
}

export async function createBooking ({
  start,
  name,
  location,
  babyAge,
  babyWeight,
  eventType,
  email,
  description
}) {
  const data = {
    start: new Date(start).toISOString(),
    "attendee": {
      name,
      email,
      "timeZone": "Europe/Budapest",
      "language": "hu"
    },
    eventTypeId: eventTypes[eventType],
    location: locations[location],
    "metadata": {
      babyAge,
      babyWeight
    },
    "bookingFieldsResponses": {
      "notes": description,
      name
    }
  }
  const options = {
    method: 'POST',
    headers: {
      'cal-api-version': '2024-08-13', 
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.CAL_API_KEY}`
    },
    body: JSON.stringify(data)
  };
  
  const res = await fetch('https://api.cal.com/v2/bookings', options)
  if (!res.ok) {
    throw new Error(res);
  }
}

export async function getSlots (eventType) {
  const params = {
    start: today('Europe/Budapest').toString().replaceAll('-', ''),
    end: today('Europe/Budapest').add({ months: 2 }).toString().replaceAll('-', ''),
    eventTypeId: eventTypes[eventType]
  }
  
  const options = {method: 'GET',
  headers: {
      'cal-api-version': '2024-09-04', 
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.CAL_API_KEY}`
    },
    params
  };

  try {
    const res = await fetch(`https://api.cal.com/v2/slots?start=${params.start}&end=${params.end}&eventTypeId=${params.eventTypeId}`, options)
    
    if (!res.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    return (await res.json()).data;
  } catch (e) {
    console.log('e', e);
  }
}