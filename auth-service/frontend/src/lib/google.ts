const GIS_SCRIPT_URL = 'https://accounts.google.com/gsi/client';

let scriptPromise: Promise<void> | null = null;

export function loadGoogleIdentityServices(): Promise<void> {
  if (window.google?.accounts?.id) {
    return Promise.resolve();
  }
  if (scriptPromise) {
    return scriptPromise;
  }

  scriptPromise = new Promise<void>((resolve, reject) => {
    const existing = document.querySelector<HTMLScriptElement>(
      `script[src="${GIS_SCRIPT_URL}"]`,
    );

    if (existing) {
      if (window.google?.accounts?.id) {
        resolve();
        return;
      }
      existing.addEventListener('load', () => resolve(), { once: true });
      existing.addEventListener(
        'error',
        () => reject(new Error('Failed to load Google Identity Services.')),
        { once: true },
      );
      return;
    }

    const script = document.createElement('script');
    script.src = GIS_SCRIPT_URL;
    script.async = true;
    script.defer = true;
    script.onload = () => resolve();
    script.onerror = () =>
      reject(
        new Error(
          'Unable to load Google Identity Services. Check your network connection and try again.',
        ),
      );
    document.head.appendChild(script);
  }).catch((error: unknown) => {
    scriptPromise = null;
    throw error;
  });

  return scriptPromise;
}

export function disableGoogleAutoSelect(): void {
  window.google?.accounts?.id?.disableAutoSelect();
}
