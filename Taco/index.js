import express from 'express';
import bodyParser from 'body-parser';

const myServer = express();
const portUsed = 3400;

const recipeJSON = `
  [
    {
      "id": "0001",
      "type": "taco",
      "name": "Chicken Taco",
      "price": 2.99,
      "ingredients": {
        "protein": {
          "name": "Chicken",
          "preparation": "Grilled"
        },
        "salsa": {
          "name": "Tomato Salsa",
          "spiciness": "Medium"
        },
        "toppings": [
          {
            "name": "Lettuce",
            "quantity": "1 cup",
            "ingredients": ["Iceberg Lettuce"]
          },
          {
            "name": "Cheese",
            "quantity": "1/2 cup",
            "ingredients": ["Cheddar Cheese", "Monterey Jack Cheese"]
          },
          {
            "name": "Guacamole",
            "quantity": "2 tablespoons",
            "ingredients": ["Avocado", "Lime Juice", "Salt", "Onion", "Cilantro"]
          },
          {
            "name": "Sour Cream",
            "quantity": "2 tablespoons",
            "ingredients": ["Sour Cream"]
          }
        ]
      }
    },
    {
      "id": "0002",
      "type": "taco",
      "name": "Beef Taco",
      "price": 3.49,
      "ingredients": {
        "protein": {
          "name": "Beef",
          "preparation": "Seasoned and Grilled"
        },
        "salsa": {
          "name": "Salsa Verde",
          "spiciness": "Hot"
        },
        "toppings": [
          {
            "name": "Onions",
            "quantity": "1/4 cup",
            "ingredients": ["White Onion", "Red Onion"]
          },
          {
            "name": "Cilantro",
            "quantity": "2 tablespoons",
            "ingredients": ["Fresh Cilantro"]
          },
          {
            "name": "Queso Fresco",
            "quantity": "1/4 cup",
            "ingredients": ["Queso Fresco"]
          }
        ]
      }
    },
    {
      "id": "0003",
      "type": "taco",
      "name": "Fish Taco",
      "price": 4.99,
      "ingredients": {
        "protein": {
          "name": "Fish",
          "preparation": "Battered and Fried"
        },
        "salsa": {
          "name": "Chipotle Mayo",
          "spiciness": "Mild"
        },
        "toppings": [
          {
            "name": "Cabbage Slaw",
            "quantity": "1 cup",
            "ingredients": ["Shredded Cabbage", "Carrot", "Mayonnaise", "Lime Juice", "Salt"]
          },
          {
            "name": "Pico de Gallo",
            "quantity": "1/2 cup",
            "ingredients": ["Tomato", "Onion", "Cilantro", "Lime Juice", "Salt"]
          },
          {
            "name": "Lime Crema",
            "quantity": "2 tablespoons",
            "ingredients": ["Sour Cream", "Lime Juice", "Salt"]
          }
        ]
      }
    }
  ]
`;

myServer.use(bodyParser.urlencoded({ extended: true }));
myServer.use(express.static('public'));


myServer.get('/', (req, res) => {
    res.render('index.ejs', { recipe: null });
});

myServer.post('/recipe', (req, res) => {
    let info;

    switch (req.body.choice) {
        case 'chicken':
            info = JSON.parse(recipeJSON)[0];
            break;
        case 'beef':
            info = JSON.parse(recipeJSON)[1];
            break;
        case 'fish':
            info = JSON.parse(recipeJSON)[2];
            break;
        default:
            info = 'Recipe not available'; 
    }

    res.render('index.ejs', { recipe: info });
});

myServer.listen(portUsed, () => {
    console.log(`The server is currently running at port ${portUsed}`);
});
