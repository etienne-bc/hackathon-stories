import { useEffect, useState } from 'react';
import { FetchStatusEnum } from '../enums/fetch-status.enum';
import { useFetchResponse } from '../interfaces/use-fetch-response.interface';

export function useFetch<T>(url: string): useFetchResponse<T> {
    const [status, setStatus] = useState<FetchStatusEnum>(FetchStatusEnum.idle);
    const [data, setData] = useState<T | undefined>(undefined);

    useEffect(() => {
        if (!url) return;
        const fetchData = async () => {
            setStatus(FetchStatusEnum.fetching);
            const response = await fetch(url);
            const responseData = (await response.json()) as T;
            setStatus(FetchStatusEnum.fetched);
            setData(responseData);
        };

        fetchData();
    }, [url]);

    return { status, data };
}
