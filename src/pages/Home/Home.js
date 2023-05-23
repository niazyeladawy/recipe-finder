import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Container, Form, Row, Spinner } from 'react-bootstrap';
import SingleRecipe from '../../components/SingleRecipe';
import { AiOutlineClose } from 'react-icons/ai';

const Home = () => {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(false);
  const [recipes, setRecipes] = useState([]);
  const [nextPageUrl, setNextPageUrl] = useState('');
  const [favMeals, setfavMeals] = useState([]);

  const searchRecipes = async () => {
    try {
      setLoading(true);
      const q = query || 'm';
      const response = await axios.get(
        `https://api.edamam.com/api/recipes/v2?type=public&q=${q}&app_id=${process.env.REACT_APP_APPLICATION_ID}&app_key=${process.env.REACT_APP_APPLICATION_KEYS}&page=1&to=1000`
      );
      if (response.status === 200) {
        const fetchedRecipes = response.data.hits;
        setCount(response.data.count);
        if (response.data._links.next.href) {
          setNextPageUrl(response.data._links.next.href)
        }
        setRecipes(fetchedRecipes);
        setLoading(false);
      } else {
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleClear = () => {
    setQuery('');
  };







  const handeleShowMore = async () => {
    try {
      const response = await axios.get(nextPageUrl);
      if (response.status === 200) {
        const fetchedRecipes = response.data.hits;
        if (response.data._links.next.href) {
          setNextPageUrl(response.data._links.next.href)
        }
        setRecipes((prev) => [...prev, ...fetchedRecipes]);
        setLoading(false);
      } else {
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
    }
  }



  useEffect(() => {
    searchRecipes();
  }, [query]);

  return (
    <div className='home'>
      <Container>
        <h2>Recipes</h2>
        <Form>
          <div className='search-cont mb-5'>
            <Form.Control
              type='text'
              placeholder='Enter a food item'
              onChange={handleChange}
              className='search-input'
              value={query}
            />
            {query && !loading && (
              <div className='clear-search-cont'>
                <span>({count} Recipes)</span>
                <AiOutlineClose onClick={handleClear} />
              </div>
            )}
          </div>
        </Form>
        {
          loading && <div className='d-flex justify-content-center mb-2'>
            <Spinner size='26' />
          </div>
        }

        <Row className='gap-x-1'>
          {recipes.map((recipe) => (
            <Col xs={12} sm='6' md={3} key={recipe.recipe.uri}>
              <SingleRecipe  recipe={recipe} />
            </Col>
          ))}
        </Row>
        {nextPageUrl && (
          <div className='d-flex justify-content-center'>
            <button className='load-more' onClick={handeleShowMore} >
              Load More
            </button>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Home;
