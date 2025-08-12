type MainCategory = {
  imageUrl: string;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  discount?: number;
};

export const mockContentItems: MainCategory[] = [
  {
    name: "Golden Dragon Necklace",
    imageUrl:
      "https://retailjewellerindia.com/wp-content/uploads/2020/01/3t8a7815-2-1024x556.jpg",
    category: "necklacesPendants",
    price: 947.39,
    rating: 5,
    reviewCount: 5,
  },
  {
    name: "Thai Royal Ring",
    imageUrl:
      "https://retailjewellerindia.com/wp-content/uploads/2020/01/3t8a7815-2-1024x556.jpg",
    category: "rings",
    price: 922.56,
    rating: 5,
    reviewCount: 5,
  },
  {
    name: "Emerald Stud Earrings",
    imageUrl:
      "https://retailjewellerindia.com/wp-content/uploads/2020/01/3t8a7815-2-1024x556.jpg",
    category: "earrings",
    price: 509.22,
    rating: 4,
    reviewCount: 5,
  },
  {
    name: "Traditional Thai Bracelet",
    imageUrl:
      "https://retailjewellerindia.com/wp-content/uploads/2020/01/3t8a7815-2-1024x556.jpg",
    category: "accessories",
    price: 93.3,
    originalPrice: 729.94,
    rating: 5,
    reviewCount: 5,
    discount: 87,
  },
  {
    name: "Golden Lotus Earrings",
    imageUrl:
      "https://retailjewellerindia.com/wp-content/uploads/2020/01/3t8a7815-2-1024x556.jpg",
    category: "earrings",
    price: 556.96,
    rating: 5,
    reviewCount: 5,
  },
  {
    name: "Pearl Diamond Ring",
    imageUrl:
      "https://retailjewellerindia.com/wp-content/uploads/2020/01/3t8a7815-2-1024x556.jpg",
    category: "pearls",
    price: 223.99,
    rating: 5,
    reviewCount: 5,
  },
  {
    name: "Pearl Diamond Ring 2",
    imageUrl:
      "https://retailjewellerindia.com/wp-content/uploads/2020/01/3t8a7815-2-1024x556.jpg",
    category: "pearls",
    price: 223.99,
    rating: 5,
    reviewCount: 5,
  },
];
