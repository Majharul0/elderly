

export const categorizeAges = (data) => {
    let child = 0;
    let adolescent = 0;
    let adult = 0;
    let elderly = 0;

    data.forEach((person) => {
        if (person.age >= 1 && person.age <= 13) {
            child++;
        } else if (person.age > 13 && person.age <= 18) {
            adolescent++;
        } else if (person.age > 18 && person.age <= 67) {
            adult++;
        } else if (person.age > 67) {
            elderly++;
        }
    });

    return {
        child,
        adolescent,
        adult,
        elderly,
    };
};