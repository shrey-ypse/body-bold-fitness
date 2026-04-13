"use server";

import { supabase } from "./supabase";
import { Product } from "@/data/products";
import { BlogPost } from "@/data/blog";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

/**
 * Mappers to handle JS camelCase vs DB snake_case conversion with robust defaults
 */
const mapProductToDB = (product: Product) => ({
  id: product.id,
  name: product.name || "Unnamed Gear",
  description: product.description || "",
  full_description: product.fullDescription || "",
  features: product.features || [],
  specs: product.specs || {},
  price: product.price || "₹0",
  image: product.image || "",
  images: product.images || [],
  category: product.category || "Strength",
  category_slug: product.categorySlug || "strength",
  badge: product.badge || "",
  is_large: product.isLarge || false,
  is_tall: product.isTall || false,
});

const mapProductFromDB = (db: any): Product => ({
  id: db.id,
  name: db.name || "Unnamed Gear",
  description: db.description || "",
  fullDescription: db.full_description || "",
  features: db.features || [],
  specs: db.specs || {},
  price: db.price || "₹0",
  image: db.image || "",
  images: db.images || [],
  category: db.category || "Strength",
  categorySlug: db.category_slug || "strength",
  badge: db.badge || "",
  isLarge: db.is_large || false,
  isTall: db.is_tall || false,
});

const mapBlogToDB = (blog: BlogPost) => ({
  id: blog.id,
  slug: blog.slug || "new-post",
  title: blog.title || "Untitled Post",
  excerpt: blog.excerpt || "",
  content: blog.content || "",
  date: blog.date || new Date().toISOString(),
  author: blog.author || "Body Bolt",
  reading_time: blog.readingTime || "5 min",
  category: blog.category || "Fitness",
  image: blog.image || "",
  tags: blog.tags || [],
});

const mapBlogFromDB = (db: any): BlogPost => ({
  id: db.id,
  slug: db.slug || "new-post",
  title: db.title || "Untitled Post",
  excerpt: db.excerpt || "",
  content: db.content || "",
  date: db.date || "",
  author: db.author || "",
  readingTime: db.reading_time || "",
  category: db.category || "",
  image: db.image || "",
  tags: db.tags || [],
});

/**
 * Verifies the admin password and sets a secure session cookie.
 */
export async function verifyAdminPassword(password: string): Promise<boolean> {
  const adminSecret = process.env.ADMIN_PASSWORD;
  
  if (!adminSecret || !password) return false;
  
  if (password.trim() === adminSecret.trim()) {
    const cookieStore = await cookies();
    cookieStore.set("bolt_session", "active", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 60 * 60 * 24, // 24 hours
      path: "/",
    });
    return true;
  }
  
  return false;
}

/**
 * Internal helper to check if the user is authenticated.
 */
async function checkAuth() {
  const cookieStore = await cookies();
  const session = cookieStore.get("bolt_session");
  if (!session || session.value !== "active") {
    console.error("Auth Failed: Local session invalid or key mismatch.");
    throw new Error("Unauthorized Access Detected. Protocol Terminated.");
  }
}

// --- Product Actions ---

export async function getProducts(): Promise<Product[]> {
  try {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching products:', error);
      return [];
    }

    return (data || []).map(mapProductFromDB);
  } catch (err) {
    console.error('Critical failure in getProducts:', err);
    return [];
  }
}

export async function saveProduct(product: Product): Promise<{ success: boolean; error?: string }> {
  try {
    await checkAuth();
    const dbProduct = mapProductToDB(product);
    
    // Attempt upsert
    const { data, error } = await supabase
      .from('products')
      .upsert(dbProduct)
      .select();

    if (error) {
      console.error('Supabase Product Save Error:', error);
      return { success: false, error: `${error.message} (${error.code})` };
    }

    // Revalidate paths to reflect changes across the site
    const paths = ['/', '/shop', '/products', `/products/${product.id}`, '/admin'];
    paths.forEach(p => revalidatePath(p));
    
    return { success: true };
  } catch (e: any) {
    console.error('saveProduct exception:', e);
    return { success: false, error: e.message || "Unknown internal error" };
  }
}

