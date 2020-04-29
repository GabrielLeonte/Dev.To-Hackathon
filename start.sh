#!/bin/sh
(cd Server && npm run start) & (cd Client && npm run dev)
