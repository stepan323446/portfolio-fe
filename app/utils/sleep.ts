const sleep = (ms: number, signal: AbortSignal|null = null) => {
  return new Promise((resolve, reject) => {
    const id = setTimeout(resolve, ms);

    signal?.addEventListener('abort', () => {
      clearTimeout(id);
      reject();
    });
  });
}

export default sleep;