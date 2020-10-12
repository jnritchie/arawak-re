export default [
    {
        _id: 7,
        text: '#awesome',
        createdAt: new Date(),
        user: {
            _id: 1,
            name: 'Developer',
        },
    },
     {
       _id: 6,
       text: 'Paris',
       createdAt: new Date(),
       user: {
         _id: 2,
         name: 'nasim',
       },
       image:
         'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Paris_-_Eiffelturm_und_Marsfeld2.jpg/280px-Paris_-_Eiffelturm_und_Marsfeld2.jpg',
       sent: true,
       received: true,
     },
    {
        _id: 5,
        text: 'Send me a picture!',
        createdAt: new Date(),
        user: {
            _id: 1,
            name: 'Developer',
        },
    },

    {
        _id: 3,
        text: 'Where are you?',
        createdAt: new Date(),
        user: {
            _id: 1,
            name: 'Developer',
        },
    },
    {
        _id: 2,
        text: 'I`m fine , Thanks!',
        createdAt: new Date(),
        user: {
            _id: 2,
            name: 'nasim',
        },
        sent: true,
        received: true,
    },
    {
        _id: 1,
        text: 'How are you',
        createdAt: new Date(),
        user: {
            _id: 1,
            name: 'Developer',
        },
    },



]