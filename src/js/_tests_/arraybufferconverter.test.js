import ArrayBufferConverter from '../arraybufferconverter';

function getBuffer() {
  const data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  return ((input) => {
    const buffer = new ArrayBuffer(data.length * 2);
    const bufferView = new Uint16Array(buffer);
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < input.length; i++) {
      bufferView[i] = input.charCodeAt(i);
    }
    return buffer;
  })(data);
}

test('class ArrayBufferConvertor should load() buffer', () => {
  const input = getBuffer();
  const expected = getBuffer();
  const received = new ArrayBufferConverter();
  received.load(input);
  expect(received.buffer).toEqual(expected);
});

test('class ArrayBufferConvertor toString() should throw error', () => {
  const received = new ArrayBufferConverter();
  expect(() => {
    received.toString();
  }).toThrowError(new Error('buffer не задан'));
});

test('class ArrayBufferConvertor should convert toString()', () => {
  const input = getBuffer();
  const expected = '00000000000000000000001000000000000000000000000010000';
  const received = new ArrayBufferConverter();
  received.load(input);
  expect(received.toString()).toEqual(expected);
});
