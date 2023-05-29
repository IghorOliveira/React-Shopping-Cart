
const productsArray = [
    {
        id:'1',
        tittle:'Coffee',
        price:4.99
    },
    {
        id:'2',
        tittle:'Chocolate Cake',
        price: 9.99
    },
    {
        id:'3',
        tittle:'Cookie',
        price:1.99
    },
    {
        id:'4',
        tittle:'Milkshake',
        price:6.99
    }
];

function getProductData(id){
    let productData = productsArray.find(product => product.id === id);
    if(productData === undefined){
        console.log('no items found')
        return undefined;
    } else {
        return productData;
    }
};

export {productsArray, getProductData};
