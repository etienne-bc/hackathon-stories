export const useQueryParams = (key: string): string => {
    const params = new URLSearchParams(window.location.search);
    return params.get(key) || '';
};
