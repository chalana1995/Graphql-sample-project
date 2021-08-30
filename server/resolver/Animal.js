

const Animal = {
    category: (parent, args, {categories}) => {
        return categories.filter((category) => {
            return category.id === parent.category
        })
    }
};

module.exports = Animal;