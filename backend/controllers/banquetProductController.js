const Product = require('../models/banquetModel')

const addBanquet = async (req, res) => {
    try {
      
      const { name, description, images, price, category, location } = req.body;
  
     
      if (!name || !description || !images || !price || !category  || !location) {
        return res.status(400).json({ message: 'Please provide all required fields' });
      }
  
     
      if (!Array.isArray(images) || images.length === 0) {
        return res.status(400).json({ message: 'Please provide at least one image' });
      }
  
      
      if (price <= 0) {
        return res.status(400).json({ message: 'Price must be a positive number' });
      }
  
      
      const newProduct = new Product({
        name,
        description,
        images,
        price,
        category, 
        location,
      });
  
      
      const savedProduct = await newProduct.save();
  
      
      return res.status(201).json({
        message: 'Banquet hall added successfully!',
        product: savedProduct,
      });
    } catch (err) {
      console.error(err);
      
      return res.status(500).json({ message: 'Server error', error: err.message });
    }
  };
  
//update banquet detail

const updateBanquet = async (req,res)=>{
    try{
    const { id } = req.params;
    const updates = req.body;

    const updatedBanquet = await Product.findByIdAndUpdate(id, updates, { new: true, runValidators: true });

    if (!updatedBanquet) {
        return res.status(404).json({ message: 'Banquet hall not found' });
    }

    return res.status(200).json({
        message: 'Banquet hall updated successfully!',
        banquet: updatedBanquet,
    });
} catch (error) {
    console.error('Error updating banquet hall:', error);
    return res.status(500).json({ message: 'Internal server error', error: error.message });
}
};

//delete banquet

const deleteBanquet = async(req,res)=>{
    try{
        const {id} = req.params
        const ban = await Product.findByIdAndDelete(id);
        if(!ban)
        {
            res.status(400).send("not found");
            return;
        }

        res.status(200).send('delete successfully');
    }
    catch(error)
    {
        console.log(error)
    }
}




  module.exports = { addBanquet,updateBanquet,deleteBanquet };