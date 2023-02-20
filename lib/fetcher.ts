import useSWR from 'swr';

const baseURL = "http://localhost:3000/";

const response = (args: RequestInfo | URL) => fetch(args).then(res => res.json())

export default function Fetcher(endpoint: any){
    const { data, error } = useSWR(`${baseURL}${endpoint}`, response)
    return {
        data,
        isLoading : !error && !data,
        isError : error
    }
}