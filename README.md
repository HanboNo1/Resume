## About

I think everyone needs a resume page to introduce themselves, either as an interview bonus or on your personal website.

This is a responsive, cool and elegant personal resume webpage, suitable for both computers and mobile phones, no need to connect to the Internet, pure front-end HTML+CSS+JavaScript implementation, can be used for personal resume, personal website, personal profile or learning, you can configure The file automatically generates your own web page.

## Project structure

Go to [Xiao-hei/Resume repository](https://github.com/Xiaohei-dsy/Resume)clone Project

Resume including：

- The config file contains the **config** folder for the project.
- **personal-info-main.css** in the **CSS** folder is the main CSS code, **personal-info-animate.css** is the animation CSS code of the project, and the rest of the **CSS** folder are reference libraries.
- **personal-info-main.js** under the **JS** folder is the main JS code, and other js files are reference libraries.
- The **images** folder contains images that may be used.
- Some icons are included under the **svg** folder.
- **index.html** is the entry of the web page.



## Configure 

**Configure your information in the ./config/config.js file to automatically generate your own web page, follow the JavaScript object declaration specification, pay attention to the format, do not forget to write commas in the middle of object variables, and do not write more commas at the end of object variables. **



**If you do not need to configure this file, please comment out the top 4 lines of code in the ./JS/personal-info-main.js file.**

```function addScript(url) {
function addScript(url) {
    document.write("<script language=javascript src=./config/config.js></script>");
}
addScript();
```



## Reference

[Bootstrap · The most popular HTML, CSS, and JS library in the world. (getbootstrap.com)](https://getbootstrap.com/)

[AOS - Animate on scroll library (michalsnik.github.io)](http://michalsnik.github.io/aos/)

[anime.js官网_免费、灵活的轻型JavaScript动画库 | animejs](https://www.animejs.cn/)

[jQuery](https://jquery.com/)

