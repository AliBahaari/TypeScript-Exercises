interface IRemoveEmptyProperties {
  [index: string]: any;
}

const removeEmptyProperties = <T extends IRemoveEmptyProperties = {}>(
  param: T
) => {
  let newObject: IRemoveEmptyProperties = {};
  Object.keys(param).forEach((key: any) => {
    if (param[key]) {
      newObject[key] = param[key];
    }
  });
  return newObject;
};

const sampleObject = {
  title: "Hello World!",
  description: undefined,
  imageUrl: null,
};

console.log(removeEmptyProperties(sampleObject));
