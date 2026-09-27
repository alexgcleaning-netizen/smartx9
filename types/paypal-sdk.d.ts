// Global type declarations for the PayPal JS SDK used by the claim form's
// subscription checkout (Step 2). The SDK is loaded lazily at runtime from
// https://www.paypal.com/sdk/js (vault=true, intent=subscription) and exposes
// a global `paypal` object. See: https://developer.paypal.com/sdk/js

interface PayPalSubscription {
  create(options: { plan_id: string }): Promise<{ id?: string }>
}

interface PayPalButtonsActions {
  subscription: PayPalSubscription
}

interface PayPalButtonsStyle {
  shape?: 'pill' | 'rect'
  color?: 'gold' | 'blue' | 'silver' | 'white' | 'black'
  layout?: 'vertical' | 'horizontal'
  label?: 'paypal' | 'checkout' | 'pay' | 'buynow' | 'subscribe'
}

interface PayPalButtonsConfig {
  style?: PayPalButtonsStyle
  createSubscription?: (
    data: unknown,
    actions: PayPalButtonsActions,
  ) => Promise<unknown> | unknown
  onApprove?: (data: { subscriptionID?: string }, actions: unknown) => void
  onCancel?: (data: unknown, actions: unknown) => void
  onError?: (error: unknown) => void
}

interface PayPalSDK {
  Buttons(config: PayPalButtonsConfig): { render(containerSelector: string): void }
}

interface Window {
  paypal?: PayPalSDK
}