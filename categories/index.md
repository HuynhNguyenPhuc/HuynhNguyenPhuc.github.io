---
layout: page
title: Categories
permalink: /categories/
---

<div class="categories-page">
  <h1 class="page-title">Categories</h1>
  <hr class="divider">

  <div class="category-list">
    <ul>
      {% for category in site.categories %}
        {% assign category_url = category[0] | downcase | replace: " ", "-" %}
        <li class="category-item">
          <a href="{{ site.baseurl }}/categories/{{ category_url }}" class="category-link">
            {{ category[0] | capitalize }} 
            <span class="post-count">({{ category[1].size }} posts)</span>
          </a>
        </li>
      {% endfor %}
    </ul>
  </div>
</div>

<style>
  .categories-page {
    margin: 0 auto;
    padding: 20px;
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.9);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 1px solid rgba(0, 0, 0, 0.1);
  }

  .page-title {
    font-size: 2rem;
    color: #000;
    margin-bottom: 20px;
    text-align: center;
  }

  .divider {
    border: none;
    border-bottom: 2px solid #3498db;
    margin-bottom: 30px;
  }

  .category-list ul {
    list-style-type: none;
    padding: 0;
  }

  .category-item {
    margin-bottom: 15px;
  }

  .category-link {
    font-size: 1.5rem;
    font-weight: bold;
    color: #000;
    text-decoration: none;
    position: relative;
  }

  .category-link:hover {
    color: #3498db;
  }

  .category-link::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: #000;
    left: 0;
    bottom: -2px;
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  .category-link:hover::after {
    transform: scaleX(1);
  }

  .post-count {
    font-size: 1rem;
    color: #7f8c8d;
  }

  /* Dark mode */
  body.dark .categories-page {
    background: rgba(255, 255, 255, 0.3);
    box-shadow: 0 6px 12px rgba(255, 255, 255, 0.5);
    border: 1px solid rgba(255, 255, 255, 0.3);
    color: #000;
  }

  body.dark .page-title {
    color: #000;
  }

  body.dark .category-link {
    color: #000;
  }

  body.dark .category-link:hover {
    color: #3498db;
  }

  body.dark .category-link::after {
    background-color: #000;
  }

  body.dark .post-count {
    color: #444;
  }
</style>