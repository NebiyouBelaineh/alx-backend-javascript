function createInt8TypedArray(length, position, value) {
  if (length < 0) {
    throw new Error('Length needs to be a positive number.');
  }
  const buffer = new ArrayBuffer(length);
  const dataView = new DataView(buffer);

  if (position >= length) {
    throw new Error('Position outside range');
  }
  dataView.setInt8(position, value);
  return dataView;

}
export default createInt8TypedArray;
