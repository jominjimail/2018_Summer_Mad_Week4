#-*- coding:utf-8 -*-

import string
import pymysql
import sys
#import codecs
reload(sys)
sys.setdefaultencoding('utf-8')

conn=pymysql.connect(host="localhost",
		user="root",
      	password="doghoney",
		db="openmajor",
       	charset='utf8')
#conn.set_character_set('utf8mb4')

f=open("sujeong.txt", 'r')

list=()
lines=[]
a="가야대학교"
for paragraph in f:
   	lines=paragraph.split('\n')
 	for each_line in lines:
		if each_line is not "":
			back=each_line.find(',')
			list=((each_line[:back], (each_line[back+2:].decode("cp949"))[:-2]),)+list

print(list)
f.close()

cursor=conn.cursor();
sql = """INSERT INTO college (domain, name) values (%s, %s)"""
cursor.executemany(sql, list)
conn.commit()

conn.close()

