import axios from 'axios';

const PostCalls = {
  getPosts: async (params) => {
    const response = await axios.get('https://todowhisky.es/wp-json/wp/v2/posts', {
      params: {...params }
    })
    return response;
  }
};

export default PostCalls;