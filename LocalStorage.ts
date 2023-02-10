const localStorageController = <T extends string = "", K = "">(
  storageName: T,
  type: "GET" | "SET" | "DELETE",
  storageValue?: K
) => {
  if (global?.window !== undefined && window !== undefined) {
    if (type === "GET") {
      const fetchedValue = window.localStorage.getItem(storageName);
      if (fetchedValue) {
        return JSON.parse(fetchedValue);
      }
    } else if (type === "SET") {
      window.localStorage.setItem(storageName, JSON.stringify(storageValue));
    } else if (type === "DELETE") {
      window.localStorage.removeItem(storageName);
    }
  }
};
