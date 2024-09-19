const express = require('express');
const cors = require('cors');
const fs = require('fs');
const bodyparser = require('body-parser');

const app = express();

app.use(cors());

app.use(express.static('..'));
app.use(bodyparser.json());

app.get('/catalog', (req, res) => {
    fs.readFile('./static/catalog-products.json', 'utf8', (err, data) => {
        res.send(data);
    });
});

app.get('/basket', (req, res) => {
    fs.readFile('./static/basket-buyer.json', 'utf8', (errBasket, dataBasket) => {
        fs.readFile('./static/catalog-products.json', 'utf8', (errProducts, dataProducts) => {
            const basket = JSON.parse(dataBasket);
            const products = JSON.parse(dataProducts);

            const basketCombined = basket.map(product => {
                const productInCatalog = products.find(element => element.id_product === product.id_product);
                return {
                    ...product,
                    ...productInCatalog
                }
            })

            res.send(basketCombined);
        })
    });
});

app.post('/addToBasket', (req, res) => {
    fs.readFile('./static/basket-buyer.json', 'utf8', (err, data) => {
        if (err) {
            res.send('{"result": 0}');
        } else {
            const basket = JSON.parse(data);
            const product = req.body;
            product.count = 1;

            const productInBasket = basket.find(element => element.id_product === product.id_product);
            
            if (productInBasket) {
                productInBasket.count += 1;
            } else {
                basket.push(product);
            }

            fs.writeFile('./static/basket-buyer.json', JSON.stringify(basket), 'utf8', (err) => {
                if (err) {
                    res.send('{"result": 0}');
                } else {
                    res.send('{"result": 1}');
                }
            });
        }
    });
});

app.post('/deleteFromBasket', (req, res) => {
    fs.readFile('./static/basket-buyer.json', 'utf8', (err, data) => {
        if (err) {
            res.send('{"result": 0}');
        } else {
            let basket = JSON.parse(data);
            const product = req.body;

            const productInBasket = basket.find(element => element.id_product === product.id_product);

            if (productInBasket) {
                if (productInBasket.count === 1) {
                    basket = basket.filter(product => {return product.id_product != productInBasket.id_product})
                } else {
                    productInBasket.count -= 1;
                }
            } else {
                console.log('The product does not exist in the shopping basket');
            }

            if (basket.length === 0) {
                basket = [];
            }

            fs.writeFile('./static/basket-buyer.json', JSON.stringify(basket), 'utf8', (err) => {
                if (err) {
                    res.send('{"result": 0}');
                } else {
                    res.send('{"result": 1}');
                }
            });
        }
    });
});

app.listen(8000, () => {
    console.log('Server is running on port 8000');
});
