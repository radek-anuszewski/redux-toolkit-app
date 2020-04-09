export const loadBooks = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(
        [
          {
            title: 'Książka z serwera',
            deficiency: false,
          }
        ]
      )
    }, 5000);
  })
};
