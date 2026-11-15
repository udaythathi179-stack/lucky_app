export {};

declare global {
  interface GoogleCredentialResponse {
    credential?: string;
    clientId?: string;
    select_by?: string;
  }

  interface GoogleIdentityConfiguration {
    client_id: string;
    callback: (response: GoogleCredentialResponse) => void;
    auto_select?: boolean;
    cancel_on_tap_outside?: boolean;
    ux_mode?: 'popup' | 'redirect';
    use_fedcm_for_prompt?: boolean;
    nonce?: string;
  }

  interface GoogleButtonConfiguration {
    type?: 'standard' | 'icon';
    theme?: 'outline' | 'filled_blue' | 'filled_black';
    size?: 'large' | 'medium' | 'small';
    text?: 'signin_with' | 'signup_with' | 'continue_with' | 'signin';
    shape?: 'rectangular' | 'pill' | 'circle' | 'square';
    logo_alignment?: 'left' | 'center';
    width?: number;
    locale?: string;
    click_listener?: () => void;
  }

  interface Window {
    google?: {
      accounts: {
        id: {
          initialize: (configuration: GoogleIdentityConfiguration) => void;
          renderButton: (parent: HTMLElement, configuration: GoogleButtonConfiguration) => void;
          disableAutoSelect: () => void;
          prompt: () => void;
        };
      };
    };
  }
}
