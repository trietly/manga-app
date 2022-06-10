import { DropDownLink } from '~/components/shared/DropDown';
import { MangaResource, SourcesId } from '~/types';

export const REVALIDATE_TIME = 3 * 60 * 60; //3h

//ref: src/pages
export const MANGA_PATH_NAME = 'manga';
//ref: src/pages/manga
export const MANGA_PATH_DETAILS_NAME = 'details';
//ref: src/pages/manga
export const MANGA_PATH_READ_NAME = 'read';

export const DEFAULT_SRC: SourcesId = 'nt';

export const GENRES_NT = [
    { value: 'action', label: 'Action' },
    { value: 'adventure', label: 'Adventure' },
    { value: 'anime', label: 'Anime' },
    { value: 'chuyen-sinh-213', label: 'Chuyển sinh' },
    { value: 'comedy-99', label: 'Comedy' },
    { value: 'comic', label: 'Comic' },
    { value: 'cooking', label: 'Cooking' },
    { value: 'co-dai-207', label: 'Cổ đại' },
    { value: 'doujinshi', label: 'Doujinshi' },
    { value: 'drama-103', label: 'Drama' },
    { value: 'dam-my', label: 'Đam mỹ' },
    { value: 'ecchi', label: 'Ecchi' },
    { value: 'fantasy-105', label: 'Fantasy' },
    { value: 'harem-107', label: 'Harem' },
    { value: 'historical', label: 'Historical' },
    { value: 'horror', label: 'Horror' },
    { value: 'josei', label: 'Josei' },
    { value: 'live-action', label: 'Live action' },
    { value: 'martial-arts', label: 'Martial Arts' },
    { value: 'mature', label: 'Mature' },
    { value: 'mecha-117', label: 'Mecha' },
    { value: 'ngon-tinh', label: 'Ngôn tình' },
    { value: 'one-shot', label: 'One shot' },
    { value: 'psychological', label: 'Psychological' },
    { value: 'romance-121', label: 'Romance' },
    { value: 'school-life', label: 'School Life' },
    { value: 'sci-fi', label: 'Sci-fi' },
    { value: 'seinen', label: 'Seinen' },
    { value: 'shoujo', label: 'Shoujo' },
    { value: 'shoujo-ai-126', label: 'Shoujo Ai' },
    { value: 'shounen-127', label: 'Shounen' },
    { value: 'shounen-ai', label: 'Shounen Ai' },
    { value: 'slice-of-life', label: 'Slice Of Life' },
    { value: 'soft-yaoi', label: 'Soft Yaoi' },
    { value: 'soft-yuri', label: 'Soft Yuri' },
    { value: 'sports', label: 'Sports' },
    { value: 'supernatural', label: 'Supernatural' },
    { value: 'smut', label: 'Smut' },
    { value: 'tap-chi-truyen-tranh', label: 'Tạp chí truyện tranh' },
    { value: 'thieu-nhi', label: 'Thiếu nhi' },
    { value: 'tragedy-136', label: 'Tragedy' },
    { value: 'trinh-tham', label: 'Trinh thám' },
    { value: 'truyen-scan', label: 'Truyện Scan' },
    { value: 'truyen-mau', label: 'Truyện màu' },
    { value: 'viet-nam', label: 'Việt Nam' },
    { value: 'webtoon', label: 'Webtoon' },
    { value: 'xuyen-khong-205', label: 'Xuyên không' },
    { value: '16', label: '16+' },
    { value: 'truong-thanh', label: 'Trưởng thành' },
];

export const VIEW_NT = [
    { value: 'all', label: 'Tất cả' },
    { value: 'month ', label: 'Tháng' },
    { value: 'week  ', label: 'Tuần' },
    { value: 'day  ', label: 'Ngày' },
];

export const STATUS_NT = [
    { value: 'all', label: 'Tất cả' },
    { value: 'ongoing', label: 'Đang tiến hành' },
    { value: 'completed ', label: 'Hoàn thành' },
    { value: 'new ', label: 'Mới ra' },
    { value: 'latest ', label: 'Chapter mới' },
];

export const COMIC_GENRES = [
    { value: 'manga-112', label: 'Manga' },
    { value: 'manhua ', label: 'Manhua' },
    { value: 'manhwa-11400 ', label: 'Manhwa' },
    { value: 'doujinshi ', label: 'Doujinshi' },
];

export const SORT = [
    { value: 'gt0', label: '> 0' },
    { value: 'gt49 ', label: '>= 50' },
    { value: 'gt99', label: '>= 100' },
    { value: 'gt199 ', label: '>= 200' },
    { value: 'gt299 ', label: '>= 300' },
    { value: 'gt399 ', label: '>= 400' },
    { value: 'gt499 ', label: '>= 500' },
];

export const GENDER = [
    { value: '-1', label: 'Tất cả' },
    { value: '1', label: 'Con gái' },
    { value: '2', label: 'Con trai' },
];

export const MANGA_RESOURCE: MangaResource[] = [
    {
        sourceName: 'nettruyen',
        sourceId: 'nt',
    },
    {
        sourceName: 'lhmanga',
        sourceId: 'lh',
    },
    {
        sourceName: 'truyenqq',
        sourceId: 'qq',
    },
];

export const TailwindColors = [
    '#facc15',
    '#a3e635',
    '#fbbf24',
    '#34d399',
    '#fb923c',
    '#22d3ee',
    '#f87171',
    '#38bdf8',
    '#f472b6',
    '#818cf8',
    '#fb7185',
    '#a78bfa',
    '#e879f9',
];

export const MangaTypesPreview: DropDownLink[] = [
    {
        title: 'Manga',
        href: '/justTest',
    },
    {
        title: 'Manhua',
        href: '/justTest',
    },
    {
        title: 'Manhwa',
        href: '/justTest',
    },
    {
        title: 'Doujinshi',
        href: '/justTest',
    },
];

export const MangaGenresPreview: DropDownLink[] = [
    {
        title: 'Action',
        href: '/justTest',
    },
    {
        title: 'Adventure',
        href: '/justTest',
    },
    {
        title: 'Comedy',
        href: '/justTest',
    },
    {
        title: 'Horror',
        href: '/justTest',
    },
    {
        title: 'Romance',
        href: '/justTest',
    },
    {
        title: 'Shoujo',
        href: '/justTest',
    },
    {
        title: 'Slice of Life',
        href: '/justTest',
    },
    {
        title: 'Drama',
        href: '/justTest',
    },
    {
        title: 'Xem thêm',
        href: '/justTest',
    },
];
