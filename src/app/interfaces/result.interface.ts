type Person = {
  birth_year: number | null;
  death_year: number | null;
  name: string;
}

type Format = {
  [key: string]: string;
}

export type Book = {
  id: number;
  title: string;
  subjects: string[];
  authors: Person[];
  translators: Person[];
  bookshelves: string[];
  languages: string[];
  copyright: boolean | null;
  media_type: string;
  formats: Format;
  download_count: number;
}

export interface Result {
  count: number;
  next: string | null;
  previous: string | null;
  results: Book[];
}
