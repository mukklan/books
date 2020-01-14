import axios from 'axios';
var MockAdapter = require('axios-mock-adapter');

const instance = axios.create({
    // Config for all axios calls:
    baseURL: 'https://9xetmg653b.execute-api.eu-west-1.amazonaws.com/dev',
    headers: {
        'x-api-key': 'SWknouDdE74R7J3XXS5yy2bFIpMIWbwY6ize2DsH',
        // 'x-authorization': '5f9b4d3d-6e97-401a-9a1c-fda21e890c3b'
    }
});

instance.defaults.headers.common['Authorization'] = '5f9b4d3d-6e97-401a-9a1c-fda21e890c3b';

// Set up mock data until http calls work:
var mock = new MockAdapter(axios);

mock.onGet('/books').reply(200, {
    books: [
        {
            "id": "09e9ed60-46e7-4a20-b397-d1935741733d",
            "author": "O'Brien, Tim",
            "title": "Microsoft .NET: The Programming Bible",
            "genre": "Computer",
            "price": 36.95,
            "publish_date": "2000-12-09T12:00:00Z",
            "description": "Microsoft's .NET initiative is explored in detail in this deep programmer's reference."
        },
        {
            "id": "1ea1c6da-6030-4da5-9fe7-21b3050a17a5",
            "author": "Thurman, Paula",
            "title": "Splish Splash",
            "genre": "Romance",
            "price": 4.95,
            "publish_date": "2000-11-02T12:00:00Z",
            "description": "A deep sea diver finds true love twenty thousand leagues beneath the sea."
        },
        {
            "id": "20c0e2ab-e310-4280-9d2c-bb0caee38f85",
            "author": "Kress, Peter",
            "title": "Paradox Lost",
            "genre": "Science Fiction",
            "price": 6.95,
            "publish_date": "2000-11-02T12:00:00Z",
            "description": "After an inadvertant trip through a Heisenberg Uncertainty Device, James Salway discovers the problems of being quantum."
        },
        {
            "id": "250a4ca9-6cf3-4865-8e5e-72bd7aa714c0",
            "author": "Ralls, Kim",
            "title": "Midnight Rain",
            "genre": "Fantasy",
            "price": 5.95,
            "publish_date": "2000-12-16T12:00:00Z",
            "description": "A former architect battles corporate zombies, an evil sorceress, and her own childhood to become queen of the world."
        },
        {
            "id": "2e37a9d5-089e-4e6b-ac37-868a57d2cef2",
            "author": "Sydik, Jeremy J",
            "title": "Design Accessible Web Sites",
            "genre": "Computer",
            "price": 34.95,
            "publish_date": "2007-12-01T12:00:00Z",
            "description": "Accessibility has a reputation of being dull, dry, and unfriendly toward graphic design. But there is a better way: well-styled semantic markup that lets you provide the best possible results for all of your users. This book will help you provide images, video, Flash and PDF in an accessible way that looks great to your sighted users, but is still accessible to all users."
        },
        {
            "id": "30e9ea68-3eb0-47a7-8202-f59e52ea4742",
            "author": "Knorr, Stefan",
            "title": "Creepy Crawlies",
            "genre": "Horror",
            "price": 4.95,
            "publish_date": "2000-12-06T12:00:00Z",
            "description": "An anthology of horror stories about roaches, centipedes, scorpions  and other insects."
        },
        {
            "id": "4ed84f90-7aab-4e35-b67f-6d1634e45a31",
            "author": "Kutner, Joe",
            "title": "Deploying with JRuby",
            "genre": "Computer",
            "price": 33,
            "publish_date": "2012-08-15T12:00:00Z",
            "description": "Deploying with JRuby is the missing link between enjoying JRuby and using it in the real world to build high-performance, scalable applications."
        },
        {
            "id": "648c6d51-e00f-4bc7-9d25-72c316d49e38",
            "author": "Russell, Alex",
            "title": "Mastering Dojo",
            "genre": "Computer",
            "price": 38.95,
            "publish_date": "2008-06-01T12:00:00Z",
            "description": "The last couple of years have seen big changes in server-side web programming. Now it’s the client’s turn; Dojo is the toolkit to make it happen and Mastering Dojo shows you how."
        },
        {
            "id": "8dc1a5d3-ad03-4fb7-90cc-b4d3957163fc",
            "author": "Tolkien, JRR",
            "title": "The Hobbit",
            "genre": "Fantasy",
            "price": 11.95,
            "publish_date": "1985-09-10T12:00:00Z",
            "description": "If you care for journeys there and back, out of the comfortable Western world, over the edge of the Wild, and home again, and can take an interest in a humble hero blessed with a little wisdom and a little courage and considerable good luck, here is a record of such a journey and such a traveler."
        },
        {
            "id": "980ef649-56fa-4c55-b108-22810f733bcb",
            "author": "Copeland, David Bryant",
            "title": "Build Awesome Command-Line Applications in Ruby",
            "genre": "Computer",
            "price": 20,
            "publish_date": "2012-03-01T12:00:00Z",
            "description": "Speak directly to your system. With its simple commands, flags, and parameters, a well-formed command-line application is the quickest way to automate a backup, a build, or a deployment and simplify your life."
        },
        {
            "id": "b9a34068-aa75-496c-bf31-c0b67ddc50bb",
            "author": "Corets, Eva",
            "title": "Maeve Ascendant",
            "genre": "Fantasy",
            "price": 5.95,
            "publish_date": "2000-11-17T12:00:00Z",
            "description": "After the collapse of a nanotechnology society in England, the young survivors lay the foundation for a new society."
        },
        {
            "id": "df8182e8-75b0-44dc-a6f4-169359005ca4",
            "author": "Randall, Cynthia",
            "title": "Lover Birds",
            "genre": "Romance",
            "price": 4.95,
            "publish_date": "2000-09-02T12:00:00Z",
            "description": "When Carla meets Paul at an ornithology conference, tempers fly as feathers get ruffled."
        },
        {
            "id": "ecdf7481-1d87-4f6c-b106-74cfdb4a221e",
            "author": "Corets, Eva",
            "title": "Oberon's Legacy",
            "genre": "Fantasy",
            "price": 5.95,
            "publish_date": "2001-03-10T12:00:00Z",
            "description": "In post-apocalypse England, the mysterious agent known only as Oberon helps to create a new life for the inhabitants of London. Sequel to Maeve Ascendant."
        }
    ]
  });


export default instance;