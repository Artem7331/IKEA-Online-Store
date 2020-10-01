import { getData } from './getData.js'; 

const wishList = ['idd005','idd100','idd077','idd044'];

    const cartList = [
        {
            id: 'idd015',
            count: 4
        },
        {
            id: 'idd045',
            count: 3
        },
        {
            id: 'idd065',
            count: 2
        }
    ];

export const loadData = () => {

    if (location.search) {
        const search = decodeURI(location.search);
        const prop = search.split('=')[0].substring(1);
        const value = search.split('=')[1];

        if (prop === 's') {
            getData.search(value, (data) => console.log(data));
        } else if (prop === 'wishList') {
            getData.wishList(wishList, (data) => console.dir({wishList: data}));
        } else if (prop === 'cat' || prop === 'subcat') {
            getData.category(prop, value, (data) => console.log(data));
        }
    }

    if (location.hash) {
        getData.item(location.hash.substring(1), (data) => console.log(data));
    }

    if (location.pathname.includes('cart')) {
        getData.cart(cartList, (data) => console.log(data));
    }
    
};