### How to setup an API using GraphQL, GraphiQL and Express with MVC Routing

This repository is a POC for setting up an express server that supports GraphQL, GraphiQL and Express Server with MVC Routing.

### What is GraphQL 

GraphQL  is a data query language developed internally by Facebook in 2012 before being publicly released in 2015. It provides an alternative to REST and ad-hoc webservice architectures. It allows clients to define the structure of the data required, and exactly the same structure of the data is returned from the server. It is a strongly typed runtime which allows clients to dictate what data is needed. This avoids both the problems of over-fetching as well as under-fetching of data.

### Pre-requisites

1. NodeJS installed
2. NPM
3. Express Generator

### Setting up the API dependencies

1. Create a folder
2. Open folder in terminal and initialize NPM on the folder using the command below:

   `npm init`

3. Scaffold API base components using Express Generator

   `express --view=pug`
   
   `npm install`

4. Install Apollo for Express (GraphQL utilization framework for Express)

   `npm install apollo-server-express --save`

5. Install GraphQL and GraphQL Tools

   `npm install graphql graphql-tools --save`
   
