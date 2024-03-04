import { getValidNumber } from "./lib/getValidNumber"

export const MAX_NB_PAGES = getValidNumber(process.env.NEXT_PUBLIC_MAX_NB_PAGES, 1, 8, 1)

// TODO: this one should be dynamic and depend upon the page layout type
export const NB_PANELS_PER_PAGE = 4

export const NB_TOTAL_PANELS_TO_GENERATE = MAX_NB_PAGES * NB_PANELS_PER_PAGE