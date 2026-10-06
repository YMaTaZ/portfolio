import { createRoot } from 'react-dom/client';
import '../shared/base.css';
import '../site/site.css';
import Page from '../pages/Home.jsx';

createRoot(document.getElementById('root')).render(<Page />);
