const router = require("express").Router();
const { addBanquet, updateBanquet, deleteBanquet } = require("../controllers/banquetProductController");

//add banquet
router.post('/add',addBanquet)

//update banquet
router.put('/update/:id',updateBanquet)

//delete banquet
router.delete('/delete/:id',deleteBanquet)

module.exports = router;