import axios from 'axios';

const PostCalls = {
  getPosts: async (params) => {
    const response = await axios.get('https://todowhisky.es/wp-json/wp/v2/posts?_embed=1', {
      params: {...params }
    })
    return response;
  },
  getCategories: async (params) => {
    const response = await axios.get('https://todowhisky.es/wp-json/wp/v2/categories?parent=3123', {
      params: {...params }
    })
    return response;
  }
};

export default PostCalls;