const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => { 
  try{
    let categorydata = await Category.findAll({
      include:[Product]
    })
    res.json(categorydata)

  }catch(err){
    console.error(err)
    res.status(500).json(err)
  }
  // find all categories
  // be sure to include its associated Products
});

router.get('/:id', async (req, res) => {
  try{
    let categorydata = await Category.findOne({
      where: {id: req.params.id},
      include: [Product]

    })
    res.json(categorydata)

  }catch(err){
    console.error(err)
    res.status(500).json(err)
  }
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/', async (req, res) => {
  try{
    let categorydata =  await Category.create(req.body)
    res.json(categorydata)

  }catch(err){
    console.error(err)
    res.status(500).json(err)
  }
  // create a new category
});

router.put('/:id', async (req, res) => {
  try{
    let categorydata = await Category.update(req.body, {
      where: {id: req.params.id}
      
    })
    res.json(categorydata)
  }catch(err){
    console.error(err)
    res.status(500).json(err)
  }
  // update a category by its `id` value
});

router.delete('/:id', async (req, res) => {
  try{
    let categorydata = await Category.destroy({
      where: {id: req.params.id}
    })
    res.json(categorydata)
  }catch(err){
    console.error(err)
    res.status(500).json(err)
  }
  // delete a category by its `id` value
});

module.exports = router;
