import { Item } from '../types/item';

// Sample items - Replace with your actual inventory
export const mockItems: Item[] = [
  {
    id: 'BF-001',
    status: 'available',
    dateAdded: '2024-12-14',
    name: {
      en: 'Herman Miller Aeron Office Chair',
      es: 'Silla de Oficina Herman Miller Aeron'
    },
    description: {
      en: 'Ergonomic office chair in excellent condition. Fully adjustable with lumbar support. Perfect for long work hours.',
      es: 'Silla de oficina ergonómica en excelente condición. Completamente ajustable con soporte lumbar. Perfecta para largas horas de trabajo.'
    },
    brand: 'Herman Miller',
    category: 'furniture',
    condition: 'used',
    color: {
      en: 'Black',
      es: 'Negro'
    },
    dimensions: 'H: 90-100cm L: 65cm D: 65cm',
    retailPrice: 18000,
    askPrice: 8500,
    discountPercent: 53,
    photos: [
      'https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=800',
      'https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?w=800'
    ],
    retailPhoto: 'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?w=800',
    retailLink: 'https://www.hermanmiller.com/products/seating/office-chairs/aeron-chairs/',
    seller: 'Bri',
    whatsappNumber: '+525512345678', // Replace with your actual number
    negotiable: false
  },
  {
    id: 'CL-001',
    status: 'available',
    dateAdded: '2024-12-14',
    name: {
      en: 'Levi\'s 501 Original Jeans',
      es: 'Jeans Levi\'s 501 Original'
    },
    description: {
      en: 'Classic straight fit jeans, barely worn. Size 32x32. No signs of wear, perfect condition.',
      es: 'Jeans clásicos de corte recto, apenas usados. Talla 32x32. Sin signos de desgaste, perfecta condición.'
    },
    brand: 'Levi\'s',
    category: 'clothing',
    condition: 'used',
    color: {
      en: 'Dark Blue Denim',
      es: 'Mezclilla Azul Oscuro'
    },
    dimensions: 'Size: 32x32 / Talla: 32x32',
    retailPrice: 1500,
    askPrice: 750,
    discountPercent: 50,
    photos: [
      'https://images.unsplash.com/photo-1542272604-787c3835535d?w=800',
      'https://images.unsplash.com/photo-1604176354204-9268737828e4?w=800'
    ],
    seller: 'Bri',
    whatsappNumber: '+525512345678',
    negotiable: true
  },
  {
    id: 'EL-001',
    status: 'available',
    dateAdded: '2024-12-14',
    name: {
      en: 'Sony WH-1000XM4 Headphones',
      es: 'Audífonos Sony WH-1000XM4'
    },
    description: {
      en: 'Industry-leading noise canceling headphones. Barely used, includes original case and cables. Amazing sound quality.',
      es: 'Audífonos con cancelación de ruido líder en la industria. Apenas usados, incluye estuche y cables originales. Calidad de sonido increíble.'
    },
    brand: 'Sony',
    category: 'electronics',
    condition: 'used',
    color: {
      en: 'Black',
      es: 'Negro'
    },
    retailPrice: 6500,
    askPrice: 4200,
    discountPercent: 35,
    photos: [
      'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=800',
      'https://images.unsplash.com/photo-1613040809024-b4ef7ba99bc3?w=800',
      'https://images.unsplash.com/photo-1599669454699-248893623440?w=800'
    ],
    retailPhoto: 'https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=800',
    retailLink: 'https://electronics.sony.com/audio/headphones/',
    seller: 'Bri',
    whatsappNumber: '+525512345678',
    negotiable: true
  }
];
