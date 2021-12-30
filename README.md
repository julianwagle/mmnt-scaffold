Next for me todo
================

Update Pricing

- add stripe price ids to data/pricing/pricing.js via .env

- set pricing data in context

- pass context data to server during api calls


Pre-requisites:
===============

Local:

    node + npm

    ssh-pass

Server:

    Docker & Compose

External:

    Firebase

    Dgraph

    Stripe 
    

Important details to change:
===========================

configure .env & .env.local

find and replace 'mysite' & 'Mysite' with your domain, keeping capitalization.

change the last line of schema.graphql to include your firebase project id


Useful one liners:
=================

find . -maxdepth 100 -name "*<str>*" -print

b docker/dgraph

b up

b dn

