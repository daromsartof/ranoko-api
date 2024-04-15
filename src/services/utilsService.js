import slugify from 'slugify';

const createSlug = (name) => {
    return slugify(name+ Math.random() + name.length, {
        lower: true,      
        strict: true,     
        replacement: '-', 
    });
};

const isGrated = (role,requiredRole) => role && JSON.parse(role).includes(requiredRole)

const getRanoPriceByNumber = (number) => {
    return (process.env.ON_RANO_PRICE || 50) * number
}
export default {
    createSlug,
    isGrated,
    getRanoPriceByNumber
}