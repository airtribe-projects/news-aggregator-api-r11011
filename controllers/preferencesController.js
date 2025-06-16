const {findUserByEmail  , updateUser} = require('../models/User');
exports.getPreferences = ('/', (req, res) => {
    const userEmail = findUserByEmail(req,user,email);
    if(!user)return res.status(400).json({message:"user not found"})   // Assuming user info is attached to req by authMiddleware
  res.json(userPreferences);
})
exports.updatePreferences =  (req, res) => {
    const user = findUserByEmail(req, user, email);
    if(!user) return res.status(404).json({message:"user not found"})   // Assuming user info is attached to req by authMiddleware  


    const { categories, language, country } = req.body;
    if (categories )user.Preferences.categories = categories;
    if (language )user.Preferences.language = language;
    if (country )user.Preferences.country = country;
      res.json({ message: 'prefernces updated', Preferences: user.Preferences });
    };