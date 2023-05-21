import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import React, { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

function Recipes() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [dietaryRestriction, setDietaryRestriction] = useState("");
  const [favorites, setFavorites] = useState([]);
  const [numRecipesToDisplay, setNumRecipesToDisplay] = useState(15);

  const fetchRecipes = async () => {
    const appId = "64a16435";
    const appKey = "1c08c2d193d378abd755ca93bd2c3b15";
    const query = searchQuery ? `&q=${searchQuery}` : "&q=cake";
    const restrictions = dietaryRestriction
      ? `&health=${dietaryRestriction}`
      : "";

    try {
      const response = await axios.get(
        `https://api.edamam.com/api/recipes/v2?type=public${query}&app_id=${appId}&app_key=${appKey}${restrictions}`
      );

      setRecipes(response.data.hits);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleDietaryRestrictionChange = (e) => {
    setDietaryRestriction(e.target.value);
  };

  const handleFavoriteToggle = (recipe) => {
    if (favorites.includes(recipe)) {
      setFavorites((prevFavorites) =>
        prevFavorites.filter((fav) => fav !== recipe)
      );
    } else {
      setFavorites((prevFavorites) => [...prevFavorites, recipe]);
    }
  };

  const handleLoadMore = () => {
    setNumRecipesToDisplay((prevNumRecipes) => prevNumRecipes + 15);
  };

  const handleClearSearch = () => {
    setSearchQuery("");
  };

  useEffect(() => {
    setLoading(true);
    fetchRecipes();
    setNumRecipesToDisplay(15);
  }, [searchQuery, dietaryRestriction]);

  return (
    <Container className="mt-5">
      <Form.Group className="mb-5" controlId="searchForm">
        <h2>Search results</h2>
        <div className="search-input">
          <Form.Control
            type="text"
            className="border-0 border-bottom border-dark rounded-0 "
            placeholder="Search by ingredient (fish, chicken ...)"
            value={searchQuery}
            onChange={handleSearchInputChange}
          />
          <p className="number-of-recipes">{`(${recipes.length} Recipes)`}</p>
          <FontAwesomeIcon
            icon={faXmark}
            onClick={handleClearSearch}
            className="text-muted clear-icon"
          />
        </div>
        <h5 className="mt-4">Filter by Dietary Restrictions</h5>
        <Form.Control
          as="select"
          className="my-3 w-25"
          value={dietaryRestriction}
          onChange={handleDietaryRestrictionChange}
        >
          <option value="">All</option>
          <option value="vegan">Vegan</option>
          <option value="vegetarian">Vegetarian</option>
          <option value="gluten-free">Gluten-Free</option>
          <option value="dairy-free">Dairy-Free</option>
        </Form.Control>
      </Form.Group>

      {loading ? (
        <div className="text-center">
          <span>Loading...</span>
        </div>
      ) : (
        <Row>
          {recipes.slice(0, numRecipesToDisplay).map((recipe) => (
            <Col key={recipe.recipe.uri} sm={6} md={4} lg={3}>
              <Card className="mb-4">
                <Card.Img variant="top" src={recipe.recipe.image} />
                <Card.Body>
                  <Card.Title>{recipe.recipe.label}</Card.Title>
                  <Card.Text>{`Cooking Time: ${recipe.recipe.totalTime} min`}</Card.Text>
                  <Card.Text>{`Calories: ${recipe.recipe.calories.toFixed(
                    2
                  )}`}</Card.Text>
                  <Button
                    variant={
                      favorites.includes(recipe) ? "primary" : "outline-primary"
                    }
                    onClick={() => handleFavoriteToggle(recipe)}
                  >
                    {favorites.includes(recipe)
                      ? "Remove Favorite"
                      : "Add to Favorites"}
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}

      {!loading && numRecipesToDisplay < recipes.length && (
        <div className="text-center load-more-btn">
          <Button onClick={handleLoadMore}>Load More</Button>
        </div>
      )}
    </Container>
  );
}

export default Recipes;
