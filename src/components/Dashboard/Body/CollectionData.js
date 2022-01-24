const itemData = [
    {
        img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        title: 'Breakfast',
        price: 12,
        id: 'p1',
        quantity: 1, 
        description: '1 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, expedita? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, expedita? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, expedita? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, expedita? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, expedita?'
    },
    {
        img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
        title: 'Burger',
        price: 15,
        id: 'p2',
        quantity: 1,
        description: '2 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, expedita? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, expedita? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, expedita? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, expedita? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, expedita?'
    },
    {
        img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
        title: 'Camera',
        price: 20,
        id: 'p3',
        quantity: 1,
        description: '3 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, expedita? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, expedita? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, expedita? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, expedita? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, expedita?'
    },
    {
        img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
        title: 'Coffee',
        price: 30,
        id: 'p4',
        quantity: 1,
        description: '4 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, expedita? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, expedita? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, expedita? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, expedita? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, expedita?'
    },
    {
        img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
        title: 'Hats',
        price: 30,
        id: 'p5',
        quantity: 1,
        description: '5 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, expedita? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, expedita? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, expedita? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, expedita? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, expedita?'
      },
      {
        img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
        title: 'Honey',
        price: 30,
        id: 'p6',
        quantity: 1,
        description: '6 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, expedita? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, expedita? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, expedita? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, expedita? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, expedita?'
      },
      {
        img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
        title: 'Basketball',
        price: 30,
        id: 'p7',
        quantity: 1,
        description: '7 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, expedita? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, expedita? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, expedita? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, expedita? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, expedita?'
      },
      {
        img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
        title: 'Fern',
        price: 30,
        id: 'p8',
        quantity: 1,
        description: '8 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, expedita? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, expedita? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, expedita? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, expedita? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, expedita?'
      },
      {
        img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
        title: 'Mushrooms',
        price: 30,
        id: 'p9',
        quantity: 1,
        description: '9 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, expedita? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, expedita? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, expedita? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, expedita? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, expedita?'
      },
      {
        img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
        title: 'Tomato basil',
        price: 30,
        id: 'p10',
        quantity: 1,
        description: '10 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, expedita? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, expedita? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, expedita? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, expedita? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, expedita?'
      },
      {
        img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
        title: 'Sea star',
        price: 30,
        id: 'p11',
        quantity: 1,
        description: '11 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, expedita? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, expedita? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, expedita? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, expedita? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, expedita?'
      },
      {
        img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
        title: 'Bike',
        price: 30,
        id: 'p12',
        quantity: 1,
        description: '12 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, expedita? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, expedita? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, expedita? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, expedita? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, expedita?'
      },
];

export default itemData;