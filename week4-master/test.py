import codecs
fileObj = codecs.open( "sujeong.txt", "r", "utf-8" )
u = fileObj.readlines()

for i in u :
	print(i)
	print("\n")

