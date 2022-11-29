import axios from 'axios';
 
const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos' , {
        headers : {
            Authorization: 'Client-ID SpVlnYH7qn_w6ly2NWy1-tc04Ge_H4bvzi9uAclBwDQ',
        },
        params : {
            query : term,
        },
    });
    console.log(response.data);
    return response.data.results
}; 

export default searchImages;