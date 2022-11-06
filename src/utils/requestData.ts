/* 
  --- IF YOURE GOING TO ADD STUFF FOLLOW THE PATTERN
  --- comment what the ID refrences in the above line
*/

export const requestData = {
  songs: {
    happy: [
      //  Mr Blue Sky - Electric Light Orchestra
      '2RlgNHKcydI9sayD2Df2xp',
      // Happy - Pharrel
      '60nZcImufyMA1MKQY3dcCH',
    ],
    sad: [
      // Marins Room - Drake
      '047fCsbO4NdmwCBn8pcUXl',
      // Drivers License - Olivia Rodrigo
      '5wANPM4fQCJwkGd4rN57mH',
      // Because of You - Kelly Clarkson
    ],
    angry: [
      // Last Resort - Papa Roach
      '5W8YXBz9MTIDyrpYaCg2Ky',
      // In the End - Linkin Park
      '60a0Rd6pjrkxjPbaKzXjfq',
    ],
  },

  artist: {
    happy: [
      // Electric light orchestra
      '7jefIIksOi1EazgRTfW2Pk',
      // Pharrel
      '2RdwBSPQiwcmiDo9kixcl8',
    ],
    sad: [
      // drake
      '3TVXtAsR1Inumwj472S9r4',
      // olivia rodrigo
      '1McMsnEElThX1knmY4oliG',
      // kelly clarkson
    ],
    angry: [
      // Papa Roach
      '4RddZ3iHvSpGV4dvATac9X',
    ],
  },

  genres: {
    happy: 'pop',
    sad: 'pop',
    angry: 'metal',
  },
};

export type RequestData = typeof requestData;
