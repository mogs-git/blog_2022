#/bin/python

import os

blog_path = "writing/"
dir_list = os.listdir(blog_path)

dict_string = "let arr = []\n"

arr = []

for bp in dir_list:
    f = open(blog_path + bp,"r")
    lines = f.readlines()
    lines = ''.join(lines)
    desc_text = lines[lines.find('<meta name="description" content="')+len('<meta name="description" content="') : lines.find('"></meta><!--desc-->')].replace("\n", "")
    blog_title = lines[lines.find('<title>')+len('<title>') : lines.find('</title>')].replace("\n", "")
    blog_date = lines[lines.find('<meta name="date" content=')+len('<meta name="date" content=') : lines.find('><!--date-->')].replace("\n", "")
    dict_string += "arr.push({post_link: 'writing/" + bp + "',post_name: '"+ blog_title + "',post_text:'" + desc_text + "',post_date:new Date(" + blog_date + ")})\n"
    arr.append("arr.push("+ bp + "," + desc_text + ",," + blog_date + ")")

print(dict_string)
print(arr)

with open("scripts/descriptions.js", "w") as text_file:
    text_file.write(dict_string)