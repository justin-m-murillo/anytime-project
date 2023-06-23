import ImageGenerator from './sampleImgGenerator';

const sampleBusinessData = {
  happyhour: [
    {
      id: 1,
      deal: 'Happy Hour Deal1',
      times: [
        {
          hours: '3pm - 6pm',
          days: 'Mon - Thu',
        },
        {
          hours: '12pm - 5pm',
          days: 'Fri - Sun',
        },
      ],
      items: [
        {
          img: ImageGenerator(720),
          description: 'morbi tincidunt augue interdum velit euismod in pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat in ante metus dictum at tempor commodo ullamcorper a lacus vestibulum sed',
        },
      ],
    },
    {
      id: 2,
      deal: 'Happy Hour Deal1',
      times: [
        {
          hours: '4pm - 7pm',
          days: 'Tue - Thu',
        },
        {
          hours: '11am - 3pm',
          days: 'Sat - Sun',
        },
      ],
      items: [
        {
          img: ImageGenerator(720),
          description: 'morbi tincidunt augue interdum velit euismod in pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat in ante metus dictum at tempor commodo ullamcorper a lacus vestibulum sed',
        },
        {
          img: ImageGenerator(720),
          description: 'faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc sed velit dignissim sodales ut eu sem integer vitae justo eget magna fermentum iaculis',
        },
      ],
    },
  ],
  special: [
    {
      id: 1,
      img: ImageGenerator(720),
      deal: 'Special Deal1',
      hours: 'all-day',
      days: 'Mon - Fir'
    },
  ],
  businessName: 'BusinessName',
  address: '3156 Santa Lucia Dr, Santa Clara, CA 95051',
  distance: 2.5,
  phoneNumber: '(123) 456-7890',
  email: 'business@gmail.com',
};

export default sampleBusinessData;