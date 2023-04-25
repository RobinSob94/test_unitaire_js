module.exports = class User {
    constructor(email, lastName, firstName, birthDate) {
        this.email = email;
        this.lastName = lastName;
        this.firstName = firstName;
        this.birthDate = birthDate
    }

    isValid() {
        return this.emailIsValid() &&
            this.lastNameIsValid() &&
            this.firstNameIsValid() &&
            this.birthDateIsValid();
    }

    emailIsValid() {
        if(this.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
            return true;
        }

        throw new Error("Email is not valid");
    }

    lastNameIsValid() {
        if(this.lastName) {
            return true;
        }

        throw new Error("Last name is not valid");
    }

    firstNameIsValid() {
        if(this.firstName) {
            return true;
        }

        throw new Error("First name is not valid");
    }

    birthDateIsValid() {
        if(this.birthDate.match(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)) {
            const actualDate = new Date(this.birthDate);
            let treizeAnsAvant = new Date();
            treizeAnsAvant.setFullYear(treizeAnsAvant.getFullYear() - 13);

            if(actualDate <= treizeAnsAvant) {
                return true;
            }
        }

        throw new Error("Birth date is not valid");
    }
}