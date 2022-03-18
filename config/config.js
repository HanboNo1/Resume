var config = {
    /*在这里配置你的基本信息，所有数据以字符串形式给出*/
    name: "Shaoyu Dai",
    sex: "Male",
    age: "23",
    phone: "(+1) 4138244354",
    email: "shaoyudai@umass.edu",
    address: "Sunderland, MA, United States",
    linkedIn: "<a href='https://www.linkedin.com/in/shaoyu-dai-894696230/' target='_blank' rel='noopener noreferrer'>My LinkedIn</a>",
    excpect_work: "Software Development Engineering",


    /*在这里配置首页的座右铭集合*/
    motto: [
        "Believe in yourself!",
        "Learn and Be Curious!",
        "Think Big!"
    ],


    /*在这里配置首页的见面信息，你可以内嵌HTML标签以调整格式*/
    welcome: "<font size=7>Nice to meet you<br> </font>"+
             "<font size=7>Welcome to my homepage<br></font>",


    /*在这里配置关于我的信息，你可以内嵌HTML标签以调整格式*/
    about: "<p>As a graduate student who is studying in the College of Engineering in UMass, I have a great passion for software development. My knowledge aligns well, as I have been studying courses related to software development and have relevant internship experience, and I know I would make a valuable addition to your team.<br>" +
        "I have excellent educational foundation, solid software development intership experience, and a possion for furthering projects, in turn, grow revenue for your organization. I would much appreciate the opportunity to contribute to your ongoing growth and continued success.<br>" +
        "Looking forward to getting in touch with you!</p>",



    /** 
    * 在这里配置你的技能点
    * ["技能点", 掌握程度, "技能条颜色"]
    */  
    skills: [
        ["Java", 80, "red"],
        ["SQL", 75, "blue"],
        ["GoLang", 70, "#1abc9c"],
        ["Python", 70, "orange"],
        ["HTML5", 65, "rgba(0,0,0)"],
        ["JavaScript", 60, "pink"]
    ],


    /*这里填写你的技能描述，你可以内嵌HTML标签以调整格式*/
    skills_description: "<ul>" +
        "     <li>Possess an extremely sound understanding of Algorithms, Data Structure, Object Oriented Design, Database.</li>" +
        "     <li>Proficiency in programming language such as Java, Golang, Python.</li>" +
        "     <li>Fimiliarity with Spring Boot, Spring Cloud, Redis, Mysql, Mybaits, Neo4j, Elasticsearch, web protocols, and web services technologies.</li>" +
        "     <li>Experience developing software in a Linux environment.</li>" +
        "     <li>Fimiliarity with DevOps tools and technologies like Git.</li>" +
        "     <li>Good communication, time management, organizational skills and attention to detail.</li>" +
        " </ul>",


    /**
     * 这里填写你的个人作品展示
     * ["img"，"url", "ProjectName", "brief"]
     * img表示您的作品图片链接，url表示您的项目地址，ProjectName表示您的仓库或作品名称，brief是一句简短的介绍
     * 通过查看实际效果以调整字题长度
     */
    portfolio: [
        ["./images/pro-1.png", "http://1.15.234.109:8000/", "个人博客", "这里记录了我的Java后端学习笔记<br>持续更新"],
        ["./images/5.jpg", "https://github.com/Xiaohei-dsy/API-Authority/tree/master", "Authority System", "<font size=1>A set of APIs developed by java to provide permission management, access control, identity authentication and resource management<br>2021/7/23</font>"],
        ["https://pic3.zhimg.com/80/v2-d9766956d5c85c2780e4c5008fd946ca_1440w.jpg", "https://github.com/happysnaker/StudentsManageSystem", "学生管理系统", "C语言+AVL树+多重双向表实现"]
    ],


    /**
     * 这里填写您的工作经历
     * ["日期"， "工作"， "介绍"]
     * 你可以内嵌HTML标签以排版格式
     */
    work: [
        //如果您内有工作经历，您可以采取下列写法
        // ["————————", "", "<p>暂无工作经历，期待您的联系。</p>"]

        ["08/2021 — 01/2022", "<br>Software Development Intern",
            "<p><strong>Institute of Information Technology, Peking University</strong></p>" +
            "<p>Developed an intelligent correlation tool for industrial data: Big Data Operating System based on industry/consumer research.</p>" +
            "<p>Responsible for the back-end development of the data-virtualization layer and ETL tool layer of the system.</p>" + 
            "<p>Serviced 4 groups to complete 13 factories, 20 systems, and more than 20,000 tables to realize the intelligent association of multi-source heterogeneous data.</p>"
        ],
    ],


    /**
     * 这里填写你的其他经历
     * ["日期"， "经历"， "介绍"]
     * 建议填写您的校级及以上得奖经历或或其他证书
     */
    others: [
        ["09/2021-02/2024", "University of Massachusetts Amherst", "Master & Electrical and Computer Engineering<br>Coursework:Algorithms, Advanced Algorithms, Machine Learning/Engineers, Distributed and Operating Systems, Advanced Software Engineering: Synthesis and Development, Computer Networks"],
        ["09/2017-06/2021", "University of Electronic Science and Technology of China", "Bachelor & Earth Information Science and Technology<br>Coursework:Advanced Language Programming, Software Engineering, Database Technology, Computer Graphics, Intelligent Information Processing"]
    ],


    /**
     * 在这里填写您的社交网络平台
     * ["img", "url", "desc"]
     * img是社交平台的图标，在./svg目录下我们已经准备好了 微博、简书、掘金、小红书、知乎、csdn、facebook、github、力扣、CF和qq的图标
     * url是您链接
     * desc是一段描述，将鼠标移入将会显示该描述
     * 建议您放置数量 <= 5
     */
    icon: [
        ["./svg/LeetCode.svg", "https://leetcode.com/xiaohei_shaoyu/", "My LeetCode Homepage"],
        ["./svg/LeetCode.svg", "https://leetcode-cn.com/u/xiao-hei-7r/", "My LeetCode-cn Homepage"],
        ["./svg/github.svg", "https://github.com/Xiaohei-dsy", "My Github Homepage"]
    ],


    //这是一些图片链接，建议您仅更改第二个头像图片
    url: [
        //背景图、头像、作品展示背景、其他经历背景
        "./images/intro-bg.jpg",
        "./images/2.jpg",
        "./images/work-bk.png",
        "./images/4.jpg"
    ]

}