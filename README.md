### run with container
```
git clone https://github.com/jobscale/ramen-timer.git
cd ramen-timer
main() {
  docker build . -t local/ramen-timer:0.0.1
  docker run --name ramen-timer --rm -d -p 80:80 local/ramen-timer:0.0.1
  http_proxy= curl -v 127.0.0.1
} && main
```

![ramenTimer](https://user-images.githubusercontent.com/39142850/63760432-4403f500-c8fa-11e9-9eba-3e22c3179e06.gif)

# RamenTimer
### **https://cupramen-timer.firebaseapp.com/**
　

　**・Vue.js**
　**・CSSanimation**
　**・CharacterDesign**
　**・Firebase**
　
### 　*Please use it freely.*
