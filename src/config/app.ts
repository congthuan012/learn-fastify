const PORT = Number.parseInt(process.env.PORT||'3500');
const APP_KEY = process.env.APP_KEY || 'supersecretkey';
const HASH_SALT = 10 
export default {
      PORT,
      APP_KEY,
      HASH_SALT,
}