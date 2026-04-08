"use server";

/**
 * Verifies the admin password server-side to prevent exposing it to the client.
 * Returns true if the password matches the ADMIN_PASSWORD environment variable.
 */
export async function verifyAdminPassword(password: string): Promise<boolean> {
  const adminSecret = process.env.ADMIN_PASSWORD;
  
  if (!adminSecret) {
    console.error("ADMIN_PASSWORD is not set in environment variables.");
    return false;
  }
  
  return password === adminSecret;
}
