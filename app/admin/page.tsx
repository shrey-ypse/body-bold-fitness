"use client";

import { useState, useRef, useEffect } from "react";
import {
    LayoutDashboard,
    Package,
    Users,
    Settings,
    MessageSquare,
    Plus,
    Save,
    Trash2,
    Search,
    ChevronRight,
    TrendingUp,
    Image as ImageIcon,
    Upload,
    Check,
    AlertCircle,
    Eye,
    EyeOff,
    Filter,
    FileText,
    BookOpen,
    Activity,
    Database,
    Clock,
    ArrowRight,
    X as CloseIcon
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { PRODUCTS, Product } from "@/data/products";
import { BLOG_POSTS, BlogPost } from "@/data/blog";

type Tab = "overview" | "inventory" | "blog";

export default function AdminPanel() {
    const [activeTab, setActiveTab] = useState<Tab>('overview');
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [password, setPassword] = useState("");
    const [notifications, setNotifications] = useState<{ id: number, text: string, type: 'success' | 'error' }[]>([]);

    // Management States
    const [localProducts, setLocalProducts] = useState<Product[]>([]);
    const [localBlogs, setLocalBlogs] = useState<BlogPost[]>([]);
    const [editingProduct, setEditingProduct] = useState<Product | null>(null);
    const [editingBlog, setEditingBlog] = useState<BlogPost | null>(null);

    const addNotification = (text: string, type: 'success' | 'error' = 'success') => {
        const id = Date.now();
        setNotifications(prev => [...prev, { id, text, type }]);
        setTimeout(() => setNotifications(prev => prev.filter(n => n.id !== id)), 3000);
    };

    // Load from LocalStorage on mount
    useEffect(() => {
        const savedProducts = localStorage.getItem("bbf_vault_data");
        const savedBlogs = localStorage.getItem("bbf_blog_data");

        if (savedProducts) setLocalProducts(JSON.parse(savedProducts));
        else setLocalProducts(PRODUCTS);

        if (savedBlogs) setLocalBlogs(JSON.parse(savedBlogs));
        else setLocalBlogs(BLOG_POSTS);
    }, []);

    const syncProducts = (updatedList: Product[]) => {
        setLocalProducts(updatedList);
        localStorage.setItem("bbf_vault_data", JSON.stringify(updatedList));
    };

    const syncBlogs = (updatedList: BlogPost[]) => {
        setLocalBlogs(updatedList);
        localStorage.setItem("bbf_blog_data", JSON.stringify(updatedList));
    };

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (password === "admin123") {
            setIsAuthenticated(true);
            addNotification("Access Granted. Welcome back, Admin.", "success");
        } else {
            addNotification("Invalid access key.", "error");
        }
    };

    const handleSaveProduct = (updatedProduct: Product) => {
        const newList = localProducts.map(p => p.id === updatedProduct.id ? updatedProduct : p);
        syncProducts(newList);
        setEditingProduct(null);
        addNotification(`${updatedProduct.name} successfully updated.`, "success");
    };

    const handleDeleteProduct = (id: string) => {
        if (confirm("This action is irreversible. Delete this gear?")) {
            const newList = localProducts.filter(p => p.id !== id);
            syncProducts(newList);
            addNotification("Product purged from vault.", "success");
        }
    };

    const handleSaveBlog = (updatedBlog: BlogPost) => {
        const newList = localBlogs.map(b => b.id === updatedBlog.id ? updatedBlog : b);
        syncBlogs(newList);
        setEditingBlog(null);
        addNotification(`"${updatedBlog.title}" successfully published.`, "success");
    };

    const handleDeleteBlog = (id: string) => {
        if (confirm("Purge this article from the Knowledge Vault?")) {
            const newList = localBlogs.filter(b => b.id !== id);
            syncBlogs(newList);
            addNotification("Article deleted.", "success");
        }
    };

    if (!isAuthenticated) {
        return (
            <div className="min-h-screen bg-background-dark flex items-center justify-center p-6 font-lexend">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="w-full max-w-md glass-dark p-8 md:p-12 rounded-[3rem] border-white/5 shadow-[0_0_50px_rgba(19,236,55,0.05)]"
                >
                    <div className="text-center mb-10">
                        <div className="w-20 h-20 bg-primary/10 rounded-[2rem] flex items-center justify-center mx-auto mb-8 animate-pulse shadow-[0_0_20px_rgba(19,236,55,0.1)]">
                            <Settings className="text-primary w-10 h-10" />
                        </div>
                        <h1 className="text-4xl font-bold text-white tracking-tighter uppercase mb-2">OS<span className="text-primary">X</span> ADMIN</h1>
                        <p className="text-white/30 text-[10px] uppercase tracking-[0.4em] font-medium">B B F Store Operations</p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-6">
                        <div className="relative group">
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full bg-white/5 border border-white/10 rounded-2xl py-6 px-6 text-white text-center focus:outline-none focus:border-primary/50 text-2xl font-bold tracking-[0.5em] transition-all"
                                placeholder="••••"
                            />
                        </div>
                        <button className="w-full bg-primary text-black font-extrabold py-6 rounded-2xl uppercase tracking-widest shadow-2xl shadow-primary/20 hover:bg-white hover:scale-[1.02] active:scale-[0.98] transition-all duration-300">Authorize Session</button>

                        <button
                            type="button"
                            onClick={() => window.location.href = '/'}
                            className="w-full text-white/20 hover:text-white/60 transition-colors text-[9px] font-bold uppercase tracking-[0.3em] pt-4"
                        >
                            Return to Storefront
                        </button>
                    </form>
                </motion.div>
                <NotificationCenter notifications={notifications} />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background-dark text-white font-lexend selection:bg-primary selection:text-black">
            {/* Ultra Sidebar */}
            <div className="fixed left-0 top-0 bottom-0 w-24 md:w-72 bg-black/60 backdrop-blur-3xl border-r border-white/5 flex flex-col p-6 md:p-10 z-[60]">
                <div className="mb-16 hidden md:block">
                    <div className="flex items-center gap-2 mb-2">
                        <div className="w-2 h-2 bg-primary rounded-full animate-ping" />
                        <span className="text-[10px] font-bold text-primary uppercase tracking-[0.3em]">System Live</span>
                    </div>
                    <span className="text-3xl font-black tracking-tighter uppercase whitespace-nowrap">BODY <span className="text-primary">BOLD</span> FITNESS</span>
                </div>

                <div className="flex flex-col space-y-4">
                    <SidebarLink icon={<LayoutDashboard size={22} />} label="Overview" active={activeTab === "overview"} onClick={() => setActiveTab("overview")} />
                    <SidebarLink icon={<Package size={22} />} label="Products" active={activeTab === "inventory"} onClick={() => setActiveTab("inventory")} />
                    <SidebarLink icon={<BookOpen size={22} />} label="Blog Vault" active={activeTab === "blog"} onClick={() => setActiveTab("blog")} />
                </div>

                <div className="mt-auto space-y-6">
                    <div className="hidden md:block p-6 rounded-3xl bg-white/5 border border-white/5">
                        <p className="text-[9px] uppercase tracking-widest text-white/40 mb-2">Server Load</p>
                        <div className="h-1 bg-white/10 rounded-full">
                            <motion.div initial={{ width: 0 }} animate={{ width: "24%" }} className="h-full bg-primary rounded-full" />
                        </div>
                    </div>
                    <button
                        onClick={() => {
                            setIsAuthenticated(false);
                            addNotification("Logged out successfully.", "success");
                        }}
                        className="w-full p-4 md:px-6 md:py-5 rounded-3xl text-white/40 hover:text-white hover:bg-red-500/20 transition-all text-[10px] font-black uppercase tracking-[0.2em] flex items-center justify-center md:justify-start gap-4 border border-transparent hover:border-red-500/20"
                    >
                        <CloseIcon size={18} />
                        <span className="hidden md:inline">Log Out</span>
                    </button>
                </div>
            </div>

            <main className="ml-24 md:ml-72 p-8 md:p-16 lg:p-20 min-h-screen relative">
                <AnimatePresence mode="wait">
                    {activeTab === "overview" && <OverviewTab products={localProducts} blogs={localBlogs} />}
                    {activeTab === "inventory" && (
                        <InventoryTab
                            products={localProducts}
                            onEdit={setEditingProduct}
                            onDelete={handleDeleteProduct}
                            onAdd={() => {
                                const newId = `product-${Date.now()}`;
                                const newProduct: Product = {
                                    id: newId,
                                    name: "Unidentified Gear",
                                    description: "Short description...",
                                    fullDescription: "Long description...",
                                    features: [],
                                    specs: {},
                                    price: "₹0",
                                    image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80",
                                    images: ["https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80"],
                                    category: "Strength",
                                    categorySlug: "strength"
                                };
                                const newList = [newProduct, ...localProducts];
                                syncProducts(newList);
                                setEditingProduct(newProduct);
                            }}
                        />
                    )}
                    {activeTab === "blog" && (
                        <BlogVaultTab
                            blogs={localBlogs}
                            onEdit={setEditingBlog}
                            onDelete={handleDeleteBlog}
                            onAdd={() => {
                                const newId = `blog-${Date.now()}`;
                                const newBlog: BlogPost = {
                                    id: newId,
                                    slug: "new-protocol",
                                    title: "Unpublished Insight",
                                    excerpt: "Brief summary of knowledge...",
                                    content: "# New Protocol\nStart writing here...",
                                    date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
                                    author: "Body Bold Expert",
                                    readingTime: "5 min read",
                                    category: "Training",
                                    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80",
                                    tags: ["Fitness"]
                                };
                                const newList = [newBlog, ...localBlogs];
                                syncBlogs(newList);
                                setEditingBlog(newBlog);
                            }}
                        />
                    )}
                </AnimatePresence>
            </main>

            <AnimatePresence>
                {editingProduct && (
                    <ProductPowerEditor
                        product={editingProduct}
                        onClose={() => setEditingProduct(null)}
                        onSave={handleSaveProduct}
                    />
                )}
                {editingBlog && (
                    <BlogPowerEditor
                        blog={editingBlog}
                        onClose={() => setEditingBlog(null)}
                        onSave={handleSaveBlog}
                    />
                )}
            </AnimatePresence>

            <NotificationCenter notifications={notifications} />
        </div>
    );
}

const SidebarLink = ({ icon, label, active, onClick }: { icon: any, label: string, active: boolean, onClick: () => void }) => (
    <button
        onClick={onClick}
        className={`flex items-center gap-5 p-5 md:px-8 md:py-5 rounded-3xl transition-all relative group ${active ? 'bg-primary text-black shadow-[0_10px_30px_rgba(19,236,55,0.2)] scale-105' : 'text-white/40 hover:bg-white/5 hover:text-white'}`}
    >
        {icon}
        <span className="hidden md:inline font-black uppercase tracking-[0.2em] text-[11px]">{label}</span>
        {active && <motion.div layoutId="activeInd" className="absolute -left-2 w-1.5 h-8 bg-primary rounded-full hidden md:block" />}
    </button>
);

const InventoryTab = ({ products, onEdit, onDelete, onAdd }: { products: Product[], onEdit: (p: Product) => void, onDelete: (id: string) => void, onAdd: () => void }) => {
    const [search, setSearch] = useState("");
    const [catFilter, setCatFilter] = useState("all");

    const filtered = products.filter(p => {
        const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase());
        const matchesCat = catFilter === "all" || p.categorySlug === catFilter;
        return matchesSearch && matchesCat;
    });

    return (
        <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} className="space-y-16">
            <header className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 border-b border-white/5 pb-16">
                <div>
                    <div className="flex items-center gap-4 mb-4">
                        <div className="px-3 py-1 bg-primary/10 text-primary text-[10px] font-bold rounded-full uppercase tracking-widest border border-primary/20">Production Hub</div>
                    </div>
                    <h2 className="text-6xl md:text-9xl font-black tracking-tighter uppercase leading-[0.8]">GEAR<br /><span className="text-primary italic">VAULT</span></h2>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-6">
                    <div className="relative group w-full sm:w-80">
                        <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20 group-focus-within:text-primary transition-colors" />
                        <input
                            type="text"
                            placeholder="Find equipment..."
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                            className="w-full bg-white/5 border border-white/10 rounded-3xl py-5 pl-14 pr-6 text-sm font-bold focus:outline-none focus:border-primary/40 focus:bg-white/10 transition-all"
                        />
                    </div>
                    <button onClick={onAdd} className="w-full sm:w-auto bg-primary text-black font-black px-12 py-5 rounded-3xl flex items-center justify-center gap-4 text-xs uppercase tracking-widest hover:bg-white hover:-translate-y-1 transition-all shadow-2xl">
                        <Plus /> Add Arrival
                    </button>
                </div>
            </header>

            <div className="flex gap-3 overflow-x-auto no-scrollbar pb-4">
                {['all', 'strength', 'cardio', 'services'].map(cat => (
                    <button
                        key={cat}
                        onClick={() => setCatFilter(cat)}
                        className={`px-8 py-3 rounded-2xl text-[10px] font-bold uppercase tracking-widest border transition-all ${catFilter === cat ? 'bg-white text-black border-white' : 'bg-transparent border-white/10 text-white/40 hover:border-white/50'}`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
                <AnimatePresence mode="popLayout">
                    {filtered.map((p, idx) => (
                        <motion.div
                            key={p.id}
                            layout
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ delay: idx * 0.05 }}
                            className="group flex flex-col bg-white/5 rounded-[3rem] overflow-hidden border border-white/5 hover:border-primary/20 transition-all shadow-2xl"
                        >
                            <div className="aspect-[4/3] relative overflow-hidden">
                                <img src={p.image} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000" alt="" />
                                <div className="absolute inset-x-0 bottom-0 p-8 pt-24 bg-gradient-to-t from-black via-black/40 to-transparent">
                                    <div className="flex items-center gap-2 mb-2">
                                        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                                        <span className="text-[9px] font-bold text-primary uppercase tracking-[0.4em]">{p.category}</span>
                                    </div>
                                    <h3 className="text-2xl font-black uppercase tracking-tighter leading-none">{p.name}</h3>
                                </div>
                                <button
                                    onClick={() => onDelete(p.id)}
                                    className="absolute top-6 right-6 p-4 bg-red-500/20 text-red-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-all hover:bg-red-500 hover:text-white"
                                >
                                    <Trash2 size={18} />
                                </button>
                            </div>
                            <div className="p-8 flex justify-between items-center bg-black/20">
                                <span className="text-xl font-bold tracking-tighter">{p.price}</span>
                                <button
                                    onClick={() => onEdit(p)}
                                    className="bg-primary/10 text-primary border border-primary/20 hover:bg-primary hover:text-black px-8 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all"
                                >
                                    Power Edit
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
            {filtered.length === 0 && (
                <div className="py-40 text-center border-2 border-dashed border-white/5 rounded-[4rem]">
                    <Search className="mx-auto text-white/10 mb-6" size={60} />
                    <p className="text-2xl font-bold uppercase tracking-widest text-white/20">Zero Gear Matches Your Scan</p>
                </div>
            )}
        </motion.div>
    );
};

const BlogVaultTab = ({ blogs, onEdit, onDelete, onAdd }: { blogs: BlogPost[], onEdit: (b: BlogPost) => void, onDelete: (id: string) => void, onAdd: () => void }) => {
    return (
        <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} className="space-y-16">
            <header className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 border-b border-white/5 pb-16">
                <div>
                    <div className="flex items-center gap-4 mb-4">
                        <div className="px-3 py-1 bg-primary/10 text-primary text-[10px] font-bold rounded-full uppercase tracking-widest border border-primary/20">SEO Knowledge</div>
                    </div>
                    <h2 className="text-6xl md:text-9xl font-black tracking-tighter uppercase leading-[0.8]">KNOWLEDGE<br /><span className="text-primary italic">VAULT</span></h2>
                </div>
                <button onClick={onAdd} className="w-full sm:w-auto bg-primary text-black font-black px-12 py-5 rounded-3xl flex items-center justify-center gap-4 text-xs uppercase tracking-widest hover:bg-white hover:-translate-y-1 transition-all shadow-2xl">
                    <Plus /> Write Protocol
                </button>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {blogs.map((b, idx) => (
                    <motion.div
                        key={b.id}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="group flex flex-col bg-white/5 rounded-[3rem] overflow-hidden border border-white/5 p-8"
                    >
                        <div className="flex justify-between items-start mb-6">
                            <div>
                                <span className="text-[10px] font-black uppercase tracking-widest text-primary mb-2 block">{b.category}</span>
                                <h3 className="text-2xl font-bold uppercase tracking-tighter leading-tight line-clamp-2">{b.title}</h3>
                            </div>
                            <button onClick={() => onDelete(b.id)} className="p-4 text-white/20 hover:text-red-500 transition-colors"><Trash2 size={20} /></button>
                        </div>
                        <p className="text-white/40 text-sm line-clamp-2 mb-8">{b.excerpt}</p>
                        <div className="flex justify-between items-center mt-auto pt-6 border-t border-white/5">
                            <span className="text-[10px] font-bold text-white/20 uppercase tracking-widest">{b.date} • {b.readingTime}</span>
                            <button onClick={() => onEdit(b)} className="text-primary text-[10px] font-black uppercase tracking-[0.2em] flex items-center gap-2 group-hover:gap-4 transition-all">Edit Script <ArrowRight size={14} /></button>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

const ProductPowerEditor = ({ product, onClose, onSave }: { product: Product, onClose: () => void, onSave: (p: Product) => void }) => {
    const [formData, setFormData] = useState<Product>(product);
    const [uploading, setUploading] = useState(false);
    const fileRef = useRef<HTMLInputElement>(null);

    const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;
        setUploading(true);
        const reader = new FileReader();
        reader.onloadend = () => {
            const res = reader.result as string;
            setFormData({ ...formData, images: [...formData.images, res], image: res });
            setUploading(false);
        };
        reader.readAsDataURL(file);
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-end bg-black/95 backdrop-blur-xl p-4 sm:p-8"
        >
            <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 120 }}
                className="w-full max-w-6xl h-full bg-background-dark border-l border-white/10 p-10 md:p-20 overflow-y-auto relative rounded-l-[4rem] shadow-[-100px_0_100px_rgba(0,0,0,0.5)]"
            >
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-20">
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <Activity className="text-primary w-5 h-5" />
                            <span className="text-[10px] font-bold text-primary uppercase tracking-[0.5em]">System Editor v3.0</span>
                        </div>
                        <h2 className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-none">GEAR <span className="text-primary italic">OS</span></h2>
                    </div>
                    <button onClick={onClose} className="p-8 bg-white/5 rounded-full hover:bg-white/10 hover:rotate-90 transition-all self-end"><CloseIcon size={32} /></button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
                    <div className="space-y-12">
                        <EditorField label="Core Name">
                            <input
                                type="text"
                                value={formData.name}
                                onChange={e => setFormData({ ...formData, name: e.target.value })}
                                className="w-full bg-white/5 border border-white/10 rounded-[2rem] p-8 text-3xl font-black text-white focus:outline-none focus:border-primary transition-all tracking-tighter"
                            />
                        </EditorField>

                        <div className="grid grid-cols-2 gap-8">
                            <EditorField label="Valuation">
                                <input
                                    className="w-full bg-white/5 border border-white/10 rounded-[2rem] p-8 text-2xl font-bold text-primary focus:outline-none"
                                    value={formData.price}
                                    onChange={e => setFormData({ ...formData, price: e.target.value })}
                                />
                            </EditorField>
                            <EditorField label="Classification">
                                <select
                                    className="w-full bg-white/5 border border-white/10 rounded-[2rem] p-8 text-xl font-bold uppercase tracking-widest appearance-none outline-none focus:border-primary"
                                    value={formData.categorySlug}
                                    onChange={e => setFormData({ ...formData, categorySlug: e.target.value, category: e.target.value.toUpperCase() })}
                                >
                                    <option value="strength">Strength</option>
                                    <option value="cardio">Cardio</option>
                                    <option value="services">Services</option>
                                </select>
                            </EditorField>
                        </div>

                        <EditorField label="Technical Documentation">
                            <textarea
                                rows={8}
                                className="w-full bg-white/5 border border-white/10 rounded-[2rem] p-8 text-lg font-medium text-white/60 leading-relaxed outline-none focus:border-primary/50"
                                value={formData.fullDescription}
                                onChange={e => setFormData({ ...formData, fullDescription: e.target.value })}
                            />
                        </EditorField>
                    </div>

                    <div className="space-y-16">
                        <div className="glass-dark p-10 rounded-[3.5rem] border-white/5">
                            <div className="flex justify-between items-center mb-10">
                                <h4 className="text-xs font-bold uppercase tracking-[0.4em] text-primary">Visual Gallery</h4>
                                <button
                                    onClick={() => fileRef.current?.click()}
                                    className="p-5 bg-primary/10 text-primary border border-primary/20 rounded-2xl hover:bg-primary hover:text-black transition-all flex items-center gap-3"
                                >
                                    <Upload size={20} /> <span className="text-[10px] font-black uppercase">{uploading ? "X-FER..." : "Upload"}</span>
                                </button>
                                <input type="file" ref={fileRef} className="hidden" onChange={handleUpload} />
                            </div>

                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 h-[400px] overflow-y-auto no-scrollbar pr-2">
                                {formData.images.map((img, i) => (
                                    <div key={i} className={`relative aspect-square rounded-3xl overflow-hidden border-2 transition-all group ${formData.image === img ? 'border-primary' : 'border-transparent'}`}>
                                        <img src={img} className="w-full h-full object-cover" />
                                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-3">
                                            <button onClick={() => setFormData({ ...formData, image: img })} className="p-3 bg-primary text-black rounded-xl hover:scale-110"><Check size={16} /></button>
                                            <button
                                                onClick={() => setFormData({ ...formData, images: formData.images.filter((_, idx) => idx !== i) })}
                                                className="p-3 bg-red-500 text-white rounded-xl hover:scale-110"
                                            ><Trash2 size={16} /></button>
                                        </div>
                                    </div>
                                ))}
                                <div className="aspect-square rounded-3xl border-2 border-dashed border-white/5 flex items-center justify-center">
                                    <ImageIcon className="text-white/10" size={32} />
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-6 pt-10 border-t border-white/5">
                            <button
                                onClick={() => onSave(formData)}
                                className="w-full bg-primary text-black font-black uppercase tracking-[0.34em] py-8 rounded-[2rem] shadow-[0_20px_60px_rgba(19,236,55,0.2)] hover:bg-white hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-6"
                            >
                                <Save size={24} /> <span className="text-lg">Deploy Protocol</span>
                            </button>
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

const BlogPowerEditor = ({ blog, onClose, onSave }: { blog: BlogPost, onClose: () => void, onSave: (b: BlogPost) => void }) => {
    const [formData, setFormData] = useState<BlogPost>(blog);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-end bg-black/95 backdrop-blur-xl p-4 sm:p-8 font-lexend"
        >
            <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 120 }}
                className="w-full max-w-6xl h-full bg-background-dark border-l border-white/10 p-10 md:p-20 overflow-y-auto relative rounded-l-[4rem]"
            >
                <div className="flex justify-between items-center mb-20">
                    <h2 className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-none">SCRIPT <span className="text-primary italic">OS</span></h2>
                    <button onClick={onClose} className="p-8 bg-white/5 rounded-full hover:bg-white/10 transition-all"><CloseIcon size={32} /></button>
                </div>

                <div className="space-y-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <EditorField label="Article Title">
                            <input
                                className="w-full bg-white/5 border border-white/10 rounded-3xl p-8 text-2xl font-bold"
                                value={formData.title}
                                onChange={e => setFormData({ ...formData, title: e.target.value })}
                            />
                        </EditorField>
                        <EditorField label="URL Slug">
                            <input
                                className="w-full bg-white/5 border border-white/10 rounded-3xl p-8 text-xl font-medium text-primary"
                                value={formData.slug}
                                onChange={e => setFormData({ ...formData, slug: e.target.value })}
                            />
                        </EditorField>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <EditorField label="Category">
                            <input className="w-full bg-white/5 border border-white/10 rounded-3xl p-8 font-bold" value={formData.category} onChange={e => setFormData({ ...formData, category: e.target.value })} />
                        </EditorField>
                        <EditorField label="Read Time">
                            <input className="w-full bg-white/5 border border-white/10 rounded-3xl p-8 font-bold text-white/40" value={formData.readingTime} onChange={e => setFormData({ ...formData, readingTime: e.target.value })} />
                        </EditorField>
                        <EditorField label="Image URL">
                            <input className="w-full bg-white/5 border border-white/10 rounded-3xl p-8 font-bold text-white/40" value={formData.image} onChange={e => setFormData({ ...formData, image: e.target.value })} />
                        </EditorField>
                    </div>

                    <EditorField label="Knowledge Protocol (Markdown)">
                        <textarea
                            rows={15}
                            className="w-full bg-white/5 border border-white/10 rounded-3xl p-10 text-xl font-medium leading-relaxed"
                            value={formData.content}
                            onChange={e => setFormData({ ...formData, content: e.target.value })}
                        />
                    </EditorField>

                    <button
                        onClick={() => onSave(formData)}
                        className="w-full bg-primary text-black font-black uppercase tracking-[0.34em] py-10 rounded-3xl shadow-2xl hover:bg-white transition-all flex items-center justify-center gap-6"
                    >
                        <Save size={24} /> <span className="text-xl">Secure Knowledge</span>
                    </button>
                </div>
            </motion.div>
        </motion.div>
    );
};

const EditorField = ({ label, children }: { label: string, children: any }) => (
    <div>
        <label className="block text-[10px] uppercase font-black text-white/30 mb-4 ml-8 tracking-[0.4em]">{label}</label>
        {children}
    </div>
);

const OverviewTab = ({ products, blogs }: { products: Product[], blogs: BlogPost[] }) => (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-20">
        <header>
            <div className="flex items-center gap-3 mb-6">
                <Database className="text-primary w-5 h-5" />
                <span className="text-[10px] font-bold text-primary uppercase tracking-[0.5em]">Real-time Performance</span>
            </div>
            <h2 className="text-6xl md:text-9xl font-black tracking-tighter uppercase leading-[0.8] mb-12">SYSTEM<br /><span className="text-primary italic">CORE</span></h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <OverviewStat label="Health Status" value="Online" trend="Stable" icon={<Activity />} />
                <OverviewStat label="Inventory" value={products.length.toString()} trend="Indexed" icon={<Package />} />
                <OverviewStat label="Articles" value={blogs.length.toString()} trend="Live" icon={<FileText />} />
                <OverviewStat label="Uptime" value="99.9%" trend="Elite" icon={<Clock />} />
            </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 glass-dark p-12 rounded-[4rem] border-white/5 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-12 text-primary opacity-5 group-hover:opacity-10 transition-opacity">
                    <Database size={160} />
                </div>
                <h3 className="text-[11px] font-bold uppercase tracking-[0.4em] text-primary mb-10">Production Health</h3>
                <div className="space-y-8">
                    <HealthBar label="Strength Equipment" value={65} />
                    <HealthBar label="Cardio Systems" value={88} />
                    <HealthBar label="Information Nodes" value={94} />
                </div>
            </div>

            <div className="bg-primary p-12 rounded-[4rem] text-black shadow-[0_30px_60px_rgba(19,236,55,0.15)] flex flex-col justify-between">
                <div>
                    <h3 className="text-[11px] font-black uppercase tracking-[0.4em] mb-4">Command OS v3.0</h3>
                    <p className="text-3xl font-black tracking-tighter uppercase leading-none mb-8">Full Knowledge Integration Active.</p>
                </div>
                <p className="text-[10px] font-black uppercase tracking-[0.3em] opacity-60">Build ID: 2026-BLOG-BBF</p>
            </div>
        </div>
    </motion.div>
);

const HealthBar = ({ label, value }: { label: string, value: number }) => (
    <div className="space-y-4">
        <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest">
            <span className="text-white/60">{label}</span>
            <span className="text-primary">{value}%</span>
        </div>
        <div className="h-1 bg-white/5 rounded-full overflow-hidden">
            <motion.div initial={{ width: 0 }} animate={{ width: `${value}%` }} className="h-full bg-primary" />
        </div>
    </div>
);

const OverviewStat = ({ label, value, trend, icon }: { label: string, value: string, trend: string, icon: any }) => (
    <div className="glass-dark p-10 rounded-[3rem] border-white/5 hover:border-primary/30 transition-all group">
        <div className="flex items-center justify-between mb-8">
            <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-all">
                {icon}
            </div>
            <span className="text-[9px] font-bold text-primary uppercase tracking-[0.3em]">{trend}</span>
        </div>
        <p className="text-[9px] uppercase tracking-widest text-white/30 mb-2 font-bold">{label}</p>
        <p className="text-4xl font-black tracking-tighter">{value}</p>
    </div>
);

const NotificationCenter = ({ notifications }: { notifications: any[] }) => (
    <div className="fixed bottom-10 right-10 z-[1000] flex flex-col gap-4 max-w-sm w-full">
        <AnimatePresence>
            {notifications.map(n => (
                <motion.div
                    key={n.id}
                    initial={{ opacity: 0, x: 100, scale: 0.9 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                    className={`p-6 rounded-3xl border shadow-2xl backdrop-blur-3xl flex items-center gap-5 ${n.type === 'success' ? 'bg-primary/20 border-primary/20 text-primary' : 'bg-red-500/20 border-red-500/20 text-red-500'}`}
                >
                    {n.type === 'success' ? <Check className="shrink-0" /> : <AlertCircle className="shrink-0" />}
                    <p className="text-xs font-bold uppercase tracking-widest flex-grow">{n.text}</p>
                </motion.div>
            ))}
        </AnimatePresence>
    </div>
);
