module.exports = (users, ranges) => {
    return users.reduce(function (count, user) {
        return (user.bmiCategory == ranges) ? ++count : count;
    }, 0);
}