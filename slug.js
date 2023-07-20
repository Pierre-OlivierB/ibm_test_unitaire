function slug(a) {
  return a.trim().replace(/\s/g, "-").toLowerCase();
}

// console.log(slug(" Attention en dessous"));

export default slug;
