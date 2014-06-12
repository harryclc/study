#!/usr/bin/python
# coding=utf8
import urllib
import urllib2
import re

username=''
password=''

def post(url,values):
    data = urllib.urlencode(values)
    req = urllib2.Request(url, data)
    response = urllib2.urlopen(req)
    return response.read()

def get_code(url,data):
    recode=re.compile(r'"reply_code":(\d+),')
   # print recode.search(post(url,data)).group(1)
    return int(recode.findall(post(url,data))[0])

def check():
    url = "http://p.nju.edu.cn/portal/portal_io.do"
    code = get_code(url,'')
    if code == 301:
        return 1
    else:
        return 0

def login():
    url = "http://p.nju.edu.cn/portal/portal_io.do"
    data = {'action':'login','username':username,'password':password}
    code = get_code(url,data)
    if code == 101:
        return 1
    elif code == 103:
        #提示是否强制登录
        if 1:
            if forcelogout()==1:
                return login()
            else:
                return 3
        else:
            return 2
    else:
        return 0

def logout():
    url = "http://p.nju.edu.cn/portal/portal_io.do"
    data = {'action':'logout'}
    code = get_code(url,data)
    if code == 201:
        return 1
    else:
        return 0

def onlinelist():
    reid=re.compile(r'"acctsessionid":"(\d+)"')
    url = "http://p.nju.edu.cn/proxy/onlinelist.php"
    data = {'username':username,'password':password}
    code = get_code(url,data)
    if code == 501:
        return reid.search(post(url,data)).group(1)
    else:
        return 0

def forcelogout():
    url = "http://p.nju.edu.cn/proxy/disconnect.php"
    acctsessionid=onlinelist();
    if acctsessionid:
        data = {'username':username,'password':password,'acctsessionid':acctsessionid}
        code = get_code(url,data)
        if code == 601:
            return 1
    else:
        return None

def main():
    #start
    if check():
        print 'Online! '
        #logout?
        if logout():
            print 'Logout successful! '
        #Yes?logout&exit:exit
        #return 1
    else:
        print 'Offline! '
        #login?
        if login():
            print 'Login successful! '
        else:
            print 'Error\n'
        #Yes?login:exit
        #return 1
   # print onlinelist(0)
   # print 'end\n'

if __name__ == '__main__':
    main()

