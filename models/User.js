const newUser = {
  id: Date.now(),
  name,
  email,
  password: hashedPassword,
  preferences: {
    categories: ['technology', 'health','sports', 'entertainment', 'business'],
    language:['enlish', 'hindi','tamil','kannada'],
    country: ['india','us', 'uk', 'australia'],
  }
};

module.exports = {
  addUser: (user) => users.push(user),
  findUserByEmail: (email) => users.find(u => u.email === email)
};