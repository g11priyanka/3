export default[
    {
        name:'Blog Title',
        desc: 'An AI tool that generate blog title that depends on your blog information',
        category: 'B;og',
        Icon:'https://cdn-icons-png.flaticon.com/128/174/174883.png',
        aiPrompts: 'give me 5 blog topic idea in bullet wise only based ongive niche &outline topic and give me result in rich text editor formst',
        slug:'generate-blog-tilte',
        form:[
            {
                label:'eneter your blog niche',
                field: 'input',
                name:'niche',
                required:true,
            },
            {
                label:'Enter blog outline',
                field: 'textarea',
                name:'outline',
            }
        ]

    },
    {
        name:'Blog Content',
        desc: 'An AI tool that generate blog title that depends on your blog information',
        category: 'blog',
        Icon:'https://cdn-icons-png.flaticon.com/128/174/174883.png',
        aiPrompts: 'give me 5 blog topic idea in bullet wise only based ongive niche &outline topic and give me result in rich text editor formst',
        slug:'generate-blog-content',
        form:[
            {
                label:'eneter your blog topic',
                field: 'input',
                name:'topic',
                required:true,
            },
            {
                label:'Enter blog Outline here',
                field: 'textarea',
                name:'outline',
            }
        ]

    },
    {
        name:'Blog Topic Ideas',
        desc: 'An AI tool that generate blog title that depends on your blog information',
        category: 'Blog',
        Icon:'https://cdn-icons-png.flaticon.com/128/174/174883.png',
        aiPrompts: 'give me 5 blog topic idea in bullet wise only based ongive niche &outline topic and give me result in rich text editor formst',
        slug:'generate-blog-idea',
        form:[
            {
                label:'eneter your  niche',
                field: 'input',
                name:'niche',
                required:true,
            },
        ]
    },
    {
        name:'Youtube SEO Title',
        desc: 'An AI tool that generate blog title that depends on your blog information',
        category: 'Youtube Tools',
        Icon:'https://cdn-icons-png.flaticon.com/128/174/174883.png',
        aiPrompts: 'give me 5 blog topic idea in bullet wise only based ongive niche &outline topic and give me result in rich text editor formst',
        slug:'youtube-seo-tilte',
        form:[
            {
                label:'eneter your YouTube video topic keywords',
                field: 'input',
                name:'keywords',
                required:true,
            },
            {
                label:'Enter blog outline  here',
                field: 'textarea',
                name:'outline',
            }
        ]

    },
    {
        name:'YouTube Description',
        desc: 'An AI tool that generate blog title that depends on your blog information',
        category: 'Youtube tool',
        Icon:'https://cdn-icons-png.flaticon.com/128/174/174883.png',
        aiPrompts: 'give me 5 blog topic idea in bullet wise only based ongive niche &outline topic and give me result in rich text editor formst',
        slug:'generate-youtube-description',
        form:[
            {
                label:'eneter your video topic/title',
                field: 'input',
                name:'topic',
                required:true,
            },
            {
                label:'Enter youtube outline here',
                field: 'textarea',
                name:'outline',
            }
        ]

    },
    {
        name:'YouTube Tags',
        desc: 'An AI tool that generate blog title that depends on your blog information',
        category: 'Youtube tool',
        Icon:'https://cdn-icons-png.flaticon.com/128/174/174883.png',
        aiPrompts: 'give me 5 blog topic idea in bullet wise only based ongive niche &outline topic and give me result in rich text editor formst',
        slug:'youtube-tag',
        form:[
            {
                label:'eneter your youtube title',
                field: 'input',
                name:'title',
                required:true,
            },
            {
                label:'Enter blog outline here{optional)',
                field: 'textarea',
                name:'outline',
            }
        ]
    },
    {
        name:'Rewrite Article(Plagiarism Free)',
        desc: 'An AI tool that generate blog title that depends on your blog information',
        category: 'writing assistant',
        Icon:'https://cdn-icons-png.flaticon.com/128/174/174883.png',
        aiPrompts: 'give me 5 blog topic idea in bullet wise only based ongive niche &outline topic and give me result in rich text editor formst',
        slug:'text-improver',
        form:[
            {
                label:'provide your article/blogpost or any other referance',
                field: 'textarea',
                name:'article',
                required: true
            },
        ]

    },
    {
        name:'add emojis to text',
        desc: 'An AI tool that generate blog title that depends on your blog information',
        category: 'blog',
        Icon:'https://cdn-icons-png.flaticon.com/128/174/174883.png',
        aiPrompts: 'give me 5 blog topic idea in bullet wise only based ongive niche &outline topic and give me result in rich text editor formst',
        slug:'add-emoji-to-text',
        form:[
            {
                label:'eneter text to add emojis',
                field: 'textarea',
                name:'outline',
                required:true,
            },
        ]

    },
    {
        name:'Instagram Post Generator',
        desc: 'An AI tool that generate blog title that depends on your blog information',
        category: 'blog',
        Icon:'https://cdn-icons-png.flaticon.com/128/174/174883.png',
        aiPrompts: 'give me 5 blog topic idea in bullet wise only based ongive niche &outline topic and give me result in rich text editor formst',
        slug:'instagram-post-generator',
        form:[
            {
                label:'eneter text to add emojis',
                field: 'textarea',
                name:'outline',
                required:true,
            },
        ]

    }, 
    
]






