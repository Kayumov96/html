import product1 from '../Assets/Imgs/product1.png';
import product8 from '../Assets/Imgs/product8.png';
import product6 from '../Assets/Imgs/product6.png';
import product7 from '../Assets/Imgs/product7.png';



export const menunav =[
    {id:1, title:'Home', path: '/home', hidden: false},
    {id:2, title:'Shop', path: '/shop', hidden: false},
    {id:3, title:'Plant Care', path: '/plantcare', hidden: false},
    {id:4, title:'Blogs', path: '/blogs', hidden: false},
];

export const categories = [
    {id:1, title:'House Plants', amount: 33},
    {id:2, title:'Potter Plants', amount: 12},
    {id:3, title:'Seeds', amount: 65},
    {id:4, title:'Small Plants', amount: 39},
    {id:5, title:'Big Plants', amount: 23},
    {id:6, title:'Succulents', amount: 17},
    {id:7, title:'Trerrariums', amount: 19},
    {id:8, title:'Gardening', amount: 13},
    {id:9, title:'Accessories', amount: 18},
];

export const prices = [
    {id:1, size: 'Small', amount: 119},
    {id:2, size: 'Medium', amount: 86},
    {id:3, size: 'Large', amount: 78}
]
export const types =[
    {id:1, title: 'All Plants', path:'/allplants'},
    {id:2, title: 'New Arrivals', path:'/newarrivals',},
    {id:3, title: 'Sale', path: '/sale'},
]

export const shopcards = [
    {id:1, src: product1, title: 'Broadleaf Lady Palm', price:59.00},
    {id:2, src: product6, title:'Aluminum Plant', price: 179.00},
    {id: 3, src: product7,title: "Bird's Nest Fern", price: 99.00},
    {id: 4, src: product8,title: 'Barberton Daisy', price: 119.00},
]