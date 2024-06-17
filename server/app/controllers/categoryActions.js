// Some data to make the trick
const tables = require("../../database/tables");

const categories = [
  {
    id: 1,
    name: "Science-Fiction",
  },
  {
    id: 2,
    name: "Comédie",
  },
];

// Declare the actions

/* Here you code */

const browse = async (_, res) => {
  const categoriesFromDB = await tables.category.readAll();

  res.json(categoriesFromDB);
};

const read = (req, res) => {
  const parsedId = parseInt(req.params.id, 10);

  const category = categories.find((c) => c.id === parsedId);

  if (category != null) {
    res.json(category);
  } else {
    res.sendStatus(404);
  }
};

// Export them to import them somewhere else

module.exports = {
  read,
  browse,
};
