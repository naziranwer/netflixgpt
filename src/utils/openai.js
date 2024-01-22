import OpenAI from 'openai';
import { OPEN_AI_KEY } from './constants';

console.log("open key",OPEN_AI_KEY);
const openai = new OpenAI({
  
  apiKey: OPEN_AI_KEY, // This is the default and can be omitted
  dangerouslyAllowBrowser:true
});



export default openai;