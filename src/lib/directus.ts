import { createDirectus, rest, } from '@directus/sdk';

type Direcstro = {
    title: string;
    description: string;
}

type Content = {
    title: string;
    content: string;
    slug: string;
}

type Author = {
    writer: string;
}

type Post = {
    slug: string;
    title: string;
    txt: string;
    img: string;
    published: string;
    author: Author;
}


type Schema = {
    direcstro: Direcstro;
    csapf_contents: Content[];
    csapf_posts: Post[];
}

const directus = createDirectus<Schema>(import.meta.env.PUBLIC_DIRECTUS).with(rest());

export default directus;
