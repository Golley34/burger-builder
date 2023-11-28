export const parseSearch = (searchParams: URLSearchParams) => {
    return Object.fromEntries(searchParams)
}