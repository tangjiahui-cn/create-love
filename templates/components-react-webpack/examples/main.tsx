import { createRoot } from 'react-dom/client'
import App from './src/index'
import '@/_theme/base.theme.css'

createRoot(document.getElementById('root') as any).render(<App />)
