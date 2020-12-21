import axios from "axios";
import qs from "qs";

axios.defaults.url = 'http://127.0.0.1:8888/';

export function smartFile(url, name) {
    return axios.post(
        url,
        qs.stringify({
            chunk: encodeURIComponent(result),
            filename: name,
        }),
        {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
        }
    );
}

