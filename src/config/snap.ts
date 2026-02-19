// Configuration for SnapScan (Payshap) payments
// You can provide your Snap ID via an environment variable to avoid
// committing it to source control.

export const snapConfig = {
    enabled: import.meta.env.VITE_SNAP_ENABLED === 'true' || false,
    snapId: import.meta.env.VITE_SNAP_ID || '',
};
