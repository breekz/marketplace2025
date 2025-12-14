import { Language } from '../types/item';

export const translations = {
  // Landing Page
  landing: {
    title: { en: 'Swipe & Discover', es: 'Desliza y Descubre' },
    subtitle: { 
      en: 'Your next treasure is just a swipe away. Browse unique items from people in your community.',
      es: 'Tu próximo tesoro está a solo un desliz. Explora artículos únicos de personas en tu comunidad.'
    },
    startButton: { en: 'Start Exploring', es: 'Comenzar a Explorar' }
  },
  
  // Item Card
  card: {
    tapDetails: { en: 'Tap for details', es: 'Toca para detalles' },
    tapFlipBack: { en: 'Tap to flip back', es: 'Toca para voltear' },
    price: { en: 'Price', es: 'Precio' },
    condition: { en: 'Condition', es: 'Condición' },
    category: { en: 'Category', es: 'Categoría' },
    seller: { en: 'Seller', es: 'Vendedor' },
    description: { en: 'Description', es: 'Descripción' },
    new: { en: 'NEW', es: 'NUEVO' },
    used: { en: 'USED', es: 'USADO' },
    firmPrice: { en: 'Firm Price', es: 'Precio Firme' },
    negotiable: { en: 'Negotiable', es: 'Negociable' },
    discount: { en: '% OFF', es: '% DESC' },
    myPhotos: { en: 'My Photos', es: 'Mis Fotos' },
    compare: { en: 'Compare', es: 'Comparar' },
    beforeAfter: { en: 'Before / After', es: 'Antes / Después' }
  },
  
  // Bottom Sheet
  sheet: {
    title: { en: 'Item Details', es: 'Detalles del Artículo' },
    brand: { en: 'Brand', es: 'Marca' },
    color: { en: 'Color', es: 'Color' },
    dimensions: { en: 'Dimensions', es: 'Dimensiones' },
    retailPrice: { en: 'Retail Price', es: 'Precio Minorista' },
    askingPrice: { en: 'Asking Price', es: 'Precio Solicitado' },
    viewRetail: { en: 'View Retail Page', es: 'Ver Página Minorista' },
    contactWhatsApp: { en: 'Contact Seller on WhatsApp', es: 'Contactar Vendedor por WhatsApp' },
    whatsappMessage: {
      en: "Hi! I'm interested in the",
      es: "¡Hola! Me interesa el/la"
    }
  },
  
  // Menu View
  menu: {
    title: { en: 'Browse All Items', es: 'Ver Todos los Artículos' },
    filterByCategory: { en: 'Filter by Category', es: 'Filtrar por Categoría' },
    all: { en: 'All', es: 'Todo' },
    available: { en: 'Available', es: 'Disponible' },
    sold: { en: 'Sold', es: 'Vendido' },
    pending: { en: 'Pending', es: 'Pendiente' }
  },
  
  // End Card
  end: {
    title: { en: "That's All for Now!", es: '¡Eso es Todo por Ahora!' },
    subtitle: { 
      en: 'You've seen all available items. New items are added weekly, so check back soon!',
      es: 'Has visto todos los artículos disponibles. Se agregan nuevos artículos semanalmente, ¡vuelve pronto!'
    },
    restart: { en: 'Start Over', es: 'Empezar de Nuevo' },
    viewAll: { en: 'View All Items', es: 'Ver Todos los Artículos' }
  },
  
  // Buttons
  buttons: {
    close: { en: 'Close', es: 'Cerrar' },
    next: { en: 'Next', es: 'Siguiente' },
    previous: { en: 'Previous', es: 'Anterior' }
  }
};

export type TranslationKey = keyof typeof translations;
