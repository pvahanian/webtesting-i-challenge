module.exports = {
  success,
  fail,
  repair,
  get,
};

function success(item) {
  if (item.enhancement === 20) return { ...item };

  if (item.enhancement < 20) return { ...item, enhancement: item.enhancement + 1 };
}

function fail(item) {
  if (item.enhancement < 15) return { ...item, durability: item.durability - 5 };

  if (item.enhancement >= 15) {
    item.durability += 10;

    if (item.enhancement > 15) return { ...item, enhancement: item.enhancement-1 };
    
    return { ...item}
  }
}
function repair(item) {
  return { ...item, durability: 100 };
}

function get(item) {
  return { ...item };
}
