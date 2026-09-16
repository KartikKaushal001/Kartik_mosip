import urllib.request
import re

url = 'https://docs.inji.io/readme/try-it-out'
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
try:
    html = urllib.request.urlopen(req).read().decode('utf-8')
    links = re.findall(r'href=[\'"]([^\'"]+)[\'"]', html)
    for l in set(links):
        if 'apk' in l.lower() or 'app' in l.lower() or 'download' in l.lower() or 'play.google' in l.lower():
            print(l)
except Exception as e:
    print(e)
