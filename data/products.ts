export interface Product {
    id: string;
    name: string;
    description: string;
    fullDescription: string;
    features: string[];
    specs: Record<string, string>;
    price: string;
    image: string;
    images: string[];
    category: string;
    categorySlug: string;
    badge?: string;
    isLarge?: boolean;
    isTall?: boolean;
}

export const PRODUCTS: Product[] = [
    {
        id: "aerofit-treadmill",
        name: "Aerofit Treadmill",
        description: "Premium treadmill designed for commercial or advanced home workouts.",
        fullDescription: "The flagship Aerofit series brings gym-level quality to your home. Featuring advanced shock absorption and a powerful motor capable of long, high-intensity runs. Includes a high-definition console and heart rate sensors for elite performance tracking.",
        features: ["Auto incline (0-15%)", "Superior cushioning technology", "Touch console with apps", "Built-in Hi-Fi speakers"],
        specs: { "Brand": "Aerofit", "Motor": "3.0 HP AC", "Speed": "Up to 18 km/h", "Max Weight": "130kg" },
        price: "₹48,000",
        image: "https://images.unsplash.com/photo-1571008887538-b36bb32f4571?q=80&w=2070&auto=format&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1571008887538-b36bb32f4571?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1594882645126-14020914d58d?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1541600391548-a152ee70b33b?q=80&w=2070&auto=format&fit=crop"
        ],
        category: "Cardio",
        categorySlug: "cardio",
        isLarge: true,
        badge: "Premium"
    },
    {
        id: "cross-trainer",
        name: "Cross Trainer",
        description: "Full-body cardio machine for endurance and weight loss training.",
        fullDescription: "The Body Bold Cross Trainer is engineered for intensive cardiovascular workouts. It provides a smooth, low-impact motion that targets both upper and lower body muscle groups simultaneously, ensuring maximum calorie burn.",
        features: ["Low-impact movement", "Dual-action handlebars", "LCD Display", "Adjustable magnetic tension"],
        specs: { "Type": "Manual", "Usage": "Home", "Max User Weight": "100kg", "Display": "Time, Speed, Distance" },
        price: "₹12,500",
        image: "https://images.unsplash.com/photo-1518611012118-296072bb5704?q=80&w=2070&auto=format&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1518611012118-296072bb5704?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1538370965046-79c0d6907d47?q=80&w=2070&auto=format&fit=crop"
        ],
        category: "Cardio",
        categorySlug: "cardio",
        isTall: true
    },
    {
        id: "air-bike",
        name: "Air Bike",
        description: "High-resistance air bike for intense cardio workouts.",
        fullDescription: "Our Stationery Air Bike is the ultimate tool for HIIT training. The air resistance system scales with your effort, making it suitable for beginners and pro athletes alike. The moving handlebars provide a full-body conditioning experience.",
        features: ["Dynamic air resistance", "Full body workout", "Comfortable saddle", "Digital tracking console"],
        specs: { "Drive": "Chain", "Monitor": "Speed, Time, Distance, Calories", "Suitability": "Home Use" },
        price: "₹6,100",
        image: "https://images.unsplash.com/photo-1599058917232-d750c1859d7c?q=80&w=2070&auto=format&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1599058917232-d750c1859d7c?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1605296867424-35fc25c9212a?q=80&w=2070&auto=format&fit=crop"
        ],
        category: "Cardio",
        categorySlug: "cardio"
    },
    {
        id: "gym-rods",
        name: "Gym Rods",
        description: "Steel rods for barbell and weightlifting exercises.",
        fullDescription: "High-tensile steel rods with hard chrome finishing. Available in various lengths including 3ft, 4ft, 5ft, and 7ft Olympic sizes. Deep knurling ensures a secure grip for heavy bench presses and deadlifts.",
        features: ["Solid steel construction", "Chrome plated finish", "Star bolts included", "Precision knurled grip"],
        specs: { "Price": "₹330 onwards", "Material": "MS Steel", "Coating": "Hard Chrome", "Ends": "Threaded / Plain" },
        price: "₹330+",
        image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1541534741688-6078c64b5ca5?q=80&w=2070&auto=format&fit=crop"
        ],
        category: "Strength",
        categorySlug: "strength"
    },
    {
        id: "orbitrek-weight-loss",
        name: "Orbitrek for Weight Loss",
        description: "Smooth elliptical-style trainer for low-impact fat-burning workouts.",
        fullDescription: "Specifically designed for effective weight management, the Orbitrek combines the best of a treadmill and a stepper. It burns more calories in less time without straining your knees or ankles.",
        features: ["Weight loss focused design", "Variable resistance knob", "Quiet belt-drive operation", "Sturdy steel frame"],
        specs: { "Mechanism": "Mechanical Resistance", "Max Weight": "110kg", "Portability": "Easy-to-move wheels" },
        price: "₹11,500",
        image: "https://images.unsplash.com/photo-1534367507873-d2b7e2495ea9?q=80&w=2070&auto=format&fit=crop",
        images: ["https://images.unsplash.com/photo-1534367507873-d2b7e2495ea9?q=80&w=2070&auto=format&fit=crop"],
        category: "Cardio",
        categorySlug: "cardio"
    },
    {
        id: "orbitrek-standard",
        name: "Orbitrek (Adjustable)",
        description: "Adjustable elliptical machine suitable for home and gym use.",
        fullDescription: "A versatile elliptical trainer that adapts to your fitness level. Features multi-grip handlebars to target different muscle groups during your workout session. Ideal for full-body toning.",
        features: ["Adjustable intensity level", "Multi-grip ergonomic handles", "Smooth glide mechanism", "Pulse sensors"],
        specs: { "Price Range": "₹7,500 – ₹14,500", "Assembly": "Easy Setup", "Dimensions": "Standard Home Fit" },
        price: "₹11,000",
        image: "https://images.unsplash.com/photo-1574673130381-c3070446dd26?q=80&w=2070&auto=format&fit=crop",
        images: ["https://images.unsplash.com/photo-1574673130381-c3070446dd26?q=80&w=2070&auto=format&fit=crop"],
        category: "Cardio",
        categorySlug: "cardio",
        badge: "Versatile"
    },
    {
        id: "treadmill-basic",
        name: "Motorized Treadmill",
        description: "Motorized treadmill for walking, jogging, and light running.",
        fullDescription: "Start your running journey with our essential motorized treadmill. Built for reliability and ease of use, it's perfect for maintaining an active lifestyle from the comfort of your home.",
        features: ["High-torque DC motor", "Manual 3-level incline", "Safety emergency key", "Foldable with soft-drop"],
        specs: { "Speed": "1.0 - 14 km/h", "Motor": "2.0 HP DC", "User Weight": "100kg" },
        price: "₹9,990",
        image: "https://images.unsplash.com/photo-1594737625785-a239f2229b95?q=80&w=2070&auto=format&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1594737625785-a239f2229b95?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1574379812951-ef801330737e?q=80&w=2070&auto=format&fit=crop"
        ],
        category: "Cardio",
        categorySlug: "cardio"
    },
    {
        id: "aerofit-elliptical",
        name: "Aerofit Elliptical Trainer",
        description: "High-quality elliptical machine for smooth and silent cardio sessions.",
        fullDescription: "Experience silent operation and fluid motion with the Aerofit Elliptical. Engineered for performance enthusiasts who demand the best in ergonomic design and durability.",
        features: ["Silent magnetic resistance", "Heavy balanced flywheel", "Zero-impact workout", "Whisper-quiet technology"],
        specs: { "Price Range": "₹19,000 – ₹35,000", "Usage": "Semi-Commercial", "Stride Length": "20 inch" },
        price: "₹27,000",
        image: "https://images.unsplash.com/photo-1571019623452-c6ef7a0bb918?q=80&w=2070&auto=format&fit=crop",
        images: ["https://images.unsplash.com/photo-1571019623452-c6ef7a0bb918?q=80&w=2070&auto=format&fit=crop"],
        category: "Cardio",
        categorySlug: "cardio"
    },
    {
        id: "weight-plates",
        name: "Pro Weight Plates",
        description: "Standard cast iron weight plates for balanced strength training.",
        fullDescription: "Durable cast iron weight plates for all your lifting needs. Accurate weight measurements and standard hole sizing make them perfect for any gym rod or machine.",
        features: ["Solid cast iron", "Clear weight branding", "Rust-protective coat", "Anti-skid grip design"],
        specs: { "Price": "₹80 / KG", "Hole Dia": "28mm / 50mm", "Finish": "Black Matte Paint" },
        price: "₹80 / KG",
        image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=2070&auto=format&fit=crop"
        ],
        category: "Strength",
        categorySlug: "strength"
    },
    {
        id: "dumbbell-set",
        name: "Dumbbell & Weights Range",
        description: "A comprehensive range of dumbbells suitable for all home fitness levels.",
        fullDescription: "A complete range of dumbbells for home enthusiasts. Flexible options from individual pairs to comprehensive sets, perfect for building a dream home gym.",
        features: ["Compact size", "Ergonomic standard grip", "Wide weight variety", "Affordable pricing"],
        specs: { "Price Range": "₹150 – ₹220", "Type": "Fixed Weighted", "Grip": "PVC/Steel Mix" },
        price: "₹150 – ₹220",
        image: "https://images.unsplash.com/photo-1583454110551-21f2fa2ec617?q=80&w=2070&auto=format&fit=crop",
        images: ["https://images.unsplash.com/photo-1583454110551-21f2fa2ec617?q=80&w=2070&auto=format&fit=crop"],
        category: "Strength",
        categorySlug: "strength"
    },
    {
        id: "rubber-dumbbells",
        name: "Rubber Dumbbells (Home)",
        description: "Rubber-coated dumbbells for safe and quiet strength training.",
        fullDescription: "Our rubber dumbbells protect your floors and reduce noise. specifically designed for apartment and home environments where quiet floor safety is a priority.",
        features: ["Floor and surface protection", "Noiseless lifting", "Ergonomic grip design", "Premium virgin rubber"],
        specs: { "Price": "₹100 / KG", "Core": "Solid Iron", "Coating": "Pure Virgin Rubber" },
        price: "₹100 / KG",
        image: "https://images.unsplash.com/photo-1638536532686-d610adfc8e5c?q=80&w=2070&auto=format&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1638536532686-d610adfc8e5c?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1541534741688-6078c64b5ca5?q=80&w=2070&auto=format&fit=crop"
        ],
        category: "Strength",
        categorySlug: "strength"
    },
    {
        id: "standard-dumbbells",
        name: "Standard Dumbbells",
        description: "Classic steel dumbbells for traditional strength and muscle building.",
        fullDescription: "Traditional steel dumbbells that are virtually indestructible. Perfect for heavy-duty lifting and classic bodybuilding routines. Used by pros worldwide.",
        features: ["Solid iron build", "Chrome polished finish", "Exact calibration", "Timeless design"],
        specs: { "Price": "₹140 / KG", "Material": "Iron/Steel", "Design": "Solid Round Head" },
        price: "₹140 / KG",
        image: "https://images.unsplash.com/photo-1546483875-ad9014c88eba?q=80&w=2070&auto=format&fit=crop",
        images: ["https://images.unsplash.com/photo-1546483875-ad9014c88eba?q=80&w=2070&auto=format&fit=crop"],
        category: "Strength",
        categorySlug: "strength"
    },
    {
        id: "heavy-dumbbells",
        name: "Dumbbells (Heavy Set)",
        description: "Industrial-grade dumbbells designed for serious heavy lifting.",
        fullDescription: "Built for major strength gains. these heavy-duty dumbbells feature reinforced steel cores to handle extreme weights without rattling or structural damage.",
        features: ["Heavy load capacity", "Elite Pro series", "Triple-secure heads", "Industrial build quality"],
        specs: { "Price": "₹150 / KG", "Max Weight Avail": "60kg", "Type": "Hexagonal Grip" },
        price: "₹150 / KG",
        image: "https://images.unsplash.com/photo-1586401100295-7a8096fd231a?q=80&w=2070&auto=format&fit=crop",
        images: ["https://images.unsplash.com/photo-1586401100295-7a8096fd231a?q=80&w=2070&auto=format&fit=crop"],
        category: "Strength",
        categorySlug: "strength"
    },
    {
        id: "color-dumbbells",
        name: "Aerobic Dumbbell Set",
        description: "Vibrant multi-weight dumbbell set for home yoga and aerobic routines.",
        fullDescription: "Bright, colorful, and fun range of dumbbells for light routines, yoga, and aerobics. Soft vinyl coating makes them comfortable for long held positions.",
        features: ["Vibrant identifying colors", "Safe soft-touch coating", "Easy ergonomic grip", "Complete aesthetic set"],
        specs: { "Price": "₹250 / KG", "Material": "Vinyl Coated Solid Iron", "Category": "Aerobics / Yoga" },
        price: "₹250 / KG",
        image: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=2070&auto=format&fit=crop",
        images: ["https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=2070&auto=format&fit=crop"],
        category: "Strength",
        categorySlug: "strength"
    },
    {
        id: "treadmill-service",
        name: "Treadmill & Gym Services",
        description: "Professional repair and preventative maintenance for all fitness machines.",
        fullDescription: "Expert repair and annual maintenance services for all major brands of fitness equipment. We fix motor issues, treadmill belt slippage, and electronic sensor errors in Hyderabad.",
        features: ["Qualified technician visit", "100% genuine spares", "On-site diagnostic repair", "Warranty on all services"],
        specs: { "Visit Charge": "₹300", "Base Service Starts": "₹800", "Location": "Hyderabad/Secunderabad" },
        price: "₹800",
        image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1558017487-06bf9f82613a?q=80&w=2070&auto=format&fit=crop"
        ],
        category: "Services",
        categorySlug: "services",
        badge: "Expert Solution"
    },
];

export const BUSINESS_DETAILS = {
    name: "Body Bold Fitness Store",
    whatsappNumber: "919392488297",
    address: "6-22/2, 1st floor Sai Nagar colony, beside A1 Bawarchi, Near HS Dhargha Bus Stop, Shaikpet, Hyderabad, Telangana 500104",
    email: "bodybolt2020@gmail.com",
};

export function getWhatsAppUrl(productName: string) {
    const message = `Hi, I'm interested in ${productName}. Can you share more details?`;
    return `https://wa.me/${BUSINESS_DETAILS.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
