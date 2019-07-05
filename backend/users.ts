export class User {
    constructor(public email: string,
        public name: string,
        public password: string) { }

    matches(another: User): boolean {
        return another !== undefined &&
            another.email === this.email &&
            another.password === this.password
    }
}
export const users: { [key: string]: User } = {
    "andreps25@gmail.com": new User('andreps25@gmail.com', 'André', 'andrepauli'),
    "matheus@gmail.com": new User('matheus@gmail.com', 'Matheus', 'matheussouza'),
    "wagner25@gmail.com": new User('wagner@gmail.com', 'Wagner', 'wagnercardozo')
}