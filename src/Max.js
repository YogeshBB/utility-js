const max = (arr) => {
  if (arr.length==0)
    return undefined;
  arr.sort();
  arr.reverse();
  return arr[0];
}
module.export = max;
