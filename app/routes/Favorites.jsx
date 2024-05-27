import React, {useEffect, useState} from 'react';
import {useLoaderData} from '@remix-run/react';
import {json} from '@shopify/remix-oxygen';
import {Link} from 'react-router-dom';

/**
 * Loader function to fetch the favorite products
 */
export async function loader({context}) {
  const response = await fetch('https://your-backend-microservice/favorites', {
    headers: {
      Authorization: `Bearer ${context.session.accessToken}`,
    },
  });

  if (!response.ok) {
    throw new Error('Failed to load favorite products');
  }

  const favorites = await response.json();
  return json({favorites});
}

export default function Favorites() {
  const {favorites} = useLoaderData();
  return (
    <div>
      <h1>Favorites</h1>
      <div className="favorites-grid">
        {favorites.map((product) => (
          <div key={product.id} className="favorite-item">
            <Link to={`/products/${product.handle}`}>
              <img src={product.image.src} alt={product.image.altText} />
              <h2>{product.title}</h2>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
