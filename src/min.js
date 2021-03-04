const min = (arr) => {
  if (arr.length == 0)
    return undefined;
  arr.sort();
  return arr[0];
}
module.export = min;
