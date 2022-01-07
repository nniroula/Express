const express = require('express');
const router = new express.Router();

const USERS = [{id: 35, username: "Oh No User", password: "CodingFun"},
                {id: 2, username: "wtf", password: "flask what the form"}];

router.get('/', (req, res) => {
    res.json({users: USERS})
})

// another route with an id
router.get('/:id', (req, res) => {
    const user = USERS.find(u => u.id === +req.params.id);
    res.json({user});
})
// export
module.exports = router;

// go to another file(may be app.js) and import this, prefix the route name to something 
// like app.use('/users', variable_to_hold_import_of_this_file)