function removeTurkishChars(str:string) {
    return str

      .replace(/ı/g, 'i')
      .replace(/İ/g, 'I')

  }
  export default removeTurkishChars;