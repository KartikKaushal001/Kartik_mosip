import base64, json, re

with open(r'C:\Users\ACER\.gemini\antigravity-ide\brain\ca572c6c-f230-4681-8aaa-1dc5c325f7ac\.system_generated\steps\42\content.md', 'r', encoding='utf-8') as f:
    raw = f.read()

m = re.search(r'"content":"(.*?)"', raw, re.DOTALL)
b64 = m.group(1).replace('\\n', '')
decoded = base64.b64decode(b64).decode('utf-8')
j = json.loads(decoded)

# Get step 4 - "4. Get Credential with Pre-Auth Token"
step4 = j['item'][2]['item'][3]
print("=== STEP 4 NAME ===")
print(step4['name'])

print("\n=== PRE-REQUEST SCRIPT ===")
for event in step4['event']:
    if event['listen'] == 'prerequest':
        print('\n'.join(event['script']['exec']))

print("\n=== REQUEST BODY ===")
print(step4['request']['body']['raw'])
