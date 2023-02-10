const searchValueInArrays = <T extends any = [], K extends any = "">(
  values: T[],
  searchedValue: K
): { filteredItems: T[]; searchedValueCounts: number; searchedValue: K } => {
  if (values?.length) {
    const filteredItems = values?.filter((item) =>
      // @ts-ignore
      item.includes(searchedValue)
    );
    return {
      filteredItems: filteredItems,
      searchedValueCounts: filteredItems.length,
      searchedValue,
    };
  }
  throw new Error("The Array Is Empty");
};

console.log(searchValueInArrays(["Hello", "World"], "Hello"));
