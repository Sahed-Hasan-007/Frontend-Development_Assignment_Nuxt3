<h2>Overview</h2>
<p>This is an online shop project built using <strong>Nuxt 3</strong>. The project leverages <strong>Tailwind CSS</strong> for styling and <strong>Pinia</strong> for state management to create a modern, responsive, and efficient e-commerce application.</p>

<hr>

<h2>Features</h2>
<ul>
    <li><strong>Responsive Design</strong>: Fully responsive UI powered by Tailwind CSS.</li>
    <li><strong>State Management</strong>: Centralized and efficient state management using Pinia.</li>
    <li><strong>Dynamic Routing</strong>: Nuxt 3's routing system for pages.</li>
    <li><strong>Optimized Performance</strong>: Server-side rendering (SSR) and static site generation (SSG).</li>
    <li><strong>Easily Extendable</strong>: Designed for scalability and adding new features.</li>
</ul>

<hr>

<h2>Technologies Used</h2>
<ul>
    <li><a href="https://nuxt.com/">Nuxt 3</a>: The progressive Vue.js framework.</li>
    <li><a href="https://tailwindcss.com/">Tailwind CSS</a>: Utility-first CSS framework for styling.</li>
    <li><a href="https://pinia.vuejs.org/">Pinia</a>: State management library for Vue.js.</li>
    <li><a href="https://vitejs.dev/">Vite</a>: Fast development server and build tool.</li>
</ul>

<hr>

<h2>Installation and Setup</h2>

<h3>Prerequisites</h3>
<p>Ensure you have the following installed:</p>
<ul>
    <li><strong>Node.js</strong>: Version 16 or above.</li>
    <li><strong>NPM</strong> or <strong>Yarn</strong>: Package managers.</li>
</ul>

<h3>Steps</h3>
<ol>
    <li><strong>Clone the repository</strong>:
        <pre><code>git clone &lt;repository-url&gt;
<hr>

<h2>Usage</h2>

<h3>State Management with Pinia</h3>
<p>The application uses Pinia for managing global state, including:</p>
<ul>
    <li><strong>Cart Management</strong>: Adding, updating, and removing items.</li>
    <li><strong>Product Listing</strong>: Storing and filtering products.</li>
</ul>

<p>Example store (e.g., <code>stores/cartStore.ts</code>):</p>
<pre><code>import { defineStore } from 'pinia';
