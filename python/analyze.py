# -*- coding: utf-8 -*-

file = open('dd.txt','r')
for line in file:
#for i in range(10):
#    line = file.readline()
    r = line.split(',')
    
    school = r[0]#学校
    region = r[1]#地区
    major = r[2]#专业名称
    plan = r[3]#计划类型
    level = r[4]#层次
    division = r[5]#科类
    num = r[6]#计划数

    s = '学校:' + school + ',地区:' + region + ',专业名称:' + major + ',计划类型:' + plan + ',层次:' + level + ',科类:' + division + ',计划数:' + num
    if major.find('机械') > -1:
        print s.decode('utf8')
