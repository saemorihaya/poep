// ユーザー情報
export class Article {
    title: String
    contentJa: String
    contentEn: String | null
    createdAt: Date
    source: String
    imageUrl1: String | null
    imageUrl2: String | null
    imageUrl3: String | null

    constructor(title: String,
                contentJa: String,
                contentEn: String | null,
                createdAt: Date,
                source: String,
                imageUrl1: String | null,
                imageUrl2: String | null,
                imageUrl3: String | null) {
        this.title = title
        this.contentJa = contentJa
        this.contentEn = contentEn
        this.createdAt = createdAt
        this.source = source
        this.imageUrl1 = imageUrl1
        this.imageUrl2 = imageUrl2
        this.imageUrl3 = imageUrl3
    }

    toJSON() {
        return {
            title: this.title,
            contentJa: this.contentJa,
            countentEn: this.contentEn,
            createdAt: this.createdAt,
            source: this.source,
            imageUrl1: this.imageUrl1,
            imageUrl2: this.imageUrl2,
            imageUrl3: this.imageUrl3
         };
    }
} 
