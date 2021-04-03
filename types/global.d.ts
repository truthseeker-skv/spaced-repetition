export {}

declare global {
  namespace NodeJS {
    interface Global {

    }
  }

  interface Window {
    CARD_DATA: any;
    ankiStorage: Record<string, string>;
    ankiPlatform: string;
  }
}
