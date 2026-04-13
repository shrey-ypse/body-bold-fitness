"use server";

import { supabase } from "./supabase";
import { Product } from "@/data/products";
import { BlogPost } from "@/data/blog";
import { revalidatePath } from "next/cache";

import { cookies } from "next/headers";

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
    throw new Error("Unauthorized Access Detected. Protocol Terminated.");
  }
}

// --- Product Actions ---

export async function getProducts(): Promise<Product[]> {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching products:', error);
    return [];
  }

  return data as Product[];
}

export async function saveProduct(product: Product): Promise<{ success: boolean; error?: string }> {
  try {
    await checkAuth();
  } catch (e: any) {
    return { success: false, error: e.message };
  }

  const { data, error } = await supabase
    .from('products')
    .upsert(product)
    .select();

  if (error) {
    console.error('Error saving product:', error);
    return { success: false, error: error.message };
  }

  revalidatePath('/');
  revalidatePath('/products');
  revalidatePath(`/products/${product.id}`);
  return { success: true };
}

export async function deleteProduct(id: string): Promise<{ success: boolean; error?: string }> {
  try {
    await checkAuth();
  } catch (e: any) {
    return { success: false, error: e.message };
  }

  const { error } = await supabase
    .from('products')
    .delete()
    .eq('id', id);

  if (error) {
    console.error('Error deleting product:', error);
    return { success: false, error: error.message };
  }

  revalidatePath('/');
  revalidatePath('/products');
  return { success: true };
}

// --- Blog Actions ---

export async function getBlogs(): Promise<BlogPost[]> {
  const { data, error } = await supabase
    .from('blogs')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching blogs:', error);
    return [];
  }

  return data as BlogPost[];
}

export async function saveBlog(blog: BlogPost): Promise<{ success: boolean; error?: string }> {
  try {
    await checkAuth();
  } catch (e: any) {
    return { success: false, error: e.message };
  }

  const { data, error } = await supabase
    .from('blogs')
    .upsert(blog)
    .select();

  if (error) {
    console.error('Error saving blog:', error);
    return { success: false, error: error.message };
  }

  revalidatePath('/');
  revalidatePath('/blog');
  revalidatePath(`/blog/${blog.slug}`);
  return { success: true };
}

export async function deleteBlog(id: string): Promise<{ success: boolean; error?: string }> {
  try {
    await checkAuth();
  } catch (e: any) {
    return { success: false, error: e.message };
  }

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
  return { success: true };
}

// --- Image Upload Action ---

export async function uploadImage(file: File | string, fileName: string): Promise<string | null> {
  try {
    await checkAuth();
  } catch (e) {
    return null;
  }

  // If string, assume it's base64 and convert
  let body: any = file;
  if (typeof file === 'string' && file.startsWith('data:')) {
    const base64Data = file.split(',')[1];
    const binaryData = Buffer.from(base64Data, 'base64');
    body = binaryData;
  }

  const { data, error } = await supabase.storage
    .from('assets')
    .upload(`uploads/${Date.now()}-${fileName}`, body, {
      cacheControl: '3600',
      upsert: false,
      contentType: typeof file === 'string' ? 'image/png' : file.type
    });

  if (error) {
    console.error('Upload error:', error);
    return null;
  }

  const { data: { publicUrl } } = supabase.storage
    .from('assets')
    .getPublicUrl(data.path);

  return publicUrl;
}
