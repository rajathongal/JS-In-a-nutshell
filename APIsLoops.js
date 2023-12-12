const axios = require('axios');

(async() => {
    try {
        const maxLength = 10;
        let currentCount = 0;
        let offset = 2;
        let results = [];
        while(currentCount < maxLength) {

            try {
                const apiResponse = await axios.get(`https://api.etherscan.io/api?module=account&action=txlist&address=0xc5102fE9359FD9a28f877a67E36B0F050d81a3CC&startblock=0&endblock=99999999&page=1&offset=2&sort=asc`);
                currentCount += 2;
                offset += 2;
                results.push(...apiResponse.data.result);
            } catch(error) {
                console.log(error)
            }
        }

        console.log(results.length)
    } catch(error) {
        console.error(error);
    }
})();