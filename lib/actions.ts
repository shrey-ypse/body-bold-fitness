"use server";

/**
 * Verifies the admin password server-side to prevent exposing it to the client.
 * Returns true if the password matches the ADMIN_PASSWORD environment variable.
 */
export async function verifyAdminPassword(password: string): Promise<boolean> {
  const adminSecret = process.env.ADMIN_PASSWORD;
  
  if (!adminSecret) {
    console.warn("ADMIN_PASSWORD environment variable is missing.");
    return false;
  }
  
  // Trim spaces to prevent mobile keyboard input issues
  return password.trim() === adminSecret.trim();
}
