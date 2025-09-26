document.addEventListener('DOMContentLoaded', () => {
  const category = document.querySelector('.products-category');
  const container = document.querySelector('.product-container');

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY || window.pageYOffset;
    const containerTop = container.offsetTop;
    const containerHeight = container.offsetHeight;
    const categoryHeight = category.offsetHeight;

    const maxTop = containerTop + containerHeight - categoryHeight;

    if (scrollTop > containerTop && scrollTop < maxTop) {
      category.style.position = 'fixed';
      category.style.top = '5px';
    } else if (scrollTop >= maxTop) {
      category.style.position = 'absolute';
      category.style.top = `${containerHeight - categoryHeight}px`;
    } else {
      category.style.position = 'absolute';
      category.style.top = '0';
    }
  });
});
