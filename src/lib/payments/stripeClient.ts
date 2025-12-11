/**
 * Stripe Payment Integration
 *
 * This file will handle checkout flows for dumpster orders.
 * Currently a placeholder for future Stripe integration.
 */

export type DumpsterSize = '20-yard' | '30-yard' | '40-yard';

export interface CheckoutOptions {
  dumpsterSize: DumpsterSize;
  deliveryDate?: string;
  customerEmail?: string;
  customerPhone?: string;
}

/**
 * Initialize Stripe checkout session
 * TODO: Implement actual Stripe checkout flow
 *
 * @param options - Checkout configuration options
 * @returns Promise that resolves when checkout is initiated
 */
export async function startCheckout(options: CheckoutOptions): Promise<void> {
  console.log('Starting checkout for:', options);

  // TODO: Initialize Stripe with VITE_STRIPE_PUBLIC_KEY from environment
  // TODO: Create checkout session with backend API
  // TODO: Redirect to Stripe hosted checkout page

  // Placeholder alert for now
  alert(`Checkout initiated for ${options.dumpsterSize} dumpster. Payment integration coming soon!`);
}

/**
 * Get pricing for a specific dumpster size
 * TODO: Fetch dynamic pricing from backend
 */
export function getDumpsterPrice(size: DumpsterSize): number {
  const prices: Record<DumpsterSize, number> = {
    '20-yard': 350,
    '30-yard': 450,
    '40-yard': 550,
  };

  return prices[size];
}
