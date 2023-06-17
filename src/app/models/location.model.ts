export class Location {
    constructor(
        public id_location: number,
        public url_image: string,
        public description: string,
        public name: string,
        public tags: string[],
        public createdate: Date
    ) { }
}
