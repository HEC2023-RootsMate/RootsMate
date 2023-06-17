export class Post {
    constructor(
        public id_post: number,
        public url_image: string,
        public description: string,
        public title: string,
        public creationdate: Date,
        public id_user: number,
        public id_location: number | null,
        public id_postparent: number | null
    ) { }
}
