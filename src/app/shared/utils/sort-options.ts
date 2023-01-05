import { SortOptionModel } from "../../movies/models/sort-option.model";

export const SORT_OPTIONS: SortOptionModel[] = [
  {
    value: 'popularity',
    name: "Popularity",
    compareFn: (a, b) => b.popularity - a.popularity
  },
  {
    value: 'vote_asc',
    name: 'Vote Asc',
    compareFn: (a, b) => a.vote_average - b.vote_average
  },
  {
    value: 'vote_desc',
    name: 'Vote Desc',
    compareFn: (a, b) => b.vote_average - a.vote_average
  },
  {
    value: 'date_asc',
    name: 'Date Asc',
    compareFn: (a, b) => (new Date(a.release_date)).getTime() - (new Date(b.release_date)).getTime()
  },
  {
    value: 'date_desc',
    name: 'Date Desc',
    compareFn: (a, b) => (new Date(b.release_date)).getTime() - (new Date(a.release_date)).getTime()
  }
]
