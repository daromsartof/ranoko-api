import slugify from 'slugify';

const createSlug = (name) => {
    return slugify(name+ Math.random() + name.length, {
        lower: true,      
        strict: true,     
        replacement: '-', 
    });
};

export default {
    createSlug
}