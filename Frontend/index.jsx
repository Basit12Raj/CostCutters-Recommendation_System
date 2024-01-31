const [products, setProducts] = useState([
  // Existing products data...
  {
id: 1,
title: 'Product 1',
rating: 4.5,
price: '$29.99',
image: 'ab.jpg',
},
{
id: 1,
title: 'Product 2',
details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
rating: 5.0,
price: '$99.99',
image: 'ab.jpg',
},

{
id: 1,
title: 'Product 3',
details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
rating: 2.5,
price: '$88.99',
image: 'ab.jpg',
},
{
id: 1,
title: 'Product 1',
details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
rating: 3.5,
price: '$29.99',
image: 'ab.jpg',
},
{
id: 1,
title: 'Product 1',
details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
rating: 3.0,
price: '$29.99',
image: 'ab.jpg',
},
{
id: 1,
title: 'Product 1',
details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
rating: 4.5,
price: '$29.99',
image: 'ab.jpg',
},
  // Add your products here
]);

const [filteredProducts, setFilteredProducts] = useState(products);
const [currentPage, setCurrentPage] = useState(1);
const productsPerPage = 4;
const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
const startIndex = (currentPage - 1) * productsPerPage;
const endIndex = startIndex + productsPerPage;

const [searchTerm, setSearchTerm] = useState('');
const [sortOption, setSortOption] = useState('rating'); // Default sort by rating

const handleSearch = () => {
  const filtered = products.filter(
    (product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.details.toLowerCase().includes(searchTerm.toLowerCase())
  );
  setCurrentPage(1);
  setFilteredProducts(filtered);
};

const handleSortChange = (e) => {
  setSortOption(e.target.value);
  handleSortProducts(e.target.value);
};

const handleSortProducts = (option) => {
  let sortedProducts = [...filteredProducts];
  if (option === 'rating') {
    sortedProducts.sort((a, b) => b.rating - a.rating);
  } else if (option === 'price') {
    sortedProducts.sort((a, b) => parseFloat(a.price.slice(1)) - parseFloat(b.price.slice(1)));
  }
  setFilteredProducts(sortedProducts);
};

const handleNextPage = () => {
  setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
};

const handlePrevPage = () => {
  setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
};

const currentProducts = filteredProducts.slice(startIndex, endIndex);
