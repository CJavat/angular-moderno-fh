export interface Country {
  name: Name;
  cca3: string;
  borders: string[];
}

interface Name {
  common: string;
  official: string;
  nativeName: { [key: string]: NativeName };
}

interface NativeName {
  official: string;
  common: string;
}
