  const blogs =  [
  {
    "id": 1,
    "title": "The Future of Artificial Intelligence",
    "slug": "future-of-artificial-intelligence",
    "description": "Explore how artificial intelligence is transforming industries, improving productivity, and shaping the future of technology.",
    "author": "John Doe",
    "category": "Technology",
    "image": "https://images.unsplash.com/photo-1677442136019-21780ecad995",
    "tags": ["AI", "Technology", "Innovation"],
    "publishedAt": "2026-11-01",
    "readTime": "5 min read"
  },
  {
    "id": 2,
    "title": "10 Tips for a Healthy Lifestyle",
    "slug": "tips-for-a-healthy-lifestyle",
    "description": "Discover simple and practical habits that can help you maintain a healthy body and mind.",
    "author": "Jane Smith",
    "category": "Health",
    "image": "https://images.unsplash.com/photo-1490645935967-10de6ba17061",
    "tags": ["Health", "Fitness", "Lifestyle"],
    "publishedAt": "2026-11-03",
    "readTime": "4 min read"
  },
  {
    "id": 3,
    "title": "How to Become a Better Web Developer",
    "slug": "become-a-better-web-developer",
    "description": "Learn essential skills, tools, and strategies to improve your web development journey.",
    "author": "Alex Johnson",
    "category": "Programming",
    "image": "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    "tags": ["Web Development", "JavaScript", "Coding"],
    "publishedAt": "2026-11-05",
    "readTime": "7 min read"
  },
  {
    "id": 4,
    "title": "Top Travel Destinations to Explore",
    "slug": "top-travel-destinations",
    "description": "Discover breathtaking destinations around the world and get inspired for your next adventure.",
    "author": "Sarah Wilson",
    "category": "Travel",
    "image": "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1",
    "tags": ["Travel", "Adventure", "Tourism"],
    "publishedAt": "2026-11-08",
    "readTime": "6 min read"
  }
];
//create a folder name [blogId] in blogs and create a page.jsx, now when u visit '/blogs/anything', this page will load.
const BlogDetailsPage = async({params}) =>{ 
    const res = await params;
    console.log(res)//its going to return an object where the property name is "blogId" and its value is the word after /blogs, "blogs/xyz"(lets say u type 'xyz'). output = {blogId : xyz}
    console.log(res.blogId) // 'xyz'

    const blog = blogs.find(blog=>blog.id===parseInt(res.blogId));
    console.log(blog)

  return (
    <div>
<h4 className="text-center font-bold text-4xl">blog details page.....</h4>
{blog ? <div className="bg-red-500">
<p>id: { blog.id }</p>
<p>title: { blog.title }</p>
<p>slug: { blog.slug }</p>
<p>description: { blog.description }</p>
<p>author: { blog.author }</p>
<p>category: { blog.category }</p>
<img src={blog.image} alt="" className="w-50 h-50" />
<p>tags: { blog.tags }</p>
<p>publishedAt: { blog.publishedAt }</p>
<p>readTime: { blog.readTime }</p>
    </div> : <p>page not found</p>}
    </div>
  )
}

export default BlogDetailsPage