export async function deleteProduct(id: string): Promise<{ success: boolean; error?: string }> {
  try {
    await checkAuth();
    const { error } = await supabase
      .from('products')
      .delete()
      .eq('id', id);

    if (error) {
      console.error('Error deleting product:', error);
      return { success: false, error: error.message };
    }

    revalidatePath('/');
    revalidatePath('/shop');
    revalidatePath('/admin');
    return { success: true };
  } catch (e: any) {
    return { success: false, error: e.message };
  }
}

// --- Blog Actions ---

export async function getBlogs(): Promise<BlogPost[]> {
  try {
    const { data, error } = await supabase
      .from('blogs')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching blogs:', error);
      return [];
    }

    return (data || []).map(mapBlogFromDB);
  } catch (err) {
    console.error('Critical failure in getBlogs:', err);
    return [];
  }
}

export async function saveBlog(blog: BlogPost): Promise<{ success: boolean; error?: string }> {
  try {
    await checkAuth();
    const dbBlog = mapBlogToDB(blog);

    const { error } = await supabase
      .from('blogs')
      .upsert(dbBlog);

    if (error) {
      console.error('Error saving blog:', error);
      return { success: false, error: error.message };
    }

    revalidatePath('/');
    revalidatePath('/blog');
    revalidatePath(`/blog/${blog.slug}`);
    revalidatePath('/admin');
    
    return { success: true };
  } catch (e: any) {
    return { success: false, error: e.message };
  }
}

export async function deleteBlog(id: string): Promise<{ success: boolean; error?: string }> {
  try {
    await checkAuth();
    const { error } = await supabase
      .from('blogs')
      .delete()
      .eq('id', id);

    if (error) {
      console.error('Error deleting blog:', error);
      return { success: false, error: error.message };
    }

    revalidatePath('/');
    revalidatePath('/blog');
    revalidatePath('/admin');
    return { success: true };
  } catch (e: any) {
    return { success: false, error: e.message };
  }
}

// --- Image Upload Action ---

export async function uploadImage(file: File | string, fileName: string): Promise<string | null> {
  try {
    await checkAuth();

    // If string, assume it's base64 and convert
    let body: any = file;
    let contentType = 'image/png'; // default

    if (typeof file === 'string' && file.startsWith('data:')) {
      const match = file.match(/^data:(image\/\w+);base64,/);
      if (match) {
        contentType = match[1];
      }
      const base64Data = file.split(',')[1];
      const binaryData = Buffer.from(base64Data, 'base64');
      body = binaryData;
    } else if (file instanceof File) {
      contentType = file.type;
    }

    // Sanitize filename: remove special chars and spaces
    const cleanFileName = fileName.replace(/[^a-zA-Z0-9.-]/g, '_');
    const path = `uploads/${Date.now()}-${cleanFileName}`;

    console.log(`Attempting upload to bucket 'assets' at path: ${path}`);

    let { data, error } = await supabase.storage
      .from('assets')
      .upload(path, body, {
        cacheControl: '3600',
        upsert: false,
        contentType: contentType
      });

    // SELF-HEALING: If bucket doesn't exist, try to create it
    if (error && (error.message.includes('not found') || error.message.includes('does not exist'))) {
      console.log("Bucket 'assets' missing. Attempting auto-creation...");
      const { error: createError } = await supabase.storage.createBucket('assets', {
        public: true,
        fileSizeLimit: 10485760 // 10MB
      });
      
      if (!createError) {
        console.log("Bucket 'assets' created successfully. Retrying upload...");
        const retry = await supabase.storage
          .from('assets')
          .upload(path, body, {
            cacheControl: '3600',
            upsert: false,
            contentType: contentType
          });
        data = retry.data;
        error = retry.error;
      }
    }

    if (error || !data) {
      console.error('Supabase Storage Upload Error:', error?.message || 'Upload returned no data');
      return null;
    }


    const { data: { publicUrl } } = supabase.storage
      .from('assets')
      .getPublicUrl(data.path);

    console.log('Upload successful. Public URL:', publicUrl);
    return publicUrl;
  } catch (e) {
    console.error('uploadImage exception:', e);
    return null;
  }
}



