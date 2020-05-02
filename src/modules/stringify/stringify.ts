export namespace Stringify {

  export const toString = (obj: Record<string, any>) => {
    let string = '';
    for (const key in obj) {
      string += `${obj[key]} `;
    }
    return string.trim();
  }
}