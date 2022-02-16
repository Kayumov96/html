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
    {id:1, src: product1, categories:'Potter Plants', tags:'Home, Garden, Plants',
    size:[{id:1, size: 'S'},{id:2, size: 'M'}, {id:3, size: 'L'}, {id:4, size:'XL'}], title: 'Broadleaf Lady Palm', price:59.00, 
    description:'The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. ',
    productDescription: `The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate
    adipiscing cursus eu, suscipit id nulla.Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus feugiat sem, quis fermentum turpis eros eget velit. Donec ac tempus ante. Fusce ultricies massa massa. Fusce aliquam, 
    purus eget sagittis vulputate, sapien libero hendrerit est, sed commodo augue nisi non neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor, lorem et placerat vestibulum, metus nisi posuere nisl, in 
    accumsan elit odio quis mi. Cras neque metus, consequat et blandit et, luctus a nunc. Etiam gravida vehicula tellus, in imperdiet ligula euismod eget. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. `,
    livingroom:`The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    dinningroom:`The benefits of houseplants are endless. In addition to cleaning the air of harmful toxins, they can help to improve your mood, reduce stress and provide you with better sleep. Fill every room of your home with houseplants and their restorative qualities will improve your life.`,
    office:`The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit.` },
   
    {id:2, src: product6, categories:'Gardening', tags:'House, Potter, Gardening, Plants',
    size:[{id:1, size: 'S'},{id:2,size: 'M'}, {id:3, size: 'L'}, {id:4, size:'XL'}], title:'Aluminum Plant', price: 179.00,
    description: 'Culpa enim veniam tempore, accusantium ratione quaerat quos esse pariatur. Recusandae reprehenderit ipsam repellendus. Quaerat earum omnis nostrum. Voluptatum quod in neque et vel repellat voluptas. ',
    productDescription:`The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. 
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate 
    adipiscing cursus eu, suscipit id nulla. Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus feugiat sem, quis fermentum turpis eros eget velit. Donec ac tempus ante. Fusce ultricies massa massa. Fusce aliquam, 
    purus eget sagittis vulputate, sapien libero hendrerit est, sed commodo augue nisi non neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor, lorem et placerat vestibulum, metus nisi posuere nisl, in
    accumsan elit odio quis mi. Cras neque metus, consequat et blandit et, luctus a nunc. Etiam gravida vehicula tellus, in imperdiet ligula euismod eget. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. `,
    livingroom:`The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    dinningroom:`The benefits of houseplants are endless. In addition to cleaning the air of harmful toxins, they can help to improve your mood, reduce stress and provide you with better sleep. Fill every room of your home with houseplants and their restorative qualities will improve your life.`,
    office:`The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit.`},
    
    {id: 3, src: product7, categories:'Seeds', tags:'House, Big, Small, Plants',
    size:[{id:1,size: 'S'},{id:2, size: 'M'}, {id:3, size: 'L'}, {id:4, size:'XL'}], title: "Bird's Nest Fern", price: 99.00,
    description:' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic architecto deleniti odio laborum quos placeat alias magnam omnis, dolore atque?',
    productDescription:`The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. 
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate
    adipiscing cursus eu, suscipit id nulla.Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus feugiat sem, quis fermentum turpis eros eget velit. Donec ac tempus ante. Fusce ultricies massa massa. Fusce aliquam,
    purus eget sagittis vulputate, sapien libero hendrerit est, sed commodo augue nisi non neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor, lorem et placerat vestibulum, metus nisi posuere nisl, in 
    accumsan elit odio quis mi. Cras neque metus, consequat et blandit et, luctus a nunc. Etiam gravida vehicula tellus, in imperdiet ligula euismod eget. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. `,
    livingroom:`The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    dinningroom:`The benefits of houseplants are endless. In addition to cleaning the air of harmful toxins, they can help to improve your mood, reduce stress and provide you with better sleep. Fill every room of your home with houseplants and their restorative qualities will improve your life.`,
    office:`The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit.`},
   
    {id: 4, src: product8,categories:'Potter Plants', tags:'Home, Succulents, Potter, Plants',
    size:[{id:1, size: 'S'},{id:2, size: 'M'}, {id:3, size: 'L'}, {id:4, size:'XL'}], title: 'Barberton Daisy', price: 119.00, 
    description:'The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. ',
    productDescription:`The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. 
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate 
    adipiscing cursus eu, suscipit id nulla.Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus feugiat sem, quis fermentum turpis eros eget velit. Donec ac tempus ante. Fusce ultricies massa massa. Fusce aliquam, purus
    eget sagittis vulputate, sapien libero hendrerit est, sed commodo augue nisi non neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor, lorem et placerat vestibulum, metus nisi posuere nisl, in accumsan elit 
    dio quis mi. Cras neque metus, consequat et blandit et, luctus a nunc. Etiam gravida vehicula tellus, in imperdiet ligula euismod eget. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. `,
    livingroom:`The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    dinningroom:`The benefits of houseplants are endless. In addition to cleaning the air of harmful toxins, they can help to improve your mood, reduce stress and provide you with better sleep. Fill every room of your home with houseplants and their restorative qualities will improve your life.`,
    office:`The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit.`},
]