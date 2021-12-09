import { FetchStatusEnum } from '../enums/fetch-status.enum';

export interface useFetchResponse<T> {
    status: FetchStatusEnum;
    data?: T;
}
