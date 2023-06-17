export class User {
    constructor(
        public id_user: number,
        public username: string,
        public email: string,
        public zipcode: string,
        public password: string,
        public picture: string,
        public badges: string
    ) { }
}