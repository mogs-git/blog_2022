#!/bin/bash

v1="let text  = '"
v2=$(ls -C writing/) 
v3="';"

v4="${v1} ${v2} ${v3}" 

echo "$v4" > filenames.js
