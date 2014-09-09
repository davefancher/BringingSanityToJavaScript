module RestParameters {
  function detokenizeString(format, ...values) {
    return values.reduce((state, current, ix) =>
      state.replace("{" + ix.toString() + "}", current),
      format);
  }

  export function RunDemo() {
    return detokenizeString("Hello, {0}! Today is {1}", "Dave", new Date().toLocaleDateString());
  }
} 