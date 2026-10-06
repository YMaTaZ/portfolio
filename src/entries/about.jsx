import { createRoot } from 'react-dom/client';
import '../shared/base.css';
import '../site/site.css';
import Page from '../pages/About.jsx';

createRoot(document.getElementById('root')).render(<Page />);
