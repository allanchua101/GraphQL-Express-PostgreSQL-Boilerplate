const userListQueryResolver = {
    Query: {
        users() {
            return [
                { email: 'pogs.mock@gmail.com', firstName: 'Pogs', lastName: 'Mock' },
                { email: 'john.doe@gmail.com', firstName: 'John', lastName: 'Doe' }
            ];
        },
        hi() {
            return 'Bitches'
        }
    }
};

module.exports = userListQueryResolver;