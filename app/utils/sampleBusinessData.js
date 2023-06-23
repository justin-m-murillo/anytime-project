import ImageGenerator from './sampleImgGenerator';

const sampleBusinessData = {
  businessName: 'BusinessName',
  address: '3156 Santa Lucia Dr, Santa Clara, CA 95051',
  distance: 2.5,
  phoneNumber: '(123) 456-7890',
  website: 'www.this-biz.com',
  email: 'business@gmail.com',
  happyhour: [
    {
      id: 11,
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
          description: 'Morbi tincidunt augue interdum velit euismod in pellentesque massa.\n\nId aliquet risus feugiat in ante metus dictum at tempor.',
        },
      ],
    },
    {
      id: 12,
      deal: 'Happy Hour Deal2',
      times: [
        {
          hours: '11am - 3pm',
          days: 'Sat - Sun',
        },
      ],
      items: [
        {
          img: ImageGenerator(720),
          description: '- morbi tincidunt augue interdum velit\n' + 
            '- euismod in pellentesque massa placerat\n' + 
            '- duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat in ante metus\n' + 
            '- at tempor commodo ullamcorper a lacus vestibulum sed',
        },
        {
          img: ImageGenerator(720),
          description: 'Faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis. Aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc sed velit dignissim. Sodales ut eu sem integer vitae justo eget magna fermentum iaculis.',
        },
      ],
    },
    {
      id: 13,
      deal: 'Happy Hour Deal3',
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
          description: 'Morbi tincidunt augue interdum velit euismod in pellentesque massa.\n\nId aliquet risus feugiat in ante metus dictum at tempor.',
        },
      ],
    },
  ],
  special: [
    {
      id: 21,
      deal: 'Special Deal1',
      times: [
        {
          hours: 'All-day',
          days: 'Everyday',
        }
      ],
      items: [
        {
          img: ImageGenerator(720),
          description: 'Ullamcorper malesuada proin libero nunc consequat interdum varius sit amet mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor posuere ac ut consequat semper viverra nam libero justo laoreet sit amet'
        }
      ],
    },
    {
      id: 22,
      deal: 'Special Deal2',
      times: [
        {
          hours: 'All-day',
          days: 'Mon - Fri',
        }
      ],
      items: [
        {
          img: ImageGenerator(720),
          description: 'Vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor posuere ac ut consequat semper viverra nam libero justo laoreet sit amet'
        }
      ],
    },
  ],
  photoGallery: [
    {img: ImageGenerator(720)},
    {img: ImageGenerator(720)},
    {img: ImageGenerator(720)},
    {img: ImageGenerator(720)},
    {img: ImageGenerator(720)},
    {img: ImageGenerator(720)},
    {img: ImageGenerator(720)},
    {img: ImageGenerator(720)},
    {img: ImageGenerator(720)},
    {img: ImageGenerator(720)},
    {img: ImageGenerator(720)},
    {img: ImageGenerator(720)},
    {img: ImageGenerator(720)},
    {img: ImageGenerator(720)},
    {img: ImageGenerator(720)},
    {img: ImageGenerator(720)},
    {img: ImageGenerator(720)},
    {img: ImageGenerator(720)},
    {img: ImageGenerator(720)},
    {img: ImageGenerator(720)},
    {img: ImageGenerator(720)},
    {img: ImageGenerator(720)},
    {img: ImageGenerator(720)},
    {img: ImageGenerator(720)},
    {img: ImageGenerator(720)},
    {img: ImageGenerator(720)},
    {img: ImageGenerator(720)},
  ]
};

export default sampleBusinessData;