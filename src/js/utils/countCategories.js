export const countCategories = (notes) => {
  return notes.reduce((acc, item) => {
    let categoryIndex = acc.findIndex(
      inner => inner.name === item.category
    );
    if (categoryIndex > -1) {
      if (item.active) {
        acc[categoryIndex].active += 1;
      } else {
        acc[categoryIndex].archived += 1;
      }
    } else {
      if (item.active) {
        acc = [...acc, { name: item.category, active: 1, archived: 0 }];
      } else {
        acc = [...acc, { name: item.category, active: 0, archived: 1 }];
      }
    }
    return acc;
  }, []);
};
