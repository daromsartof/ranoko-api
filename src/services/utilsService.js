import slugify from 'slugify';

const createSlug = (name) => {
    return slugify(name, {
        lower: true,      
        strict: true,     
        replacement: '-', 
    });
};

export default {
    createSlug
}