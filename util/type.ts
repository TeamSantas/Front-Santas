export type ResponseData<T> = {
    body: {
        data: T;
    };
};

// Post types ------------------------------------
export interface PostData {
    userId: string;
    id: string;
    title: string;
    body: string;
}
