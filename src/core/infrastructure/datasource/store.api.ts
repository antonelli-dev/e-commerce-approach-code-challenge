import { HttpMethod } from '@/core/infrastructure/enums/http-method.enum';

export const storeApi = async (method: HttpMethod, endpoint: string, cache: RequestCache  = 'force-cache'): Promise<Response> => {

    const baseUri: string | undefined = process.env.REAL_ECOMMERCE_API;
    const fullUri: string = `${baseUri}/${endpoint}`;

    const request = await fetch(fullUri, {
        cache: cache,
        method: method,
        headers: {
            "Content-Type": "application/json"
        }
    });

    const response: Response = request;
    return response;
};

