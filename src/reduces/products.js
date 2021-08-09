let initialState = [
    {
        id: 1,
        img: 'img/phone/iphone-6.jpg',
        name: 'Iphone 7 Plus',
        desc: 'Điện thoại do Apple sản xuất',
        price: '800',
        rate: 4
    },
    {
        id: 2,
        img: 'img/phone/iphone-6.jpg',
        name: 'Samsung Galaxy S6',
        desc: 'Điện thoại do Samsung sản xuất',
        price: '700',
        rate: 3
    },
    {
        id: 3,
        img: 'img/phone/iphone-6.jpg',
        name: 'Oppo F1S',
        desc: 'Điện thoại do China sản xuất',
        price: '400',
        rate: 5
    }
];

localStorage.setItem('products', JSON.stringify(initialState));

let myReducer = (state = initialState, action) =>{
    switch (action.type){
        default: return state;
    }
}

export default myReducer;