from PIL import Image
import os

path = os.path.join('static', 'images')
print(path)
lis = os.listdir(path)
# print(lis)
img_list = []
for i in lis:
    img_list.append(i.lower())
print(img_list)

#png to jpg
cnt2 = 0
for f in img_list:
    img = Image.open(f).convert('RGB')
    img.save(path + img_list[cnt2] + ".jpg", 'jpeg')
    cnt2+=1
