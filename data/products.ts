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
        name: "Aerofit Treadmill - Heavy Duty",
        description: "Premium commercial-grade treadmill for elite performance and home fat loss in Hyderabad.",
        fullDescription: "Experience the pinnacle of home fitness with the Aerofit treadmill series, available at Body Bold Fitness Shaikpet. Designed for long-duration running and intensive gym sessions, it features advanced multi-cushioning technology to protect your joints. Whether you are prepping for a marathon or starting a weight loss journey in Hyderabad, this treadmill delivers professional gym quality directly to your doorstep.",
        features: ["Auto incline (0-15%) for hill training", "Superior shock absorption technology", "Smart console with integrated training apps", "High-power 3.0 HP AC Motor for continuous use"],
        specs: { "Brand": "Aerofit Original", "Motor": "3.0 HP AC (Peak 6.0 HP)", "Speed Range": "1.0 - 18 km/h", "Max User Weight": "130kg / 285lbs" },
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
        name: "Cross Trainer (Elliptical)",
        description: "Versatile 2-in-1 elliptical cross trainer for full-body conditioning.",
        fullDescription: "Maximize your workout efficiency with the Body Bold Cross Trainer. This machine offers a low-impact solution for joint-safe cardio, targeting your core, arms, and legs simultaneously. Perfect for home gyms in Hyderabad where space and performance are key.",
        features: ["Dual-action rhythmic movement", "Heavy-duty flywheel for smooth motion", "Digital LCD tracking console", "Compact design for modern Hyderabad apartments"],
        specs: { "Resistance": "Magnetic Adjustable", "Usage": "Home / Semi-Gym", "Max User Weight": "100kg", "Console": "Time, Speed, Odo, Calories" },
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
        name: "Air Bike with Moving Handles",
        description: "Intense HIIT cardio air bike for rapid calorie burning and cross-training.",
        fullDescription: "The Body Bold Air Bike uses wind resistance to provide an infinite level of challenge. The harder you pedal, the higher the resistance. Featuring synchronized handle movement, it’s the best tool for high-intensity interval training (HIIT) in your home gym setup.",
        features: ["Infinite air-based resistance", "Full-body synchronized workout", "Comfort-molded saddle", "Battery-powered LCD tracking"],
        specs: { "Mechanism": "Fan Resistance", "Monitor": "Speed, Time, Calories", "Suitability": "Home & Personal Studio" },
        price: "₹6,100",
        image: "https://images.unsplash.com/photo-1599058917232-d750c1859d7c?q=80&w=2070&auto=format&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1599058917232-d750c1859d7c?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1605296867424-35fc25c9212a?q=80&w=2070&auto=format&fit=crop"
        ],
        category: "Cardio",
        categorySlug: "cardio",
    },
    {
        id: "gym-rods",
        name: "Professional Gym Rods (Steel)",
        description: "High-grade steel rods for barbell training and weightlifting in Hyderabad.",
        fullDescription: "Upgrade your strength training with our high-tensile steel rods. Available at our Shaikpet store, these rods feature precision knurling for a superior grip and a hard chrome finish to prevent rust. Available in various lengths including Olympic 7ft, 5ft, and curls rods for home or gym use.",
        features: ["Solid reinforced steel", "Rust-resistant chrome plating", "Deep-cut knurled grip", "Standard and Olympic sizes available"],
        specs: { "Material": "Industrial MS Steel", "Coating": "Hard Chrome", "Sizes": "3ft to 7ft", "Location": "Body Bold Shaikpet" },
        price: "₹330+",
        image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1541534741688-6078c64b5ca5?q=80&w=2070&auto=format&fit=crop"
        ],
        category: "Strength",
        categorySlug: "strength",
    },
    {
        id: "orbitrek-weight-loss",
        name: "Orbitrek - Weight Loss Edition",
        description: "Effortless weight loss elliptical trainer for low-impact home cardio.",
        fullDescription: "Specifically engineered for rapid fat burning, the Orbitrek combines the best of a treadmill and a stepper. Its low-impact motion is perfect for anyone in Hyderabad looking to lose weight at home without risking knee or ankle injuries.",
        features: ["Targeted weight loss design", "Smooth dual-action motion", "Compact and easy to move", "Quiet operation for apartments"],
        specs: { "Type": "Manual Elliptical", "Max Weight": "110kg", "Portability": "Built-in wheels" },
        price: "₹11,500",
        image: "https://images.unsplash.com/photo-1534367507873-d2b7e2495ea9?q=80&w=2070&auto=format&fit=crop",
        images: ["https://images.unsplash.com/photo-1534367507873-d2b7e2495ea9?q=80&w=2070&auto=format&fit=crop"],
        category: "Cardio",
        categorySlug: "cardio",
    },
    {
        id: "orbitrek-standard",
        name: "Adjustable Orbitrek Trainer",
        description: "Professional elliptical trainer with adjustable tension for all fitness levels.",
        fullDescription: "The Body Bold Adjustable Orbitrek is a versatile cardio hub. Featuring a heavy-duty flywheel and multiple tension levels, it adapts to your progress. Ideal for full-body toning and endurance building in Hyderabad home gyms.",
        features: ["Customizable resistance levels", "Full-body synchronization handles", "Heart rate pulse sensors", "Built-in LCD fitness monitor"],
        specs: { "Resistance": "Manual Adjustable", "Usage": "Home / Semi-Gym", "Dimensions": "Standard Space-Saver" },
        price: "₹11,000",
        image: "https://images.unsplash.com/photo-1574673130381-c3070446dd26?q=80&w=2070&auto=format&fit=crop",
        images: ["https://images.unsplash.com/photo-1574673130381-c3070446dd26?q=80&w=2070&auto=format&fit=crop"],
        category: "Cardio",
        categorySlug: "cardio",
        badge: "Versatile"
    },
    {
        id: "treadmill-basic",
        name: "Motorized Home Treadmill",
        description: "Reliable motorized treadmill for active lifestyles and home cardio in Hyderabad.",
        fullDescription: "Get the best deal on home treadmills in Hyderabad. This motorized unit is built for durability and ease of use, featuring a foldable design that fits perfectly in smaller city apartments. Maintain your cardio fitness regardless of the weather.",
        features: ["Powerful DC Motor", "3-level manual incline adjustment", "Space-saving foldable design", "Emergency safety-stop key"],
        specs: { "Speed": "1.0 - 14 km/h", "Motor": "2.0 HP (Continuous)", "User Weight": "100kg" },
        price: "₹9,990",
        image: "https://images.unsplash.com/photo-1594737625785-a239f2229b95?q=80&w=2070&auto=format&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1594737625785-a239f2229b95?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1574379812951-ef801330737e?q=80&w=2070&auto=format&fit=crop"
        ],
        category: "Cardio",
        categorySlug: "cardio",
    },
    {
        id: "aerofit-elliptical",
        name: "Aerofit Elliptical - Semi Commercial",
        description: "Professional-grade elliptical trainer for smooth, joint-safe cardio in Hyderabad.",
        fullDescription: "The Aerofit Elliptical is our premium cardio offering for those who demand whisper-quiet performance. Featuring a heavy-precision flywheel and ergonomic stride technology, it provides an elite gym experience at home.",
        features: ["Precision-balanced flywheel", "Silent magnetic resistance", "Ergonomic 20-inch stride", "Commercial-grade durability"],
        specs: { "Stride": "20 inch", "Usage": "Semi-Commercial / Pro Home", "Resistance": "Magnetic Electronic" },
        price: "₹27,000",
        image: "https://images.unsplash.com/photo-1571019623452-c6ef7a0bb918?q=80&w=2070&auto=format&fit=crop",
        images: ["https://images.unsplash.com/photo-1571019623452-c6ef7a0bb918?q=80&w=2070&auto=format&fit=crop"],
        category: "Cardio",
        categorySlug: "cardio",
    },
    {
        id: "weight-plates",
        name: "Pro Cast Iron Weight Plates",
        description: "Standard industrial-grade cast iron weight plates for heavy strength training.",
        fullDescription: "Build your strength with our precision-calibrated cast iron weight plates. These standard 28mm-50mm hole plates are designed for serious lifters in Hyderabad who value durability and accuracy. Perfect for all standard rods and home gym benches.",
        features: ["High-density cast iron build", "Embossed KG markings for easy ID", "Premium black anti-rust coating", "Standard internal diameter fit"],
        specs: { "Price": "₹80 / KG", "Fit": "Standard & Olympic", "Material": "Pure Iron", "Finish": "Matte Power-Coat" },
        price: "₹80 / KG",
        image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=2070&auto=format&fit=crop"
        ],
        category: "Strength",
        categorySlug: "strength",
    },
    {
        id: "dumbbell-set",
        name: "Home Gym Dumbbell Sets",
        description: "Compact and versatile dumbbell sets for full-body home workouts.",
        fullDescription: "The perfect start to your home gym in Hyderabad. Our range of entry-level dumbbells is designed for high-repetition workouts and toning. Affordable, durable, and available for immediate pickup at Shaikpet.",
        features: ["Compact space-saving design", "Ergonomic textured handles", "Range of weight options", "Highly affordable home pricing"],
        specs: { "Price Range": "₹150 – ₹220", "Materials": "Solid Iron / High-Grade PVC", "Grips": "Knurled Steel" },
        price: "₹150 – ₹220",
        image: "https://images.unsplash.com/photo-1583454110551-21f2fa2ec617?q=80&w=2070&auto=format&fit=crop",
        images: ["https://images.unsplash.com/photo-1583454110551-21f2fa2ec617?q=80&w=2070&auto=format&fit=crop"],
        category: "Strength",
        categorySlug: "strength",
    },
    {
        id: "rubber-dumbbells",
        name: "Silent Rubber-Coated Dumbbells",
        description: "Floor-safe rubber dumbbells for quiet and protective home training.",
        fullDescription: "Save your floors and keep your workout silent with our premium rubber-coated dumbbells. Ideal for apartment living in Hyderabad, these dumbbells feature a solid iron core with a thick protective rubber shell to reduce noise and impact.",
        features: ["Full floor-safe protection", "Anti-noise impact technology", "Slip-resistant ergonomic handles", "Clean finish virgin rubber material"],
        specs: { "Price": "₹100 / KG", "Usage": "Indoor / Apartment Fit", "Durability": "Heavy-Duty Shell" },
        price: "₹100 / KG",
        image: "https://images.unsplash.com/photo-1638536532686-d610adfc8e5c?q=80&w=2070&auto=format&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1638536532686-d610adfc8e5c?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1541534741688-6078c64b5ca5?q=80&w=2070&auto=format&fit=crop"
        ],
        category: "Strength",
        categorySlug: "strength",
    },
    {
        id: "standard-dumbbells",
        name: "Classic Steel Dumbbells (Solid)",
        description: "Indestructible solid steel dumbbells for traditional bodybuilding and strength training.",
        fullDescription: "Built for the old-school bodybuilding enthusiast. Our solid steel dumbbells are virtually indestructible and precisely calibrated for heavy lifting. Available for delivery across Hyderabad or pickup at our Shaikpet showroom.",
        features: ["Precision-calibrated solid iron", "Highly durable chrome finish", "Classic round-head design", "Non-slip textured steel grip"],
        specs: { "Price": "₹140 / KG", "Material": "Industrial Solid Iron", "Grip": "Diamond-Cut Knurling" },
        price: "₹140 / KG",
        image: "https://images.unsplash.com/photo-1546483875-ad9014c88eba?q=80&w=2070&auto=format&fit=crop",
        images: ["https://images.unsplash.com/photo-1546483875-ad9014c88eba?q=80&w=2070&auto=format&fit=crop"],
        category: "Strength",
        categorySlug: "strength",
    },
    {
        id: "heavy-dumbbells",
        name: "Industrial Heavyweight Dumbbells",
        description: "Reinforced steel dumbbells for pro-level muscle building and heavy lifting.",
        fullDescription: "For the serious athlete in Hyderabad. our heavy-duty series features machine-welded steel cores and reinforced heads to withstand extreme training sessions. These are the gold standard for heavy hypertrophy training.",
        features: ["High-impact reinforced construction", "Pro-Elite handle grip", "Secure head-locking technology", "Consistent calibration"],
        specs: { "Price": "₹150 / KG", "Max Weight": "60KG per pair", "Build": "Machine-Welded Iron" },
        price: "₹150 / KG",
        image: "https://images.unsplash.com/photo-1586401100295-7a8096fd231a?q=80&w=2070&auto=format&fit=crop",
        images: ["https://images.unsplash.com/photo-1586401100295-7a8096fd231a?q=80&w=2070&auto=format&fit=crop"],
        category: "Strength",
        categorySlug: "strength",
    },
    {
        id: "color-dumbbells",
        name: "Vibrant Aerobic Dumbbells",
        description: "Colorful vinyl-coated dumbbells for yoga, Pilates, and aerobics.",
        fullDescription: "Add a splash of color to your fitness routine. These soft-touch vinyl dumbbells are perfect for low-impact classes, rehab, or light home training in Hyderabad. Comfortable to hold even during long sweat-intensive sessions.",
        features: ["Non-toxic soft vinyl coat", "Color-coded for easy ID", "Comfort-contour handles", "Anti-roll hexagonal design"],
        specs: { "Material": "Iron Core / Vinyl Shell", "Ideal For": "Yoga, Cardio, Rehab", "Price": "₹250 / KG" },
        price: "₹250 / KG",
        image: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=2070&auto=format&fit=crop",
        images: ["https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=2070&auto=format&fit=crop"],
        category: "Strength",
        categorySlug: "strength",
    },
    {
        id: "treadmill-service",
        name: "Treadmill Repair & Maintenance",
        description: "Expert treadmill repair services in Shaikpet, Jubilee Hills, and all of Hyderabad.",
        fullDescription: "Is your treadmill making noise or showing an error? Our certified technicians at Body Bold Fitness provide on-site repair and preventative maintenance for all brands (Aerofit, Fitkit, Reebok, etc.). We specialize in treadmill motor repair, belt replacement, and electronic board servicing across Hyderabad.",
        features: ["Doorstep technician visit", "Genuine spare parts supply", "Digital diagnostic testing", "Service warranty included"],
        specs: { "Local Areas": "Shaikpet, Madhapur, Manikonda, Gachibowli", "Standard Service": "₹800 onwards", "Timings": "10 AM - 7 PM" },
        price: "₹800",
        image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1558017487-06bf9f82613a?q=80&w=2070&auto=format&fit=crop"
        ],
        category: "Services",
        categorySlug: "services",
        badge: "Trusted Service"
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
