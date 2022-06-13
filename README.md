# MyStore - Frontend build with Angular

## Project Overview

This project was built as part of the Udacity Nanodegree program. The goal of the project was to build a storefront using Angular CLI.

## Setup

To be able to run this project you need to have [Node.js](https://nodejs.org/en/download/) installed on your local machine.

Then run `npm install` to automatically install all the dependencies.

To install Angular CLI globally run `npm install -g @angular/cli`

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Functionality

This is an mockup store with basic functionality of an online store:

- view product list page
- view product details
- add product to a cart
- view the cart
- remove product from cart and adjust their quantity
- submit user information
- receive a confirmation after successful submission

## Project structure

### Components

Components structure

1. App
   - Header
   - - Navbar
   - Product List
   - - Product Item
   - - Product Details
   - Cart
   - - Form
   - Submit page

### Services

There are 3 services:

- Product Service (handles receiving information from an .json file located in the asset folder)
- Order service (handles information about the Order, and is using it to display it in the cart component)
- Customer service (handles the data from the Form input)

### Models

- Product models (to create a Product instance)
- Customer model (to create a Customer instance)
