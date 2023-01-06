export enum StorageKeys {
  SORT_OPTION = 'SORT_OPTION'
}

export class StorageUtils {
  static setKey(key: StorageKeys, value: any): void {
    localStorage.setItem(key, value)
  }

  static getKey(key: StorageKeys): any | null {
    return localStorage.getItem(key) ?? null;
  }
}
