Pre-requisites:
===============
Local:
    node + npm
    ssh-pass
Server:
    Docker & Compose
External:
    Firebase project
    Dgraph project
    
Important details to change:
===========================
configure .env & .env.local

find and replace 'mysite' & 'Mysite' with your domain, keeping capitalization.

Useful one liners:
=================

find . -maxdepth 100 -name "*<str>*" -print

b docker/dgraph

b up

b dn

