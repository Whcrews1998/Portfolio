import { defaults } from "autoprefixer";
import { MODERN_BROWSERSLIST_TARGET } from "next/dist/shared/lib/constants";
import axios from 'axios';

// const [fact, setFact] = useState('');
// const [loading, setLoading] = useState(true);

export default axios.create({
    baseURL: 'https://api.api-ninjas.com/',
    headers: {
        'X-Api-Key': 'qtqT7ytMI55T3Jq1/YndtA==OjdAsCKwmm1iS0qa'
    }
});