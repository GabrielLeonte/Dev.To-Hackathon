#!/bin/sh
(cd Server && npm run dev) & (cd Client && npm run dev)
