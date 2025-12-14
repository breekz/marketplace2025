// Enhanced Item type for bilingual marketplace
export interface Item {
  // Core
  id: string;
  status: 'available' | 'sold' | 'pending';
  dateAdded: string; // YYYY-MM-DD
  
  // Bilingual content
  name: {
    en: string;
    es: string;
  };
  description: {
    en: string;
    es: string;
  };
  
  // Details
  brand?: string;
  category: Category;
  condition: 'new' | 'used';
  color?: {
    en: string;
    es: string;
  };
  dimensions?: string;
  
  // Pricing
  retailPrice?: number; // MXN
  askPrice: number; // MXN
  discountPercent?: number;
  
  // Images (1-5)
  photos: string[];
  retailPhoto?: string; // For before/after comparison
  retailLink?: string;
  
  // Contact
  seller: string;
  whatsappNumber: string;
  
  // Negotiation
  negotiable: boolean;
}

export type Language = 'en' | 'es';

export type Category = 
  | 'furniture'
  | 'clothing'
  | 'electronics'
  | 'kitchen'
  | 'bathroom'
  | 'tools'
  | 'sports'
  | 'books'
  | 'decor'
  | 'office'
  | 'miscellaneous';

export const CATEGORIES: Record<Category, { en: string; es: string }> = {
  furniture: { en: 'Furniture', es: 'Muebles' },
  clothing: { en: 'Clothing', es: 'Ropa' },
  electronics: { en: 'Electronics', es: 'Electrónicos' },
  kitchen: { en: 'Kitchen & Dining', es: 'Cocina y Comedor' },
  bathroom: { en: 'Bathroom & Personal', es: 'Baño y Personal' },
  tools: { en: 'Tools & DIY', es: 'Herramientas y Bricolaje' },
  sports: { en: 'Sports & Outdoors', es: 'Deportes y Exterior' },
  books: { en: 'Books & Media', es: 'Libros y Medios' },
  decor: { en: 'Home Decor', es: 'Decoración' },
  office: { en: 'Office Supplies', es: 'Artículos de Oficina' },
  miscellaneous: { en: 'Miscellaneous', es: 'Varios' }
};
