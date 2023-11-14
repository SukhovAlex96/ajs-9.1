export default class ArrayBufferConverter {
  load(buffer) {
    this.buffer = buffer;
  }

  toString() {
    if (this.buffer) {
      const array = new Uint16Array(this.buffer);
      return array.map((item) => String.fromCharCode(item)).join('');
    }
    throw new Error('buffer не задан');
  }
}
