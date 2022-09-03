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
    tags_exist = lines.find('<p class="tags-list">Tags: ')
    if tags_exist != -1:
        tags = lines[lines.find('<p class="tags-list">Tags: ')+len('<p class="tags-list">Tags: ') : lines.find('</p><!--tags-->')].replace("\n", "")
        tag_list = tags.split(", ")
        blog_title = lines[lines.find('<title>')+len('<title>') : lines.find('</title>')].replace("\n", "")
        arr.append({'name': blog_path + bp, 'tags': tag_list, 'title': blog_title})
    else:
        arr.append({'name': bp, 'tags': []})

init_string = "let tag_arr = []\n"

for element in arr:
    init_string += f"tag_arr.push({{'link': '{element['name']}', 'tags': {element['tags']}, 'title': '{element['title']}'}})\n"

with open("scripts/tags.js", "w") as text_file:
    text_file.write(init_string)