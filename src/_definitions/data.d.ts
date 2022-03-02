
export interface Anime {
    id: number
    attributes: {
        canonicalTitle: string
        titles: TitleLang[]
        description: string
        posterImage: ImageSizes
        coverImage: ImageSizes
        averageRating: number
        favoritesCount: number
        popularityRank: number
        ratingRank: number
        userCount: number
        ageRating: string
        ageRatingGuide: string
        startDate: string
        endDate: string
        showType: string
        role: string
    }
    type: string
}

interface TitleLang {
    en: string;
    en_jp: string
    ja_jp: string
}


interface ImageSizes {
    tiny: string
    small: string
    medium: string
    large: string
    original: string
}

