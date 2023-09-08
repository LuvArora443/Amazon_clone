import bcrypt from 'bcryptjs';
const data={
    users:[
        {
            name: 'Sam',
            email: 'samimaniyar2003@gmail.com',
            password: bcrypt.hashSync('123456'),
            isAdmin: true,
        },
        {
            name: 'Luv',
            email: 'luvarora2003@gmail.com',
            password: bcrypt.hashSync('12345678'),
            isAdmin: false,
        },
        {
            name: 'Kusum',
            email: 'kusum2003k@gmail.com',
            password: bcrypt.hashSync('123456789'),
            isAdmin: false,
        }
    ],
    products:[
        {
            // _id:'1',
            name:'Nike Slim Shirt',
            slug:'nike-slim-shirt',
            category:'Shirts',
            image:'/images/p1.jpg',
            price:120,
            countInStock:10,
            brand:'Nike',
            rating:4.5,
            numReviews:10,
            description:'high quality product',
        },
        {
            // _id:'2',
            name:'Adidas Slim Shirt',
            slug:'Adidas-slim-shirt',
            category:'Shirts',
            image:'/images/p1.jpg',
            price:250,
            countInStock:0,
            brand:'Adidas',
            rating:4.5,
            numReviews:10,
            description:'high quality product',
        },
        {
            // _id:'3',
            name:'Lacoste Slim Shirt',
            slug:'Lacoste-slim-shirt',
            category:'Shirts',
            image:'/images/p4.jpg',
            price:220,
            countInStock:0,
            brand:'Lacoste',
            rating:4.5,
            numReviews:10,
            description:'high quality product',
        },
        {
            // _id:'4',
            name:'Nike Slim Pant',
            slug:'Nike-slim-pant',
            category:'Pants',
            image:'/images/p3.jpg',
            price:78,
            countInStock:15,
            brand:'Nike',
            rating:4.5,
            numReviews:10,
            description:'high quality product',
        },
    ]
};
export default data;
